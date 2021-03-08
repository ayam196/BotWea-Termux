let fetch = require('node-fetch')
let util = require('util')
let fs = require('fs')
let handler = async (m, { text }) => {
               let body = fs.readFileSync('./lib/pantun.txt', 'utf-8')
                let splitnix = body.split('\n')
                let randomnix = splitnix[Math.floor(Math.random() * splitnix.length)]
                m.reply(randomnix.replace(/pjrx-line/g,"\n"))
}
handler.help = ['pantun']
handler.tags = ['quotes']
handler.command = /^(pantun)$/i

module.exports = handler

