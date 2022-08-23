import { appCreator } from './app';
import { prismaService } from './database/prisma.service';
import { exceptionFilter } from './errors/exception.filter';
import { BOTError } from './errors/http-error';
import { loggerService } from './logger/logger.service';

async function bootstrap(): Promise<void> {
	const logger = loggerService();
	try {
		const app = appCreator(logger);

		await prismaService(logger).connect();
		await app.init();
		logger.log('[Bootstrap] Бот запущен');
	} catch (e) {
		if (e instanceof Error || e instanceof BOTError) {
			exceptionFilter(logger).errorHandler(e);
		}
	}
}

bootstrap();
