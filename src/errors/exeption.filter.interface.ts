import { BOTError } from './http-error';

export interface IExeptionFilter {
	errorHandler: (err: Error | BOTError) => void;
}
