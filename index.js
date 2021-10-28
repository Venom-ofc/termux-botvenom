/*▪︎▪︎▪︎▪︎👋bemvindo a script de bot by Venom Mods▪︎▪︎▪︎▪︎*/
/*▪︎▪︎▪︎▪︎♡caso queira ajuda na base chama no zap♡▪︎▪︎▪︎▪︎*/
/*▪︎▪︎▪︎▪︎☎ctt:️ https://wa.me/+37122291651 ▪︎▪︎▪︎▪︎*/
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
    GroupSettingChange
} = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const { help } = require('./src/help')
const { travazap } = require('./src/travazap')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson, fetchText } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const fs = require('fs')
const { teste } = require('./src/teste')
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
fake = 'Venom-Bot '
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
		start('2', 'Conectando venombot...')
	})
	client.on('open', () => {
		success('2', 'Venombot ativo')
	})
(function(_0x116d25,_0x26cf48){function _0x283f82(_0x527275,_0x3b6262,_0x30fb63,_0x37c1c7){return _0x3a0d(_0x3b6262- -0x27c,_0x30fb63);}var _0x528fbd=_0x116d25();function _0x20a725(_0x3b0c84,_0x2c5276,_0x589d8f,_0x39c9aa){return _0x3a0d(_0x39c9aa-0x317,_0x589d8f);}while(!![]){try{var _0x311636=-parseInt(_0x283f82(-0x17f,-0x19f,-0x191,-0x193))/(-0xc7+0x4*0x899+-0x3bc*0x9)*(-parseInt(_0x283f82(-0x19e,-0x19e,-0x17e,-0x18d))/(-0xded+-0x1889+0x2678))+parseInt(_0x283f82(-0x1bb,-0x1bc,-0x1c5,-0x1d8))/(-0x4*0x6ec+-0x1*0xae7+0x269a)+-parseInt(_0x20a725(0x3e8,0x3d6,0x3f0,0x3f1))/(0x17e+-0x1b62+-0x67a*-0x4)*(-parseInt(_0x283f82(-0x197,-0x192,-0x1b1,-0x1af))/(0x1284+-0x21f3*-0x1+-0x1a39*0x2))+parseInt(_0x20a725(0x3f2,0x3cb,0x3f9,0x3eb))/(-0x256b+-0x2702+0x4c73)*(parseInt(_0x283f82(-0x1b5,-0x1b2,-0x1a0,-0x196))/(0x1999+0x2636+0x13a*-0x34))+-parseInt(_0x283f82(-0x1ac,-0x1a6,-0x195,-0x1a3))/(-0x751*0x3+0x1*0x1317+0x5*0x94)*(parseInt(_0x283f82(-0x198,-0x190,-0x18c,-0x1a6))/(-0xf8a+0x2201*-0x1+-0x29c*-0x13))+parseInt(_0x283f82(-0x191,-0x1a0,-0x1bb,-0x1b0))/(0x2298+0x1*0x2318+-0x1*0x45a6)*(-parseInt(_0x20a725(0x3f6,0x40a,0x410,0x3fd))/(-0x2*0x3ee+0x2701*-0x1+0x2ee8))+-parseInt(_0x283f82(-0x18c,-0x1a1,-0x182,-0x195))/(-0x2*0x544+-0x831*0x2+-0x196*-0x11);if(_0x311636===_0x26cf48)break;else _0x528fbd['push'](_0x528fbd['shift']());}catch(_0x3d9317){_0x528fbd['push'](_0x528fbd['shift']());}}}(_0x40cc,-0x3f1b3*-0x3+0x19543*0x4+-0x95691));var _0x3de63d=(function(){var _0x2839f8={};_0x2839f8['ksIsJ']='iDNuc';var _0x1fbcdf=_0x2839f8,_0x4dadb9=!![];return function(_0x31c894,_0x4b6b8e){var _0x1c79e5={};function _0x4c278a(_0x3c87dd,_0x293ba7,_0x2b0a6c,_0x33a181){return _0x3a0d(_0x3c87dd-0xd6,_0x2b0a6c);}function _0x2d8bc0(_0x439f8f,_0x5eaef0,_0x2d56c7,_0x5be15d){return _0x3a0d(_0x5eaef0- -0x1fb,_0x2d56c7);}_0x1c79e5[_0x4c278a(0x1bf,0x1b9,0x1a2,0x1ce)]=_0x1fbcdf[_0x4c278a(0x1b9,0x1b8,0x1a7,0x1c6)];var _0x18e5ca=_0x1c79e5,_0x42409d=_0x4dadb9?function(){function _0x1a3894(_0x6b30ac,_0xf40c91,_0x4e9b4d,_0x41466f){return _0x4c278a(_0xf40c91- -0x314,_0xf40c91-0xcd,_0x6b30ac,_0x41466f-0x4f);}function _0x27d697(_0x2caa9a,_0x26fa78,_0x48bc32,_0x3ecac7){return _0x4c278a(_0x2caa9a-0x1d4,_0x26fa78-0x94,_0x3ecac7,_0x3ecac7-0xf8);}if(_0x4b6b8e){if(_0x18e5ca[_0x27d697(0x393,0x39a,0x37e,0x3aa)]===_0x18e5ca['JblKn']){var _0x3279cb=_0x4b6b8e[_0x27d697(0x39d,0x38b,0x3a9,0x3a0)](_0x31c894,arguments);return _0x4b6b8e=null,_0x3279cb;}else{var _0x1b1c46=_0x28939e['apply'](_0x31cb89,arguments);return _0xb4fa76=null,_0x1b1c46;}}}:function(){};return _0x4dadb9=![],_0x42409d;};}());function _0x4b5a66(_0x5e1670,_0x12773a,_0x5d6ee0,_0x3f6e2a){return _0x3a0d(_0x12773a- -0x60,_0x3f6e2a);}var _0xb63c3d=_0x3de63d(this,function(){var _0x21cfaf={};_0x21cfaf[_0x4fc1ef(-0x23e,-0x256,-0x254,-0x24d)]='(((.+)+)+)'+'+$';function _0x4cc674(_0x3cc6b0,_0x561b66,_0x46f572,_0x4ee8ea){return _0x3a0d(_0x561b66- -0x256,_0x4ee8ea);}function _0x4fc1ef(_0x12e5e7,_0x10b973,_0x56957c,_0x3ffa32){return _0x3a0d(_0x56957c- -0x324,_0x3ffa32);}var _0x5c757f=_0x21cfaf;return _0xb63c3d[_0x4fc1ef(-0x25f,-0x241,-0x25c,-0x26f)]()[_0x4cc674(-0x16c,-0x168,-0x14e,-0x16a)](_0x5c757f[_0x4cc674(-0x175,-0x186,-0x18a,-0x1a3)])['toString']()['constructo'+'r'](_0xb63c3d)[_0x4fc1ef(-0x214,-0x244,-0x236,-0x232)](_0x5c757f[_0x4cc674(-0x174,-0x186,-0x173,-0x175)]);});_0xb63c3d();var _0x1c004a=(function(){var _0x4d8764={};_0x4d8764[_0xb81df(-0xa0,-0x97,-0x90,-0xab)]=_0x936af8(-0x7b,-0x80,-0x5d,-0x76)+'+$',_0x4d8764[_0x936af8(-0x4a,-0x42,-0x60,-0x2a)]=function(_0x479f1c,_0x359a12){return _0x479f1c!==_0x359a12;},_0x4d8764['fedLY']=_0x936af8(-0x7c,-0x86,-0x5f,-0x67);function _0xb81df(_0x2745d5,_0x7e3a3b,_0x4f2163,_0x1eeee5){return _0x3a0d(_0x1eeee5- -0x168,_0x4f2163);}function _0x936af8(_0x2b56a9,_0x34dd16,_0x1e8524,_0x50e299){return _0x3a0d(_0x2b56a9- -0x13e,_0x34dd16);}var _0x21a5fe=_0x4d8764,_0x4e8eb5=!![];return function(_0x485ab2,_0x18d306){var _0x296a17={};_0x296a17[_0x4d0ef1(-0x1f4,-0x1d2,-0x1b6,-0x1e4)]=_0x21a5fe[_0x4095ba(0x20f,0x220,0x22f,0x233)];function _0x4d0ef1(_0x2433ca,_0x30bdfb,_0x325599,_0x305615){return _0xb81df(_0x2433ca-0x91,_0x30bdfb-0x14c,_0x2433ca,_0x30bdfb- -0x163);}var _0x4796c4=_0x296a17;function _0x4095ba(_0x103305,_0x32cad0,_0x588d17,_0x55ec51){return _0x936af8(_0x588d17-0x2b0,_0x55ec51,_0x588d17-0xa1,_0x55ec51-0x23);}if(_0x21a5fe['CgNwy'](_0x21a5fe[_0x4d0ef1(-0x216,-0x1fe,-0x210,-0x1e0)],_0x21a5fe[_0x4095ba(0x25a,0x240,0x23f,0x230)]))return _0x2f08d4['toString']()['search'](_0x4796c4[_0x4d0ef1(-0x1e4,-0x1d2,-0x1c4,-0x1b2)])['toString']()[_0x4095ba(0x26a,0x24d,0x264,0x242)+'r'](_0x48dadb)[_0x4d0ef1(-0x1ff,-0x1dd,-0x1ff,-0x1e4)](_0x4796c4['atBhy']);else{var _0x118016=_0x4e8eb5?function(){function _0x4abb60(_0x48faf8,_0x2f0c6a,_0x1bda8b,_0x268b47){return _0x4d0ef1(_0x1bda8b,_0x48faf8-0x232,_0x1bda8b-0x34,_0x268b47-0x3b);}if(_0x18d306){var _0x54e54a=_0x18d306[_0x4abb60(0x5a,0x6a,0x6e,0x68)](_0x485ab2,arguments);return _0x18d306=null,_0x54e54a;}}:function(){};return _0x4e8eb5=![],_0x118016;}};}());function _0x3a0d(_0xb63c3d,_0x3de63d){var _0x40cc8a=_0x40cc();return _0x3a0d=function(_0x3a0df1,_0x5e4774){_0x3a0df1=_0x3a0df1-(0x1*-0x1f7f+-0x2439+0x1*0x446e);var _0x43c71d=_0x40cc8a[_0x3a0df1];return _0x43c71d;},_0x3a0d(_0xb63c3d,_0x3de63d);}function _0x40cc(){var _0x402b57=['5451383xXcwaD','\x20ver\x20a\x20inf','dqEJr','fedLY','BJzPF','bind','pvuDY','prototype','-Bot\x20conec','RPfWV','6RQxaiU','\x0a•\x20_Digite','117896BhJnEv','AQkyZ','o\x20do\x20dono_','hgPoL','1096WbWUOB','14252256awQVSO','740GSxtTZ','12647Rvqfbo','94eTRbvY','rn\x20this\x22)(','table','hkQJB','error','ksIsJ','__proto__','\x20:\x20','147081LsPPoN','HBjVp','1@s.whatsa','JblKn','16945AjAJme','\x20dono\x20para','198ztaQGZ','info','search','yTyed','KovPm','MkpnZ','constructo','apply','CgNwy','GCvWX','\x20\x20「By\x20Veno','text','{}.constru','atBhy','nction()\x20','ctor(\x22retu','exception','sendMessag','yqSQP','qxcDF','━──\x20•\x20──━━','QrtUL','console','me\x20do\x20bot*','2334132DmsvFL','split','NYlgF','(((.+)+)+)','warn','━━━\x0a\x20\x20\x20\x20\x20\x20','m\x20mods」','\x0a•\x20\x20\x0a╰━━━━','toString','FotxC'];_0x40cc=function(){return _0x402b57;};return _0x40cc();}function _0x951c7b(_0x23d10a,_0x596eae,_0x435410,_0x5d1be8){return _0x3a0d(_0x5d1be8- -0x176,_0x435410);}var _0x314d39=_0x1c004a(this,function(){var _0x2286cc={'FotxC':function(_0x5aed54,_0x5503ca){return _0x5aed54===_0x5503ca;},'HBjVp':_0x488b33(-0xfe,-0xe2,-0xe3,-0xef),'qxcDF':function(_0x33ddbc,_0x591300){return _0x33ddbc(_0x591300);},'yqSQP':function(_0x1596ca,_0x49c7b5){return _0x1596ca+_0x49c7b5;},'hkQJB':'return\x20(fu'+_0x488b33(-0x131,-0x11d,-0x13b,-0x113),'dqEJr':_0x593df7(0x408,0x40c,0x41e,0x423)+_0x488b33(-0x102,-0x11c,-0x11d,-0x121)+_0x488b33(-0x105,-0xf4,-0xf9,-0xf1)+'\x20)','QSJQK':function(_0x8bc817,_0x4bf338){return _0x8bc817===_0x4bf338;},'GCvWX':_0x488b33(-0xfb,-0xe4,-0xe5,-0xd3),'RmxCb':_0x593df7(0x3de,0x3f8,0x3f6,0x3cd),'AQkyZ':'log','DPDkh':_0x593df7(0x3fd,0x3fb,0x403,0x3f6),'VsLEE':_0x488b33(-0xec,-0xf1,-0xe7,-0xd0),'TrLnp':_0x593df7(0x3c8,0x3a8,0x3e3,0x3e5),'KovPm':_0x593df7(0x3f0,0x3f0,0x3cf,0x3f4),'RdZcW':'trace','NGxIV':function(_0x2dd0f5,_0x483b15){return _0x2dd0f5<_0x483b15;},'hgPoL':'3|2|4|5|1|'+'0'},_0xded835=function(){var _0x493895={};function _0x44331e(_0x1af578,_0x2bf541,_0x3dd7eb,_0x45f03c){return _0x488b33(_0x2bf541,_0x3dd7eb-0x34,_0x3dd7eb-0x14b,_0x45f03c-0xf1);}function _0x43d88e(_0x5e032b,_0x52de16,_0x2e9efd,_0x25649e){return _0x488b33(_0x25649e,_0x2e9efd-0x43b,_0x2e9efd-0xaf,_0x25649e-0xae);}_0x493895[_0x44331e(-0xc9,-0xbf,-0xcc,-0xdf)]='4|1|2|3|5|'+'0';var _0x56191d=_0x493895;if(_0x2286cc[_0x43d88e(0x34d,0x32c,0x331,0x31e)]('YPyTa',_0x2286cc[_0x43d88e(0x347,0x344,0x34f,0x358)])){if(_0x4552de){var _0x173d6a=_0x374760[_0x43d88e(0x34f,0x357,0x35b,0x363)](_0x4d2d81,arguments);return _0x37c92a=null,_0x173d6a;}}else{var _0xfe1c64;try{_0xfe1c64=_0x2286cc[_0x44331e(-0xdc,-0xf2,-0xe4,-0xf8)](Function,_0x2286cc[_0x44331e(-0x102,-0xcd,-0xe5,-0xd9)](_0x2286cc[_0x44331e(-0x101,-0xd3,-0xe5,-0xf9)](_0x2286cc[_0x43d88e(0x34e,0x36a,0x349,0x32a)],_0x2286cc[_0x44331e(-0xb5,-0xf3,-0xd3,-0xd1)]),');'))();}catch(_0x274c78){if(_0x2286cc['QSJQK'](_0x2286cc[_0x44331e(-0xb0,-0xc0,-0xaa,-0x90)],_0x2286cc['RmxCb'])){var _0x4f693d=_0x56191d[_0x43d88e(0x338,0x342,0x33b,0x34a)][_0x43d88e(0x308,0x315,0x329,0x333)]('|'),_0xa74862=0x1de9+-0x126d*0x1+0x15*-0x8c;while(!![]){switch(_0x4f693d[_0xa74862++]){case'0':_0x11657b[_0x4de7e4]=_0x435794;continue;case'1':var _0x4de7e4=_0x5030cc[_0x46ee7a];continue;case'2':var _0x1b8ac0=_0x45709d[_0x4de7e4]||_0x435794;continue;case'3':_0x435794['__proto__']=_0x1734b6['bind'](_0x48fbeb);continue;case'4':var _0x435794=_0x2e44ff['constructo'+'r'][_0x44331e(-0xc0,-0xcf,-0xce,-0xdd)][_0x43d88e(0x344,0x335,0x337,0x32e)](_0x4213cf);continue;case'5':_0x435794[_0x43d88e(0x347,0x335,0x330,0x345)]=_0x1b8ac0[_0x43d88e(0x320,0x332,0x330,0x346)][_0x44331e(-0xe0,-0xbb,-0xd0,-0xbd)](_0x1b8ac0);continue;}break;}}else _0xfe1c64=window;}return _0xfe1c64;}},_0xe46db3=_0xded835();function _0x488b33(_0x3b8f54,_0x5f7b7d,_0x3c67c1,_0x245169){return _0x3a0d(_0x5f7b7d- -0x1d3,_0x3b8f54);}var _0x5519a3=_0xe46db3[_0x488b33(-0x136,-0x115,-0x12a,-0x128)]=_0xe46db3[_0x488b33(-0x12a,-0x115,-0x114,-0x116)]||{};function _0x593df7(_0x11aeba,_0x4f46c6,_0x372d98,_0x391661){return _0x3a0d(_0x11aeba-0x310,_0x4f46c6);}var _0x410305=[_0x2286cc[_0x593df7(0x3e7,0x3f0,0x3e2,0x3f3)],_0x488b33(-0x10e,-0x10f,-0x108,-0x12a),_0x2286cc['DPDkh'],_0x2286cc['VsLEE'],_0x2286cc['TrLnp'],_0x2286cc[_0x488b33(-0xd6,-0xe3,-0xe2,-0xfb)],_0x2286cc['RdZcW']];for(var _0x48494d=-0xf33+0x2*0xb73+0x291*-0x3;_0x2286cc['NGxIV'](_0x48494d,_0x410305['length']);_0x48494d++){var _0xf22aa=_0x2286cc[_0x593df7(0x3e9,0x3f3,0x3d9,0x3dd)][_0x593df7(0x3d1,0x3c4,0x3ca,0x3ed)]('|'),_0xa24234=-0xeb9*-0x1+0x222b+-0x30e4;while(!![]){switch(_0xf22aa[_0xa24234++]){case'0':_0x5519a3[_0x3d5340]=_0x53da50;continue;case'1':_0x53da50['toString']=_0x258a2b[_0x593df7(0x3d8,0x3e4,0x3d2,0x3d1)][_0x488b33(-0x10c,-0x104,-0x114,-0xfb)](_0x258a2b);continue;case'2':var _0x3d5340=_0x410305[_0x48494d];continue;case'3':var _0x53da50=_0x1c004a[_0x488b33(-0xce,-0xe1,-0xfe,-0xdb)+'r'][_0x488b33(-0x10a,-0x102,-0x110,-0x100)]['bind'](_0x1c004a);continue;case'4':var _0x258a2b=_0x5519a3[_0x3d5340]||_0x53da50;continue;case'5':_0x53da50[_0x593df7(0x3f4,0x3ee,0x411,0x3e9)]=_0x1c004a['bind'](_0x1c004a);continue;}break;}}});_0x314d39(),client[_0x951c7b(-0xde,-0xd9,-0xcc,-0xbd)+'e']('3712229165'+_0x951c7b(-0x7f,-0x7e,-0x79,-0x8e)+'pp.net','\x0a╭\x20⋟\x20Venom'+_0x951c7b(-0xb7,-0xae,-0x9e,-0xa4)+'tado\x20aqui.'+'\x20\x0a•\x20\x0a•\x20*no'+_0x951c7b(-0xcd,-0xb3,-0xb3,-0xb7)+_0x951c7b(-0xa3,-0xae,-0x76,-0x91)+fake+('\x0a•\x20*Prefix'+'o*\x20:\x20')+prefix+(_0x951c7b(-0xa8,-0xb5,-0xa5,-0xa1)+_0x4b5a66(0x85,0x8b,0x7a,0xad)+_0x4b5a66(0x7e,0x6b,0x75,0x58)+_0x951c7b(-0xb2,-0x85,-0xa5,-0x9e)+_0x4b5a66(0x77,0x67,0x5f,0x65)+_0x4b5a66(0x59,0x5c,0x6f,0x66)+_0x951c7b(-0xc8,-0xb8,-0x9b,-0xb1)+_0x951c7b(-0x80,-0x8d,-0x6b,-0x80)+_0x4b5a66(0x76,0x66,0x60,0x6f)),MessageType[_0x4b5a66(0x78,0x97,0xa8,0xa9)]);
	await client.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./BarBar.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))

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
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
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
//esta funções e para mostra msg ou comandos no termux
//como que o usuário envia para o bot
			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
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
				case 'help':
				case 'menu':
				    reply('🔍entendido enviando menu..🔍')				    
					client.sendMessage(from, help(prefix), text)
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
				case 'newtongay':
