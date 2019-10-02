const Discord = require('discord.js');
const rse = new Discord.Client();
const Jimp = require('jimp');
const fs = require('fs');
//R
exports.run = async (rse, message, args) => {
    let user;
    
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }
    var soz = ['%25', '%35', '%15', '%10', '%95', '%99', '%83', '%61', '%65', '%53', '%56', '%45']
    var sozz = soz[Math.floor(Math.random() * soz.length)];
    if (!args[0]) return message.channel.send('' + rse.ayarlar.basarisiz + ' Lütfen bir kullanıcı **etiketleyin.**')
				const bg = await Jimp.read('https://i.postimg.cc/Z5hJz7Nr/askwallpaper.png');
				const userimg = await Jimp.read(message.author.avatarURL);
				await userimg.resize(200, 200);
				await (!userimg.resize(210, 210));
				const userimgg = await Jimp.read(user.avatarURL);
				await userimgg.resize(200, 200);
				await (!userimgg.resize(210, 210));
				var font4;
				if (user.tag.length < 15) font4 = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
				else if (user.tag.length > 15) font4 = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
				else font4 = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
        await bg.print(font4, 320, 435, `${sozz}`);
        await bg.composite(userimg, 40, 117).write("./img/userimg/" + message.author.tag + "-" + user.tag + ".png");
        await bg.composite(userimgg, 457, 117).write("./img/userimg/" + message.author.tag + "-" + user.tag + ".png");
				  setTimeout(function () {
            message.channel.send('`' + user.tag + '` adli kişi/kullanıcıyla aşk dereceniz: **' + sozz + '**')
						return message.channel.send(new Discord.Attachment("./img/userimg/" + message.author.tag + "-" + user.tag + ".png"));
				  }, 1000);
				  setTimeout(function () {
					fs.unlink("./img/userimg/" + message.author.tag + "-" + user.tag + ".png");
				  }, 10000);
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['aşk-ölçer', 'ask-olcer', 'askolcer', 'ask', 'aşk'],
    permLevel: 0
}
exports.help = {
    name: 'aşk-ölçer',
    description: 'Belirttiğiniz kişi/kullanıcıyla aşk derecesini gönderir.',
    usage: 'aşkölçer [@Kullanıcı]'
}