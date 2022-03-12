import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 1, name: 'jhon' },
    { id: 2, name: 'matheus' },
    { id: 3, name: 'nali' },
  ];

  findAll(): User[] {
    return this.users;
  }

  findById(id: number): User {
    return this.users.find((user) => user.id === id);
  }

  createUser(creteUserDto: CreateUserDto): User {
    const newUser = { id: Date.now(), ...creteUserDto };
    this.users.push(newUser);
    return newUser;
  }
}
