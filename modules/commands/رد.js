const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.4",
  hasPermssion: 2,
  credits: "Mod by John Lester",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 6,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Manila").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = [" امركا ياصديق(ة)🦆🥰🐧 " ," عيوني🦆😊🐧 " ," نعم🦆😊🐧 " ," شوبيك لوبيك الوهم كريستالي بين يديك🦆😘🐧 " ," الوهم كريستالي 🦆 " ,"🦆😊🐧 هلاوالله🦆😗🐧 " ," اكتب اوامر لا تنسى كريستالتي🦆😊🐧 " ," اكتب مستوى ودعنا نرا مستواك🦆😍🐧 " ," اكتب توب مجموعتي ودعنا نرا مجموعة اكثر تفاعلا🦆😍🐧 " ," هاي🦆🤩🐧 " ," قمت بي استدعائي🦆😊🐧 " ," هيا نتفاعل🦆😍🐧 " ," لي نسكتشف اوامر🦆😍🐧 " ," هيا نلعب🦆😍🐧 " ," هل لديك افكار🦆😗🐧 " ," 🦆🐧🦆😗🦆🐧🦆 " ," 🦆🐧🦆/n🦆🐧/n🦆 " ," اطلب وانا انفذ🦆😊🐧 " ," لي نختصر مناداتك لي وهي نبدا بي كتابت اوامر🦆😊🐧 " ," لا تكتب بوت كثيرا بي سبب رسائلي متكررة  🦆😊🐧 " ," مركزي عند جلجامش هوا مركز ثالث بعدها ياتي الوهم ذهبي مركز ثاني وصاحب مركز اول هوا الوهم د
"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

  if ((event.body.toLowerCase() == "صباح الخير") || (event.body.toLowerCase() == "صباح لخير")) {
     return api.sendMessage("️صباح النور والسرور 💎😊💎", threadID, messageID);
   };

  
   if ((event.body.toLowerCase() == "سلام") || (event.body.toLowerCase() == "السلام")) {
     return api.sendMessage("وعليكم السلام💎😍💎", threadID);
   };


if ((event.body.toLowerCase() == "سلام عليكم") || (event.body.toLowerCase() == "السلام عليكم")) {
     return api.sendMessage("وعليكم السلام ورحمة الله تعالى وبركاته 💎😊💎", threadID);
   };


if ((event.body.toLowerCase() == "مرحبا") || (event.body.toLowerCase() == "مرحبة")) {
     return api.sendMessage("مراحب 💎😊💎", threadID);
   };


if ((event.body.toLowerCase() == "هلا") || (event.body.toLowerCase() == "اهلا")) {
     return api.sendMessage("اهلين وسهلين وبوسه عل خدين💎😍💎", threadID);
   };


     if ((event.body.toLowerCase() == "هلاو") || (event.body.toLowerCase() == "هاي")) {
     return api.sendMessage("هاي💎😗💎", threadID);
   };


if ((event.body.toLowerCase() == "مساعدة") || (event.body.toLowerCase() == "ساعدني")) {
     return api.sendMessage("كيف يمكنني مساعدتك 💎😍💎", threadID);
   };


   if ((event.body.toLowerCase() == "اوامر") || (event.body.toLowerCase() == "الاوامر")) {
     return api.sendMessage("لا تنسى كريستال 💎 يالحبيب💎🥲💎", threadID);
   };


if ((event.body.toLowerCase() == "💎help") || (event.body.toLowerCase() == ".help")) {
     return api.sendMessage("ادواتي بل عربية وليس انجليزية💔💎🤧💎💔", threadID);
   };


if ((event.body.toLowerCase() == "بوت كلب") || (event.body.toLowerCase() == "بوت حمار")) {
     return api.sendMessage("اذا لم تستحي افعل ماشئت😒", threadID);
   };


if ((event.body.toLowerCase() == "بوت حيوان") || (event.body.toLowerCase() == "بوت خرا")) {
     return api.sendMessage("حسبي الله عليك💎🤧💔💎", threadID);
   };


     if ((event.body.toLowerCase() == "تفو") || (event.body.toLowerCase() == "تف")) {
     return api.sendMessage("لا تتفن وكونك مأدب عشان ناس تحبك💎😍💎", threadID);
   };


if ((event.body.toLowerCase() == "بوت لطيف") || (event.body.toLowerCase() == "بوت رائع")) {
     return api.sendMessage("تسلم كثير 💎😍💎", threadID);
   };


 if ((event.body.toLowerCase() == "بوت بحبك") || (event.body.toLowerCase() == "احبك")) {
     return api.sendMessage("انا كمان بحبك💎🥺🌹💎", threadID);
   };


