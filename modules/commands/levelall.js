module.exports.config = {
  name: "levelall",
  version: "0.0.6",
  hasPermssion: 2,
  credits: "PetterSever",
  description: "Top Server!",
  commandCategory: "المبرمج",
  usages: "[thread/user/money/level]",
  cooldowns: 5
};

module.exports.run = async ({ event, api, args, Currencies, Users }) => {
  const { threadID, messageID } = event;

  if (args[0] == "user") {
    const all = await Currencies.getAll(['userID', 'exp']);
    all.sort((a, b) => b.exp - a.exp);
    const limit = args[1] && !isNaN(args[1]) && parseInt(args[1]) > 0 ? parseInt(args[1]) : 300;
    let msg = 'The Top ' + limit + ' Users with Highest XP:\n';
    
    for (let i = 0; i < limit; i++) {
      const user = await Users.getData(all[i].userID);
      const level = expToLevel(all[i].exp);
      msg += `${i + 1}. ${user.name} - Level ${level}\n`;
    }
    
    api.sendMessage(msg, threadID, messageID);
  }

  if (args[0] == "thread") {
    const option = args[1] && !isNaN(args[1]) && parseInt(args[1]) > 0 ? parseInt(args[1]) : 300;
    const data = await api.getThreadList(option + 300, null, ["INBOX"]);
    const threadList = data
      .filter(thread => thread.isGroup)
      .sort((a, b) => b.messageCount - a.messageCount)
      .slice(0, option);
    
    let msg = `The Top ${threadList.length} Groups with the Most Messages:\n`;
    threadList.forEach((thread, index) => {
      msg += `${index + 1}. ${(thread.name) || "No name"}\nTID: [${thread.threadID}]\nNumber of messages: ${thread.messageCount}\n\n`;
    });
    
    api.sendMessage(msg, threadID, messageID);
  }

  if (args[0] == "money") {
    const all = await Currencies.getAll(['userID', 'money']);
    all.sort((a, b) => b.money - a.money);
    const limit = args[1] && !isNaN(args[1]) && parseInt(args[1]) > 0 ? parseInt(args[1]) : 300;
    let msg = 'The Top ' + limit + ' Richest Users:\n';
    
    for (let i = 0; i < limit; i++) {
      const user = await Users.getData(all[i].userID);
      msg += `${i + 1}. ${user.name}: ${all[i].money}💵\n`;
    }
    
    api.sendMessage(msg, threadID, messageID);
  }
};

function expToLevel(point) {
  if (point < 0) return 0;
  return Math.floor((Math.sqrt(1 + (4 * point) / 3) + 1) / 2);
}
