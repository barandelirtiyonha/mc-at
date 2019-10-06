const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  if (!args[0]) return message.channel.send('Merhaba hgdm sistemini açmak için +hgdm aç yazabilirsin.')
  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('`SUNUCUYU_YÖNET` yetkisine sahip olmalısın!')


  if (args[0] == 'aç') {
    db.set(`hgsistemi_${message.guild.id}`, 'acik').then(i => {
      message.channel.send('HG-DM başarıyla açıldı!')
    })
  }
  if (args[0] == 'kapat') {
    db.set(`hgsistemi_${message.guild.id}`, 'kapali').then(i => {
      message.channel.send('HG-DM başarıyla kapatıldı!')
    })
  }
//CodePLUS Sunucusuna Aittir!!!
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['hg-dm'],
  permLevel: 0
};

exports.help = {
  name: 'hgdm',
  description: 'HGDM sistemini açar.',
  usage: 'hgdm aç kapat'
};