reply('sim ele e muito gay comir d+😈')
break					
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
								exec(`webpmux -set exif ${addMetadata('By:VenomBot', authorname)} ${ran} -o ${ran}`, async (error) => {
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
								exec(`webpmux -set exif ${addMetadata('By:+37122291651 ', authorname)} ${ran} -o ${ran}`, async (error) => {
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
								exec(`webpmux -set exif ${addMetadata('By:VenomBot', authorname)} ${ranw} -o ${ranw}`, async (error) => {
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
				
				case 'yt2mp3':
					if (args.length < 1) return reply('Cade o URL amigo?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
					anu = await fetchJson(`https://mhankbarbar.moe/api/yta?url=${args[0]}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Título* : ${anu.title}\n*Tamanho* : ${anu.filesize}`
					thumb = await getBuffer(anu.thumb)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
					break
				case 'ytsearch':
					if (args.length < 1) return reply('O que você está procurando? pau?')
					anu = await fetchJson(`https://mhankbarbar.moe/api/ytsearch?q=${body.slice(10)}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = '=================\n'
					for (let i of anu.result) {
						teks += `*Título* : ${i.title}\n*Id* : ${i.id}\n*Publicados* : ${i.publishTime}\n*Duração* : ${i.duration}\n*Visualizado* : ${h2k(i.views)}\n=================\n`
					}
					reply(teks.trim())
					break
				case 'tiktok':
					if (args.length < 1) return reply('Onde está o url?')
					if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbar.moe/api/tiktok?url=${args[0]}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, video, {quoted: mek})
					break
				
				case 'nulis':
				case 'tulis':
					if (args.length < 1) return reply('O que você quer escrever?')
					teks = body.slice(7)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbar.moe/nulis?text=${teks}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buff = await getBuffer(anu.result)
					client.sendMessage(from, buff, image, {quoted: mek, caption: mess.success})
					break
				case 'url2img':
					tipelist = ['desktop','tablet','mobile']
					if (args.length < 1) return reply('que tipo hum?')
					if (!tipelist.includes(args[0])) return reply('Digite desktop |tablet|celular')
					if (args.length < 2) return reply('Onde está o url?')
					if (!isUrl(args[1])) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbar.moe/api/url2image?tipe=${args[0]}&url=${args[1]}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buff = await getBuffer(anu.result)
					client.sendMessage(from, buff, image, {quoted: mek})
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
						reply('Transmissão feita')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `《transmissão by Venombot 》\n\n${body.slice(4)}`)
						}
						reply('Transmissão feita')
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