let speed = require('performance-now')
let handler = async (m, { conn }) => {
 const timestamp = speed();
 const latensi = speed() - timestamp
 m.reply(`Speed: ${latensi.toFixed(4)} Second`)
}
handler.help = ['speed']
handler.tags = ['info', 'tools']

handler.command = /^speed$/i
module.exports = handler
