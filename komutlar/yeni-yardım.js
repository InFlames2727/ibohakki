


const Discord = require('discord.js');
//const ayarlar = require('../ayarlar.json');
const { stripIndents, oneLine } = require('common-tags');
const db = require('quick.db');

exports.run = async (bot, message, args, dil) => {

  const ayarlar = bot.ayarlar
  
  //var prefix = ayarlar.prefix
  
  //if (message.author.id !== "486817385051979786") return message.reply("Bir süre devre dışıdır!")
  
  let command = args[0];
  
   if (!command) {
     
       const mod = (`${bot.emojis.get("519189983433588746")}`) //+
  const ayar = (`${bot.emojis.get("519190010113556487")}`)//+
  const kul = (`${bot.emojis.get("519189980581462037")}`)//+
  const pro = (`${bot.emojis.get("519201925418188800")}`)//+
  const eğlen = (`${bot.emojis.get("519189980581462037")}`) //+
  const oyun = (`${bot.emojis.get("519190011090829323")}`) //+
  const müzik = (`${bot.emojis.get("519189983836504064")}`) //+
  const sunucu = (`${bot.emojis.get("519201925292359682")}`) //+
  const efekt = (`${bot.emojis.get("519203551235538944")}`) //+
  const bott = (`${bot.emojis.get("519190010621329439")}`) //+
  const yan = (`${bot.emojis.get("519204890522681350")}`) //+
    
    
  
   let prefix = await db.fetch(`prefix_${message.guild.id}`) || "r!";
  let pages = [`[__${yan} Moderasyon Komutları__](https://discord.gg/zRxaz97)\n ${mod}${prefix}    `,  `[__${yan} Ayar Komutları__](https://discord.gg/zRxaz97)\n`, `[__${yan} Kullanıcı Komutları__](https://discord.gg/zRxaz97)\n`,`[__${yan} Profil Komutları__](https://discord.gg/zRxaz97)\n`, `[__${yan} Eğlence Komutları__](https://discord.gg/zRxaz97)\n`, `[__${yan} Oyun Komutları__](https://discord.gg/zRxaz97)\n`, `[__${yan} Müzik Komutları__](https://discord.gg/zRxaz97)\n`, `[__${yan} Sunucu Komutları__](https://discord.gg/zRxaz97)\n`, `[__${yan} Efekt Komutları__](https://discord.gg/zRxaz97)\n`, `[__${yan} Bot Komutları__](https://discord.gg/zRxaz97)\n`];
  let page = 1; // Sayfa 1
 
 
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setAuthor(message.guild.name,bot.user.avatarURL)
  .setFooter(`© 2018 ${bot.user.username} | Sayfa ${page} / ${pages.length}`,bot.user.avatarURL)
  .setThumbnail(bot.user.avatarURL)
  .setDescription(pages[page-1])
  .setAuthor(message.guild.name,bot.user.avatarURL)
message.channel.send(embed).then(msg => {
 
    msg.react('⬅').then(r => {
      msg.react('➡')
      
 
      //Filter
      
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;
      
 
      const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 });
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 });
    
 
      forwards.on('collect', r => {
        if(page === pages.length) return;
        page++;
        embed.setDescription(pages[page-1]);
        embed.setFooter(`© 2018 ${bot.user.username} | Sayfa ${page} / ${pages.length}`,bot.user.avatarURL)
        msg.edit(embed)
      })
      backwards.on('collect', r => {
        if(page === 1) return;
        page--;
        embed.setDescription(pages[page-1]);
        embed.setFooter(`© 2018 ${bot.user.username} | Sayfa ${page} / ${pages.length}`,bot.user.avatarURL)
        msg.edit(embed)
      })
      
    
      
     
     
 
    })
  })
  
