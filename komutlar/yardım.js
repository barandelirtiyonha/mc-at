const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const embedyardim = new Discord.RichEmbed()
    .setColor('#fffa00')
    .setAuthor(`MC-AT `, client.user.avatarURL) 
      .setDescription('**!Yardım** ile yardım alabilirsiniz.')
      .addField(`örnek komut kullanımı: !küfüraç. \n` + '')
      .addField(`botu davet etmek için !davet.yard \n` + '')
      .addField('** !Komutlar (12)**', `herkesin kullanabileceği standart komutlar. \n` +  '`bot bilgi`, `davet`, `gold`, `webpanel`, `sunucupp`, `profil`, `kredim`, `p-Market`, `p-Menü`, `ping`, `puanım`, `ayarlar`')
      .addField('** !Eğlence (9)**',   `herkes için kullanılabilecek eğlence komutları. \n` + '`kralol`, `maymunol`, `yılanol`, `adamol`, `kediol`, `aşk`, `token`, `tokat`')
      .addField('** !Moderasyon (12)**',`yetkililer için moderasyon komutları bölüm . \n` +  '`küfür`, `reklam`, `link engel`, `kick`,`reklam isim ban`,`otorol`,`sayaç`,`ban koruma sistemi`,`oto cevap`,`mute-sistemi`,`anti-raid-bot-sistemi`')
      .addField('** !Moderasyon2 (12)**',`yetkililer için moderasyon komutları bölüm . \n` + '`sil`,`reklam-taraması`,`resimli hg-bb`,`sunucutanıt`,`oto bot silici`,`ultra sohbet temizleyici`,`slowmode`,`tag Sistemi`,`rol-sistemi`,`geçici-oda`,`kayıt sistemi`')
    .setFooter('© MC-AT', client.user.avatarURL)
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