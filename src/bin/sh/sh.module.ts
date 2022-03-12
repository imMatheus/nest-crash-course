import { Module } from '@nestjs/common';
import { ShController } from './sh.controller';

@Module({
  controllers: [ShController]
})
export class ShModule {}
