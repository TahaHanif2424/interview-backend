import { Injectable } from '@nestjs/common';
import { UserType } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { createUser } from './functions';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data: {
    id: string;
    email: string;
    name: string;
    type: UserType;
  }) {
    return await createUser(this.prisma, data);
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
