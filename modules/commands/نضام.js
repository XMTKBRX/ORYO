module.exports.config = {
  name: "نضام",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "HTHB",
  description: "طفي وشغل البوت",
  commandCategory: "𝔻𝔼𝕍𝔼𝕃𝕆ℙ𝔼ℝ",
  cooldowns: 0
};

module.exports.run = ({ event, api }) => {
  if (event.body.toLowerCase() === "طفي") {
    return api.sendMessage("اخيرا رحمتوني", event.threadID, () => process.exit(0));
  } else if (event.body.toLowerCase() === "شغل") {
    return api.sendMessage("تم تشغيل البوت🌝✅", event.threadID, () => process.enter(0));
  }
};
