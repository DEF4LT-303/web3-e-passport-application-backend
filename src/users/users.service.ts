import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { Prisma, Role } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class UsersService {
  constructor(private readonly databaseService: DatabaseService) { }

  async create(createUserDto: Prisma.UserCreateInput) {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

    return this.databaseService.user.create({
      data: {
        ...createUserDto,
        password: hashedPassword,
      },
    });
  }

  findAll(role?: Role) {
    return this.databaseService.user.findMany({
      where: {
        role: role ? { equals: role } : undefined,
      },
    });
  }

  findOne(id: string) {
    return this.databaseService.user.findUnique({
      where: { id },
    });
  }

  update(id: string, updateUserDto: Prisma.UserUpdateInput) {
    return this.databaseService.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  remove(id: string) {
    return this.databaseService.user.delete({
      where: { id },
    });
  }
}
