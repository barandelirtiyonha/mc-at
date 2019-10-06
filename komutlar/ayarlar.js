const Discord = require('discord.js');
const db = require('quick.db');




exports.run = async (client, message, args) => {
   if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);

  
  // </> :Ayar Sıfırlama: <\>
  let arguman = args[1]
  let sifirla = args[0]

if (sifirla === "sıfırla") {  
  
 if (!sifirla) {
  return message.channel.send(`**(Ayar İsimleri : otorol , ototag , küfür-engel , reklam-engel , büyükharf-engel)**`);
 };
  if (arguman === "otorol") {
    db.delete(`otorol_${message.guild.id}.rol`)
    db.delete(`otorol_${message.guild.id}.kanal`)
     return message.channel.send(`${client.emojis.get(client.emoji.tik)} İşlem başarılı!`)
  }
  if (arguman === "ototag") {
    db.delete(`tag_${message.guild.id}.tag`)
    db.delete(`tag_${message.guild.id}.kanal`)
    return message.channel.send(`${client.emojis.get(client.emoji.tik)} İşlem başarılı!`)
  }
  if (arguman === "log") {
    db.delete(`logK_${message.guild.id}`)
    return message.channel.send(`${client.emojis.get(client.emoji.tik)} İşlem başarılı!`)
  }
}
  // </> :Ayar Sıfırlama: <\>
  // </> :Prefix: <\>
  let pr = await db.fetch(`prefix_${message.guild.id}`)
  let pre;
  
  if (pr === null) pre = `${client.emojis.get(client.emoji.kapalı)} ${client.ayarlar.prefix}`
  else pre = `${client.emojis.get(client.emoji.açık)} ${pr}`
  // </> :Prefix: <\>
  // </> :Küfür Engel: <\> 
  let kufurE = await db.fetch(`kufurE_${message.guild.id}`)
  let kufur;
  
  if (kufurE === null) kufur = `${client.emojis.get(client.emoji.kapalı)} !küfür-engel aç`
  if (kufurE === "Aktif") kufur = `${client.emojis.get(client.emoji.açık)} !küfür-engel kapat`
  // </> :Küfür Engel: <\> 
  // </> :Reklam Engel: <\>
  let reklamE = await db.fetch(`reklamE_${message.guild.id}`)
  let reklam;
  
  if (reklamE === null) reklam = `${client.emojis.get(client.emoji.kapalı)} !reklam-engel aç`
  if (reklamE === "Aktif") reklam = `${client.emojis.get(client.emoji.açık)} !reklam-engel kapat`
  // </> :Reklam Engel: <\> 
  // </> :Büyük Harf Engel: <\>
  let buyukharfE = await db.fetch(`capsE_${message.guild.id}`)
  let buyukharf;
  
  if (buyukharfE === null) buyukharf = `${client.emojis.get(client.emoji.kapalı)} !büyükharf-engel aç`
  if (buyukharfE === "Aktif") buyukharf = `${client.emojis.get(client.emoji.açık)} !büyükharf-engel kapat`
  // </> :Büyük Harf Engel: <\>
  // </> :Hg Bb Kanalı: <\>
  let hgbbK = await db.fetch(`hgbb_${message.guild.id}.kanal`)
  let hgbb;
  
  if (hgbbK === null) hgbb = `${client.emojis.get(client.emoji.kapalı)} !hgbb-ayarla`
  else hgbb = `${client.emojis.get(client.emoji.açık)} <#${hgbbK}>`
  // </> :Hg Bb Kanalı: <\>
  // </> :Güvenlik Kanalı: <\>
  let guvenlikK = await db.fetch(`güvenlikK_${message.guild.id}`)
  let guvenlik;
  
  if (guvenlikK === null) guvenlik = `${client.emojis.get(client.emoji.kapalı)} !güvenlik-kanal`
  else guvenlik = `${client.emojis.get(client.emoji.açık)} <#${guvenlikK}>`
  // </> :Güvenlik Kanalı: <\>
  // </> :Sayaç Sayı/Kanalı: <\>
  let sayacS = await db.fetch(`sayac_${message.guild.id}.sayı`)
  let sayacs;
  
  if (sayacS === null) sayacs = `${client.emojis.get(client.emoji.kapalı)} !sayaç-ayarla`
  else sayacs = `${client.emojis.get(client.emoji.açık)} ${sayacS}`
  let sayacK = await db.fetch(`sayac_${message.guild.id}.kanal`)
  let sayack;
  
  if (sayacK === null) sayack = `${client.emojis.get(client.emoji.kapalı)} !sayaç-ayarla`
  else sayack = `${client.emojis.get(client.emoji.açık)} <#${sayacK}>`
  // </> :Sayaç Sayı/Kanalı: <\>
  // </> :Doğrulama Sistemi: <\>
  let dogS = await db.fetch(`dogrulamaA_${message.guild.id}`)
  let dogs;
  
  if (dogS === null) dogs = `${client.emojis.get(client.emoji.kapalı)} !doğrulama aç`
  if (dogS === "Aktif") dogs = `${client.emojis.get(client.emoji.açık)} !doğrulama kapat`
  // </> :Doğrulama Sistemi: <\>
  // </> :Doğrulama Kanalı: <\>
  let dogK = await db.fetch(`dogrulamaK_${message.guild.id}`)
  let dogk;
  
  if (dogK === null) dogk = `${client.emojis.get(client.emoji.kapalı)} !doğrulama-kanal`
  else dogk = `${client.emojis.get(client.emoji.açık)} <#${dogK}>`
  // </> :Doğrulama Kanalı: <\>
  // </> :Doğrulama Rolü: <\>
  let dogR = await db.fetch(`dogrulamaR_${message.guild.id}`)
  let dogr;
  
  if (dogR === null) dogr = `${client.emojis.get(client.emoji.kapalı)} !doğrulama-rol`
  else dogr = `${client.emojis.get(client.emoji.açık)} <@&${dogR}>`
  // </> :Doğrulama Rolü: <\>
  // </> :Emoji Kayıt Rolü: <\>
  let emR = await db.fetch(`emojiR_${message.guild.id}`)
  let emr;
  
  if (emR === null) emr = `${client.emojis.get(client.emoji.kapalı)} !emoji-kayıt-rol`
  else emr = `${client.emojis.get(client.emoji.açık)} <@&${emR}>`
  // </> :Emoji Kayıt Rolü: <\>
  // </> :Emoji Kayıt Kanalı: <\>
  let emK = await db.fetch(`emojiK_${message.guild.id}`)
  let emk;
  
  if (emK === null) emk = `${client.emojis.get(client.emoji.kapalı)} !emoji-kayıt-kanal`
  else emk = `${client.emojis.get(client.emoji.açık)} <#${emK}>`
  // </> :Emoji Kayıt Kanalı: <\>
  // </> :Ototag Sistemi: <\>
  let otoT = await db.fetch(`tag_${message.guild.id}.tag`)
  let otot;
  
  if (otoT === null) otot = `${client.emojis.get(client.emoji.kapalı)} !ototag-ayarla`
  else otot = `${client.emojis.get(client.emoji.açık)} \`${otoT}\``
  // </> :Ototag Sistemi: <\>
  // </> :Ototag Kanal: <\>
  let otoK = await db.fetch(`tag_${message.guild.id}.kanal`)
  let otok;
  
  if (otoK === null) otok = `${client.emojis.get(client.emoji.kapalı)} !ototag-ayarla`
  else otok = `${client.emojis.get(client.emoji.açık)} <#${otoK}>`
  // </> :Ototag Kanal: <\>
  // </> :Log Kanalı: <\>
  let logK = await db.fetch(`logK_${message.guild.id}`)
  let log;
  
  if (logK === null) log = `${client.emojis.get(client.emoji.kapalı)} !log-ayarla`
  else log = `${client.emojis.get(client.emoji.açık)} <#${logK}>`
  
  // </> :Log Kanalı: <\>
