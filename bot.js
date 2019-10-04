const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const moment = require('moment');
var Jimp = require('jimp');
const antispam = require('discord-anti-spam'); // MODÜL
const { Client, Util } = require('discord.js');
const weather = require('weather-js')
const fs = require('fs');
const db = require('quick.db');
const http = require('http');
const express = require('express');
require('./util/eventLoader')(client);
const path = require('path');
const request = require('request');
const snekfetch = require('snekfetch');
const queue = new Map();
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');


const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping tamamdır.");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};





client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};


/////////////////////////////////////////////////////





 










////////////////////////////////////////////////////

/////////////////////////////////////////////////////////

client.on('ready', () => {
  // Module Configuration Constructor
   antispam(client, {
        warnBuffer: 3, 
        maxBuffer: 5,
        interval: 2000, 
        warningMessage: "lütfen spamı durdurun!", // İleti kullanıcıları uyarıldığında alır. (mesaj '@ Kullanıcı' ile başlar, bu yüzden sadece devam etmek için giriş yapmanız gerekir..) 
        banMessage: "spam nedeniyle yasaklanmış çekiç tarafından vuruldu!", // MKullanıcı yasaklandığında yazılı mesaj gönderilir. (mesaj '@ Kullanıcı' ile başlar, bu yüzden sadece devam etmek için giriş yapmanız gerekir..) 
        maxDuplicatesWarning: 7,// Bir kullanıcının uyarılmadan önce bir zaman aralığında gönderebileceği maksimum yinelenen mesaj sayısı.
        maxDuplicatesBan: 10, 
        deleteMessagesAfterBanForPastDays: 7, 
        exemptRoles: ["Kurucu"], 
        exemptUsers: ["AdemCan#1413"] 
      });
      
  // Rest of your code
});
 


///////////////////////////////////////////////////////////

client.on('guildMemberAdd', async (member, guild, message) => {
//CodAre
let role = await  db.fetch(`otorolisim_${member.guild.id}`)
 let otorol = await db.fetch(`autoRole_${member.guild.id}`)
 let i = await db.fetch(`otorolKanal_${member.guild.id}`)
 if (!otorol || otorol.toLowerCase() === 'yok') return;
else {
 try {
  //CodAre

  if (!i) return //CodAre

  member.addRole(member.guild.roles.get(otorol))
                        var embed = new Discord.RichEmbed()
                        .setDescription(`**Sunucuya Yeni Katılan** \`${member.user.tag}\` **Kullanıcısına** \`${role}\` **Rolü verildi.**`)
                        .setColor('0x36393E') //CodAre
                        .setFooter(`Otorol Sistemi`)
     member.guild.channels.get(i).send(embed)  } catch (e) {
 console.log(e)
}
}

});

///////////////////////////////////////////////////////////

client.on("message", async message => {

if( message.content === "sa" || message.content === "Sa" || message.content === "Selamın Aleyküm" || message.content === "selamın aleyküm" || message.content === "sea" || message.content === "Sea") {

let gold = require("quick.db").fetch(`tios_gold${message.author.id}`)
if (gold === "gold") {

  const embed = new Discord.RichEmbed()
  .setColor("GOLD")
  .setDescription(" Hizaya Geçin Bu Bir **Gold** Üye ! ")
  message.channel.send({embed})

  } else {

return;

  }
}
})

//////////////////////////////////////////////////////////

client.on('guildMemberAdd', member => {
 let guvenlik= db.fetch(`bottemizle_${member.guild.id}`)
    if (!guvenlik) return;
    if(member.user.bot !==true){
    } else {
   member.kick(member) 
  }  
  });

//////////////////////////////////////////////////////////

client.on('message', async message => {
  let ke = await db.fetch(`reklam_${message.guild.id}`)
  
  if (ke === "kapali" || ke === undefined || ke === null){
    return;
  } else if (ke === "acik") {
    let reklam = ["discord.gg/", "https://", ".org", ".com", ".cf", ".tk", ".xyz"]
    if (reklam.some(word => message.content.includes(word))){
        if (!message.member.hasPermission("BAN_MEMBERS")) {
        message.delete();
        message.channel.send("Kurucuya gönderdim!!! Bir daha reklam yapma!")
        message.guild.owner.send("Sunucunuzda bir kişi reklam yaptı. \nKullanıcı: "+ message.author.tag +" \nMesaj: **"+ message +"** ")
      }
    }
    
  }
})


/////////////////////////////////////////////////////////

client.on("message", async msg => {


  const i = await db.fetch(`ssaass_${msg.guild.id}`);
    if (i == 'acik') {
      if (msg.content.toLowerCase() == 'selam' || msg.content.toLowerCase() == 'sa' || 
msg.content.toLowerCase() == 'Selam Naber') {
          try {

                  return msg.reply('Aleyküm Selam')
          } catch(err) {
            console.log(err);
          }
      }
    }
    else if (i == 'kapali') {
    
    }
    if (!i) return;

    });

