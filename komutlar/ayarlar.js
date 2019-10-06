const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args, member) => {

  let kufurfiltre = await db.fetch(`kufur_${message.guild.id}`)
  let kufurYazi;
  if (kufurfiltre == null) kufurYazi = 'Küfür filtresi açık değil, ayarlamak için `!küfür-filtresi aç`'
  if (kufurfiltre == 'açık') kufurYazi = 'Küfür filtresi açık.'
  if (kufurfiltre == 'kapali') kufurYazi = 'Küfür filtresi açık değil, ayarlamak için `!küfür-filtresi aç`'
  
const ayarlar = new Discord.RichEmbed()
.setTitle('Ayarlar:')
.addField('Küfür engelleme', kufurYazi)
.setColor('BLUE')
message.channel.send(kufurfiltre)
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'ayarlar',
  description: 'Sunucuya ayarlanan komutları gösterir.',
  usage: 'ayarlar'
};