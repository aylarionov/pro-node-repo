import { ILogger } from '../logger/logger.interface';
import { IExceptionFilter } from './exception.filter.interface';
import { BOTError } from './http-error';

export const exceptionFilter = (logger: ILogger): IExceptionFilter => {
	const errorHandler = (err: Error | BOTError): void => {
		if (err instanceof BOTError) {
			logger.error(
				`[${err.context}] Ошибка${err.statusCode ? ' ' + err.statusCode : ''}: ${err.message}`,
			);
		} else {
			logger.error(`${err.message}`);
		}
	};

	return { errorHandler };
};
