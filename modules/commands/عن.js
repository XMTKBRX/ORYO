module.exports.config = {
    name: "ايدي",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "عمر",
    description: "",
    commandCategory: "خدمات",
    usages: "add bot",
    cooldowns: 4,
    dependencies: {
        "request": "",
        "fs": ""
    }
    
};

module.exports.run = async({api,event,args}) => {
    const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
    const threadSetting = global.data.threadData.get(parseInt(event.threadID)) || {};
    const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
     if (args.length == 0) return api.sendMessage(`يمكنك استخدام:\n\n${prefix}${this.config.name} المستخدم => سيقوم بعرض معلوماتك.\n\n${prefix}${this.config.name} المستخدم @[تاق] => سيقوم بعرض معلومات الصديق.\n\n${prefix}${this.config.name} المجموعة => سيقوم بعرض معلومات المجموعة (عدد الاعضاء, الاسم والمزيد,...)\n\n${prefix}${this.config.name} المجموعة او المستخدم[uid || tid] => سيقوم بمنحك معلومات عن المجموعة او المستخدم اللتي ادخلت الUid خاصته :\n\n${prefix}${this.config.name} الادمن => معلومات خاصة بمالك البوت`, event.threadID, event.messageID);
    

if (args[0] == "المستخدم") { 
    if(!args[1]){
    if(event.type == "message_reply") id = event.messageReply.senderID
    else id = event.senderID;
    let data = await api.getUserInfo(id);
    let url = data[id].profileUrl;
    let b = data[id].isFriend == false ? " للاسف لا ارسل طلب صداقة !" : data[id].isFriend == true ? "أجل !" : "بالطبع";
    let sn = data[id].vanity;
    let name = await data[id].name;
    var sex = await data[id].gender;
    var gender = sex == 2 ? "ولد" : sex == 1 ? "فتاة" : "🏳️‍🌈";
    var callback = () => api.sendMessage({body:`الاسم: ${name}` + `\nرابط الملف الشخصي: ${url}` + `\nاسم  المستخدم: ${sn}\nUID: ${id}\nالجنس: ${gender}\nالصداقة مع البوت: ${b}`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
       return request(encodeURI(`https://graph.facebook.com/${id}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
   }
    else {
    
    if (args.join().indexOf('@') !== -1){
    var mentions = Object.keys(event.mentions)
    let data = await api.getUserInfo(mentions);
    let url = data[mentions].profileUrl;
    let b = data[mentions].isFriend == false ? "للاسف لا ارسل طلب صداقة !" : data[mentions].isFriend == true ? "اجل!" : "بالطبع";
    let sn = data[mentions].vanity;
    let name = await data[mentions].name;
    var sex = await data[mentions].gender;
    var gender = sex == 2 ? "ولد" : sex == 1 ? "فتاة" : "🏳️‍🌈";
    var callback = () => api.sendMessage({body:`الاسم: ${name}` + `\nرابط الملف الشخصي: ${url}` + `\nاسم المستخدم: ${sn}\nUID: ${mentions}\nالجنس: ${gender}\nالصداقة  مع البوت: ${b}`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID);   
       return request(encodeURI(`https://graph.facebook.com/${mentions}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
    }
    else {
    let data = await api.getUserInfo(args[1]);
    let url = data[args[1]].profileUrl;
    let b = data[args[1]].isFriend == false ? "للاسف لا ارسل طلب صداقة!" : data[args[1]].isFriend == true ? "اجل!" : "بالطبع";
    let sn = data[args[1]].vanity;
    let name = await data[args[1]].name;
    var sex = await data[args[1]].gender;
    var gender = sex == 2 ? "ولد" : sex == 1 ? "فتاة" : "🏳️‍🌈";
    var callback = () => api.sendMessage({body:`الاسم: ${name}` + `\nرابط الملف الشخصي: ${url}` + `\nاسم المستخدم: ${sn}\nUID: ${args[1]}\nالجنس: ${gender}\nالصداقة مع البوت: ${b}`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID);   
       return request(encodeURI(`https://graph.facebook.com/${args[1]}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
    }
     }
     }
              }
