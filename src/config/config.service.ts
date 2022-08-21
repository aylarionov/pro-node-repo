import { IConfigService } from './config.service.interface';
import { config, DotenvConfigOutput, DotenvParseOutput } from 'dotenv';
import { ILogger } from '../logger/logger.interface';

export const configService = (logger: ILogger): IConfigService | null => {
	const result: DotenvConfigOutput = config();

	if (result.error) {
		logger.error('[ConfigService] Не удалось прочитать .env');
		return null;
	}

	logger.log('[ConfigService] Конфигурация .env загружена');
	const parsedConfig = result.parsed as DotenvParseOutput;

	const get = (key: string): string => {
		return parsedConfig[key];
	};

	return { get };
};
