const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const embedyardim = new Discord.RichEmbed()
    .setColor('#fffa00')
    .setAuthor(`MC-AT BOT`, client.user.avatarURL) 
      .setDescription('**[Website](https://discordapp.com/oauth2/authorize?client_id=625343020438388746&scope=bot&permissions=2146958847)**')
.setThumbnail(client.user.avatarURL)
      .addField('** !editle (14)**', '`davet`, `istatistik`, `sor`, `afk`, `avatar`, `emojiler`, `roller`, `jumbo`, `kullanıcı-bilgi`, `ping`, `rol-bilgi`, `sunucu`, `sunucuresmi`')
      .addField('** !editle (13)**', '`küfür`, `modlog`, `otorol`, `otoselam`, `reklam`, `sayaç`, `sil-üye`, `sil`, `vkanal`, `yasakla`, `yaz`')
      .addField('** !editle (4)**', '`beyaz`, `kara`, `eval`, `reboot`')
    .setFooter('© MC-AT BOT')
    .setTimestamp()
    message.channel.send(embedyardim).catch()
    
//bnm işim bu kadar kendin herşeyi editle <3 <3
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