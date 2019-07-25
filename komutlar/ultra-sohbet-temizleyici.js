const Discord = require('discord.js');
const request = require('node-superfetch');
const db = require('quick.db');
const { stripIndents } = require('common-tags');
const snekfetch = require("snekfetch");
//REAL CODE

exports.run = async (client, message, args) => {
db.fetch(`usohbet_${message.channel.id}`).then(usdurum => {
if(!usdurum || usdurum === 'pasif') usdurum = "Pasif"
if(!args[0]) return message.channel.send('Ultra Sohbet Temizleme Modu Şu Anda ' + usdurum + '\nBu Özelliği Açmak Veya Kapatmak için ``aç`` veya ``kapat`` yazmalısın')
})
  if(args[0] === 'aç') {
    db.set(`usohbet_${message.channel.id}`,'aktif')
    message.channel.send('**Özellik Bu Kanalda Açıldı**')
    }
  else if (args[0] === 'kapat') {
    db.set(`usohbet_${message.channel.id}`,'pasif')
    message.channel.send('**Özellik Bu Kanalda Kapatıldı**')
  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ultrasohbettemizleyici'],
  permLevel: 0,
};
exports.help = {
  name: 'ultra-sohbet-temizleyici',
  description: 'REAL CODE Tarafından Hazırlanmıştır!',
  usage: ''
};
