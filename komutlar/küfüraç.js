
const db = require('quick.db')
const Discord = require('discord.js')
//

exports.run = async (client, message, args) => {
  if (!args[0]) return message.channel.send(' Aç yada Kapat yaz! Örnek: !küfürengel aç')
  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('`SUNUCUYU_YÖNET` yetkisine sahip olmalısın!')

  if (args[0] == 'aç') {
    db.set(`kufur_${message.guild.id}`, 'Açık').then(i => {
      message.channel.send(' Görünüşe Göre Küfür Koruması Zaten Aktif Dostum :) \n Kick Yetkisi Olanları Engellemez.')
    })
  }
  if (args[0] == 'kapat') {
    db.set(`kufur_${message.guild.id}`, 'Kapalı').then(i => {
      message.channel.send('Küfür Koruması Devredışı Bırakılmıştır.')
    })
  }

}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['küfür'],
  permLevel: 0
};

exports.help = {
  name: 'küfür-filtre',
  description: 'küfürengel',
  usage: 'küfür'
}