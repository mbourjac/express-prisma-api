import { prisma } from './prisma.client.js';

export const connectToDB = async () => {
  try {
    await prisma.$connect();
    console.log('[database]: connected');
  } catch (err) {
    console.log('[database]: connection error: ', err);
    await prisma.$disconnect();
  }
};
