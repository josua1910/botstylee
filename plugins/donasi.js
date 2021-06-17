let handler = async m => m.reply(`
╭─「 Donasi 」
│ • DANA:082296374835
│ • GOPAY:082293592104
│ • PULSA:082296374835
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/082293592104
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
