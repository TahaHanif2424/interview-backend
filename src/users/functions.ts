import { User, UserType } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

export const createUser = (
  prisma: PrismaService,
  dto: { userId: string; email: string; name: string; type: UserType },
): Promise<User> => {
  return prisma.user.create({
    data: {
      id: dto.userId,
      email: dto.email,
      name: dto.name,
      type: dto.type,
    },
  });
};
