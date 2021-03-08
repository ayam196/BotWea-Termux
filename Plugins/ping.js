
let handler = async (m, { conn }) => {
 let old = new Date
  await m.reply('_Testing ping..._')
  m.reply((new Date - old) + 'ms')
}
handler.help = ['ping']
handler.tags = ['info', 'tools']

handler.command = /^ping$/i
module.exports = handler
