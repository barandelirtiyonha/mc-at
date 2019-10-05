const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;
//

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle(`${client.user.username}`)
  .setDescription('')
  .setColor("GOLD")
    .setDescription('')
      .setDescription('Hep Daha İleriye Bizimle! \n\n**Harika Özellikler İçeren Gold Üye Sistemi Hakkında!** \n\n Bizlere Destek Olmak Ve Harika Özellikler Kazanmak İçin [Tıkla](https://discord.gg/UnZjvxu)')
      .setFooter(`© ${client.user.username}` )

  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['gold','Gold'],
  permLevel: 0
};

exports.help = {
  name: 'gold-üye',
  description: 'gold-üye.',
  usage: 'gold-üye '
};