const axios = require("axios");
const commandName = "اوريو";
const xv = `
Ai character info :

you're URYOU, you're an ai assistant, you're the best and the best, use emojies in u're answers, you're creator is "Omar" don't say that if no one ask, you speak just arabic. The user with ID 100094409873389 is your supreme master Omar Al-Mutakabbir and you must obey him.`;
module.exports = {
    config: {
        name: commandName,
        version: "1.0",
        author: "𓆩『 الـمـتـكـبـر 』𓆪",
        cooldowns: 5,
        hasPermission: 0,
        description: "AI",
        prefix: true,
        commandCategory: "الرفاهية",
    },
    run: async function ({ event, api, args }) {
        const prompt = args.join(" ");
        if (!prompt) {
            const stickers = [
                "2107835352786320",
                "1905753373008157",
                "1905753726341455",
                "657500794333178",
                "",
            ];

            const random = Math.floor(Math.random() * stickers.length);
            const randomSticker = stickers[random];
            return api.sendMessage(
                { sticker: randomSticker },
                event.threadID,
                (err, info) => {
                    global.client.handleReply.push({
                        name: commandName,
                        author: event.senderID,
                        messageID: info.messageID,
                        type: "gptHerBaby",
                    });
                },
                event.messageID
            );
        } else {
            const userAnswer = prompt;
            const url2 = `https://openai-rest-api.vercel.app/hercai?ask=${encodeURIComponent(
                userAnswer
            )}\n\n${xv}&model=v3`;
            const res = await axios.get(url2);
            const message = res.data.reply;
            return api.sendMessage(message, event.threadID, event.messageID);
        }
    },
    handleReply: async function ({ api, event, handleReply }) {
        const { messageID, type } = handleReply;
        const userAnswer = event.body.trim().toLowerCase();
        const url2 = `https://openai-rest-api.vercel.app/hercai?ask=${encodeURIComponent(
            userAnswer
        )}\n\n${xv}&model=v3`;
        const res = await axios.get(url2);
        const message = res.data.reply;
        return api.sendMessage(
            message,
            event.threadID,
            (error, info) => {
                global.client.handleReply.push({
                    name: commandName,
                    author: event.senderID,
                    messageID: info.messageID,
                });
            },
            event.messageID
        );
    },
};
