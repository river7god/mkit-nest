import { Controller, Request, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {LocalAuthGuard} from './auth/local-auth.guard';
import { JwtAuthGuard } from './authjwt/jwt-auth.guard';
import { AuthjwtService } from './authjwt/authjwt.service';

@Controller()
export class AppController {
  constructor(private authjwtService: AuthjwtService) {}

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
  
  @UseGuards(LocalAuthGuard)
  @Post('auth/loginjwt')
  async loginjwt(@Request() req) {
    return this.authjwtService.login(req.user);
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login2')
  async login2(@Request() req) {
    return req.user;
  }

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req) {
    return req.user;
  }
}