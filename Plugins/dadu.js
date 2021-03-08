let fetch = require('node-fetch')
let util = require('util')
let fs = require('fs')
const { exec } = require('child_process')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { text, conn }) => {
                 ranp = 'dadu.png'
                 rano = 'dadu.webp'
			        random = Math.floor(Math.random() * 6) + 1
                    hasil = 'https://www.random.org/dice/dice' + random + '.png'
					exec(`wget ${hasil} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						//fs.unlinkSync(ranp)
						if (err) return m.reply('Terjadi Kesalahan')
						buffer = fs.readFileSync(rano)
						conn.sendMessage(m.chat, buffer, messageType.sticker, {quoted:m})
						})
		}
handler.help = ['dadu']
handler.tags = ['quotes']
handler.command = /^(dadu)$/i

module.exports = handler
