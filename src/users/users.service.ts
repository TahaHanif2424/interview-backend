import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { createUser } from './functions';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaClient) {}

  async create(data: {
    id: string;
    email: string;
    name: string;
    type: boolean;
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
