const Discord = require('discord.js')
const db = require('quick.db')
const client = new Discord.Client()

exports.run = async (client, message, args) => {    
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);

  

 const kanal1 = args.slice(0).join(' ')
      
  const kanal2 = message.guild.channels.find('name', `${kanal1}`)

  if(args[0] == 'kapat') {
    
   const kanalcik =  db.fetch(`botPanel_${message.guild.id}`) 
   const kanalcik2 = message.guild.channels.find('id' , kanalcik)
   kanalcik2.delete()
    db.delete(`botPanel_${message.guild.id}`)  
    const embed2 = new Discord.RichEmbed()
    .setAuthor('Panel kanalı başarıyla sıfırlandı')
    .setColor('RED')
  message.channel.send(embed2) 
    
  } 
  if(args[0] == 'kapat') return
  
    if (!kanal2 || kanal2.type !== "voice") return message.reply('Sesli kanal ismi yazmalısınız.')
    
    db.set(`botPanel_${message.guild.id}` , kanal2.id)
     
     const embed = new Discord.RichEmbed()
     .setAuthor('Başarılı')
     .addField('Ayarlanan kanal' , '```css\n'+kanal2.name+'```')
     .setColor('GREEN')
     .setDescription(`Sunucuya bir kullanıcı girdiğinde & çıktığında kanal ismini değiştirerek üye sayısını gösterecek.Çalıştığını görmek için yeni birinin katılmasını ya da çıkmasını bekleyin!`)
      message.channel.send(embed)
}
        
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2,
  kategori:"bot"
};

exports.help = {
  name: 'sunucu-panel',
  description: 'Sunucu panelini ayarlar.',
  usage: 'sunucu-panel [sesli kanal ismi] / kapat'
};