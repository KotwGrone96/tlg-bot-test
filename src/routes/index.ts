import { Request, Response, Router } from 'express';

export const router = Router();

router.get('/', (req: Request, res: Response) => {
	res.send('Poop app activado');
});

router.post('/', (req: Request, res: Response) => {
	res.json({
		ok: true,
		message: 'Telegram Bot WebHook',
	});
});
