const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async (client, message, params, args) => {

  const yetkili= new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`${client.user.username}`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
      .addField(`${client.user.username}`,'Tek Yapman Gereken **güvenlik** Adında Yazışma Kanalı Açmak \n \n **Ne İşe Yarar** \n Bu Sizin Sunucunuzda Reklam Yapacak Veya Zararlı Üyeleri Tespit Etmeye Yarar. \n Bu Üyeler Genelde Zararlı Üyelerdir. \n Açtıktan Sonra Otomatik Aktif Olur. Başka Birşey Yazmanıza Gerek Yok')
      .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
  return message.channel.sendEmbed(yetkili);

};


  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [""],
    permLevel: 0
  };
  
  exports.help = {
    name: 'güvenlikseviyesi',
    description: 'yetkili',
    usage: 'yetkili'
  };