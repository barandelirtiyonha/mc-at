const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async (client, message, params, args) => {

  const yetkili= new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`${client.user.username}`, client.user.avatarURL)
      .addField(`${client.user.username}`,'Sunucunuzun toplam kaç üye oldunu gösterir \n sunucunuzdan çıkan üyeden geri kalan üye sayısını gösterir')
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
    name: 'sunucu-panel-yardım',
    description: 'yetkili',
    usage: 'yetkili'
  };