module.exports.config = {
    name: "xo",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Mirai Team",
    description: "العب اكس مع شخص& او مع البوت",
    commandCategory: "العاب",
    cooldowns: 5,
    usages: "xo o \n xo x \n مسح : ينهي الكيم \n كمل : يكمل الكيم"
};

var AIMove;
const fs = require("fs");
const { loadImage, createCanvas } = require("canvas");

function startBoard({ isX, data }) {
    data.board = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
    data.isX = isX;
    data.gameOn = true;
    data.gameOver = false;
    data.available = [];
    return data;
}

async function displayBoard(data) {
    const path = __dirname + "/cache/ttt.png";
    let canvas = createCanvas(1200, 1200);
    let cc = canvas.getContext("2d");
    let background = await loadImage("https://i.postimg.cc/nhDWmj1h/background.png");
    cc.drawImage(background, 0, 0, 1200, 1200);
    var quanO = await loadImage("https://i.postimg.cc/rFP6xLXQ/O.png");
    var quanX = await loadImage("https://i.postimg.cc/HLbFqcJh/X.png");
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            var temp = data.board[i][j].toString();
            var x = 54 + 366 * j;
            var y = 54 + 366 * i;
            if (temp == "1") if (data.isX) { cc.drawImage(quanO, x, y, 360, 360) } else cc.drawImage(quanX, x, y, 360, 360);
            if (temp == "2") if (data.isX) { cc.drawImage(quanX, x, y, 360, 360) } else cc.drawImage(quanO, x, y, 360, 360);
        }
    }
    var ketqua = [];
    fs.writeFileSync(path, canvas.toBuffer("image/png"));
    ketqua.push(fs.createReadStream(path));
    return ketqua;
}

function checkAIWon(data) {
    if (data.board[0][0] == data.board[1][1] && data.board[0][0] == data.board[2][2] && data.board[0][0] == 1) return true;
    if (data.board[0][2] == data.board[1][1] && data.board[0][2] == data.board[2][0] && data.board[0][2] == 1) return true;
    for (var i = 0; i < 3; ++i) {
        if (data.board[i][0] == data.board[i][1] && data.board[i][0] == data.board[i][2] && data.board[i][0] == 1) return true;
        if (data.board[0][i] == data.board[1][i] && data.board[0][i] == data.board[2][i] && data.board[0][i] == 1) return true;
    }
    return false;
}

function checkPlayerWon(data) {
    if (data.board[0][0] == data.board[1][1] && data.board[0][0] == data.board[2][2] && data.board[0][0] == 2) return true;
    if (data.board[0][2] == data.board[1][1] && data.board[0][2] == data.board[2][0] && data.board[0][2] == 2) return true;
    for (var i = 0; i < 3; ++i) {
        if (data.board[i][0] == data.board[i][1] && data.board[i][0] == data.board[i][2] && data.board[i][0] == 2) return true;
        if (data.board[0][i] == data.board[1][i] && data.board[0][i] == data.board[2][i] && data.board[0][i] == 2) return true;
    }
    return false;
}

function solveAIMove({ depth, turn, data }) {
    if (checkAIWon(data)) return +1;
    if (checkPlayerWon(data)) return -1;
    let availablePoint = getAvailable(data);
    if (availablePoint.length == 0) return 0;

    var min = Number.MAX_SAFE_INTEGER;
    var max = Number.MIN_SAFE_INTEGER;

    for (var i = 0, length = availablePoint.length; i < length; i++) {
        var point = availablePoint[i];
        if (turn == 1) {
            placeMove({ point, player: 1, data });
            var currentScore = solveAIMove({ depth: depth + 1, turn: 2, data });
            max = Math.max(currentScore, max);
            if (currentScore >= 0) {
                if (depth == 0) AIMove = point;
            }
            if (currentScore == 1) {
                data.board[point[0]][point[1]] = 0;
                break;
            }
            if (i == availablePoint.length - 1 && max < 0) {
                if (depth == 0) AIMove = point;
            }
        } else if (turn == 2) {
            placeMove({ point, player: 2, data });
            var currentScore = solveAIMove({ depth: depth + 1, turn: 1, data });
            min = Math.min(currentScore, min);
            if (min == -1) {
                data.board[point[0]][point[1]] = 0;
                break;
            }
        }
        data.board[point[0]][point[1]] = 0;
    }
    return turn == 1 ? max : min;
}

