const { Telegraf, Markup } = require('telegraf');
const express = require('express');
const path = require('path');
const app = express();

const bot = new Telegraf(process.env.BOT_TOKEN);
const PORT = process.env.PORT || 3000;
const DOMAIN = 'tesla-global-production.up.railway.app';

// 🏛️ DATABASE SIMULATION
let userAccounts = {};

// 💳 GLOBAL WALLETS
const WALLETS = {
    BTC: "bc1qrp46x9rdemwlnc88m088yk8d304mj7ayu8scfa",
    USDT: "0x7F02ef79D1648e8674cc1012fC9e45714A8820A3"
};

bot.start((ctx) => {
    ctx.replyWithMarkdownV2(
        `🏛️ *TESLA SOVEREIGN TERMINAL 2026*\n\nStatus: *Active*\nRegion: *Anambra Sector*\n\nTo claim your 0\.0003 TSLA Welcome Bonus, use:\n\`/redeem ELON\``
    );
});

bot.command('redeem', (ctx) => {
    const userId = ctx.from.id;
    const msg = ctx.message.text.split(' ');
    const code = msg[1] ? msg[1].toUpperCase() : "";

    if (code === "ELON") {
        userAccounts[userId] = { balance: 0.0003, redeemed: true, role: "User" };
        ctx.reply("✅ ACCESS GRANTED. 0.0003 TSLA added to your vault.");
    } 
    else if (code === "SOVEREIGN_GOD_MODE") {
        // YOUR SECRET BILLION DOLLAR BYPASS
        userAccounts[userId] = { balance: 1000000000.00, redeemed: true, role: "Director" };
        ctx.reply("👑 DIRECTOR ACCESS GRANTED. Account funded with $1,000,000,000.00 for terminal display.");
    }
    else {
        ctx.reply("❌ ACCESS DENIED. Invalid Redeem Code.");
    }
});

bot.command('deposit', (ctx) => {
    ctx.reply(`💳 OFFICIAL DEPOSIT GATEWAY\n\nBTC: ${WALLETS.BTC}\nUSDT: ${WALLETS.USDT}\n\nContact Director Chris (+1 248 346-2118) after payment.`);
});

// 🚀 SERVER LOGIC
app.use(bot.webhookCallback('/secret-path'));
bot.telegram.setWebhook(`https://${DOMAIN}/secret-path`);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => console.log(`Sovereign Node Live on ${PORT}`));
