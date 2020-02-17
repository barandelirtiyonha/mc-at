const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require("moment");
require("moment-duration-format");
const ayarlar = require('../ayarlar.json');


exports.run = (client, message) => {
    const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
	const istatistikozel = new Discord.RichEmbed()
    .setColor(0x36393F)
.setDescription(`${client.user.username}`)
  .addField(` Bot Sahipleri:`, `<@536470606166622208>`, true)
  .addField('Shard:', '1/1', true)
	.addField("Bellek Kullanımı:", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
  .addField("Sunucu Sayısı:", `${client.guilds.size.toLocaleString()}`, true)
  .addField("Kullanıcı Sayısı:", `${client.users.size}`, true)
  .addField("Toplam Kullanıcı Sayısı:", `${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`, true)
  .addField("Kanal Sayısı:", `${client.channels.size.toLocaleString()}`, true)
  .addField(`Ne Kadar Süredir Aktif:`, `${duration}`, true)
  .addField("Ping:", `${client.ping}`, true)
  .addField("Discord.js Sürümü:", `${Discord.version}`, true)
  .addField(`Davet Et`, `[Tıkla](Yakında)`, true)
  message.channel.sendEmbed(istatistikozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['istatistik', 'i', 'istatistikler', 'botbilgi', 'bilgi', 'hakkında', 'bot hakkında', 'bothakkında'],
      kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'bilgi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};
//MC-BOT