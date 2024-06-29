module.exports.config = {
  name: "محادثة",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "عمر",
  description: "رابط سريع لبدء محادثة",
  commandCategory: "الرفاهية",
  cooldowns: 5
};

module.exports.run = function({ api, event }) {
  if (Object.keys(event.mentions) == 0) return api.sendMessage(`m.me/${event.senderID}`, event.threadID, event.messageID);
  else {
    for (var i = 0; i < Object.keys(event.mentions).length; i++) api.sendMessage(`تفضل هاذا رابط سريع لبدء محادثة\n\nm.me/${Object.values(event.mentions)[i].replace('@', '')}: ${Object.keys(event.mentions)[i]}`, event.threadID);
    return;
  }
}
