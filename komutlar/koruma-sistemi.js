const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
exports.run = async (client, message, args) => {
//

let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`Bu komutu kullanabilmek için "\`Sunucuyu Yönet\`" yetkisine sahip olmalısın.`)
  
  let aktif = await db.fetch(`bottemizle_${message.guild.id}`)
  if (aktif) {
    db.delete(`bottemizle_${message.guild.id}`)
    message.channel.send(`Koruma sistemi devre dışı bırakıldı.`)
  }
 
  if (!aktif) {
    db.set(`bottemizle_${message.guild.id}`, 'aktif')
    message.channel.send(`Koruma sistemi aktif edildi.`)
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['koruma-sistemi'],
  permLevel: 0
};

exports.help = {
  name: 'koruma-sistemi',
  description: 'Sunucuya bot eklendiğinde atılmasını sağlayan sistemi başarıyla aktifleştirirsiniz/kapatırsınız.',
  usage: 'koruma-sistemi'
};