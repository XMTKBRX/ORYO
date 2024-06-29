module.exports.config = {
	name: "bio",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "PSTeam",
	description: "تغيير السيرة الذاتية",
	commandCategory: "المبرمج",
	usages: "bio [text]",
  cooldowns: 5
  
}
  
  module.exports.run = async ({ api, event, global, args, permssion, utils, client, Users }) => {
    api.changeBio(args.join(" "), (e) => {
      if(e) api.sendMessage("an error occurred" + e, event.threadID); return api.sendMessage("تم تغيير السيرة الذاتية للبوت إلى: \n"+args.join(" "), event.threadID, event.messgaeID)
    }
    )
  }