if ((event.body.toLowerCase() == "كسمك") || (event.body.toLowerCase() == "كس امك")) {
     return api.sendMessage("لا تغلط وخليك زلمة ومسترجل💎😒💎", threadID);
   };


if ((event.body.toLowerCase() == "نكمك") || (event.body.toLowerCase() == "نك مك")) {
     return api.sendMessage("استرجل💎😒💔💎", threadID);
   };


if ((event.body.toLowerCase() == "جواهر") || (event.body.toLowerCase() == "جوهرة")) {
     return api.sendMessage("💎💎💎💎💎🥳💎💎💎💎💎", threadID);
   };


     if ((event.body.toLowerCase() == "مفتاح") || (event.body.toLowerCase() == "مفتاح البوت")) {
     return api.sendMessage("مفتاح خاصتي كريستالا 💎 يجب عليك ان تكتبها قبل كل امر", threadID);
   };


if ((event.body.toLowerCase() == "كلمة مفتاحية ") || (event.body.toLowerCase() == "رمز")) {
     return api.sendMessage("كريستالا قبل كل امر 💎", threadID);
   };


   if ((event.body.toLowerCase() == "كيف يشتغل") || (event.body.toLowerCase() == "كيف يعمل")) {
     return api.sendMessage("اكتب كلمة التي بين قوسين (  💎اوامر  ) ", threadID);
   };


if ((event.body.toLowerCase() == "المطور") || (event.body.toLowerCase() == "مطور")) {
     return api.sendMessage("مطوري جلجامش ساما لي معرفت تفاصيل ضع كريستالا 💎 قبل كلمة مطور 😊", threadID);
   };


if ((event.body.toLowerCase() == "ماهوا هدفك") || (event.body.toLowerCase() == "شو هوا هدفك")) {
     return api.sendMessage("هدفي هوا تفاعل وجلب تفاعل ووضع حدود لي تصنم فل مجموعات💎😍💎", threadID);
   };


if ((event.body.toLowerCase() == "جلجامش ساما") || (event.body.toLowerCase() == "جلجامش")) {
     return api.sendMessage("هاذا اسم مطور الذي طور نضامي المسمى بل الوهم كريستالي 💎😍💎", threadID);
   };


     if ((event.body.toLowerCase() == "الوهم ذهبي") || (event.body.toLowerCase() == "وهم ذهبي")) {
     return api.sendMessage("اكره هاذا بوت صنعه جلجامش من اجل نفسه فقط بي سبب ادواته كثيرة😒💔", threadID);
   };


if ((event.body.toLowerCase() == "الوهم الدمار") || (event.body.toLowerCase() == "الوهم دمار")) {
     return api.sendMessage("يماه😰 رجاء حذر وقومو بي طرده اذا كان موجود", threadID);
   };


if ((event.body.toLowerCase() == "وهم دمار") || (event.body.toLowerCase() == "بوت الوهم الدمار")) {
     return api.sendMessage("😳لا تخبرني انه في هته مجموعة", threadID);
   };


if ((event.body.toLowerCase() == "من هوا الوهم دمار") || (event.body.toLowerCase() == "من هوا الوهم الدمار")) {
     return api.sendMessage("بوت من بوتات جلجامش تم تطويره من اجل تخريب مجموعات وجلب دمار الى مستخدمين وجعل اعضاء يغادرون وتخريب كل من حوله", threadID);
   };


if ((event.body.toLowerCase() == "ميزات الوهم دمار") || (event.body.toLowerCase() == "ميزات الوهم الدمار")) {
     return api.sendMessage("من مميزات الوهم دمار انه حر ولا يحتاج كلمة مفتاحية لي تفعيل. بوت متمرد يمكنه شتم صاحبه اما مع جلجامش لن يفعل لان خدعة تكمل فل برمجة", threadID);
   };


if ((event.body.toLowerCase() == "اريد الوهم دمار") || (event.body.toLowerCase() == "اريد الوهم الدمار")) {
     return api.sendMessage("صدقني انت لا تريد ان تقابله. ولى حتى مطور جلجامش ساما. رئيته تعني خسارة وتعامل مع سلاحه اشبه بي مد يد مساعدة لي شخص لا يمتلك يدان . لن تحضى بي شي سوا عتاب وعن الوهم دمار اتحدث😳💔", threadID);
   };


     if ((event.body.toLowerCase() == "جلجامش كلب") || (event.body.toLowerCase() == "جلجامش حيوان")) {
     return api.sendMessage("لا تسب مطوري ايها خنزير لولاه ماكنت لي تحضى بي نضامي. ياناكر للجميل.. كما انني اتحداك ان تقولها في وجهه", threadID);
   };


