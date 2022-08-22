import { BOTError } from './http-error';

export interface IExсeptionFilter {
	errorHandler: (err: Error | BOTError) => void;
}
