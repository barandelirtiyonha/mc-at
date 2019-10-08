const Discord = require("discord.js");
const moment = require("moment");
const ayarlar = require('../ayarlar.json');

function convertMS(ms) {
    var d, h, m, s;
    s = Math.floor(ms / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;
    return {
        d: d
        , h: h
        , m: m
        , s: s
    };
};

exports.run = (bot, message, args) => {

    let prefix = ayarlar.prefix;
    if (!message.content.startsWith(prefix)) return;

    let u = convertMS(bot.uptime);
    let uptime = u.d + " days : " + u.h + " hours : " + u.m + " minutes : " + u.s + " seconds"

    const duration = moment.duration(bot.uptime)
    let bicon = bot.user.displayAvatarURL;
    const botembed = new Discord.RichEmbed()
        .addBlankField()
        .setTitle("")
        .setColor(`RANDOM`)
        .addField(`<a:davet:621486003135184920>`, `**Uptime :**  ${uptime} <a:2_:621485334731030528>`)
        .setThumbnail(bicon);

    message.channel.send(botembed);
}

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
};

exports.help = {
 name: 'uptime',
 description: 'Uptime',
 usage: 'uptime'
};

