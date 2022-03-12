import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users: any[] = [
    { id: 1, name: 'jhon' },
    { id: 2, name: 'matheus' },
    { id: 3, name: 'nali' },
  ];

  findAll() {
    return this.users;
  }

  findById(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
