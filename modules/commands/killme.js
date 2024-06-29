module.exports.config = {
name: "killme",
version: "1.0.0",
hasPermssion: 0,
credits: "جلجامش ساما",
description: "يطردك من المجموعة",
commandCategory: "اشياء",
usages: "  اذا انت ادمن ومتريد الامر يشتغل ببساطه نزل البوت من الادمن",
cooldowns: 3
}; 

module.exports.run = async function({ api, event, args }) {
var info = await api.getThreadInfo(event.threadID);
if (!info.adminIDs.some(item => item.id == api.getCurrentUserID())) return api.sendMessage('يحتاج البوت إلى أن يكون مسؤول في المجموعة (•﹏•) ', event.threadID, event.messageID);
var threadInfo = await api.getThreadInfo(event.threadID)
    {
    
   api.removeUserFromGroup(event.senderID, event.threadID)
    }
api.sendMessage(`🥺 سايونارا ماي هيرو 🥺`, event.threadID);
                           }