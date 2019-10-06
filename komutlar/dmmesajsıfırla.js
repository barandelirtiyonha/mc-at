const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
  
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
 
  if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(` Bu komutu kullanabilmek için "\`Sunucuyu Yönet\`" yetkisine sahip olmalısın.`);
  
    db.delete(`dmmesaj_${message.guild.id}`)
  db.delete(`dmbbmesaj_${message.guild.id}`)
    message.channel.send(` Özel hoş geldin ve baybay mesajı sıfırlandı.`)
}
    
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 1
}

exports.help = {
    name: 'dmmesajsıfırla',
  category:'Yetkili',
    description: 'Sunucuya giren kişiye özelden gönderilecek mesajı ayarlar. (Kullanıcı isminin geleceği yere "-kullanıcı-", sunucu isminin geleceği yere "-sunucu-" yazınız.)',
    usage: 'dmmesajsıfırla'
}