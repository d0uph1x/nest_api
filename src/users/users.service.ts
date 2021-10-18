import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: any = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Raymond' },
    { id: 3, name: 'Hassan' },
    { id: 4, name: 'Trackson' },
  ];

  findAll(name?: string): User[] {
    if (name) {
      return this.users.filter((user) => user.name === name);
    }
    return this.users;
  }

  findById(user_id: number): User {
    return this.users.find((user) => user.id === user_id);
  }

  // Create user
  createUser = (createUserDto: CreateUserDto): User => {
    const newUser = { id: Date.now(), ...createUserDto };
    this.users.push(newUser);
    return newUser;
  };
}
