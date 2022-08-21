import { ILogger } from '../logger/logger.interface';
import { IExeptionFilter } from './exeption.filter.interface';
import { BOTError } from './http-error';

export const exeptionFilter = (logger: ILogger): IExeptionFilter => {
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