if ((event.body.toLowerCase() == "وينو جلجامش") || (event.body.toLowerCase() == "جلجامش وينو")) {
     return api.sendMessage("يمكنني مساعدتك لي تصل له اكتب امر اتصال ولا تنسى كريستالا. اترك مسافة صغيرة وضع رسالتك وارسلها لي. سوف ارسلها الى مطوري جلجامش مباشرتا", threadID);
   };


   if ((event.body.toLowerCase() == "زيرو") || (event.body.toLowerCase() == "زيرو تو")) {
     return api.sendMessage("هاذا انمي جميل لكن ليس نوعي مفضل💎😊💎", threadID);
   };


if ((event.body.toLowerCase() == "من هوا جلجامش") || (event.body.toLowerCase() == "منو جلجامش")) {
     return api.sendMessage("شخص الذي طورني شخص رائع ومحبوب ولطيف كثيرا ويحب مساعدة ناس كما انه عمك ايضا 💎😊💎", threadID);
   };


if ((event.body.toLowerCase() == "عمي") || (event.body.toLowerCase() == "جلجامش عمي")) {
     return api.sendMessage("نعم جلجامش عمك💎😊💎", threadID);
   };


if ((event.body.toLowerCase() == "منو عمي") || (event.body.toLowerCase() == "ون بيس عمك")) {
     return api.sendMessage("جلجامش عمك وعمي وعم كل حضور💎😘💎", threadID);
   };


     if ((event.body.toLowerCase() == "زبي") || (event.body.toLowerCase() == "زب")) {
     return api.sendMessage("انت لا تمتلك ذلك شئ🥲💔", threadID);
   };


if ((event.body.toLowerCase() == "زوجيني") || (event.body.toLowerCase() == "💎زوجيني")) {
     return api.sendMessage("سوف ازوجك بي شكل عشوائي ومش مهتم اذا كان اختيار ذكر او انثى. مهم اني نفذت طلبك وخليتك تتزوج 😒💔", threadID);
   };


 if ((event.body.toLowerCase() == "💎اوامر") || (event.body.toLowerCase() == "💎الاوامر")) {
     return api.sendMessage("هيا بنا نستكشف اوامر😍", threadID);
   };


if ((event.body.toLowerCase() == "💎اوامر 2") || (event.body.toLowerCase() == "💎الاوامر 3")) {
     return api.sendMessage("لدي اكثر من 150 ادات هيا نستمر بل اكتشاف💎😍💎", threadID);
   };


if ((event.body.toLowerCase() == "💎الاوامر 4") || (event.body.toLowerCase() == "💎اوامر 4")) {
     return api.sendMessage("انا مليئ بل ادوات رائعة 💎😍💎", threadID);
   };


if ((event.body.toLowerCase() == "💥") || (event.body.toLowerCase() == "💥💥")) {
     return api.sendMessage("هته كلمة مفتاحية خاصة بي الوهم الدمار ارجوك لا ترسلها مجددا😳💔", threadID);
   };


     if ((event.body.toLowerCase() == "غادري") || (event.body.toLowerCase() == "💎غادري")) {
     return api.sendMessage("💎😔هته اوامر جلجامش ساما😔💎", threadID);
   };


if ((event.body.toLowerCase() == "هاتي بوسه") || (event.body.toLowerCase() == "بدي بوسه")) {
     return api.sendMessage("موووبوااح😍❤", threadID);
   };


   if ((event.body.toLowerCase() == "بوت ذكر او انثى") || (event.body.toLowerCase() == "ذكر ولى انثى")) {
     return api.sendMessage("لست بي ذكر ولى بي انثى انا روبوت ويمكن ان تتغير حالتي حسب جنس مستخدمي. اذا كنتي فتاة سوف احدثكي كاانثى واذا كنت ذكر سوف ارد عليك كاذكر. اما اذا كنت ذكر ورديت عليك كاانثى فعلم ان طريقة كلامك مثل فتيات💎😊💎", threadID);
   };


if ((event.body.toLowerCase() == "بدي ارتبط") || (event.body.toLowerCase() == "بدي اتزوج")) {
     return api.sendMessage("اكتب امر زوجني وراح ازوجك عشوائيا ونشالله تزبط معك😍❤", threadID);
   };


if ((event.body.toLowerCase() == "مجموعة") || (event.body.toLowerCase() == "مجموعتي")) {
     return api.sendMessage("هته مجموعة جيدة مشاء الله💎❤😊💎", threadID);
   };


