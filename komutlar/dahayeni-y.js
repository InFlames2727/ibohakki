const Discord = require('discord.js');
const db = require('quick.db');

exports.run =  (client, args, message, tool) => {

  const mod = (`${client.emojis.get("519189983433588746")}`) //+
  const ayar = (`${client.emojis.get("519190010113556487")}`)//+
  const kul = (`${client.emojis.get("519189980581462037")}`)//+
  const pro = (`${client.emojis.get("519201925418188800")}`)//+
  const eğlen = (`${client.emojis.get("519189980581462037")}`) //+
  const oyun = (`${client.emojis.get("519190011090829323")}`) //+
  const müzik = (`${client.emojis.get("519189983836504064")}`) //+
  const sunucu = (`${client.emojis.get("519201925292359682")}`) //+
  const efekt = (`${client.emojis.get("519203551235538944")}`) //+
  const bott = (`${client.emojis.get("519190010621329439")}`) //+
  const yan = (`${client.emojis.get("519204890522681350")}`) //+
    
    
  



let pages = [`[__${yan} Moderasyon Komutları__](https://discord.gg/zRxaz97)\n ${mod}   `,  `[__${yan} Ayar Komutları__](https://discord.gg/zRxaz97)\n`, `[__${yan} Kullanıcı Komutları__](https://discord.gg/zRxaz97)\n`,`[__${yan} Profil Komutları__](https://discord.gg/zRxaz97)\n`, `[__${yan} Eğlence Komutları__](https://discord.gg/zRxaz97)\n`, `[__${yan} Oyun Komutları__](https://discord.gg/zRxaz97)\n`, `[__${yan} Müzik Komutları__](https://discord.gg/zRxaz97)\n`, `[__${yan} Sunucu Komutları__](https://discord.gg/zRxaz97)\n`, `[__${yan} Efekt Komutları__](https://discord.gg/zRxaz97)\n`, `[__${yan} Bot Komutları__](https://discord.gg/zRxaz97)\n`];
let page = 1;

const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setFooter(`Sayfa: ${page} Uzunluk: ${pages.length}`)
.setDescription(page[page-1])

message.channel.send(embed).then(message => {

  message.react('◀️').then(r => {
   message.react('▶️')

  const backwardsFilter = (reactions, user) => reactions.emoji.name === '◀️' && user.id === message.author.id;
  const forwardsFilter = (reactions, user) => reactions.emoji.name === '▶️' && user.id === message.author.id;

  const backwards = message.createReactionCollector(backwardsFilter, { time: 6000 } );
  const forwards = message.createReactionCollector(forwardsFilter, { time: 6000 } );

backwards.on('collect', r => {
     if (page === 1 ) return;
     page --; 
     embed.setDescription(sayfa[page-1]);
     embed.setFooter(`Sayfa: ${page} Uzunluk : ${pages.length} `)
     message.edit(embed)
       })

       forwards.on('collect', r => {
        if (page === pages.length) return;
        page ++; 
        embed.setDescription(sayfa[page+1]);
        embed.setFooter(`Sayfa: ${page} Uzunluk : ${pages.length} `)
        message.edit(embed)

      })

     })

  })

}


exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: ['h', 'help', 'y'],
  permLevel: 0,
  kategori: 'genel'
};

exports.help = {
  name: 'yardım3',
  category: 'genel',
  description: 'Tüm komutları listeler.',
  usage: 'yardım veya yardım <komut adı>'
};

//◀️ --- ▶️ 