import { PrismaClient } from '@prisma/client';
import { ILogger } from '../logger/logger.interface';
import { IPrismaService } from './prisma.interface';

export const prismaService = (logger: ILogger): IPrismaService => {
	const client = new PrismaClient();

	const connect = async (): Promise<void> => {
		try {
			await client.$connect();
			logger.log('[PrismaService] Успешно подключились к базе');
		} catch (e) {
			if (e instanceof Error) {
				throw new Error('[PrismaService] Ошибка подключения к базе данных: ' + e.message);
			}
		}
	};

	const disconnect = async (): Promise<void> => {
		await client.$disconnect();
	};

	return {
		connect,
		disconnect,
	};
};