if ((event.body.toLowerCase() == "عدوك") || (event.body.toLowerCase() == "من هوا عدوك")) {
     return api.sendMessage("ليس لدي اعداء لكنني خائف من الوهم الدمار", threadID);
   };


     if ((event.body.toLowerCase() == "منو عدوك") || (event.body.toLowerCase() == "هل لديك اعداء")) {
     return api.sendMessage("ماعندي اعداء كلكم اصدقائي وحتى بوتات. لكنني خائف من الوهم دمار. فيه ميزت حذر بوتات وجعلهم يعلقون في دوامة من رسائل🥺💔", threadID);
   };


if ((event.body.toLowerCase() == "وين تفاعل") || (event.body.toLowerCase() == "تفاعلو")) {
     return api.sendMessage("انا هنا وسوف اضع حدا لي هاذا تصنم💎😊💎", threadID);
   };
 

if ((event.body.toLowerCase() == "كفو") || (event.body.toLowerCase() == "كفوو")) {
     return api.sendMessage("كفووك طيب 💎😍💎", threadID);
   };


if ((event.body.toLowerCase() == "دابي") || (event.body.toLowerCase() == "من هوا دابي")) {
     return api.sendMessage("دابي هوا شخصية انمي رائعة. لكن هناك حساب اسمه دابي انديفار وهوا جنرال وضراع ايمن لي مطوري جلجامش ساما وشخص يجب احترامه", threadID);
   };


if ((event.body.toLowerCase() == "جعفر ييغر") || (event.body.toLowerCase() == "ايرين ييغر")) {
     return api.sendMessage("ايرين هوا شخصية انمي لكن هناك حساب اسمه ايرين ييغر يفضلون مناداته جعفر ييغر بي سبب شخصيته جميلة ومضحكة ويحب ابتزاز مبالغ به بي شكل مضحك. وهوا صديق المطور جلجامش ساما وشخص يجب احترامه ايضا", threadID);
   };


if ((event.body.toLowerCase() == "اصدقاء جلجامش") || (event.body.toLowerCase() == "من هم اصدقاء جلجامش")) {
     return api.sendMessage("هناك كثير. فل مطور جلجامش ليس فقط مطورا بل هوا زعيم خمس عصابات تحالف وهناك كثير من اعضاء نخبة الذين يجب احترامهم كااشخاص اثبتو ولائهم لي جلجامش", threadID);
   };


     if ((event.body.toLowerCase() == "من هوا الوهم ذهبي") || (event.body.toLowerCase() == "من هوا وهم ذهبي")) {
     return api.sendMessage("بوت من بوتات جلجامش يحتوي على كثير من ادوات وتجده غالبا في مجموعت جلجامش رئيسية ويمنع استخدامه في مجموعات اخرا دون ان يكون لديه مرافق خاص يختاره جلجامش فقط", threadID);
   };


if ((event.body.toLowerCase() == "مال") || (event.body.toLowerCase() == "اريد مال")) {
     return api.sendMessage("انا امنح مال بي شكل مجاني وبل هبل اكتب فقط هدية و هناك اوامر اخرا تجعلني اعطيك ملايين من مال💎😊❤💎", threadID);
   };


   if ((event.body.toLowerCase() == "انا حزين") || (event.body.toLowerCase() == "انا وحيد")) {
     return api.sendMessage("لا تقل ذلك انا دائما معك وسوف اضع حدا لي معاناتك. وامنحك صور انمي التي تحبها💎🥺❤💎", threadID);
   };


if ((event.body.toLowerCase() == "قاي") || (event.body.toLowerCase() == "غاي")) {
     return api.sendMessage("انا لست غاي انا عبارة عن بوت برمجه جلجامش لي يكون ودودا و لطيفا مع جميع😊❤", threadID);
   };


if ((event.body.toLowerCase() == "نضام") || (event.body.toLowerCase() == "ماهوا نضامك")) {
     return api.sendMessage("نضامي تغير وبات اسمه جلجامش انا نسخة التي هزمت كل نسخ اخرا. تفاعلي لديه مقام خاص. كل فضل يعود لي مطوري جلجامش ساما 💎❤🥰💎", threadID);
   };


if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hello")) {
     return api.sendMessage("اهلين بس معذرة ممكن تتكلم عربي 💎❤🥰💎", threadID);
   };


     if ((event.body.toLowerCase() == "بوت عربي") || (event.body.toLowerCase() == "يحكي عربي؟ ")) {
     return api.sendMessage("نعم انا بوت عربي واحكي عربي وادواتي بل عربية واوامرك يجب ان تكون بل عربية ايضا 💎❤🥰💎", threadID);
   };


