"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "test", reaction: "🤓", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = ' 𝗧𝗵𝗶𝘀 𝗶𝘀 *𝐓𝐑𝐄𝐗 𝐌𝐃* \n ' + "𝗧𝗵𝗲 𝗖𝗵𝗼𝗼𝘀𝗲𝗻 𝗢𝗻𝗲";
    let d = '𝗠𝗮𝗱𝗲 𝗕𝘆 *𝐁𝐄𝐑𝐀*'
    let varmess = z + d;
    var img = 'https://telegra.ph/file/b8b94202ee501c05bfef2.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
/*module.exports.commande = () => {
  var nomCom = ["test","t"]
  var reaction="☺️"
  return { nomCom, execute,reaction }
};

async function  execute  (origineMessage,zok) {
  console.log("Commande saisie !!!s")
   let z ='Salut je m\'appelle *Zokou* \n\n '+'je suis un bot Whatsapp Multi-appareil '
      let d =' developpé par *Djalega++*'
      let varmess=z+d
      var img='https://telegra.ph/file/ee29736dc8aa587cdf145.jpg'
await  zok.sendMessage(origineMessage,  { image:{url:img},caption:varmess});
}  */ 
