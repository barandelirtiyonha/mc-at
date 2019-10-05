const Discord = require('discord.js');

var yazılar = {
   "gidiyor": ":white_check_mark: | Kanallaran Ayrılınıyor!!",
   "bilgi": "\n**Bu Yazı Bot Sahibi Tarafından Gönderildi!"
}

exports.run = (client, message, args) => {
message.channel.send(yazılar.gidiyor)

client.guilds.forEach(suncu => {
suncu.channels.filter(t => t.type === "voice").forEach(vc => {
vc.leave().catch( e => console.log( e ) )
})

var kanal = suncu.channels.filter(t => t.type === "text").random()	
kanal.send("Bot Bakıma Alındı! Lütfen Oynuyoru Takip Ediniz!" + yazılar.bilgi)

})

}
  
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'bakım',
  description: 'RitararyCode Sunucusuna Aittir!',
  usage: 'Izinsiz Paylaşmayın Aq'
};