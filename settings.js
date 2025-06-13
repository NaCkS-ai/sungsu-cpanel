const fs = require('fs');
const chalk = require('chalk');
const { version } = require("./package.json")

// Settings Bot 
global.owner = '27823374457'
global.versi = version
global.namaOwner = "Mr sung"
global.packname = 'Bot WhatsApp By KyzzX Offc'
global.botname = 'KyzzX'
global.botname2 = 'sungsu-cpanel'
global.tempatDB = 'database.json' // Jangan ubah
global.pairing_code = true // Jangan ubah

// Settings Link / Tautan
global.linkOwner = "https://wa.me/27823374457"
global.linkGrup = "https://chat.whatsapp.com/KwAcndFrSQtH1mXzYkJ5SD"

// Delay Jpm & Pushctc || 1000 = 1detik
global.delayJpm = 3000
global.delayPushkontak = 6000

// Settings Channel / Saluran
global.linkSaluran = "https://whatsapp.com/channel/0029VbA6MSYJUM2TVOzCSb2A"
global.idSaluran = "12036339843005533@newsletter"
global.namaSaluran = "ᴍᴀʟᴠɪɴ ᴋɪɴɢ ᴛᴇᴄʜ🫟"
global.pinH2H = "-"
global.passwordH2H = "-"
global.merchantIdOrderKuota = "OK1934316"
global.apiOrderKuota = "445145517394876141934316OKCT8C7F98A06B1D83E1FCEF98243126C38F"
global.qrisOrderKuota = "00020101021126670016COM.NOBUBANK.WWW01189360050300000879140214500181052837730303UMI51440014ID.CO.QRIS.WWW0215ID20243329426790303UMI5204541153033605802ID5919ALI STORE OK19343166012TAPANULI SEL61052273262070703A016304DD5B"

// Settings Api Digital Ocean
global.apiDigitalOcean = "-"

// Settings Api Digital Ocean
global.apiSimpelBot = "simplebotz85"


// Settings All Payment
global.shopepay = "Tidak Tersedia"
global.dana = "083806318718"
global.ovo = "Tidak Tersedia"
global.gopay = "Tidak Tersedia"

// Settings Image Url
global.image = {
menu: "https://files.catbox.moe/l0wexq.jpg", 
reply: "https://files.catbox.moe/l0wexq.jpg", 
logo: "https://files.catbox.moe/l0wexq.jpg", 
dana: "https://img102.pixhost.to/images/79/556578147_biyu.jpg", 
ovo: "https://img102.pixhost.to/images/79/556578147_biyu.jpg", 
gopay: "https://img102.pixhost.to/images/79/556578147_biyu.jpg", 
qris: "https://files.catbox.moe/l0wexq.jpg"
}

// Settings Api Panel Pterodactyl
global.egg = "15" // Egg ID
global.nestid = "5" // nest ID
global.loc = "1" // Location ID
global.domain = "https://kyzz-pengen-balikan.sevs.my.id"
global.apikey = "ptla_iJx8TokTBvFG6hHkITUcbvTT88P7lf8Hbfet5hPMxAS" //ptla
global.capikey = "ptlc_Qmmxs0v4pFPER4lDVFuJTKUYUJr7tbc8WR7ZFpvA7fK" //ptlc

// Settings Api Panel Pterodactyl Server 2
global.eggV2 = "15" // Egg ID
global.nestidV2 = "5" // nest ID
global.locV2 = "1" // Location ID
global.domainV2 = "https://-"
global.apikeyV2 = "-" //ptla
global.capikeyV2 = "-" //ptlc

// Settings Api Subdomain
global.subdomain = {
"kang-panel.tech": {
"zone": "28baf36eb9ced4be271bdb6ea3320f41", 
"apitoken": "MBiKuyoS0e0zJc8LKUjSXyLmgAf1IV9u86FJmVny"
}, 
"buyer-vps.site": {
"zone": "354e1c784bed5a8d93f458ec1ff86f35", 
"apitoken": "rzOLIO1c-Me1X0owStLFUZ0ggfs_cxHDab2A7krF"
}, 
"shopserver.us.kg": {
"zone": "54ca38e266bfdf2dcdb7f51fd79c2db5", 
"apitoken": "4qOupI-Of-6yNrBaeS1-H0KySuKCd0wS-x0P5XQ4"
},
"tokopanel.software": {
"zone": "cc9638d4c289130ba070484625e6aefa", 
"apitoken": "bcAP5z3gHvmQTlQ59qNB9BWmf0JiGt0C99FU6SXs"
},
"digitalserver.us.kg": {
"zone": "df13e6e4faa4de9edaeb8e1f05cf1a36", 
"apitoken": "HXVf4soYFM3iiOewHZ6tk6LEnG9f7m7CVhU0EoVz"
},
"pteroserver.us.kg": {
"zone": "f693559a94aebc553a68c27a3ffe3b55", 
"apitoken": "ZPAXx7CL51PtbGweL2pE3BsI3x0hgTgLuy56iXuo"
},
"cloud-shopp.biz.id": {
zone: "365f57282cbea3a6d5a738f107df244e",
apitoken: "hZKxD6afDLF-wsg1qVA-qbDK_h8lBE4NtqnVZPP8"
}
}

// Message Command 
global.mess = {
	owner: "* *Akses Ditolak*\nFitur ini hanya untuk owner bot!",
	admin: "* *Akses Ditolak*\nFitur ini hanya untuk admin grup!",
	botAdmin: "* *Akses Ditolak*\nFitur ini hanya untuk ketika bot menjadi admin!",
	group: "* *Akses Ditolak*\nFitur ini hanya untuk dalam grup!",
	private: "* *Akses Ditolak*\nFitur ini hanya untuk dalam private chat!",
	prem: "* *Akses Ditolak*\nFitur ini hanya untuk user premium!",
	wait: 'Loading...',
	error: 'Error!',
	done: 'Done'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
