/*
› Create By Radit
› Base Ori Radit

🔥 KALAU MAU RENAME TARO CREDITS GUA : 𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘 */

const fs = require('fs')
const chalk = require('chalk')
//=================================================//
global.autorecording = true //status auto merekam ( auto record )
global.autoketik = true //status auto mengetik (auto typing)
global.available = true //status online (online)
global.autred = false
//—————「 Set Random Image Menu 」—————//
//gausah di apa² in!
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
//=================================================//
//—————「 Set Kebutuhan Button & Kontak 」—————//
//ubah aja kalau ada yang gapunya gsh di hps anggap aja credits :), note tanda ' gausah di hapus!
global.youtube = '_GA ADA YT BANG:V'
global.ig = 'https://www.instagram.com/saifulsaiful8475'
global.mygc = 'https://chat.whatsapp.com/ECeHsVtDpNF7NgzDLMAzcM'
global.myweb = '_htttps matamu! mau gw sendbug?'
global.linkgrupss = "https://chat.whatsapp.com/ECeHsVtDpNF7NgzDLMAzcM"
global.linkpro = 'mailto:support@whatsapp.com?subject=Deactivate%20My%20Account%20Number&body=Please%20Deactivate%20The%20My%20Account%20Number%20%2B62XXXXXXXX%20Immediately%20Because%20The%20Number%20Has%20Been%20Lost'
global.linkun = 'mailto:support@whatsapp.com?subject=Account%20Locked&body=Good%20Afternoon%20I%20Have%20A%20Problem%20Account%20Is%20Locked,%20I%20Spam%20Nothing%20But%20My%20Account%20Suddenly%20Locked,%20Please%20Reactivate%20This%20Number:%20[+62xxxxxx]'
global.email = 'saiful@gmail.com'
global.ntidel = ['120363041515922784@g.us']
global.wlcm = []
global.wlcmm = []
global.ntnsfw = []
global.region = 'Indonesia'
global.f1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.f2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.f3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.f4 = 'application/zip'
global.f5 = 'application/pdf'
global.f6 = 'application/vnd.android.package-archive'
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'yudis kelaz' //ubah jadi nama mu, note tanda ' gausah di hapus!
global.botname = 'Bug  - Ｃｒａｓｈ' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.footer = 'Bug-ya-bang?' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
// Other
global.owner = ['628211339583'] 
global.premium = ['628211339583']
global.packname = 'yudis kelaz'
global.ownerr = ['yudis anjaz']
global.author = 'MR YUDIS'
global.sessionName = './sessionye/paktzy'
global.prefa = ['','!','.',',','🐤','🗿']
global.sp = '⭔'
global.mess = {
nsfw: '⚠️ _*Fitur NSFW tidak diaktifkan, chat admin grup supaya diaktifkan*_',
wait: '⏳ _*Loading... Sabar Wibu*_',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
//=================================================//
global.limitawal = {
    premium: "Infinity",
    free: 100
}
   global.rpg = {
   darahawal: 100,
   besiawal: 5,
   goldawal: 1,
   emeraldawal: 1,
   umpanawal: 1,
   potionawal: 1
}
//=================================================//
global.thumb = { url: 'https://telegra.ph/file/842cc1a7658a1c2b94c0c.jpg' }
global.visoka = { url: 'https://a.uguu.se/fVFNCwix.mp4' }
global.menuimg = { url: 'https://a.uguu.se/fVFNCwix.mp4' }
global.zy = { url: 'https://telegra.ph/file/842cc1a7658a1c2b94c0c.jpg' }
global.log0 = fs.readFileSync("./basetzy/gambarnye/thezyren.jpg")
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
