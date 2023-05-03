const { Telegraf } = require("telegraf");

var express = require('express');
var app = express();

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

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("Ung dung Node.js dang lang nghe tai dia chi: http://%s:%s", host, port)

})


