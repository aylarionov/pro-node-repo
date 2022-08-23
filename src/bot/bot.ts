import 'dotenv/config';
import { Telegraf, TelegramError } from 'telegraf';
import { BOTError } from '../errors/http-error';
import { IBot, IBotReturned } from './bot.interface';

export const createBotHandler = ({ token }: IBot): IBotReturned => {
	const bot = new Telegraf(token);

	const start = (): void => {
		bot.command('start', (ctx) => {
			ctx.reply('Hello');
		});
	};

	const launch = async (): Promise<void> => {
		try {
			await bot.launch();
		} catch (e) {
			if (e instanceof TelegramError) {
				throw new BOTError(e.description, 'launch', Number(e.code));
			}
		}
	};

	return {
		start,
		launch,
	};
};
