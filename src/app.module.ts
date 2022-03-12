import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ShModule } from './bin/sh/sh.module';

@Module({
  imports: [UsersModule, ShModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
