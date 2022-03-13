import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TodosModule } from './todos/todos.module';
import { ClassroomsModule } from './classrooms/classrooms.module';

@Module({
  imports: [UsersModule, TodosModule, ClassroomsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
