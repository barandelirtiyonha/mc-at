const Discord = require('discord.js');
var ayarlar = require('../ayarlar.json');
const fs = require('fs');
let gkanal = JSON.parse(fs.readFileSync("./ayarlar/glog.json"));
let gkanal2 = JSON.parse(fs.readFileSync("./ayarlar/glog1.json"));
let küfürEngel = JSON.parse(fs.readFileSync("././jsonlar/kufurEngelle.json", "utf8"));


exports.run = (client, message) => {
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);
  
  var embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(`» ${message.guild.name} Sunucu Ayarları «`, `https://images-ext-2.discordapp.net/external/ujBwHK3NkvSNyffbh50uDXaOIG6M3ED77fYEsn33Sl4/http/cdn.onlinewebfonts.com/svg/download_136247.png`)


  .addField("Küfür Engelleme Sistemi", küfürEngel[message.guild.id] ? "Açık" : "Kapalı" ,true)

  .addField("Küfür Engelleme Sistemi", gkanal[message.guild.id] ? "Açık" : "Kapalı" ,true)
  .addField("bb-kanal", gkanal[message.guild.id] ? `**Mesaj:** \n\`\`\`${gkanal[message.guild.id].gkanal}\`\`\`` : `Ayarlanmamış`)
  message.channel.send(embed)
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: `Yönetici izni gerekiyor.`
  };
  
  exports.help = {
    name: 'ayarlar',
    category: 'ayarlar',
    description: 'Sunucu ayarlarını gösterir.',
    usage: 'a!ayarlar'
  };