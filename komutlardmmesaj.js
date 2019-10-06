const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
  
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
 
  if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(` Bu komutu kullanabilmek için "\`Sunucuyu Yönet\`" yetkisine sahip olmalısın.`);
  
  let mesaj = args.slice(0).join(' ')
  
      if (!mesaj) {
        return message.channel.send(`Özel hoş geldin mesajını yazmalısın. \`${prefix}dmmesaj -sayı- -sunucu- -id- -kullanıcı- !\``)
    }
  
    db.set(`dmmesaj_${message.guild.id}`, mesaj)
    message.channel.send(` Özel hoş geldin mesajı ${mesaj ? mesaj.replace('-sunucu-', `\`${message.guild.name}\``) .replace('-kullanıcı-',`\`${message.author.tag}\``) .replace('-id-',`${message.author.id}`) .replace('-sayı-', `${message.guild.memberCount}`) : ``} olarak ayarlandı.`)

}
    
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 1
}

exports.help = {
    name: 'dmmesaj',
  category:'Yetkili',
    description: 'Sunucuya giren kişiye özelden gönderilecek mesajı ayarlar. (Kullanıcı isminin geleceği yere "-kullanıcı-", sunucu isminin geleceği yere "-sunucu-" yazınız.)',
    usage: 'dmmesaj <yazı>'
}