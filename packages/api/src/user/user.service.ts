import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async Test(): Promise<string> {
    const test = await this.prisma.user.findMany();

    return test[0].ID;
  }
}