////////////////////////////////////////////////////////

client.on("message", msg => {
  let küfürEngel = db.fetch(`ke_${msg.guild.id}`)
  if (!msg.guild) return
  if (küfürEngel === 'kapali') return
    if (küfürEngel === 'acik') {
      const küfür = ["mk", "amk", "aq", "orospu", "oruspu", "oç", "sikerim", "yarrak", "piç", "amq", "sik", "amcık", "çocu", "sex", "seks", "amına", "orospu çocuğu", "sg", "siktir git"];
  if (küfür.some(word => msg.content.toLowerCase().includes(word)) ) {
    if (!msg.member.hasPermission("ADMINISTRATOR")) {
      msg.delete()
       msg.channel.send(new Discord.RichEmbed().setColor('#000000').setDescription('Olm utanmıyon mu yaşına başına bakmadan küfür etmeye he?! Püü senin sıfatına!')).then(message => message.delete(3000));
    }
}
    }
})
////////////////////////////////////////////////////////////
client.on('message', async (msg, member, guild) => {
  let DB = require('quick.db')
  let OtoCevap = await  DB.fetch(`otocevap_${msg.guild.id}`)
  if(OtoCevap === 'açık') {
    
    const OtoCevapSelam = new Discord.RichEmbed()
      .setColor('#000096')
      .setDescription(`**Aleyküm Selam, Hoşgeldin ${msg.author.username}!**`)
    
    if (msg.content.toLowerCase() === 'sa') { 
      msg.channel.send(OtoCevapSelam).then(msg => msg.delete(3000))
    }
    if (msg.content.toLowerCase() === 'slm') { 
      msg.channel.send(OtoCevapSelam).then(msg => msg.delete(3000))
    }
    if (msg.content.toLowerCase() === 'selam') { 
      msg.channel.send(OtoCevapSelam).then(msg => msg.delete(3000))
    }
    if (msg.content.toLowerCase() === 'sea') { 
      msg.channel.send(OtoCevapSelam).then(msg => msg.delete(3000))
    }
    if (msg.content.toLowerCase() === 'selamun aleyküm') { 
      msg.channel.send(OtoCevapSelam).then(msg => msg.delete(3000))
    }
    if (msg.content.toLowerCase() === 'selamın aleyküm') { 
      msg.channel.send(OtoCevapSelam).then(msg => msg.delete(3000))
    }

    
    const OtoCevapHalhatır = new Discord.RichEmbed()
      .setColor('#000096')
      .setDescription(`**İyiyiz, sen nasılsın ${msg.author.username}?**`)
    
    if (msg.content.toLowerCase() === 'naber') {
      msg.channel.send(OtoCevapHalhatır).then(msg => msg.delete(3000))
    }
    if (msg.content.toLowerCase() === 'nbr') {
      msg.channel.send(OtoCevapHalhatır).then(msg => msg.delete(3000))
    }
    if (msg.content.toLowerCase() === 'nasılsınız') {
      msg.channel.send(OtoCevapHalhatır).then(msg => msg.delete(3000))
    }

    
    const OtoCevapVeda = new Discord.RichEmbed()
      .setColor('#000096')
      .setDescription(`**Hoşçakal ${msg.author.username}!**`)
    
    if (msg.content.toLowerCase() === 'görüşürüz') {
      msg.channel.send(OtoCevapVeda).then(msg => msg.delete(3000))
    }
    if (msg.content.toLowerCase() === 'bb') {
      msg.channel.send(OtoCevapVeda).then(msg => msg.delete(3000))
    }
    if (msg.content.toLowerCase() === 'bye') {
      msg.channel.send(OtoCevapVeda).then(msg => msg.delete(3000))
    }
    if (msg.content.toLowerCase() === 'bye bye') {
      msg.channel.send(OtoCevapVeda).then(msg => msg.delete(3000))
    }
    if (msg.content.toLowerCase() === 'bay') {
      msg.channel.send(OtoCevapVeda).then(msg => msg.delete(3000))
    }
    if (msg.content.toLowerCase() === 'bay bay') {
      msg.channel.send(OtoCevapVeda).then(msg => msg.delete(3000))
    }
    if (msg.content.toLowerCase() === 'baybay') {
      msg.channel.send(OtoCevapVeda).then(msg => msg.delete(3000))
    }
    if (msg.content.toLowerCase() === 'güle güle') {
      msg.channel.send(OtoCevapVeda).then(msg => msg.delete(3000))
    }
    
    if (msg.content.toLowerCase() === `<@${client.user.id}>`) { //Botu etiketleyince mesaj atar
      msg.channel.send('Ha efendim knk')
    }
  
    if (msg.content.toLowerCase() === 'yok bişi') {
      msg.channel.send('LA SEN BENİMLE DALGA MI GEÇİYON')
    }
  }
})

