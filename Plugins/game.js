let handler = async (m, { text }) => {
count = Math.floor(Math.random() * 5) + 1
  buah = ['✅','❌',] // Versi Simpel
          satu = buah[Math.floor(Math.random() * (buah.length))]	
          dua = buah[Math.floor(Math.random() * (buah.length))]	
          tiga = buah[Math.floor(Math.random() * (buah.length))]	
if (satu === dua && dua === tiga){
	global.DATABASE._data.users[m.sender].limit += count
	await m.reply(`KAMU MENANG

${satu} - ${dua} - ${tiga}

BONUS +${count} Limit
`)
	} else {
		await m.reply(`Kamu Kalah

${satu} - ${dua} - ${tiga}

`)
		}
}
handler.help = ['slots']
handler.tags = ['fun']
handler.command = /^(slots)$/i

module.exports = handler

