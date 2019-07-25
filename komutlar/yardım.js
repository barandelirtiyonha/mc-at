const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komut Listesi")
  .setDescription('')
  .setColor(0x00ffff)
      .setDescription('**!Yardım** ile yardım alabilirsiniz. \n botu davet etmek için \`!davet\`. \n örnek komut kullanımı: \`!küfür-filtre aç\`.  \n **!komutlar** (1) \n herkesin kullanabileceği standart komutlar. \n \`davet\` \n **!eğlence(2)** \n herkes için kullanılabilecek eğlence komutları. \n  \`aşk-ölçer\` \`blıktut\` \n **!moderasyon ()** \n ')
      .setFooter('© CS-AT')

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
  aliases: ['help','yardim'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};