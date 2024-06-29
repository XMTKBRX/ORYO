module.exports.config = {
	name: "busy",
	version: "1.0.0",
	permissions: 2,
	credits: "Gilgameh",
	description: "Turn busy mode on or off",
  usages: "[reason]",
  commandCategory: "المبرمج",
  cooldowns: 5
};

const busyPath = __dirname + '/cache/busy.json';
const fs = require('fs');

module.exports.onLoad = () => {
  if (!fs.existsSync(busyPath)) fs.writeFileSync(busyPath, JSON.stringify({}));
}

module.exports.handleEvent = async function({ api, event, Users }) {
    let busyData = JSON.parse(fs.readFileSync(busyPath));
    var { senderID, threadID, messageID, mentions } = event;
    if (senderID in busyData) {
        var info = busyData[senderID];
        delete busyData[senderID];
        fs.writeFileSync(busyPath, JSON.stringify(busyData, null, 4));
        return api.sendMessage(` افسحو مجال لقد عاد الفخامة 👑😎👑 `, threadID, () => {
            if (info.tag.length == 0) api.sendMessage(" في مرة قادمة خلي تسجيلك يفجرهم 💣😎 ", threadID);
            else {
                var msg = "";
                for (var i of info.tag) {
                    msg += `${i}\n`
                }
                api.sendMessage(" هته قائمة مزعجين الذين بحثو عنك اثناء غيابك ياسيدي😎\nوهي تتضمن ↓↓↓\n\n " + msg, threadID)
            }
        }, messageID);
    }

    if (!mentions || Object.keys(mentions).length == 0) return;
    
    for (const [ID, name] of Object.entries(mentions)) {
        if (ID in busyData) {
            var infoBusy = busyData[ID], mentioner = await Users.getNameUser(senderID), replaceName = event.body.replace(`${name}`, "");
            infoBusy.tag.push(`${mentioner}: ${replaceName == "" ? "Tagged you 1 time" : replaceName}`)
            busyData[ID] = infoBusy;
            fs.writeFileSync(busyPath, JSON.stringify(busyData, null, 4));
            return api.sendMessage(`${name.replace("@", "")} ليس. هنا${infoBusy.lido ? ` انه: ${infoBusy.lido}.` : "."}`, threadID, messageID);
        }
    }
}

module.exports.run = async function({ api, event, args, Users }) {
	await new Promise(resolve => setTimeout(resolve, 1000));
    let busyData = JSON.parse(fs.readFileSync(busyPath));
    const { threadID, senderID, messageID, body } = event;
    var content = args.join(" ") || "";
    if (!(senderID in busyData)) {
        busyData[senderID] = {
            lido: content,
            tag: []
        }
        fs.writeFileSync(busyPath, JSON.stringify(busyData, null, 4));
        var msg = (content.length == 0) ? 'جلجامش مشغول حاليا اترك له رسالة من طاڨ ' : `اراك في لقاء ايها بوص 😎\nسوف اخبرهم انك: ${content}`;
        return api.sendMessage(msg, threadID, messageID);
    }
  }