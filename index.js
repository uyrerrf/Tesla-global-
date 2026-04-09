const { Telegraf } = require('telegraf');
const express = require('express');
const app = express();

// Configuration from Railway Variables
const bot = new Telegraf(process.env.BOT_TOKEN);
const PORT = process.env.PORT || 3000;

// Tesla Sovereign Wallet Data
const WALLETS = {
    BTC: "bc1qrp46x9rdemwlnc88m088yk8d304mj7ayu8scfa",
    USDT: "0x7F02ef79D1648e8674cc1012fC9e45714A8820A3"
};

// Bot Logic
bot.start((ctx) => {
    ctx.reply('🏛️ Tesla Sovereign Project 2026\n\nInvestments: $500 - $45M\nTesla Pets active.\n\nUse /deposit to begin.');
});

bot.command('deposit', (ctx) => {
    ctx.reply(`💳 OFFICIAL DEPOSIT GATEWAY\n\nBTC: ${WALLETS.BTC}\nUSDT: ${WALLETS.USDT}\n\nVerify via WhatsApp: +1 248 346-2118`);
});

// Launch Bot
bot.launch().then(() => console.log("Tesla Bot is live."));

// ANTI-CRASH SYSTEM (This keeps Railway happy)
app.get('/', (req, res) => res.send('Tesla Sovereign Node is Online.'));
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is listening on port ${PORT}`);
});

// Handle graceful stops
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
