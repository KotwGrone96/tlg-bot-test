import { Telegraf } from 'telegraf';

export const bot = new Telegraf(process.env.BOT_TOKEN! as string);

bot.start((ctx) => {
	ctx.replyWithHTML('<b>Bienvenido, este es un bot de prueba!</b>');
});

bot.on('message', (ctx) => {
	ctx.reply(`Mensaje de ${ctx.message.from.username!}`);
});
