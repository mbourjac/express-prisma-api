import type { Prisma, PrismaClient } from '@prisma/client';

export class UsersRepository {
  constructor(private readonly prismaClient: PrismaClient) {}

  async createUser(data: Prisma.UserCreateInput) {
    return this.prismaClient.user.create({
      data,
      omit: {
        password: true,
      },
    });
  }
}
