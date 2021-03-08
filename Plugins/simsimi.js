let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let res = await fetch('https://mhankbarbar.tech/api/samisami?text=' + encodeURIComponent(text))
  let json = await res.json()
  if (json.status == 200) m.reply(json.result)
  else throw json
}
handler.help = ['sim', ''].map(v => v + 'simi <teks>')
handler.tags = ['fun']
handler.command = /^((sim)?simi)$/i

module.exports = handler

