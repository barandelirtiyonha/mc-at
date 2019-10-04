const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission('ADMINISTRATOR'))
        return message.channel.send(':no_entry: Bu komudu kullanabilmek için `Yönetici` yetkisine sahip olmalısın!')
    if (!args[0]) return message.channel.send(':no_entry: Sistemi kullanabilmek için: `reklamisimban aç veya kapat`')

    if (args[0] == 'aç') {
        db.set(`reklamisimban_${message.guild.id}`, 'acik')
        message.channel.send(`Reklam isim ban sistemi açıldı`)

    }
    if (args[0] == 'kapat') {
        db.set(`reklamisimban_${message.guild.id}`, 'kapali')
        message.channel.send(`Reklam isim ban sistemi kapatıldı`)

    }

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['reklam-isim-ban'],
    permLevel: 0
};

exports.help = {
    name: 'reklamisimban',
    description: 'Reklam isim ban sistemini açıp kapatır',
    usage: 'reklamisimban aç/kapat'
};