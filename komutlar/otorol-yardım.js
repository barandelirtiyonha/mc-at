exports.run = function(client, message, args) {
        message.channel.send("<:yanlis:604033229653147667> Ayarlamam İçin Bir Rol Etiketlemeilisin. \n  Rolü Etiketleyemiyorsan Rolün Etiketleme Seçeneğini Aktif Etmeyi Unutma *  *Örnek Kullanım : !otorol @rol #kanal ");
    };

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [""],
  permLevel: 0
};

module.exports.help = {
  name: 'otorol',
  description: '',
  usage: 'test'
};