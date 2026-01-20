import { PrismaClient, User } from '@prisma/client';

export const createUser = (
  prisma: PrismaClient,
  dto: { id: string; email: string; name: string; type: boolean },
): Promise<User> => {
  return prisma.user.create({
    data: {
      id: dto.id,
      email: dto.email,
      name: dto.name,
      type: dto.type,
    },
  });
};
