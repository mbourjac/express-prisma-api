import bcrypt from 'bcrypt';
import type { UsersRepository } from './users.repository.js';
import type { CreateUser } from './users.types.js';

export class UsersService {
  constructor(private userRepository: UsersRepository) {}

  async createUser(data: CreateUser) {
    const hashedPassword = await bcrypt.hash(data.password, 10);

    return this.userRepository.createUser({
      ...data,
      password: hashedPassword,
    });
  }
}