// </>  :Otorol: </>
let otorol_rol = await db.fetch(`otorol_${message.guild.id}.rol`);
let otorol;

if (otorol_rol == null) otorol = `${client.emojis.get(client.emoji.kapalı)} !otorol-ayarla`
else otorol = `${client.emojis.get(client.emoji.açık)} <@&${otorol_rol}>`

let otorol_kanal = await db.fetch(`otorol_${message.guild.id}.kanal`)
let otorolK;

if (otorol_kanal === null) otorolK = `${client.emojis.get(client.emoji.kapalı)} !otorol-ayarla`
else otorolK = `${client.emojis.get(client.emoji.açık)} <#${otorol_kanal}>`
// </>  :Otorol: </>

  const embed = new Discord.RichEmbed()
  .setAuthor(`${message.guild.name} - Sunucu Ayarları`, `https://cdn.discordapp.com/emojis/604028154499170314.png?v=1`)
  .setDescription(`- Herhangi bir ayarı sıfırlamak için \`!ayarlar sıfırla ayarisim\` şeklinde sıfırlayabilirsiniz.`)
  //.setThumbnail(message.guild.iconURL)
  .setColor(client.ayarlar.renk)
  .addField(`**Prefix :**`, pre, true)
  .addField(`**Küfür Engel :**`, kufur,true)
  .addField(`**Reklam Engel :**`, reklam, true)
  .addField(`**Büyük Harf Engel :**`, buyukharf, true)
  .addField(`**Hg Bb Kanalı :**`, hgbb, true)
  .addField(`**Otorol :**`, otorol, true)
  .addField(`**Otorol Kanalı :**`, otorolK, true)
  .addField(`**Ototag :**`, otot, true)
  .addField(`**Ototag Kanalı :**`, otok, true)
  .addField(`**Güvenlik Kanalı :**`, guvenlik, true)
  .addField(`**Sayaç Sayı :**`, sayacs, true)
  .addField(`**Sayaç Kanal :**`, sayack, true)
  .addField(`**Doğrulama Sistemi :**`, dogs, true)
  .addField(`**Doğrulama Kanalı :**`, dogk, true)
  .addField(`**Doğrulama Rolü :**`, dogr, true)
  .addField(`**Emoji Kayıt Rolü :**`, emr, true)
  .addField(`**Emoji Kayıt Kanalı :**`, emk, true)
  .addField(`**Log Kanalı :**`, log, true)
   message.channel.send(embed)
}
exports.conf = {
  guildOnly : true,
  enabled : true,
  aliases : [],
  permLvl : 3,
  kategori : `Ayarlar`
}
exports.help = {
  name : "ayarlar",
  description : "Sunucudaki ayarları gösterir.",
  usage : "ayarlar"
}