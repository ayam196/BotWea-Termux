let handler = async (m, { text, conn, usedPrefix }) => {
               if (m.quoted.sender != conn.user.jid) return m.reply(`Format Salah!,\n${usedPrefix}delete [tagpesanbot]`)
               conn.deleteMessage(m.chat, { id: m.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: m.chat, fromMe: true })
}
handler.help = ['delete']
handler.tags = ['main']
handler.command = /^(del|delete)$/i

module.exports = handler

