const Discord = require('discord.js')
const fs = require('fs');
const ayarlar = require('../ayarlar.json');
let kanal = JSON.parse(fs.readFileSync("./ayarlar/kayit1.json", "utf8"));
var prefix = ayarlar.prefix;
exports.run = async (client, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu Komutu Kullanabilmek İçin **Yönetici** İznine Sahip Olmalısın!`);
  
  let channel = message.mentions.channels.first()
    if (!channel) {
        message.channel.send(':x: | Bu Özelliği Ayarlamam İçin Bir Kanal Etiketlemelisin Örnek: `!kayit-kanal-ayarla  #kayitkanal`')
        return
    }
    if(!kanal[message.guild.id]){
        kanal[message.guild.id] = {
            resim: channel.id
        };
    }
    fs.writeFile("./ayarlar/kayit1.json", JSON.stringify(kanal), (err) => {
        console.log(err)
    })
    message.channel.send(`:white_check_mark: | ** Üyelerin Kayıt Olacağı Kanal ${channel} Olarak Ayarlandı.** `)
}
    
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 2
}
exports.help = {
    name: 'kayıt-kanal-ayarla',
    description: 'Giriş Çıkış Kanalını Ayarlar.',
    usage: 'kayit-kanal-ayarla #kanal '
}
