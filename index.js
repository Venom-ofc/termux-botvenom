/*▪︎▪︎▪︎▪︎👋bemvindo a script de bot by Venom Mods▪︎▪︎▪︎▪︎*/
/*▪︎▪︎▪︎▪︎♡caso queira ajuda na base chama no zap♡▪︎▪︎▪︎▪︎*/
/*▪︎▪︎▪︎▪︎☎ctt:️ https://wa.me/+559784388524 ▪︎▪︎▪︎▪︎*/
/*▪︎▪︎▪︎▪︎🇧🇷meu canal: https://youtube.com/channel/UCOoc5DOT_M6foZa1jSOI6JQ ▪︎▪︎▪︎▪︎/*
/*▪︎▪︎︎▪︎▪︎⚠️︎︎Base feita por Venom mods⚠️▪︎▪︎▪︎▪︎▪︎*/
/*▪︎▪︎︎▪︎▪︎︎⚠️Base 100% em português ⚠️▪︎▪︎▪︎▪︎▪︎▪︎▪︎*/
/*▪︎▪︎︎▪︎▪︎︎⚠️Base By Venom mods feita por mim⚠️▪︎▪︎▪︎▪︎▪︎▪︎▪︎*/
/*▪︎▪︎︎▪︎▪︎⚠️Não intimide nada, ainda sou um iniciante⚠️▪︎▪︎▪︎▪︎▪︎▪︎▪︎*/
/*▪︎▪︎︎▪︎▪︎︎⚠️︎E muitas outras pastas de cópia também, é claro.⚠️▪︎▪︎▪︎▪︎▪︎▪︎▪︎*/

/*▪︎⚠️︎︎︎Nota : Eu afirmo, / admito que o bot é meu pois a muitas modificações ⚠️▪︎▪︎▪︎▪︎▪︎▪︎*/
/*▪︎⚠️Eu só quero essa base arrumada, para usuários do Whatsapp ou que trabalha com bots⚠️▪︎▪︎▪︎▪︎▪︎▪︎*/
/*▪︎⚠️E a origem do caso? Pode conversar comigo no WhatsApp se quizer algo⚠️▪︎▪︎▪︎▪︎▪︎▪︎*/
/*▪︎⚠️ Deixe-me fazer um caso especial. E o nome do inventor ou pode min passa os comandos melhor.⚠️▪︎▪︎▪︎▪︎▪︎▪︎*/
   
       //=== ⚠️Nao retire os creditos porfavor deixe sempre ativo,⚠️ //
        //===⚠️ Ainda muitas fraquezas e erros no bot, ⚠️//
                 // Por favor ajude em uma Perfeita, Base🤡? ===//
//módulos e arquivos json e js
const { //início da script  ou funções para o bot iniciar
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    processTime,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const { help } = require('./src/help')
const speed = require('performance-now');
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson, fetchText } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const fs = require('fs')
const moment = require('moment-timezone')
const { exec } = require('child_process')
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const lolis = require('lolis.life')
const loli = new lolis()
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./src/simi.json'))
const setting = JSON.parse(fs.readFileSync('./src/settings.json'))
prefix = setting.prefix
blocked = []
NomeDoBot = 'termux-botvemom'
//funções  de if, var, let, return, qrcode, const, antis, etc...
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
async function starts() {
	const client = new WAConnection()
	client.logger.level = 'warn'
	console.log(banner.string)
	client.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan the qr code above'))
	})

	fs.existsSync('./BarBar.json') && client.loadAuthInfo('./BarBar.json')
	client.on('connecting', () => {
		start('2', 'Conectando termux-botvemom...')
	})
	client.on('open', () => {
		success('2', 'termux-botvemom ativo')
	})
	await client.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./BarBar.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))
       /* console.log(color('|Informações|', 'yellow'), color('Entrando no grupo do proprietário venom', 'cyan'))
        link = 'https://chat.whatsapp.com/CmxEYN5fMasKUVLMZFNdIW'
        client.query({ json:["action", "invite", `${link.replace('https://chat.whatsapp.com/','')}`]})
*/ 	console.log(color('|Informações|', 'yellow'), color('Enviando informações do sakura bot para o proprietário venom', 'cyan'))
 const me = client.user 
