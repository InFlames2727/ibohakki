const randomPuppy = require('random-puppy');
const request = require('snekfetch');
const fs = require("fs")
const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if (!message.channel.nsfw) return message.channel.send("<a:basarisiz:518352873214443550> `nsfw-4k` komutunu sadece `Uygunsuz Kanal` seçeneği açık olan kanallarda kullanılabilir. (Sakıncalı içerikler bulunmaktadır! :smiling_imp:")

    const subreddits = [
        "NSFW_GIF",
        "nsfw_gifs",
        "porninfifteenseconds",
        "60FPSPorn",
        "porn_gifs",
        "nsfw_Best_Porn_Gif",
        "LipsThatGrip",
        "adultgifs"
    ]

    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
            .then(url => {
                const embed = new Discord.RichEmbed()
                    .setColor(0xffa500)
                    .setImage(url)
                message.channel.send(embed);
        })
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
  name: 'nsfw-gif',
  description: 'NSFW komutudur.',
  usage: 'nsfw-gif',
};