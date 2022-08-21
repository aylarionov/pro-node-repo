import { Logger } from 'tslog';
import { ILogger } from './logger.interface';

export const loggerService = (): ILogger => {
	const logger = new Logger({
		displayInstanceName: false,
		displayLoggerName: false,
		displayFilePath: 'hidden',
		displayFunctionName: false,
	});

	const log = (...args: unknown[]): void => {
		logger.info(...args);
	};

	const error = (...args: unknown[]): void => {
		logger.error(...args);
	};

	const warn = (...args: unknown[]): void => {
		logger.warn(...args);
	};

	return {
		log,
		error,
		warn,
	};
};
