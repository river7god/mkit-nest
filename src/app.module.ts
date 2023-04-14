import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AuthjwtModule } from './authjwt/authjwt.module';

@Module({
  imports: [AuthModule, UsersModule, AuthjwtModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
