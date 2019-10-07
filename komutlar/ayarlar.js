const Discord = require("discord.js");
const fs = require("fs");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json")

exports.run = async (client, message, args) => {
  
  let prefix =ayarlar.prefix;

  const embed = new Discord.RichEmbed()
  .setColor("orange")
  .setAuthor(` » ${message.guild.name} Sunucu Ayarları «`,"https://cdn.discordapp.com/emojis/601753206090891265.png?v=1")
  .addField(`Küfür`, db.has(`kufur_${message.guild.id}`) ? `${db.fetch(`kufur_${message.guild.id}`)}`: ` Kapalı`, true)
  .addField(`Reklam`, db.has(`reklam_${message.guild.id}`) ? `${db.fetch(`reklam_${message.guild.id}`)}`: ` Kapalı`, true)
  .addField(`Saldırı Koruma`, db.has(`saldırıKoruma_${message.guild.id}`) ? `${db.fetch(`saldırıKoruma_${message.guild.id}`)}`: ` Kapalı`, true)
  .addField(`Hujgeldin`, db.has(`hosgeldin_${message.guild.id}`) ? `${db.fetch(`hosgeldin_${message.guild.id}`)}`: ` Kapalı`, true)
  .addField(`Sigtir`, db.has(`sigtir_${message.guild.id}`) ? `${db.fetch(`sigtir_${message.guild.id}`)}`: ` Kapalı`, true)
  .addField(`Mod Log Kanalı`, db.has(`modLog_${message.guild.id}`) ? `${ message.guild.channels.get(db.fetch(`modLog_${message.guild.id}`)).name}`: ` Kapalı`, true)
  .addField(`Log Kanalı`, db.has(`log_${message.guild.id}`) ? `${ message.guild.channels.get(db.fetch(`log_${message.guild.id}`)).name}`: ` Kapalı`, true)
  .addField(`Giriş Çıkış Kanalı`, db.has(`gc_${message.guild.id}`) ? `${ message.guild.channels.get(db.fetch(`gc_${message.guild.id}`)).name}`: ` Kapalı`, true)
  .addField(`Sayaç Kanalı`, db.has(`sk_${message.guild.id}`) ? `${ message.guild.channels.get(db.fetch(`sk_${message.guild.id}`)).name}`: `Kapalı`, true)
  .addField(`Sayaç`, db.has(`s_${message.guild.id}`) ? (db.fetch(`s_${message.guild.id}`)):` Kapalı`, true)
  .addField(`Oto Rol Kanalı`, db.has(`orolk_${message.guild.id}`) ? `${ message.guild.channels.get(db.fetch(`orolk_${message.guild.id}`)).name}`: ` Kapalı`, true)
  .addField(`Oto Rol`, db.has(`orol_${message.guild.id}`) ? `${ message.guild.roles.get(db.fetch(`orol_${message.guild.id}`)).name}`: ` Kapalı`, true)
 .setFooter(`${message.author.username} tarafından istendi.`)
  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["5 Eylül'de istek istedim daha bekleniyor nekadar kolaymış degilmi","APTAL"],
  permLevel: 0,
  kategori: "ayarlar"
};

exports.help = {
  name: "ayar",
  description: "Sunucu ayarlarını gösterir",
  usage: "ayar"
};