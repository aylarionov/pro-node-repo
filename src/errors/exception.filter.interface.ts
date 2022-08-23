import { BOTError } from './http-error';

export interface IExceptionFilter {
	errorHandler: (err: Error | BOTError) => void;
}