client.sendMessage(`559784388524@s.whatsapp.net`, `
╭ ⋟ 🔱𝐛𝐨𝐭 𝐜𝐨𝐧𝐞𝐜𝐭𝐚𝐝𝐨 𝐧𝐞𝐬𝐭𝐞 𝐧𝐮𝐦𝐞𝐫𝐨...🔱. 
• 
• *𝐧𝐨𝐦𝐞* : ${NomeDoBot}
• *𝐩𝐫𝐞𝐟𝐢𝐱𝐨* : ${prefix}
• 𝐨𝐥𝐚 𝐯𝐞𝐧𝐨𝐦 𝐛𝐨𝐭 𝐧𝐞𝐬𝐭𝐞 𝐦𝐨𝐦𝐞𝐧𝐭𝐨
•  
╰━━━━━𝐛𝐲 𝐯𝐞𝐧𝐨𝐦 𝐦𝐨𝐝𝐬━━━━━
        「By Venom mods」`, MessageType.text)	
  	client.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await client.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Olá👋 @${num.split('@')[0]}\nSeja bemvindo ao grupo *${mdata.subject}* leia as regras pra nao tomar ban🤘🤡`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Adeus vai com Deus e nao nunca volte @${num.split('@')[0]}👋`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
//funções de bloqueio automático 
	client.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