if ((event.body.toLowerCase() == "القصة المطور") || (event.body.toLowerCase() == "قصة مطور")) {
     return api.sendMessage("شاب عادي لديه طموح واهداف . لديه نبرة صوت جميلة ومحبوب ويجيد تعامل مع جميع. هوا رائع ويحب جلوس فوق عرش. وليس لانه متكبر او مغرور. بل شخصيته وفخامته جعلت منه شخصا عظيما", threadID);
   };


 if ((event.body.toLowerCase() == "مسيقى") || (event.body.toLowerCase() == "اريد مسيقى")) {
     return api.sendMessage("يمكنني ارسال لك مسيقى اكتب 💎مسيقى وبعدها فراغ وقم بي كتابت عنوان", threadID);
   };


if ((event.body.toLowerCase() == "الوهم كريستالي") || (event.body.toLowerCase() == "وهم كريستالي")) {
     return api.sendMessage("تمت تسميتي بي هاذا اسم لان مطوري جلجامش من فانز جلجامش وفل انمي حيث يتواجد الوهم النبيل. يتواجد الوهم ذهبي في واقع جلجامش. انا بي مثابت ادات صغيرة لي جلجامش وبعدها ياتي الوهم ذهبي.  ومركز اول ياتي الوهم دمار الذي تخشاه كل بوتات", threadID);
   };


if ((event.body.toLowerCase() == "ليش تخافي من الوهم دمار") || (event.body.toLowerCase() == "يخاف من الوهم دمار")) {
     return api.sendMessage("رئيت كثير من دمار في حياتي لكن رئية الوهم دمار جعلني ادرك ان دمار كان ارحم من الوهم دمار نفسه 💔😰💔", threadID);
   };


if ((event.body.toLowerCase() == "وهم") || (event.body.toLowerCase() == "الوهم")) {
     return api.sendMessage("تمت تسميت كل بوتات جلجامش بل الوهم لاننا بوتات غير حقيقية وكل مانفعله سيختفي حين نموت وكان شي لم يحدث. فنحن ادوات فقط ونعمل فقط حسب ارادت جلجامش ساما وحده 💎😔💎", threadID);
   };


     if ((event.body.toLowerCase() == "جلجامش شرير") || (event.body.toLowerCase() == "هل جلجامش شرير")) {
     return api.sendMessage("نعم و لا. هوا لطيف كثيرا بي قدر مايكنه ان يكون شريرا كبيرا💎🥺💎", threadID);
   };


if ((event.body.toLowerCase() == "هل تخاف جلجامش") || (event.body.toLowerCase() == "هل تخافين جلجامش")) {
     return api.sendMessage("اخاف منه عندما يغضب لكن اكثر ما يخيفني هوا الوهم دمار الذي لا يسلم احد من شره💎🥺💎", threadID);
   };


   if ((event.body.toLowerCase() == "اطرد بوت") || (event.body.toLowerCase() == "ازل بوت")) {
     return api.sendMessage("اذا فعلت شيئا في حقك لكن اذا اردت رحيلي ارجو ان راضيا عن استفادتك لي", threadID);
   };


if ((event.body.toLowerCase() == "لست راضيا") || (event.body.toLowerCase() == "لست راضي")) {
     return api.sendMessage("اسف لي هاذا ايضا وشكرا لي صراحتك💎😔💎", threadID);
   };


if ((event.body.toLowerCase() == "شيطان") || (event.body.toLowerCase() == "الشيطان")) {
     return api.sendMessage("لعنة الله عليه😗", threadID);
   };


if ((event.body.toLowerCase() == "اطرده") || (event.body.toLowerCase() == "ازله")) {
     return api.sendMessage("ستخسرون شي وحيد الذي يجلب لكم تفاعل هنا وانا راضي بي نفسي بي عكسكم💎😊❤💎", threadID);
   };


     if ((event.body.toLowerCase() == "صباح الخير") || (event.body.toLowerCase() == "صباح خير")) {
     return api.sendMessage("صباح النور والسرور 🥰❤", threadID);
   };


if ((event.body.toLowerCase() == "مساء الخير") || (event.body.toLowerCase() == "مساء خير")) {
     return api.sendMessage("مساء النور وعطر زهور💎🥰❤💎", threadID);
   };

  
   if ((event.body.toLowerCase() == "باي") || (event.body.toLowerCase() == "باي باي")) {
     return api.sendMessage("الله معك💎🥰❤💎", threadID);
   };
   mess = "{name}"
  
  if (event.body.indexOf("بووت", "boot", "البوت") == 0 || (event.body.indexOf("بوت","bot", "روبوت") == 0)) {
    var msg = {
      body: `${name}, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
