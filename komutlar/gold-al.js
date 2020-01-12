const db = require('quick.db')
const Discord = require('discord.js')
const client = new Discord.Client();
exports.run = async (bot, message, args) => {
 //

  if (message.author.id !== '612333524015644692') return;
  let nesne = args[0]
  if (!nesne) return message.channel.send('Bir kullanıcının IDsini girmelisin?')
  
  db.delete(`tios_gold${nesne}`, 'gold')
  
  message.channel.send(`**${nesne}** Adlı Kullanıcı Gold Üye Değil`)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};
exports.help = {
  name: 'gold-al',
  description: '[Admin Komutu]',
  usage: 'karaliste <ID>'
};
