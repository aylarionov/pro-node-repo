import { createBotHandler } from './bot/bot';
import { configService } from './config/config.service';
import { BOTError } from './errors/http-error';
import { ILogger } from './logger/logger.interface';

interface IAppCreatorReturned {
	init: () => void;
}

export const appCreator = (logger: ILogger): IAppCreatorReturned => {
	const token = configService(logger)?.get('TOKEN');
	if (!token) {
		throw new BOTError('Токен не задан!', 'TOKEN');
	}

	const init = async (): Promise<void> => {
		const bot = createBotHandler({ token });

		bot.start();
		await bot.launch();
	};

	return { init };
};