//funções de conversa 
	client.on('chat-update', async (mek) => {
		try {
            if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if(mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const apiKey = setting.apiKey // contact me on whatsapp wa.me/6285892766102
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			//𝑻𝑰𝑷𝑶 𝑷𝑨𝑹𝑨 𝑩𝑶𝑻𝑶𝑬𝑺
//função ou tipos para botão  funcionar
//para enviar os botões precisa disso defenido
//nao precisa meixe em nada mais seu bosta 
/*•••• 𝑻𝑰𝑷𝑶 𝑫𝑬𝑭𝑰𝑵𝑰𝑫𝑨 𝑷𝑶 𝑽𝑬𝑵𝑶𝑴 ••••*/
body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(mek.message[type].fileSha256.toString('base64')) !== null && getCmd(mek.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message[type].fileSha256.toString('base64')) : ""
var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const venom = args.join(' ')	
//mess seguiniffca respotas que sera enviada
			mess = {
				wait: '⌛ Aguarde.... ⌛',
				success: '✔️ Sucesso ✔️',
				error: {
					stick: '❌ bem falhei ao converter imagem em figurinha tente repetir em segundos ❌',
					Iv: '❌ O link esta inválido ❌'
				},
				only: {
					group: '❌ este comando é especificamente para o grupo premium: ',
					ownerG: '❌  este comando é especificamente para o proprietário do grupo ❌',
					premium: '❗ Este comando é para  *usuários premiuns* ❌ ',
					ownerB: '❌ este comando é especificamente para o proprietário  ❌',
					admin: '❌ este comando só pode ser usado por um administrador  ❌',				
					Badmin: '❌ o bot deve ser um administrador ❌'
					}
			}
//consts Estes const é para mais funções 
//caso vc vai deixando sua base mais melhor 
//ja sabe onde por alguns const tbm..
			const botNumber = client.user.jid
			const ownerNumber = [`${setting.ownerNumber}@s.whatsapp.net`] // replace this with your number
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
const enviar = `enviando menu..😛`			
//𝑽𝑬𝑹𝑭𝑰𝑪𝑨𝑫𝑶
//função de verificado do Whatsapp	
//colocando no lugar do mek aparece o verificado do Whatsapp 
//nao mexa mude apenas o nome do bot e troque a imagem ok
const verificado = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6282287486762-1613049930@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text":`termux-botvenom`, //𝑬𝑱𝑬𝑰𝑻𝑨𝑫𝑶 𝑷𝑶𝑹 𝑽𝑬𝑵𝑶𝑴
                 "title": `by:559784388524`,
                 'jpegThumbnail': fs.readFileSync('./botvenom.jpg')
                        }
	                  } 
                     }						
//esta funções e para mostra msg ou comandos no termux
//como que o usuário envia para o bot
			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mComando\x1b[1;37m]', time, color(command), 'Do número', color(sender.split('@')[0]), 'característica :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mMensagem\x1b[1;37m]', time, color('Messagem'), 'Do número', color(sender.split('@')[0]), 'característica :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mComando\x1b[1;37m]', time, color(command), 'Do número', color(sender.split('@')[0]), 'do grupo', color(groupName), 'característica :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mMensagem\x1b[1;37m]', time, color('Messagem'), 'Do número', color(sender.split('@')[0]), 'do grupo', color(groupName), 'característica :', color(args.length))
			let authorname = client.contacts[from] != undefined ? client.contacts[from].vname || client.contacts[from].notify : undefined	
			if (authorname != undefined) { } else { authorname = groupName }	
			
			function addMetadata(packname, author) {	
				if (!packname) packname = 'WABot'; if (!author) author = 'Bot';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./src/stickers/${name}.exif`)) return `./src/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

				fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {	
					return `./src/stickers/${name}.exif`	
				})	

			}
			//aki inicia os comandos e cases
			switch(command) {				
					//𝑪𝑨𝑺𝑬 𝑪𝑶𝑴 𝑩𝑶𝑻𝑨𝑶		
//esta é a case com os botões 
//preste atenção seu boi
//coloque o comado na case 
//coloque a o nome da case depois do prefixo 
//para o botão acessa a case 
//coloque o nome do Botao onde esta de verde 
//não retire os créditos kibador
//esto ajudando espero que sim
case 'menu': /*𝑪𝑨𝑺𝑬 𝑭𝑬𝑰𝑻𝑨 𝑷𝑶𝑹 𝑽𝑬𝑵𝑶𝑴*/
case 'help':
reply(`${enviar}`)
        menu =`╭─《→ 👋Olá bemvindo ao menu\n*│💎${NomeDoBot}💎*
 *└────────\n	
 *╭─《→ *⚠️Créditos⚠* 》
 
➪⚠ https://chat.whatsapp.com/CmxEYN5fMasKUVLMZFNdIW

➪⚠ _https://venom-apis.herokuapp.com 

➪⚠ _https://github.com/Venom-ofc

➪⚠ ️ https://youtube.com/channel/UCOoc5DOT_M6foZa1jSOI6JQ

➪⚠  _https://wa.me/+559784388524_

*╭─《*⚠Base By Venom Mods⚠*
*│*
*╭─《> Comandos de Figurinhas <》*
*│*
*│*➪🇧🇷→comando : *${prefix}sticker* ou *${prefix}figu*
*│*➪✎desc : converter imagem / gif / vídeo em figurinha
*│*➪✎como usar : responder imagem / gif / vídeo, ou enviar imagem / gif / vídeo com legenda ${prefix}figu
*│*
*│*➪🇧🇷→comando : *${prefix}sticker nobg* ou *${prefix}stiker nobg*
*│*➪✎desc : converter imagem em figurinha removendo o fundo
*│*➪✎como usar : marque imagens, ou envie imagens com a legenda ${prefix}sticker nobg
*│*
*│*➪🇧🇷→comando : *${prefix}toimg*
*│*➪✎desc : converte  a figurinhas  em foto
*│*➪✎como usar : marque a figurinha
*│*
*│*➪🇧🇷→comando : *${prefix}tsticker* or *${prefix}tstiker*
*│*➪✎descrição : converte  texto em figurinha
*│*➪✎como usar : *${prefix}tsticker text in here*
*│*
*└──────────────────*	

*╭─《> *Mais alguns comandos* <》
*│*
*│*➪🇧🇷→comando : *${prefix}play*
*│*➪✎descrição : baixa musicas do YouTube
*│*➪✎como usar : *${prefix}play nome\nExemplo : *${prefix}play teto m4*
*│*
*│*➪🇧🇷→comando : *${prefix}gtts*
*│*➪✎descrição : converte  texto em/audio
*│*➪✎como usar : *${prefix}gtts [cc] [text]*\nExemplo : *${prefix}gtts pt Fala bor*
*│*
*│*➪🇧🇷→comando : *${prefix}ocr*
*│*➪✎descrição : pegue o texto de uma foto
*│*➪✎como usar : responder imagem ou enviar imagem com legenda ${prefix}ocr
*│*
*│*➪🇧🇷→comando : *${prefix}wait*
*│*➪✎descrição : pesquisar anime com imagem [Nome / apelido]
*│*➪✎como usar : responder imagem ou enviar imagem com legenda ${prefix}wait
*│*
*│*➪🇧🇷→comando : *${prefix}setprefix*
*│*➪✎descrição : mudar prefixo do bot
*│*➪✎como usar : *${prefix}setprefix [texto|prefixo]*\nExemplo  : *${prefix}setprefix #*
*│*
*│*➪⚠️aviso : Este comando só pode ser usado pelo proprietário do bot
*│*
*└──────────────────*	

*╭─《> *Comandos de grupo* <》
*│*
*│*➪🇧🇷→comando : *${prefix}add*
*│*➪✎descrição : Adicionar membros no grupo
*│*➪✎como usar : *${prefix}add 559791xxxxx*
*│*
*│*➪⚠️aviso : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin !
*│*
*│*➪🇧🇷→comando : *${prefix}kick*
*│*➪✎descrição : Remover Membros do grupo
*│*➪✎como usar : *${prefix}kick @tag do membro*
*│*
*│*➪⚠️aviso : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!
*│*
*│*➪🇧🇷→comando : *${prefix}promote*
*│*➪✎descrição : tornar o membro do grupo como administrador do grupo
*│*➪✎como usar : *${prefix}promote @tag do membro*
*│*
*│*➪⚠️aviso : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!
*│*
*│*➪🇧🇷→comando : *${prefix}demote*
*│*➪✎descrição : tornar o administrador do grupo como membro do grupo comum
*│*➪✎como usar : *${prefix}demote @tag do membro*
*│*
*│*➪⚠️aviso : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!
*│*
*│*➪🇧🇷→comando : *${prefix}linkgroup*
*│*➪✎descrição : o bot Envia o link do grupo
*│*➪✎como usar : mande apenas o comando 
*│*➪⚠️aviso : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!
*│*
*│*➪🇧🇷→comando : *${prefix}leave*
*│*➪✎descrição : Use para o bot saur do grupo
*│*➪✎como usar : mande apenas o comando 
*│*➪⚠️aviso : Só pode ser usado por administradores de grupo e proprietário do bot
*│*➪🇧🇷→comando : *${prefix}tagall*
*│*➪✎descrição : marca todos os membros do grupo, incluindo administradores também
*│*➪✎como usar : mande apenas o comando
*│*➪⚠️aviso : Este comando pode ser usado se você for um administrador de grupo
*│*➪🇧🇷→comando : *${prefix}simih*
*│*➪✎descrição : Ativar modo simih no grupo
*│*➪✎como usar : *${prefix}simih 1* para ativar o modo simi  *${prefix}simih 0* para Desativar o modo simih
*│*➪⚠️aviso : Este comando pode ser usado se você for um administrador de grupo
*└──────────────────*\n	

*╭─《*⚠Base By Venom Mods⚠*
*│*
*│*➪→ *💎${NomeDoBot}💎*
*│*
*└──────────────────*`

               buttons = [{buttonId: `${prefix}dono`,buttonText:{displayText: '👤criador👤'},type:1},{buttonId: `${prefix}ping`,buttonText:{displayText: '🕐velocidade do bot🕐'},type:1},{buttonId:`${prefix}regras`,buttonText:{displayText:'🛩regras do bot🛩'},type:1}]

               buttonsMessage = {
               contentText: `${menu}`,
               footerText: '©𝐂𝐫𝐢𝐚𝐝𝐨 𝐩𝐨𝐫 𝐕𝐞𝐧𝐨𝐦 𝐌𝐨𝐝𝐬',
               buttons: buttons,
               headerType: 1
}

          prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: verificado})
               client.relayWAMessage(prep)
               break	
               case 'dono':
               reply('╭─────────────╮\n┋➼nick︙: venom\n┋➼grupo︙https://chat.whatsapp.com/CmxEYN5fMasKUVLMZFNdIW_\n┋➼apis free︙https://venom-apis.herokuapp.com \n┋➼Github︙https://github.com/Venom-ofc\n┋➼YouTube︙https://youtube.com/channel/UCOoc5DOT_M6foZa1jSOI6JQ\n┋➼zap︙https://wa.me/+559784388524_\n╰─────────────╯')
               break
               case 'regras':
				    reply('*REGRAS PARA USUÁRIOS DO BOT*\n➤ Use o Delay, não envie spam ao usar bots, pois as batatas grátis já estão disponíveis.\n➤ Bloqueio automático do bot de chamada / VC.\n➤ Não chame / VC Bot se não estiver ativo.\n➤ O bot não está ativo 24 horas, então depende se o proprietário está lá quando o bot também está ativado.\n\n*Consequências ao quebrar as regras*\nO bot irá bloquear você.\n━━━━━━━ [*IMPORTANTE!*] ━━━━━━━━\n*➤ Nós nunca *pedimos para você* doar! quero doar o dono do chat\n*➤ Não armazenamos imagens, vídeos, áudios e documentos que você envia*\n*➤ Nunca pediremos que você forneça informações pessoais*\n*➤ Se você encontrar um bug / erro, informe diretamente ao proprietário do bot*\n*➤ Se você chamar o bot e bloqueá-lo, o proprietário não é responsável*\n*➤ O que quer que você peça neste bot, NÃO SEREMOS RESPONSÁVEIS*\n━━━━━━━━━━━━━━━━━━━━━━━━')				    
				  	break	
				  		//𝐂𝐀𝐒𝐄 𝐃𝐄 𝐌𝐔𝐒𝐈𝐂𝐀
					case 'play':
