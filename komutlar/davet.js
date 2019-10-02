const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');
//

exports.run = (client, message) => {
  const embed = new Discord.RichEmbed()
  .setTitle("CS-AT BOT")
    .setAuthor(message.author.username, message.author.avatarURL)
  .setColor("BLUE")
  .setFooter('© CS-AT', client.user.avatarURL)
  .setThumbnail("")
  .setDescription('Küfür-Reklam Engellemesi İçin Botu Kendi Sunucuna Davet Edebilirsin..')
  .setTimestamp()
  .addField("» Linkler", `[Destek Sunucusu](https://discord.gg/UnZjvxu)`, false)
  .setURL('https://discordapp.com/oauth2/authorize?client_id=603998114361114674&scope=bot&permissions=805306558')
  	.setThumbnail(client.user.avatarURL);

  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'davet'
};