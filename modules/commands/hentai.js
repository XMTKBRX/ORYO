module.exports.config = {
    name: "hentai",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Zia Rein",
    description: "segs",
    commandCategory: "nsfw",
    usages: "send message",
    cooldowns: 5,
    dependencies: {
        "request": "",
        "fs-extra": "",
        "axios": ""
    }
};

module.exports.run = async({ api, event, args, client, Users, Threads, __GLOBAL, Currencies }) => {
    const axios = global.nodemodule["axios"];
    const request = global.nodemodule["request"];
    const fs = global.nodemodule["fs-extra"];
    var link = [
      "https://i.postimg.cc/CxvTTcqt/12.jpg",
"https://i.postimg.cc/Yq9zD8tj/54.jpg",
"https://i.postimg.cc/RZmK5RBc/160.jpg",
"https://i.postimg.cc/52fYk2Bg/28.jpg",
"https://i.postimg.cc/T2QZPjG2/41.jpg",
"https://i.postimg.cc/Wp9HV26h/8.jpg",
"https://i.postimg.cc/YSfdskC2/25.jpg",
"https://i.postimg.cc/FHXg5qqY/79.jpg",
"https://i.postimg.cc/GhGgykns/15.jpg",
"https://i.postimg.cc/5t0mnzTg/26.jpg",
"https://i.postimg.cc/GpWsGsCH/82.jpg",
"https://i.postimg.cc/ryJKFHKd/116.jpg",
"https://i.postimg.cc/FzWrb2LD/152.jpg",
"https://i.postimg.cc/pXmRbc8M/155.jpg",
"https://i.postimg.cc/7LVpTS7N/292.jpg",
"https://i.postimg.cc/FHmvdr8N/339.jpg",
"https://i.postimg.cc/cCqjpTN0/364.jpg",
"https://i.postimg.cc/SscVMhwb/194.jpg",
"https://i.postimg.cc/bJPk42F4/500.jpg",
"https://i.postimg.cc/KY21YhrM/604.jpg",
"https://i.postimg.cc/dV80pSPt/644.jpg",
  ];
  var max = Math.floor(Math.random() * 382);  
var min = Math.floor(Math.random() * 1);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 5000) api.sendMessage("5000$ dear friend",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 5000})
   var callback = () => 
   api.sendMessage({body:`Costs: 5000$`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"), event.messageID);
              api.setMessageReaction("✅", event.messageID, (err) => {}, true);
      return request(encodeURI(link[Math.floor(Math.random() * link.length)] + (max - min))).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
      } 
}; 