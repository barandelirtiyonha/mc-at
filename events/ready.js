const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;


module.exports = async client => {
    client.appInfo = await client.fetchApplication();
    setInterval( async () => {
      client.appInfo = await client.fetchApplication();
    }, 60000);
  
  console.log(`BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("oline");
  client.user.setGame(`🔥mc!gold🔥mc!yardım `);
  console.log(`BOT: Şu an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`);
  require("../util/dashboard.js")(client);
};

