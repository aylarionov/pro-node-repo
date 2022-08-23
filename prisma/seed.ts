import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const products = [
	{
		name: 'MacBook Air M1 13',
		description: 'Apple M1 chip with 8‑core CPU, 7‑core GPU, 16‑core Neural Engine',
		price: 999,
	},
	{
		name: 'MacBook Air M2 13,6',
		description: 'Apple M2 chip with 8‑core CPU, 8‑core GPU, 16‑core Neural Engine',
		price: 1199,
	},
	{
		name: 'MacBook Pro M2 13',
		description: 'Apple M2 chip with 8‑core CPU, 10‑core GPU, 16‑core Neural Engine',
		price: 1299,
		storageId: 2,
		memoryId: 2,
	},
	{
		name: 'MacBook Pro M1 14',
		description: 'Apple M1 Pro with 8-core CPU, 14-core GPU, 16-core Neural Engine',
		price: 1999,
		storageId: 2,
		memoryId: 2,
	},
	{
		name: 'MacBook Pro M1 16',
		description: 'Apple M1 Pro with 10-core CPU, 16-core GPU, 16-core Neural Engine',
		price: 2499,
		storageId: 2,
		memoryId: 2,
	},
];

const memory = [
	{
		volume: '8GB',
		price: 0,
	},
	{
		volume: '16GB',
		price: 200,
	},
	{
		volume: '24GB',
		price: 400,
	},
	{
		volume: '32GB',
		price: 400,
	},
];

const storage = [
	{
		volume: '256GB',
		price: 0,
	},
	{
		volume: '512GB',
		price: 200,
	},
	{
		volume: '1TB',
		price: 400,
	},
	{
		volume: '2TB',
		price: 800,
	},
	{
		volume: '4TB',
		price: 1200,
	},
	{
		volume: '8TB',
		price: 2400,
	},
];

const soft = [
	{
		name: 'Final Cut Pro',
		price: 299,
	},
	{
		name: 'Logic Pro',
		price: 199,
	},
];

async function initSeed(): Promise<void> {
	await prisma.$connect();

	await prisma.soft.createMany({ data: soft });
	await prisma.memory.createMany({ data: memory });
	await prisma.storage.createMany({ data: storage });
	await prisma.product.createMany({ data: products });

	await prisma.$disconnect();
}

initSeed();
