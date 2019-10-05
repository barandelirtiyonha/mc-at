const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix

let ERKEKROLİSİM = "Mantus"
let ALANACAKROLİSİM = "Archangel"

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_NICKNAMES")) return message.reply(`:warning: Bunu yapabilmek için gerekli yetkiye sahip değilsiniz!`)
  let isim = args.slice(1).join(' ');
  var rol = message.guild.roles.find(rol => rol.name === ERKEKROLİSİM);
  var alacakrol = message.guild.roles.find(rol => rol.name === ALANACAKROLİSİM);
  let kullanici = message.mentions.users.first();
  if(!kullanici) return message.reply(`:warning: Lütfen bir kullanıcı giriniz! \nDoğru Kullanım; \`${prefix}erkek @${client.user.username}#${client.user.discriminator} <yeni isim>\``)
  if(!isim) return message.reply(`:warning: Lütfen bir kullanıcı adı giriniz! \nDoğru Kullanım; \`${prefix}erkek @${client.user.username}#${client.user.discriminator} <yeni isim>\``)
  if(isim.length > 32) return message.reply(`:warning: Lütfen \`32\` karakteri geçmeyecek şekilde bir isim giriniz!`)
  message.guild.members.get(kullanici.id).setNickname(` ${isim}`)
  message.guild.members.get(kullanici.id).addRole(rol.id)
  message.guild.members.get(kullanici.id).removeRole(alacakrol.id)
  message.channel.send(`:white_check_mark: Başarılı bir şekilde \` ${kullanici.username}\` adlı kişinin kullanıcı adı \` ${isim}\` olarak değiştirildi.`)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['isimdegistir',"e"],
    permLevel: 0
}

exports.help = {
    name: 'erkek',
    description: 'Belirttiğiniz kullanıcının kullanıcı adını değiştirir.',
    usage: 'isimdeğiştir @kullanıcı <kullanıcı adı>'
  }