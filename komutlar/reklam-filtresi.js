const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  
  if (!args[0]){
    message.channel.send("Reklam Engel için Doğru Kullanım: !reklam-engel aç / !reklam-engel kapat")
  }
  if (args[0] === 'aç'){
    message.channel.send("Görünüşe Göre Reklam Koruması Zaten Aktif Dostum :) \n Kick Yetkisi Olanları Engellemez!")
    
    db.set(`reklam_${message.guild.id}`, "acik")
  }
  if (args[0] === 'kapat'){
    message.channel.send("Reklam Filtresi başarıyla kapatıldı!.")
    
    db.set(`reklam_${message.guild.id}`, "kapali")
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["reklam"],
  permLevel: 0
}
exports.help = {
  name: "reklam-engel",
  description: "Reklam engel açar yada kapatır.",
  usage: "m!reklam-engel"
}

