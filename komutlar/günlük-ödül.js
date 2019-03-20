const Discord = require("discord.js");
const fs = require("fs");
const talkedRecently = new Set();

exports.run = async (client, message, args) => {

  const db = require('quick.db');
  
  var s = 'tr'
  var a = client.commands.get('günlük-ödül').help.name
  var g = "Tekrar günlük ödül alabilmek için `24` saat beklemelisin."
    if(db.has(`dil_${message.guild.id}`) === true) {
        var s = 'en'
        var a = client.commands.get('günlük-ödül').help.enname
        var g = "Wait `24` hours a day to get a daily prize again."
    }
    const dil = client[s]
    const o = a
  
   if (talkedRecently.has(message.author.id)) {
        return message.channel.send(g);
} else {
  
  let para = JSON.parse(fs.readFileSync("././jsonlar/para.json", "utf8"));
      
  if(!para[message.author.id].rc) { 
        para[message.author.id] = {
            rc: para[message.author.id].rc + 500
        };
  };
  
    fs.writeFile("././jsonlar/para.json", JSON.stringify(para), (x) => {
        if (x) console.error(x)
      })
  
  message.reply(dil.basarili)
  
talkedRecently.add(message.author.id);
        setTimeout(() => {

          talkedRecently.delete(message.author.id);
        }, 86400000);
    }

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["günlük-maaş", "günlük-hediye", "daily"],
  permLevel: 0,
    kategori: "profil",
  category: "profile"
};

exports.help = {
  name: "günlük-ödül",
  description: "Günlük 500 RECoin alırsınız.",
  usage: "günlük-ödül",
  enname: "daily-prize",
  endescription: "You will get 500 RECoin per day.",
  enusage: "daily-prize"
};