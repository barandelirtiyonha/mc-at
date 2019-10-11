const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')

var prefix = ayarlar.prefix

exports.run = async(client, message, args) => {


if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send('Gerekli Yetkiye Sahip Değilsin.')

let channel = message.mentions.channels.first()
if (!channel) {
message.channel.send('Lütfen Bir Kanal Etiketleyiniz! Örnek: **!davet-takip-kanal #kanal**')
return
}
  
db.set(`davetK_${message.guild.id}`, channel), (err) => {
console.log(err)
}

message.channel.send(`Davet kanalı başarıyla ${channel} olarak ayarlandı`)

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'davet-takip-kanal',
  };
  