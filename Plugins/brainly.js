let fetch = require('node-fetch')
let util = require('util')
let handler = async (m, { text }) => {
   let response = await fetch(`https://api.vhtear.com/branly?query=${text}&apikey=${vkey}`)
			let	ppek = await response.json()
				let mek = ppek.result.data
				await m.reply(mek)
}
handler.help = ['brainly <pencarian>']
handler.tags = ['internet']
handler.command = /^(brainly)$/i

module.exports = handler