return
}

  if (command) {
    
    if (bot.commands.has(command) ? bot.commands.has(command) : bot.aliases.has(command)) {
      var cmd = bot.commands.get(command) ? bot.commands.get(command) : bot.commands.get(bot.aliases.get(command))
      
  var s = 'tr'
  var komut = cmd.help.name
  var a = cmd.help.description
  var u = cmd.help.usage

  var yetki = cmd.conf.permLevel.toString()
			.replace("0", `Yetki gerekmiyor.`)
			.replace("1", `Mesajları Yönet yetkisi gerekiyor.`)
			.replace("2", `Üyeleri At yetkisi gerekiyor.`)
      .replace("3", `Üyeleri Yasakla yetkisi gerekiyor.`)
			.replace("4", `Yönetici yetkisi gerekiyor.`)
			.replace("5", `Bot Sahibi yetkisi gerekiyor.`)
  
    if(db.has(`dil_${message.guild.id}`) === true) {
        var s = 'en'
        var komut = cmd.help.enname
        var a = cmd.help.endescription
        var u = cmd.help.enusage

        var yetki = cmd.conf.permLevel.toString()
			.replace("0", `No permission required.`)
			.replace("1", `Manage Messages permission is required.`)
			.replace("2", `Members Kick permission is required.`)
      .replace("3", `Members Ban permission is required.`)
			.replace("4", `Administrator permission is required.`)
			.replace("5", `Bot owner permission is required.`)
        
        }
      
			const embed = new Discord.RichEmbed()
				.addField(dil.yardım.komut, komut)
				.addField(dil.yardım.aciklama, a || dil.dont)//command.help.description || "Bulunmuyor")
        .addField(dil.yardım.kategori, k || dil.dont)//command.conf.kategori || "Bulunmuyor")
				.addField(dil.yardım.yetki, yetki || dil.unknow)
				.addField(dil.yardım.kullanim, u || dil.dont)//command.help.usage || "Bilinmiyor")
				.addField(dil.yardım.aliases, cmd.conf.aliases.join(', ') || dil.dont)
				.setColor("RANDOM")
			 message.channel.send({embed: embed})
      
		} else if (bot.english.has(command) ? bot.english.has(command) : bot.aliases.has(command)) {
      var cmd = bot.english.get(command) ? bot.english.get(command) : bot.commands.get(bot.aliases.get(command));
      
  var s = 'tr'
  var komut = cmd.help.name
  var a = cmd.help.description
  var u = cmd.help.usage

  var yetki = cmd.conf.permLevel.toString()
			.replace("0", `Yetki gerekmiyor.`)
			.replace("1", `Mesajları Yönet yetkisi gerekiyor.`)
			.replace("2", `Üyeleri At yetkisi gerekiyor.`)
      .replace("3", `Üyeleri Yasakla yetkisi gerekiyor.`)
			.replace("4", `Yönetici yetkisi gerekiyor.`)
			.replace("5", `Bot Sahibi yetkisi gerekiyor.`)
  
    if(db.has(`dil_${message.guild.id}`) === true) {
        var s = 'en'
        var komut = cmd.help.enname
        var a = cmd.help.endescription
        var u = cmd.help.enusage

        var yetki = cmd.conf.permLevel.toString()
			.replace("0", `No permission required.`)
			.replace("1", `Manage Messages permission is required.`)
			.replace("2", `Members Kick permission is required.`)
      .replace("3", `Members Ban permission is required.`)
			.replace("4", `Administrator permission is required.`)
			.replace("5", `Bot owner permission is required.`)
        
    }
      
			const embed = new Discord.RichEmbed()
				.addField(dil.yardım.komut, komut)
				.addField(dil.yardım.aciklama, a || dil.dont)//command.help.description || "Bulunmuyor")

				.addField(dil.yardım.yetki, yetki || dil.unknow)
				.addField(dil.yardım.kullanim, u || dil.dont)//command.help.usage || "Bilinmiyor")
				.addField(dil.yardım.aliases, cmd.conf.aliases.join(', ') || dil.dont)
				.setColor("RANDOM")
			 message.channel.send({embed: embed})
		} else {
			const embed = new Discord.RichEmbed()
				.setDescription(`Botta ${args[0]} isminde bir komut bulunamadı! Botun tüm komutlarını ${ayarlar.prefix}yardım yazarak öğrenebilirsiniz.`)
				.setColor("RANDOM")
			message.channel.send({embed})
    }
    return
  }
};

exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: ['h', 'help', 'y'],
  permLevel: 0,
  kategori: 'genel'
};

exports.help = {
  name: 'yardım2',
  category: 'genel',
  description: 'Tüm komutları listeler.',
  usage: 'yardım veya yardım <komut adı>'
};