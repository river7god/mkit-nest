import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthjwtService } from './authjwt.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  /*constructor(private authjwtService: AuthjwtService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.authjwtService.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }*/

  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }
}