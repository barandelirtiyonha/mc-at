const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;
exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) {
message.channel.send("Yetersiz yetki")
      return
    }
  
  let tag = args.slice(0).join(' ');
  let xtag = db.fetch(`technotag_${message.guild.id}`)
  
  if (!tag) return message.channel.send(`Hatalı kullandınız! Örnek kullanım: \`${prefix}ototag HG | \``)
  

  
  db.set(`stag_${message.guild.id}`, tag)
  message.channel.send(`Sunucu Tagı Başarıyla **${tag}** Olarak Ayarlandı.`)
   
}
    
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'tag',
};