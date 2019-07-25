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



/////////////////////////////////////////////////////////

client.on('ready', () => {
  // Module Configuration Constructor
   antispam(client, {
        warnBuffer: 3, 
        maxBuffer: 5,
        interval: 2000, 
        warningMessage: "please stop spamming!", // İleti kullanıcıları uyarıldığında alır. (mesaj '@ Kullanıcı' ile başlar, bu yüzden sadece devam etmek için giriş yapmanız gerekir..) 
        banMessage: "has been hit by ban hammer for spamming!", // MKullanıcı yasaklandığında yazılı mesaj gönderilir. (mesaj '@ Kullanıcı' ile başlar, bu yüzden sadece devam etmek için giriş yapmanız gerekir..) 
        maxDuplicatesWarning: 7,// Bir kullanıcının uyarılmadan önce bir zaman aralığında gönderebileceği maksimum yinelenen mesaj sayısı.
        maxDuplicatesBan: 10, // 
        deleteMessagesAfterBanForPastDays: 7, 
        exemptRoles: ["Kurucu"], 
        exemptUsers: ["AdemCan#1413"] 
      });
      
  // Rest of your code
});
 


///////////////////////////////////////////////////////////

client.on('guildMemberAdd', member => {
  db.fetch(`autoRole_${member.guild.id}`).then(i => {
 try {
 member.addRole(member.guild.roles.find("name", i))
} catch (e) {
 console.log('Rol veremedim...')
}
})
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

client.on("message", async msg => {
  db.fetch(`kufur_${msg.guild.id}`).then(i => {
if (i == 'Açık') {
        const kufur = ["discord.gg","https//",".com",".xyz",".net"];
        if (kufur.some(word => msg.content.includes(word))) {
          try {
             if (!msg.member.hasPermission("BAN_MEMBERS")) {
                  
     
               
               msg.delete(); 
             

                  return msg.reply('Reklam yapmamalısın.').then(msg => msg.delete(3000));
             }
          } catch(err) {
            console.log(err);
          }
        } } else if (i == 'Kapalı') {

}

})
});


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

client.on("message", async msg => {
  db.fetch(`kufur_${msg.guild.id}`).then(i => {
if (i == 'Açık') {
        const kufur = ["amk","a.m.k","am","a.m","m.k","mk","orosbu çocugu","orospu çocugu","o.ç","oç","oc","o.c","orosbu","orospu","veledi zina","sikerim","sıkerım","s.i.k.e.r.i.m","s.ı.k.e.r.ı.m","piç","pıc","p.i.ç","p.ı.c","orosbu evladı","orospu evladı","amına koyayım","babanı sikim"];
        if (kufur.some(word => msg.content.includes(word))) {
          try {
             if (!msg.member.hasPermission("BAN_MEMBERS")) {
                  
     
               
               msg.delete(); 
             

                  return msg.reply('Küfür Etmemelisin.').then(msg => msg.delete(3000));
             }
          } catch(err) {
            console.log(err);
          }
        } } else if (i == 'Kapalı') {

}

})
});

////////////////////////////////////////////////////////////


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
