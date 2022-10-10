import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { NaverAuthGuard } from '../auth/naver/naver-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/')
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @UseGuards(NaverAuthGuard)
  @Get('auth/naver')
  async naverlogin() {
    return;
  }

  @UseGuards(NaverAuthGuard)
  @Get('auth/naver/callback')
  async callback(@Req() req): Promise<any> {
    return req.user;
  }
}