//////////////////reklamisimban
client.on('guildMemberAdd', async member => {
  const reklamisim = ["discord.gg/", "https://discord.gg", "invite", "join", "twitch", "instagram", "facebook", "dlive", "nolive", "discordbots.org", "discordapp"]; 
  let reklamisimban = await db.fetch(`reklamisimban_${member.guild.id}`) 
  if (reklamisimban === 'kapali') return; 
  if (reklamisimban === 'acik') { 
   if (reklamisim.some(word => member.user.username.includes(word)) ) { 
      member.ban({ 
          reason: `isminde reklam olduğundan dolayı banlandı.`, 
        }) 
    } 
  } 

});
/////////////////////////linkengelle
client.on("message", async msg => {
    if(msg.author.bot) return;
    if(msg.channel.type === "dm") return;
        
    let i = await db.fetch(`reklamFiltre_${msg.guild.id}`)  
          if (i == 'acik') {
              const reklam = ["discord.app", "discord.gg", "invite","discordapp","discordgg", ".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", ".party", ".rf.gd", ".az",];
              if (reklam.some(word => msg.content.toLowerCase().includes(word))) {
                try {
                  if (!msg.member.hasPermission("MANAGE_GUILD")) {
                    msg.delete();                    
                    let embed = new Discord.RichEmbed()
                    .setColor(0xffa300)
                    .setFooter('Gnarge Blocker s  Reklam engellendi.', client.user.avatarURL)
                    .setAuthor(msg.guild.owner.user.username, msg.guild.owner.user.avatarURL)
                    .setDescription("Gnarge Reklam sistemi, " + `***${msg.guild.name}***` + " adlı sunucunuzda reklam yakaladım.")
                    .addField('Reklamı yapan kişi', 'Kullanıcı: '+ msg.author.tag +'\nID: '+ msg.author.id, true)
                    .addField('Engellenen mesaj', msg.content, true)
                    .setTimestamp()                   
                    msg.guild.owner.user.send(embed)                       
                    return msg.channel.send(`${msg.author.tag}, Reklam Yapmak Yasak Dostum!`).then(msg => msg.delete(25000));
                  }              
                } catch(err) {
                  console.log(err);
                }
              }
          }
          if (!i) return;
          });    
//////////////////////////////////////////////reklamkivk
client.on("message", async message => {
    let uyarisayisi = await db.fetch(`reklamuyari_${message.author.id}`);
    let reklamkick = await db.fetch(`reklamkick_${message.guild.id}`)
    let kullanici = message.member;
    if (reklamkick == 'kapali') return;
    if (reklamkick == 'acik') {
        const reklam = ["discord.app", "discord.gg", "invite", "discordapp", "discordgg", ".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", ".party", ".rf.gd", ".az",];
        if (reklam.some(word => message.content.toLowerCase().includes(word))) {
            if (!message.member.hasPermission("ADMINISTRATOR")) {
                message.delete();
                db.add(`reklamuyari_${message.author.id}`, 1) //uyarı puanı ekleme
                if (uyarisayisi === null) {
                    let uyari = new Discord.RichEmbed()
                        .setColor("RANDOM")
                        .setFooter('Reklam kick sistemi', client.user.avatarURL)
                        .setDescription(`<@${message.author.id}> reklam kick sistemine yakalandın! Reklam yapmaya devam edersen kickleniceksin (1/3)`)
                        .setTimestamp()
                    message.channel.send(uyari)                
}
                if (uyarisayisi === 1) {
                    let uyari = new Discord.RichEmbed()
                        .setColor("RANDOM")
                        .setFooter('Reklam kick sistemi', client.user.avatarURL)
                        .setDescription(`<@${message.author.id}> reklam kick sistemine yakalandın! Reklam yapmaya devam edersen kickleniceksin (2/3)`)
                        .setTimestamp()
                    message.channel.send(uyari)
                }
                if (uyarisayisi === 2) {
                    message.delete();
                    await kullanici.kick({
                        reason: `Reklam kick sistemi`,
                    })
                    let uyari = new Discord.RichEmbed()
                        .setColor("RANDOM")
                        .setFooter('Reklam kick sistemi', client.user.avatarURL)
                        .setDescription(`<@${message.author.id}> 3 adet reklam uyarısı aldığı için kicklendi. Bir kez daha yaparsa banlanacakç`)
                        .setTimestamp()
                    message.channel.send(uyari)
                }
                if (uyarisayisi === 3) {
                    message.delete();
                    await kullanici.ban({
                        reason: `Reklam ban sistemi`,
                    })
                    db.delete(`reklamuyari_${message.author.id}`)
                    let uyari = new Discord.RichEmbed()
                        .setColor("RANDOM")
                        .setFooter('Reklam kick sistemi', client.user.avatarURL)
                        .setDescription(`<@${message.author.id}> kick yedikten sonra tekrar devam ettiği için banlandı.`)
                        .setTimestamp()
                    message.channel.send(uyari)
                }

            }
        }
    }
});
////////////////////////////////

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);
