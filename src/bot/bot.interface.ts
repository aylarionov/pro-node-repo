import { ILogger } from '../logger/logger.interface';

export interface IBot {
	token: string;
}

export interface IBotReturned {
	start: () => void;
	launch: () => void;
}
