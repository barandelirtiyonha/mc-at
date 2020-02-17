const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const embedyardim = new Discord.RichEmbed()
    .setColor('#fffa00')
    .setAuthor(`${client.user.username} `, client.user.avatarURL) 
      .setDescription('\nbotu davet etmek için mc!davet')
      .addField(' Eğlence', `Eğlence Komutları \n` +  '`bilgi`, `davet`, `gold`, `webpanel`, `kredim`,`yılbaşı`')
      .addField(' Eğlence',   `Eğlence Komutları \n` + '`kralol`,`adamol`,`balıktut`')
      .addField(' Moderasyon',`Yetkili Komutları \n` +  '`küfür-engelle <aç> veya <kapat>`, `reklam-engel`, `reklam-engelleme(link engelleme)`, `reklamkick`,`reklamisimban`,`otorol`,`sayaç`,`koruma-sistemi`,`Oto-Cevap`,`güvenlik`')
      .addField(' Moderasyon',`Yetkili Komutları \n` + '`sil`,`reklam-taraması`,`bb-kanal`,`sunucutanıt`,`oto-bot-silici`,`oto-bot-silici-kapat`,`yavaşmod`,`tag`,`kayıt`,`erkek`,`kayıt-kanal-ayarla`')
    .setFooter(`© ${client.user.username} ` , client.user.avatarURL)
    .setTimestamp()
    message.channel.send(embedyardim).catch()
    
//////`${client.user.username}`
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["h", "halp", "help", 'y', 'yadrım'],
    permLevel: 0
};

exports.help = {
    name: 'yardım',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösteir.',
};