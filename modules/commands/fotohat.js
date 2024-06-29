 module.exports.config = {
  name: "fotohat",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "gilgamesh",
  description: "",
  commandCategory: "foto",
  usages: "foto",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.postimg.cc/rwMrhdQR/574038b1-5fe2-440a-bd2d-5325c79bcb7e.jpg",
"https://i.postimg.cc/m2GzDzxp/5871b36f-8da1-40cd-b414-01557366fc14.jpg",
"https://i.postimg.cc/vBJ15D4B/5b8acaef-4927-483e-88a8-aa228f8578d9.jpg",
"https://i.postimg.cc/9F3T7g9p/5d10ea0d-d527-4176-a28c-ea606a92448b.jpg",
"https://i.postimg.cc/MXkGfLrj/5f3c399c-c16b-40d2-a386-3bcd6fa4c5b4.jpg",
"https://i.postimg.cc/SKzkCdC6/665144be-43d0-4d74-b47e-a8bd4472a215.jpg",
"https://i.postimg.cc/3xxw42t1/6918b271-caba-4a82-968e-d2d598e6504f.jpg",
"https://i.postimg.cc/Kv47P3pG/6918b271-caba-4a82-968e-d2d598e6504f-1.jpg",
"https://i.postimg.cc/W3WFzXvM/69a01b5d-fe84-4b20-9fda-60456419911c.jpg",
"https://i.postimg.cc/sXNxsxYm/6cc13471-a26c-4e1f-a894-7b2cf0e4de65.jpg",
"https://i.postimg.cc/MKR73JwN/6ce632bc-2ceb-4eb6-846b-b8cb52501014.jpg",
"https://i.postimg.cc/ydyqybdZ/732074d3-1a3d-4bac-8ae5-ed75cb14522e.jpg",
"https://i.postimg.cc/RVQ3nS4S/76588216-e4ae-492e-b515-e5b18b1a99c5.jp",
"https://i.postimg.cc/fyQLJFPS/7745fece-0692-46da-b467-1675d2dae6b8.jpg",
"https://i.postimg.cc/633qknvT/7bfd2963-dc8d-4049-aed3-bc9e4d67bf60.jpg",
"https://i.postimg.cc/Dwx8BxSR/80f13e2f-b21d-454a-8037-6497df0be0b3.jpg",
"https://i.postimg.cc/cLkLQ6jS/86704077-c9dd-4f40-9805-07b3f3cc8991.jpg",
"https://i.postimg.cc/X7HbPmgK/8af6c901-5f5e-4b06-9160-e3795420a2fa.jpg",
"https://i.postimg.cc/XN9qTjZf/92709bbf-5322-441b-afd3-b7a7269324e5.jpg",
"https://i.postimg.cc/VsF1qdrV/92e00e9c-5059-4b16-bb8e-41ed9ed0b47b.jpg",
"https://i.postimg.cc/fLNnXNws/9549dcfe-0fbe-440a-8b9c-fd45db9e3278.jpg",
"https://i.postimg.cc/9M70XVLj/a2a12454-96b9-4da5-92ea-9991c495b459.jpg",
"https://i.postimg.cc/vZtWM7cv/ac0e64c7-646f-4e12-aa2d-eecb9da4d930.jpg",
"https://i.postimg.cc/4yWrrHp4/ac9c3560-f729-4c12-8c0e-1ed1e047a778.jpg",
"https://i.postimg.cc/1R7w35mL/ae9bf8dd-3782-4dd7-989b-babab9a46a2b.jpg",
"https://i.postimg.cc/zvhgQKsK/b02eee24-6581-43e6-84f0-0f91f029e373.jpg",
"https://i.postimg.cc/LXwPvNbm/bb8a0abf-2ca8-4200-ab99-1884e6685bd7.jpg",
"https://i.postimg.cc/J737ppgK/c574042c-d615-4207-8e42-30e4762549cb.jpg",
"https://i.postimg.cc/4NKt7knn/d1f76102-187f-4c89-a7bd-4cb1b46eb4e5.jpg",
"https://i.postimg.cc/bwg24zBC/d4fe8ad1-093c-4d18-ab2d-036b75867ee0.jpg",
"https://i.postimg.cc/yYPd8LyW/d66b3dcc-b42f-4571-a0c4-2c03a566ebc9.jpg",
"https://i.postimg.cc/2yTDrKND/db35452c-cd87-426e-8f18-ca91db7b3c75.jpg",
"https://i.postimg.cc/7PKMJnVt/ddbcb0f8-a11d-4db6-8db2-a12f46187e18.jpg",
"https://i.postimg.cc/9QDhHbx6/e675d410-2dc2-4e69-bcab-f3359a8187f1.jpg",
"https://i.postimg.cc/TwCmmTr5/ead1ba15-446a-46de-92ed-0daa828380c0.jpg",
"https://i.postimg.cc/SNw9cTzd/highly-detailed-full-body-reference-of-underwater.jpg",
"https://i.postimg.cc/HL0bYwn2/highly-detailed-full-body-reference-of-underwater-1.jpg",
"https://i.postimg.cc/VvkqHJYF/highly-detailed-full-body-reference-of-underwater-2.jpg",
"https://i.postimg.cc/R08qzqQR/Hinata-Hyuga-laying-in-bed-wearing-a-black-lace-bo.jpg",
"https://i.postimg.cc/YqbrHhtW/purple-hair-anime-guy-1.jpg", 
    
  
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