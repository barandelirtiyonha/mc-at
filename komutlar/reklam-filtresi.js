const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  if (!args[0]) return message.channel.send('Merhaba reklam açmak için !reklam aç yazabilirsin.')
  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('`SUNUCUYU_YÖNET` yetkisine sahip olmalısın!')
//

  if (args[0] == 'aç') {
    db.set(`kufur_${message.guild.id}`, 'Açık').then(i => {
      message.channel.send(' Görünüşe Göre Reklam Koruması Zaten Aktif Dostum :) \n Kick Yetkisi Olanları Engellemez!')
    })
  }
  if (args[0] == 'kapat') {
    db.set(`kufur_${message.guild.id}`, 'Kapalı').then(i => {
      message.channel.send('Reklam Filtresi başarıyla kapatıldı!')
    })
  }

}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['reklam'],
  permLevel: 0
};

exports.help = {
  name: 'reklam-filtresi',
  description: 'reklam',
  usage: 'reklam'
};