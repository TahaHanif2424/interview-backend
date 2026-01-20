import { UserType } from '@prisma/client';

export class CreateUserDto {
  id!: string;
  email!: string;
  name!: string;
  type!: UserType;
}
