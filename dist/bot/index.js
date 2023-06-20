"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bot = void 0;
const telegraf_1 = require("telegraf");
exports.bot = new telegraf_1.Telegraf(process.env.BOT_TOKEN);
exports.bot.start((ctx) => {
    ctx.replyWithHTML('<b>Bienvenido, este es un bot de prueba!</b>');
});
exports.bot.on('message', (ctx) => {
    ctx.reply(`Mensaje de ${ctx.message.from.username}`);
});
