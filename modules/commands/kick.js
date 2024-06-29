module.exports.config = {
	name: "kick",
	version: "1.0.1", 
	hasPermssion: 1,
	credits: "جلجامش ساما",
	description: "ازالة عضو من مجموعة سوي طاغ وتقدر تسوي طرد جماعي في رسالة واحدة عبر اشارة لي اعضاء طاغ لي كل واحد",
	commandCategory: "System", 
	usages: "[tag]", 
	cooldowns: 0,
};

module.exports.languages = {
	"vi": {
		"error": "Đã có lỗi xảy ra, vui lòng thử lại sau",
		"needPermssion": "Cần quyền quản trị viên nhóm\nVui lòng thêm và thử lại!",
		"missingTag": "Bạn phải tag người cần kick"
	},
	"en": {
		"خطأ": "خطأ! حدث خطأ. الرجاء معاودة المحاولة في وقت لاحق!",
		"needPermssion": " انا لست مسؤول قروب \n الرجاء الإضافة والمحاولة مرة أخرى!",
		"missingTag": "انت بي حاجة لي وضع علامة على شخص لي طرد @ "
	}
}

module.exports.run = async function({ api, event, getText, Threads }) {
	var mention = Object.keys(event.mentions);
	try {
		let dataThread = (await Threads.getData(event.threadID)).threadInfo;
		if (!dataThread.adminIDs.some(item => item.id == api.getCurrentUserID())) return api.sendMessage(getText("needPermssion"), event.threadID, event.messageID);
		if(!mention[0]) return api.sendMessage("ضع علامة على مستخدم لي طرده",event.threadID);
		if (dataThread.adminIDs.some(item => item.id == event.senderID)) {
			for (const o in mention) {
				setTimeout(() => {
					api.removeUserFromGroup(mention[o],event.threadID) 
				},3000)
			}
		}
	} catch { return api.sendMessage(getText("error"),event.threadID) }
}