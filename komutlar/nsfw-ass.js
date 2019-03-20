const Discord = require("discord.js");
const request = require('snekfetch');
const fs = require("fs")

exports.run = (client, message, args) => {
    var max = 5511;
    var min = 1000;
    var MathRan = Math.floor(Math.random() * (max - min + 0)) + min;
    var MathLoL = Math.round(MathRan);
    if (!message.channel.nsfw) {
        message.channel.send("<a:basarisiz:518352873214443550> `nsfw-4k` komutunu sadece `Uygunsuz Kanal` seçeneği açık olan kanallarda kullanılabilir. (Sakıncalı içerikler bulunmaktadır! :smiling_imp:")
    } else {
        var randomname = Math.floor(Math.random() * (99999999999999999999 - 11111111111111111111 + 0)) + 11111111111111111111;
        request.get("http://media.obutts.ru/butts_preview/0" + MathLoL + ".jpg").then(r => {
            fs.writeFile(`ass.jpg`, r.body)
            message.channel.sendFile(r.body)
            fs.unlink(`./ass.jpg`)
        })
    }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "NSFW",
  category: "NSFW"
};

exports.help = {
  name: 'nsfw-ass',
  description: 'NSFW komutudur.',
  usage: 'nsfw-ass',
};