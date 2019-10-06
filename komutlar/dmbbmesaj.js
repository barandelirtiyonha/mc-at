const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
  
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
 
  if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(` Bu komutu kullanabilmek için "\`Sunucuyu Yönet\`" yetkisine sahip olmalısın.`);
  
  let mesaj = args.slice(0).join(' ')
  
      if (!mesaj) {
        return message.channel.send(`Özel bb mesajını yazmalısın. \`${prefix}dmbbmesaj -sayı- -sunucu- -id- -kullanıcı- !\``)
    }
  
    db.set(`dmbbmesaj_${message.guild.id}`, mesaj)
    message.channel.send(` Özel bb mesajı \`${mesaj}\` olarak ayarlandı.`)
}
    
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 1
}

exports.help = {
    name: 'dmbbmesaj',
  category:'Yetkili',
    description: 'Sunucuya giren kişiye özelden gönderilecek mesajı ayarlar. (Kullanıcı isminin geleceği yere "-kullanıcı-", sunucu isminin geleceği yere "-sunucu-" yazınız.)',
    usage: 'dmbbmesaj <yazı>'
}