import { Controller, Get } from '@nestjs/common';
import { UserService } from '@study-chatapp/data-access-users';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly user: UserService
  ) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Get('users')
  async getUsers() {
    const users = this.user.users({});

    return users;
  }
}
