import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { PrismaClientMainModule } from '@study-chatapp/prisma-client-main';

@Module({
  controllers: [],
  providers: [UserService],
  exports: [UserService],
  imports: [PrismaClientMainModule],
})
export class DataAccessUsersModule {}
