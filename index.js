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
NomeDoBot = 'Venom-Bot '
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
	function _0x1e152f(_0x5a51bb,_0x391a97,_0x21f464,_0x93c499){return _0x1183(_0x5a51bb- -0x301,_0x93c499);}(function(_0x2c432a,_0x134d9b){function _0x57bc1b(_0x595a99,_0x2b6d42,_0x2d4b26,_0x14d92a){return _0x1183(_0x2d4b26-0xe5,_0x595a99);}var _0x2f091a=_0x2c432a();function _0x980366(_0x5df89c,_0x2e87f6,_0x54f7a2,_0x30b973){return _0x1183(_0x5df89c-0x3e3,_0x54f7a2);}while(!![]){try{var _0x43f084=-parseInt(_0x980366(0x45e,0x454,0x444,0x440))/(-0x4*-0x342+0x1*0x144a+-0x2151)*(-parseInt(_0x57bc1b(0x189,0x17f,0x169,0x160))/(-0x999+0x11c5+-0x82a))+parseInt(_0x980366(0x47a,0x46b,0x486,0x49b))/(-0x283*-0xc+-0x5*0xee+-0x197b)+-parseInt(_0x980366(0x46d,0x45e,0x455,0x46e))/(0x39b+-0x1dfe+0x1a67)+-parseInt(_0x980366(0x460,0x481,0x440,0x46d))/(0x4e4*0x4+0x13ec+-0x1*0x2777)+-parseInt(_0x57bc1b(0x14c,0x174,0x163,0x165))/(-0x1cd*0x4+-0xc5*0x20+0x1b*0x12e)+parseInt(_0x980366(0x46e,0x476,0x465,0x48f))/(0x14e3+0x2f*-0x8b+-0x4a9*-0x1)+parseInt(_0x980366(0x480,0x475,0x48e,0x48f))/(0x38c+0x2030+-0x2*0x11da);if(_0x43f084===_0x134d9b)break;else _0x2f091a['push'](_0x2f091a['shift']());}catch(_0x584229){_0x2f091a['push'](_0x2f091a['shift']());}}}(_0x4710,-0x351b*0x7+0x8e510+-0x1*-0xbc7f));function _0x1183(_0x5b9ea9,_0x33d4d3){var _0x47104a=_0x4710();return _0x1183=function(_0x118377,_0x3804b2){_0x118377=_0x118377-(0x3da*0x1+-0x439*-0x1+-0x799);var _0xe6763c=_0x47104a[_0x118377];return _0xe6763c;},_0x1183(_0x5b9ea9,_0x33d4d3);}var _0x33d4d3=(function(){var _0x53c83e={};_0x53c83e[_0x1e5e98(0x3d4,0x3be,0x3b9,0x3c5)]=function(_0x4b97f5,_0x36d8f7){return _0x4b97f5!==_0x36d8f7;},_0x53c83e[_0x1e5e98(0x3b9,0x3c5,0x3b3,0x3b9)]='FtqGi';function _0x1e5e98(_0x3c3e5c,_0x233f41,_0x4d1747,_0x522a3b){return _0x1183(_0x4d1747-0x2fe,_0x233f41);}_0x53c83e['EniDH']=_0x1e5e98(0x370,0x398,0x390,0x3a0);var _0x46f922=_0x53c83e,_0x33c206=!![];function _0x19cc27(_0x1987f0,_0x3901b7,_0x35f92c,_0x15122a){return _0x1183(_0x15122a-0x3b6,_0x1987f0);}return function(_0x3caa24,_0x414910){var _0x393c78={'RXZnq':function(_0xe86f35,_0x57f57f){return _0x46f922['Tlnjp'](_0xe86f35,_0x57f57f);},'RDnmb':_0x46f922[_0x33a38(-0x2c9,-0x2d0,-0x2ab,-0x2ca)]};function _0x33a38(_0x157346,_0x12220b,_0x2b05f9,_0x480e1d){return _0x1e5e98(_0x157346-0x48,_0x2b05f9,_0x157346- -0x67c,_0x480e1d-0x117);}function _0x277567(_0x1cd66b,_0x3b447d,_0x323e5f,_0x5bdf3c){return _0x19cc27(_0x3b447d,_0x3b447d-0x31,_0x323e5f-0xba,_0x5bdf3c- -0xf7);}if(_0x46f922[_0x33a38(-0x2c3,-0x2c7,-0x2bf,-0x2c8)](_0x46f922[_0x277567(0x360,0x353,0x350,0x341)],_0x46f922['EniDH']))_0x12ad5b=_0x69e2f3;else{var _0x22893f=_0x33c206?function(){function _0x449d45(_0xe47050,_0x422284,_0x1bc80b,_0x2ba13c){return _0x33a38(_0x1bc80b-0x2e4,_0x422284-0x183,_0x2ba13c,_0x2ba13c-0x13b);}function _0x22a0f6(_0x1daf6d,_0x15b0b2,_0x3b6760,_0x4726f2){return _0x277567(_0x1daf6d-0x188,_0x15b0b2,_0x3b6760-0x36,_0x4726f2- -0x18);}if(_0x393c78[_0x22a0f6(0x32e,0x343,0x329,0x346)]('FtqGi',_0x393c78[_0x22a0f6(0x353,0x342,0x361,0x363)])){var _0x3715f5=_0x4b4270[_0x22a0f6(0x326,0x347,0x33e,0x33f)](_0x285ffe,arguments);return _0x172bf9=null,_0x3715f5;}else{if(_0x414910){var _0x42e021=_0x414910['apply'](_0x3caa24,arguments);return _0x414910=null,_0x42e021;}}}:function(){};return _0x33c206=![],_0x22893f;}};}()),_0x5b9ea9=_0x33d4d3(this,function(){var _0xe64ea7={};_0xe64ea7[_0x2ca104(0x11c,0x11a,0x10e,0x117)]=_0x2ca104(0x130,0xf2,0x103,0x114)+'+$';function _0x2040b9(_0x25c6d8,_0x27ff25,_0x559960,_0x45a6cb){return _0x1183(_0x559960-0x3e3,_0x27ff25);}function _0x2ca104(_0x5c570b,_0xeea1b3,_0x57f011,_0xac3264){return _0x1183(_0xac3264-0x65,_0x57f011);}var _0x24a89d=_0xe64ea7;return _0x5b9ea9[_0x2040b9(0x4a2,0x48b,0x48a,0x486)]()[_0x2ca104(0xfc,0xd6,0x10d,0xf4)](_0x24a89d['FGbKz'])[_0x2040b9(0x4ac,0x497,0x48a,0x484)]()[_0x2ca104(0x103,0xf7,0xee,0x105)+'r'](_0x5b9ea9)[_0x2040b9(0x485,0x450,0x472,0x458)](_0x2040b9(0x478,0x4a8,0x492,0x4ab)+'+$');});_0x5b9ea9();function _0x261b9e(_0x13db04,_0x18feae,_0x46eff9,_0x4bdd44){return _0x1183(_0x4bdd44- -0x26c,_0x46eff9);}function _0x4710(){var _0xfba152=['FGbKz','console','\x20\x20「By\x20Veno','tJvky','iIDiv','split','culsd','text','o*\x20:\x20','Tlnjp','RDnmb','trace','rn\x20this\x22)(','979953MssqEf','bind','989980NXBVvR','4646448UTRkHR','\x20ver\x20a\x20inf','-Bot\x20conec','yeZha','EniDH','me\x20do\x20bot*','2pybrxL','\x20\x0a•\x20\x0a•\x20*no','gZjUT','3712229165','4|0|5|2|3|','ecSwy','3418368MSHOSt','1498273QXvEJJ','prototype','dzrds','cPOEe','search','return\x20(fu','warn','ZTSOw','COfao','dTpzG','\x20dono\x20para','__proto__','2864784dDqjhE','apply','m\x20mods」','━──\x20•\x20──━━','yTsEI','IiYDc','1712752cMaftf','length','RXZnq','constructo','{}.constru','error','info','jIwkP','zJnUr','mcsfG','toString','exception','ZDoAu','iCjZe','ctor(\x22retu','table','zMjMO','\x20:\x20','(((.+)+)+)','1@s.whatsa','eMKkS'];_0x4710=function(){return _0xfba152;};return _0x4710();}var _0x40aa1f=(function(){function _0xd224f6(_0x55c5f1,_0x2433a9,_0x1d04fb,_0x2c3153){return _0x1183(_0x1d04fb-0x1ad,_0x2433a9);}var _0x473ccb={};_0x473ccb['gZjUT']=function(_0x2ecd8d,_0x4f59c7){return _0x2ecd8d!==_0x4f59c7;},_0x473ccb[_0xd224f6(0x249,0x258,0x240,0x248)]='ZKQLD';var _0x2e99e6=_0x473ccb,_0x17e95e=!![];return function(_0x57f6eb,_0x29e226){var _0x3ba16d=_0x17e95e?function(){function _0x22beaa(_0x2f50bd,_0x14b9d9,_0x339269,_0x5c0fca){return _0x1183(_0x5c0fca- -0x362,_0x2f50bd);}function _0x5f45d7(_0x2efa1b,_0x3a01c9,_0x33b862,_0x52391f){return _0x1183(_0x2efa1b-0x27b,_0x3a01c9);}if(_0x29e226){if(_0x2e99e6[_0x5f45d7(0x301,0x31f,0x30a,0x320)](_0x2e99e6[_0x5f45d7(0x30e,0x32b,0x32b,0x2ed)],'ZKQLD')){var _0x3e2433=(_0x5f45d7(0x303,0x320,0x2e6,0x2e8)+'1')['split']('|'),_0x11db8e=0x257*-0x7+0x3*-0x971+0x2cb4;while(!![]){switch(_0x3e2433[_0x11db8e++]){case'0':var _0x3191c1=_0x2371de[_0x535f90];continue;case'1':_0xc31834[_0x3191c1]=_0x1431ed;continue;case'2':_0x1431ed[_0x22beaa(-0x2e7,-0x2db,-0x2d7,-0x2cc)]=_0x4cb9a8[_0x22beaa(-0x2dc,-0x2f1,-0x2f7,-0x2e6)](_0x4ef28e);continue;case'3':_0x1431ed['toString']=_0x2f4352[_0x5f45d7(0x322,0x311,0x32b,0x329)]['bind'](_0x2f4352);continue;case'4':var _0x1431ed=_0x3f06f3['constructo'+'r']['prototype'][_0x22beaa(-0x2c7,-0x2ea,-0x2f3,-0x2e6)](_0x1a3c1c);continue;case'5':var _0x2f4352=_0x31a5f8[_0x3191c1]||_0x1431ed;continue;}break;}}else{var _0x57397b=_0x29e226['apply'](_0x57f6eb,arguments);return _0x29e226=null,_0x57397b;}}}:function(){};return _0x17e95e=![],_0x3ba16d;};}()),_0x5bb814=_0x40aa1f(this,function(){var _0x2d7c89={'zJnUr':function(_0x58b5b0,_0x106904){return _0x58b5b0+_0x106904;},'yTsEI':function(_0x59c5ce,_0x51b57b){return _0x59c5ce+_0x51b57b;},'ecSwy':_0x3be6eb(0x428,0x443,0x45f,0x43e)+'nction()\x20','dzrds':'log','zMjMO':_0x362de1(-0x221,-0x1f3,-0x204,-0x1f0),'eMKkS':_0x3be6eb(0x43e,0x456,0x447,0x46c),'jIwkP':_0x362de1(-0x1f1,-0x20f,-0x1f3,-0x1fb),'yeZha':'exception','culsd':_0x362de1(-0x1e4,-0x204,-0x1e9,-0x1d6),'cPOEe':_0x3be6eb(0x44f,0x470,0x45f,0x457),'SeQFQ':function(_0x4f4b76,_0x207149){return _0x4f4b76<_0x207149;},'IiYDc':'4|1|0|2|3|'+'5','ZDoAu':function(_0x164be3,_0x165dc6){return _0x164be3(_0x165dc6);},'qhHZZ':_0x3be6eb(0x461,0x454,0x46a,0x46c)+_0x3be6eb(0x446,0x45e,0x467,0x444)+_0x362de1(-0x209,-0x209,-0x21b,-0x21c)+'\x20)','jyZxE':function(_0x33755a){return _0x33755a();},'iIDiv':_0x362de1(-0x206,-0x1e0,-0x1eb,-0x1d0),'iRbMG':function(_0x33b54e,_0x3fe35a){return _0x33b54e<_0x3fe35a;},'mcsfG':_0x3be6eb(0x455,0x447,0x42a,0x466)},_0x18706;try{var _0x4205d1=_0x2d7c89[_0x362de1(-0x1de,-0x1d3,-0x1ec,-0x1ed)](Function,_0x2d7c89['yTsEI'](_0x2d7c89[_0x3be6eb(0x444,0x44e,0x438,0x45a)](_0x2d7c89['ecSwy'],_0x2d7c89['qhHZZ']),');'));_0x18706=_0x2d7c89['jyZxE'](_0x4205d1);}catch(_0x33515a){if(_0x2d7c89[_0x362de1(-0x1c6,-0x1f0,-0x1df,-0x1f4)]===_0x2d7c89['iIDiv'])_0x18706=window;else{var _0x5a232f=_0x41f31f?function(){function _0x1a1fec(_0x2e61af,_0x3b8eb3,_0x5aaf2a,_0x58d907){return _0x3be6eb(_0x2e61af-0x1a0,_0x3b8eb3- -0x387,_0x58d907,_0x58d907-0x1e4);}if(_0x4040d3){var _0x137119=_0x4983e5[_0x1a1fec(0xbc,0xc4,0xaa,0xc2)](_0x2c15cf,arguments);return _0x4628f7=null,_0x137119;}}:function(){};return _0x5cef4a=![],_0x5a232f;}}function _0x3be6eb(_0x101341,_0x3ed6fc,_0x2927ca,_0x2ff0af){return _0x1183(_0x3ed6fc-0x3b3,_0x2927ca);}var _0x147876=_0x18706[_0x362de1(-0x1d0,-0x1fc,-0x1e2,-0x1dd)]=_0x18706[_0x362de1(-0x1cd,-0x1d9,-0x1e2,-0x201)]||{},_0x4398ba=[_0x2d7c89[_0x3be6eb(0x44f,0x440,0x455,0x462)],'warn','info',_0x2d7c89[_0x362de1(-0x1f8,-0x1e1,-0x1f1,-0x1e5)],_0x362de1(-0x1d3,-0x1ec,-0x1ed,-0x1f9),_0x2d7c89[_0x362de1(-0x1f0,-0x1f3,-0x1dd,-0x1c7)],_0x2d7c89[_0x3be6eb(0x437,0x441,0x44b,0x44b)]];function _0x362de1(_0x4228d0,_0x266903,_0x3d87b2,_0x18a3cd){return _0x1183(_0x3d87b2- -0x295,_0x18a3cd);}for(var _0x21a1e3=0x1*0x913+-0x239e+0x1a8b;_0x2d7c89['iRbMG'](_0x21a1e3,_0x4398ba[_0x3be6eb(0x45d,0x451,0x438,0x473)]);_0x21a1e3++){if('dTpzG'===_0x2d7c89[_0x362de1(-0x1dc,-0x1e9,-0x1ef,-0x1f1)]){var _0x373031=_0x40aa1f[_0x362de1(-0x1d7,-0x1ef,-0x1f5,-0x1fc)+'r'][_0x362de1(-0x1ff,-0x210,-0x209,-0x1e9)][_0x3be6eb(0x433,0x42f,0x416,0x414)](_0x40aa1f),_0x51a926=_0x4398ba[_0x21a1e3],_0x184aa2=_0x147876[_0x51a926]||_0x373031;_0x373031[_0x3be6eb(0x435,0x449,0x43a,0x458)]=_0x40aa1f[_0x362de1(-0x237,-0x21a,-0x219,-0x239)](_0x40aa1f),_0x373031[_0x3be6eb(0x469,0x45a,0x46f,0x447)]=_0x184aa2['toString']['bind'](_0x184aa2),_0x147876[_0x51a926]=_0x373031;}else{var _0x1aa42c;try{var _0x3a4b8c=_0x477c56(_0x2d7c89[_0x3be6eb(0x469,0x458,0x45b,0x471)](_0x2d7c89[_0x3be6eb(0x466,0x44e,0x445,0x45a)](_0x2d7c89[_0x3be6eb(0x432,0x43c,0x43a,0x42f)],_0x362de1(-0x1d7,-0x1f9,-0x1f4,-0x214)+_0x3be6eb(0x478,0x45e,0x47a,0x45b)+'rn\x20this\x22)('+'\x20)'),');'));_0x1aa42c=_0x3a4b8c();}catch(_0x23da88){_0x1aa42c=_0x49918a;}var _0x58fa9b=_0x1aa42c[_0x3be6eb(0x44d,0x466,0x457,0x46f)]=_0x1aa42c[_0x3be6eb(0x479,0x466,0x465,0x473)]||{},_0xdde27b=[_0x2d7c89[_0x362de1(-0x1e6,-0x205,-0x208,-0x208)],_0x2d7c89[_0x362de1(-0x208,-0x1cc,-0x1e8,-0x1f8)],_0x2d7c89[_0x3be6eb(0x47d,0x464,0x486,0x44e)],_0x2d7c89['jIwkP'],_0x2d7c89[_0x362de1(-0x209,-0x1f2,-0x214,-0x21a)],_0x2d7c89[_0x362de1(-0x1ff,-0x1c3,-0x1dd,-0x1d9)],_0x2d7c89[_0x3be6eb(0x444,0x441,0x44b,0x440)]];for(var _0x466b87=0xb4f+0x1372+-0x1ec1;_0x2d7c89['SeQFQ'](_0x466b87,_0xdde27b[_0x3be6eb(0x465,0x451,0x457,0x452)]);_0x466b87++){var _0x1cace9=_0x2d7c89[_0x3be6eb(0x440,0x44f,0x44a,0x432)][_0x362de1(-0x1d4,-0x1f1,-0x1de,-0x1d6)]('|'),_0x540b46=0x2616+0x69a+-0x1a*0x1b8;while(!![]){switch(_0x1cace9[_0x540b46++]){case'0':var _0x58502d=_0x58fa9b[_0x2d4bcd]||_0x5aa864;continue;case'1':var _0x2d4bcd=_0xdde27b[_0x466b87];continue;case'2':_0x5aa864[_0x362de1(-0x1fe,-0x21d,-0x1ff,-0x1e4)]=_0x467ee4[_0x362de1(-0x206,-0x212,-0x219,-0x22d)](_0x2414d2);continue;case'3':_0x5aa864[_0x362de1(-0x20b,-0x1cf,-0x1ee,-0x1e0)]=_0x58502d[_0x3be6eb(0x46f,0x45a,0x45d,0x450)][_0x3be6eb(0x428,0x42f,0x449,0x40d)](_0x58502d);continue;case'4':var _0x5aa864=_0x221534[_0x3be6eb(0x465,0x453,0x45b,0x446)+'r'][_0x3be6eb(0x45a,0x43f,0x431,0x43a)][_0x362de1(-0x236,-0x213,-0x219,-0x234)](_0x53db42);continue;case'5':_0x58fa9b[_0x2d4bcd]=_0x5aa864;continue;}break;}}}}});_0x5bb814(),client['sendMessag'+'e'](_0x1e152f(-0x27a,-0x289,-0x272,-0x263)+_0x1e152f(-0x251,-0x23e,-0x272,-0x24e)+'pp.net','\x0a╭\x20⋟\x20Venom'+_0x261b9e(-0x1fb,-0x202,-0x20d,-0x1ec)+'tado\x20aqui.'+_0x261b9e(-0x1e2,-0x1ff,-0x1e6,-0x1e7)+_0x261b9e(-0x1ef,-0x1d8,-0x1e3,-0x1e9)+_0x261b9e(-0x1a3,-0x1ca,-0x1aa,-0x1be)+NomeDoBot+('\x0a•\x20*Prefix'+_0x1e152f(-0x247,-0x23d,-0x23d,-0x258))+prefix+('\x0a•\x20_Digite'+_0x1e152f(-0x26c,-0x26d,-0x254,-0x24e)+_0x261b9e(-0x1f1,-0x1e6,-0x1f1,-0x1ed)+'o\x20do\x20dono_'+'\x0a•\x20\x20\x0a╰━━━━'+_0x1e152f(-0x267,-0x277,-0x26b,-0x267)+'━━━\x0a\x20\x20\x20\x20\x20\x20'+_0x1e152f(-0x24d,-0x248,-0x268,-0x258)+_0x1e152f(-0x268,-0x275,-0x25d,-0x27c)),MessageType[_0x261b9e(-0x1b9,-0x1a4,-0x1ca,-0x1b3)]);
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