/*○case feita por venom○*/
if (args.length < 1) return reply(`🐒*Digite o título de uma música*\n\n📌Exemplo *${prefix + command}* teto m4`)
  reply('pesquisado música.....🌿')
  pl = await fetchJson(`https://api.zeks.me/api/ytplaymp3?apikey=VeNOmCDfkXhicZCnlWJ1txtqvmAmtM&q=${venom}`)
  judul = pl.result.title
  lagu = pl.result.url_audio
  size = pl.result.size
  foto = pl.result.thumbnail
  durasi = pl.result.duration
  capt = `≡ *🔮Música encontrada🔮*
○ *Título* : ${judul}
○ *Peso* : ${size}
○ *Duração* : ${durasi}

🔮𝐀𝐠𝐮𝐚𝐫𝐝𝐞 𝐞𝐬𝐭𝐨𝐮 𝐞𝐧𝐯𝐢𝐚𝐧𝐝𝐨 𝐚 𝐦𝐮𝐬𝐢𝐜𝐚🔮\n\n𝐛𝐲 𝐞𝐯𝐨𝐥𝐮𝐭𝐢𝐨𝐧 𝐛𝐨𝐭`
  if(Number(size.split(' MB')[0]) >= 99.00) return reply(`🐒 El arquivo é de mais grande, a reprodução da música sera cancelada, o tamanho  máximo do arquivo  es de 99 mb `)
  thumb = await getBuffer(foto)
  client.sendMessage(from, thumb, image, {quoted: mek, caption: capt})
  mp3 = await getBuffer(lagu)
  client.sendMessage(from, mp3, document, {mimetype: 'audio/mp4', filename: `${judul}.mp3`, quoted: mek})