function placeMove({ point, player, data }) {
    return data.board[point[0]][point[1]] = player;
}

function getAvailable(data) {
    let availableMove = []
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (data.board[i][j] == 0) availableMove.push([i, j]);
        }
    }
    return availableMove;
}

function checkAvailableSpot(point, pointArray) {
    if (pointArray.find(element => element.toString() == point.toString())) return true;
    else return false;
}

function move(x, y, data) {
    var availablePoint = getAvailable(data);
    var playerMove = [x, y];
    if (checkAvailableSpot(playerMove, availablePoint)) {
        placeMove({ point: playerMove, player: 2, data });
    } else return "تم اختيار هذا المربع  مسبقا , حاول بمربع اخر!";
    solveAIMove({ depth: 0, turn: 1, data });
    placeMove({ point: AIMove, player: 1, data });
}

function checkGameOver(data) {
    if (getAvailable(data).length == 0 || checkAIWon(data) || checkPlayerWon(data)) return true;
    return false;
}

function AIStart(data) {
    var point = [Math.round(Math.random()) * 2, Math.round(Math.random()) * 2];
    placeMove({ point, player: 1, data });
}


module.exports.handleReply = async function ({ event, api, handleReply }) {
    let { body, threadID, messageID, senderID } = event;
    if (!global.moduleData.tictactoe) global.moduleData.tictactoe = new Map();
    let data = global.moduleData.tictactoe.get(threadID);
    if (!data || data.gameOn == false) return;
    var number = parseInt(body);
    if (!isNaN(number) && number > 0 && number < 10) {
        var row = number < 4 ? 0 : number < 7 ? 1 : 2;
        if (number == 1 || number == 4 || number == 7) var col = 0;
        if (number == 2 || number == 5 || number == 8) var col = 1;
        if (number == 3 || number == 6 || number == 9) var col = 2;
        var temp = move(row, col, data);
        var lmao = "";
        if (checkAIWon(data)) lmao = "o đã thắng!";
        else if (checkPlayerWon(data)) lmao = "x đã thắng!";
        if (lmao) return api.sendMessage({ body: `Game over, ${lmao}`, attachment: (await displayBoard(data)) }, threadID, messageID);
        return api.sendMessage({ body: `${temp}`, attachment: (await displayBoard(data)) }, threadID, messageID);
    } else {
        switch (body) {
            case "مسح":
                global.moduleData.tictactoe.delete(threadID);
                return api.sendMessage("Xóa trò chơi thành công", threadID, messageID);
            case "كمل":
                AIStart(data);
                return api.sendMessage("bắt đầu lại một trò chơi khác", threadID, messageID);
            default:
                return api.sendMessage("Lựa chọn sai, vui lòng thử lại!", threadID, messageID);
        }
    }
};

module.exports.run = async function ({ event, api }) {
    let { threadID, messageID, senderID } = event;
    if (!global.moduleData.tictactoe) global.moduleData.tictactoe = new Map();
    let data = global.moduleData.tictactoe.get(threadID);
    if (!data || data.gameOn == false) {
        data = startBoard({ isX: true, data: {} });
        AIStart(data);
        global.moduleData.tictactoe.set(threadID, data);
        return api.sendMessage({ body: "Ván đấu mới bắt đầu!", attachment: (await displayBoard(data)) }, threadID, messageID);
    } else return api.sendMessage("Một trò chơi đang diễn ra!", threadID, messageID);
};
