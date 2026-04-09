const { Telegraf } = require('telegraf');
const express = require('express');
const path = require('path');
const app = express();

const bot = new Telegraf(process.env.BOT_TOKEN);
const PORT = process.env.PORT || 3000;
const DOMAIN = 'tesla-global-production.up.railway.app'; 

// 🏛️ TESLA WALLETS
const WALLETS = {
    BTC: "bc1qrp46x9rdemwlnc88m088yk8d304mj7ayu8scfa",
    USDT: "0x7F02ef79D1648e8674cc1012fC9e45714A8820A3"
};

bot.start((ctx) => {
    ctx.reply(`🏛️ TESLA SOVEREIGN PROJECT 2026\n\nInvestments: $500 - $45M\nTesla Pets: Active\n\nUse /deposit to fund your node.`);
});

bot.command('deposit', (ctx) => {
    ctx.reply(`💳 OFFICIAL DEPOSIT GATEWAY\n\nBTC: ${WALLETS.BTC}\nUSDT: ${WALLETS.USDT}\n\nVerify via WhatsApp: +1 248 346-2118`);
});

// 🚀 WEBHOOK & DASHBOARD LOGIC
app.use(bot.webhookCallback('/secret-path'));
bot.telegram.setWebhook(`https://${DOMAIN}/secret-path`);

// This line tells the server to show your HTML file when someone visits the link
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Tesla Server listening on port ${PORT}`);
});