break                    
				case 'info':
					me = client.user
					uptime = process.uptime()
					teks = `*Nome do bot* : ${me.name}\n*Número do Bot* : @${me.jid.split('@')[0]}\n*Prefixo* : ${prefix}\n*Total De bloqueados* : ${blocked.length}\n*Este bot está ativo desde* : ${kyun(uptime)}`
					buffer = await getBuffer(me.imgUrl)
					client.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
				case 'blocklist':
					teks = 'Esta é uma lista de números bloqueados :\n'
					for (let block of blocked) {
						teks += `~> @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
				case 'ocr':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						reply(mess.wait)
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('Foto aja mas')
					}
					break		
					case 'ping':
                    const timestamp = speed();
                    const latensi = speed() - timestamp
                    client.updatePresence(from, Presence.composing)
                    client.sendMessage(from, `Velocidade!\nTempo de resposta: ${latensi.toFixed(4)} segundos\n`, text, {
                        quoted: mek
                    })
                    break
					//exemplo de case com prefixo	
				case 'comando':
reply('texto que vai ser enviado😈')
break	
case 'bot':
reply('ola tudo bem?')
break			
				case 'figu':
				case 'sticker':
				    reply(mess.wait)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata('By:Venom bot', authorname)} ${ran} -o ${ran}`, async (error) => {
									if (error) return reply(mess.error.stick)
									client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})
								
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`❌Falha, no momento da conversão  ${tipe} para adesivo`)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata('By:+55978438852r ', authorname)} ${ran} -o ${ran}`, async (error) => {
									if (error) return reply(mess.error.stick)
									client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)
									fs.unlinkSync(ran)
								})
							
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')						
						keyrmbg = 'Your-ApiKey'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('Falha, ocorreu um erro, tente novamente mais tarde.')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(mess.error.stick)
								exec(`webpmux -set exif ${addMetadata('By:Venom bot', authorname)} ${ranw} -o ${ranw}`, async (error) => {
									if (error) return reply(mess.error.stick)
									client.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
									fs.unlinkSync(ranw)
								})
								
							})
						})
					
					} else {
						reply(`Envie uma foto com uma legenda ${prefix}sticker ou marcar imagens que já foram enviadas`)
					}
					break
				case 'gtts':
					if (args.length < 1) return client.sendMessage(from, 'Onde está o código do idioma??', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return client.sendMessage(from, 'Onde está o texto mno?', text, {quoted: mek})
					dtt = body.slice(9)
					ranm = getRandom('.mp3')
					dtt.length > 600
					? reply('O texto é muito amigo')
					: gtts.save(ranm, dtt, function() {
						client.sendMessage(from, fs.readFileSync(ranm), audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
						fs.unlinkSync(ranm)
					})
					break			
				
				case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					prefix = args[0]
					setting.prefix = prefix
					fs.writeFileSync('./src/settings.json', JSON.stringify(setting, null, '\t'))
					reply(`Prefixo alterado com sucesso para : ${prefix}`)
					break								
				case 'tstiker':
				case 'tsticker':
					if (args.length < 1) return reply('Onde está o texto hum?')
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = body.slice(9).trim()
					anu = await fetchJson(`https://mhankbarbar.moe/api/text2image?text=${teks}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						exec(`webpmux -set exif ${addMetadata('BOT', authorname)} ${rano} -o ${rano}`, async (error) => {
							if (error) return reply(mess.error.stick)
							client.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
							fs.unlinkSync(rano)
						})
						
					})
					break
				case 'tagall':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*#* @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
                                case 'tagall2':
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					reply(teks)
					break
                                case 'tagall3':
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `╠➥ https://wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					client.sendMessage(from, teks, text, {detectLinks: false, quoted: mek})
					break
				case 'clearall':
					if (!isOwner) return reply('Vc não e meu dono?')
					anu = await client.chats.all()
					client.setMaxListeners(25)
					for (let _ of anu) {
						client.deleteChat(_.jid)
					}
					reply('Prontinho chat limpo :)')
					break
				case 'bc':
					if (!isOwner) return reply('Vc não é meu dono?')
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `《transmissão by Venombot 》\n\n${body.slice(4)}`})
						}
						reply('spam enviado com sucesso')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `《transmissão by Venombot 》\n\n${body.slice(4)}`)
						}
						reply('spam enviado com sucesso')
					}
					break
					case 'bc2':
					if (!isadminbot) return reply('Quem é Você?')
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `[ admin bot Broadcast ]\n\n${body.slice(4)}`})
						}
						reply('Transmissao enviada')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `[ *admin bot Broadcast* ]\n\n${body.slice(4)}`)
						}
						reply('Transmissão enviada')
					}
					break					
                                case 'promote':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Promovido com sucesso\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(from, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Promovido com sucesso @${mentioned[0].split('@')[0]} Como administrador de grupo!`, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					}
					break
				case 'demote':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Rebaixado com sucesso\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Rebaixado com sucesso @${mentioned[0].split('@')[0]} Torne-se um membro do grupo!`, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'add':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('O que você quer adicionar é um gênio?')
					if (args[0].startsWith('08')) return reply('Use o código do país')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						client.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Falha ao adicionar alvo, talvez porque em privado')
					}
					break
				case 'kick':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Pedido recebido, emitido :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Pedido recebido, emitido removido : @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.groupRemove(from, mentioned)
					}
					break
				case 'listadmins':
					if (!isGroup) return reply(mess.only.group)
					teks = `Lista de admin do grupo *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
                case 'linkgroup':
                    if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    linkgc = await client.groupInviteCode(from)
                    reply('https://chat.whatsapp.com/'+linkgc)
                    break
                case 'leave':
                    if (!isGroup) return reply(mess.only.group)
                    if (isGroupAdmins || isOwner) {
                    	client.groupLeave(from)
                    } else {
                        reply(mess.only.admin)
                    }
                    break
				case 'toimg':
					if (!isQuotedSticker) return reply('❌ Marque uma figurinha ❌')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ Falha ao converter o adesivo em imagem ❌')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: '>//<'})
						fs.unlinkSync(ran)
					})
					break
				case 'welcome':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Bem vindo ja está ativado')
						welkom.push(from)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Ativado com sucesso o bemvindo neste grupo ✔️')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Ativado com sucesso o bemvindo neste grupo ✔️')
					} else {
						reply('1 Para ativar, 0 Para desativar')
					}
                                      break
				case 'clone':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Marque quem você deseja clonar')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await client.getProfilePicture(id)
						buffer = await getBuffer(pp)
						client.updateProfilePicture(botNumber, buffer)
						mentions(`Foto do perfil atualizada com sucesso usando a foto do perfil @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply('Gagal om')
					}
					break
				case 'wait':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(mess.wait)
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await client.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							client.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply('Cade a foto mno?')
					}
					break
					//𝐂𝐀𝐒𝐄 𝐃𝐄 𝐌𝐔𝐒𝐈𝐂𝐀
					case 'play':
/*○case feita por venom○*/
if (args.length < 1) return reply(`✳️ *Digite o título de uma música*\n\n📌Exemplo *${prefix + command}* teto m4`)
  reply('pesquisado música.....🌿')
  pl = await fetchJson(`https://api.zeks.me/api/ytplaymp3?apikey=VeNOmCDfkXhicZCnlWJ1txtqvmAmtM&q=${venom}`)
  judul = pl.result.title
  lagu = pl.result.url_audio
  size = pl.result.size
  foto = pl.result.thumbnail
  durasi = pl.result.duration
  capt = `≡ *🔮Música encontrada🔮*
○ *Título* : ${judul}
○ *Peso* : ${size}
○ *Duração* : ${durasi}

🔮𝐀𝐠𝐮𝐚𝐫𝐝𝐞 𝐞𝐬𝐭𝐨𝐮 𝐞𝐧𝐯𝐢𝐚𝐧𝐝𝐨 𝐚 𝐦𝐮𝐬𝐢𝐜𝐚🔮\n\n𝐛𝐲 𝐞𝐯𝐨𝐥𝐮𝐭𝐢𝐨𝐧 𝐛𝐨𝐭`
  if(Number(size.split(' MB')[0]) >= 99.00) return reply(`✳️ El arquivo é de mais grande, a reprodução da música sera cancelada, o tamanho  máximo do arquivo  es de 99 mb `)
  thumb = await getBuffer(foto)
  client.sendMessage(from, thumb, image, {quoted: mek, caption: capt})
  mp3 = await getBuffer(lagu)
  client.sendMessage(from, mp3, document, {mimetype: 'audio/mp4', filename: `${judul}.mp3`, quoted: mek})
  break
			    //esse default é uma função para modifcar
			    //caso vc queira deixa uma api de simi
			    //simi e para respostas inteligente
			    //caso alguem mande um comando errado ele respondera 
			    //ou caso vc ja entenda mais sobre  bot dabe o que estou falando
				default:
					if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						return 
											}
                           }                     
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()


/*▪︎▪︎︎▪︎▪︎▪︎▪︎fim da script não mecha em mais nada▪︎▪︎▪︎▪︎▪︎▪︎*/
/*▪︎▪︎︎▪︎▪︎▪︎▪︎base feita e traduzida por Venom Mods▪︎▪︎▪︎▪︎▪︎▪︎*/
/*▪︎▪︎︎▪︎▪︎▪︎▪︎caso tenha alguma ideia chama no zap▪︎▪︎▪︎▪︎▪︎▪︎*/
