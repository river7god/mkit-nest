import { Module } from '@nestjs/common';
import { AuthjwtService } from './authjwt.service';
import { JwtStrategy } from '../authjwt/Jwt.strategy';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthjwtService, JwtStrategy],
  exports: [AuthjwtService],
})
export class AuthjwtModule {}