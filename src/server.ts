import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { router } from './routes';
import { bot } from './bot';

const app = express();

const port = process.env.PORT || 3000;

app.use(router);

app.listen(() => {
	console.log(`Servidor abierto en el puerto ${port}`);
	bot.launch().then(() => {
		console.log('Bot de desarrollo iniciado');
	});
});
