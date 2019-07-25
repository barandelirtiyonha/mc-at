const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  if (!args[0]) return message.channel.send(' Aç yada Kapat yaz! Örnek: !reklam-engelle aç')
  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('`SUNUCUYU_YÖNET` yetkisine sahip olmalısın!')

  if (args[0] == 'aç') {
    db.set(`kufur_${message.guild.id}`, 'Açık').then(i => {
      message.channel.send(' Reklam Engel başarıyla açıldı')
    })
  }
  if (args[0] == 'kapat') {
    db.set(`kufur_${message.guild.id}`, 'Kapalı').then(i => {
      message.channel.send('Reklam Engel başarıyla kapatıldı!')
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