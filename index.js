const { Telegraf } = require("telegraf");
const http = require('http');
var express = require('express');
var app = express();

const server = http.createServer(app);
app.get('/', function (req, res) {
    const YOUR_TOKEN = "5803340495:AAHIYg7BiyUFNTSZ7QbAUHN_ZiqOHwRA_Xw";
    const bot = new Telegraf(YOUR_TOKEN);


    bot.start((ctx) => ctx.reply("Welcome"));
    bot.help((ctx) => ctx.reply("Send me a sticker"));
    bot.telegram.sendMessage(919990497, req.query.key)

    bot.on("message", async (ctx) => {
        const message = ctx.update.message.text;
        console.log(message)
        res.send(message);
    });

    bot.launch();

})
let port = process.env.PORT || 8900;
server.listen(port, () => {
    //callback
    console.log("Backend Nodejs is running on the port: " + port);
})


