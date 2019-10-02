const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require("quick.db");

var prefix = ayarlar.prefix;

exports.run = async (client, message, params) => {

const ayarlar = require("../ayarlar.json")
if (message.channel.id== ayarlar.kanal) return message.channel.send(`:x: <@${message.author.id}> Sohbet kanalında komut kullanmak yasaktır. <#580493272775131136> komut odasında komut kullanınız lütfen.!`)
  let sunucu = await db.fetch(`sunucukaraliste_${message.guild.id}`);
  let kullanıcı = await db.fetch(`kullanicikaraliste_${message.author.id}`);

  if( sunucu == "aktif"){
   const userblacklist = new Discord.RichEmbed()
    .setURL(ayarlar.sunucudavet)
    .setAuthor(message.guild.name, message.guild.avatarURL)
    .setDescription("Sunucumuza Gelerek neden karalisteye alındığınızı öğrenebilirsiniz " + `Destek Sunucu: ${ayarlar.sunucudavet}`)
    .setTitle("KARA LİSTE TESPİT EDİLDİ!", true)
    .setColor("RED")
    .setImage("https://i.postimg.cc/wv4N2JL8/giphy.gif")
    .setThumbnail("https://i.postimg.cc/wv4N2JL8/giphy.gif")
    .addField("Sunucu ID numaranız yoluyla botumuzun karalistesine alınmışsınız.", `Karalisteye alınan sunucu ID numarası: **${message.guild.id}**`, true)
    .addField("XiR Destek Sunucusu" + ayarlar.sunucudavet)
    .setFooter("Sunucumuza Gelerek neden sunucunuzun karalisteye alındığını öğrenebilirsiniz" + `Destek Sunucu ${ayarlar.sunucudavet}`)
    return message.channel.sendEmbed(userblacklist);
  }else{
   if( kullanıcı == "aktif"){
    const userblacklist = new Discord.RichEmbed()
    .setURL(ayarlar.sunucudavet)
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription("Sunucumuza Gelerek neden karalisteye alındığınızı öğrenebilirsiniz " + `Destek Sunucu: ${ayarlar.sunucudavet}`)
    .setThumbnail("https://i.postimg.cc/ZqK0QnTT/intelligent-blacklisting-icon.png")
    .setTitle("KARA LİSTE TESPİT EDİLDİ!", true)
    .setColor("RED")
    .setImage("https://i.postimg.cc/wv4N2JL8/giphy.gif")
    .addField("Kullanıcı ID numaranız yoluyla botumuzun karalistesine alınmışsınız.", `Karalisteye alınan ID numarası : **${message.author.id}**`, true)
    .addField("XiR Destek Sunucusu", ayarlar.sunucudavet)
    return message.channel.sendEmbed(userblacklist);
   }else{


    const embedyardim = new Discord.RichEmbed()
        .setTitle(`${client.emojis.get("549525196629868547")}XiR | Ana Panel`)
        .setThumbnail(message.author.avatarURL)
        .setColor("#d49818")
        .setDescription(`◐**Prefix:\`\`${prefix}\`\`** | ◒**Komut Sayısı:\`\`${client.commands.size}\`\`** | ◑**Üye Sayısı:\`\`${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}\`\`**  \n \n` +
        `Sunucuza giren çıkanları görmeniz için **__${ayarlar.prefix}ayar__** komutuna göz atın.! \n` +
        `Sunucunuzdaki denetim kaydını görmek için **log** kanalı oluşturmanız gerekmektedir.\n`
        + `  \n`
        + " `afk` -"
        + " `hatırlat` -"
        + " `yardım` -"
        + " `yardım2` -"
        + " `yardım3` -"
        + " `site` -"
        + " `yapımcım` -"
        + " `canlıdestek` -"
        + " `istatistik` -"
        + " `botdavet` -"
        + " `botsunucu` -"
        + " `ping`")

     message.react("549525196629868547")
    message.channel.send(embedyardim)
}
  }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['p', 'panel'],
    permLevel: 0
};

exports.help = {
    name: 'panel',
    description: 'Ana Panel',
    usage: 'panel'
};
