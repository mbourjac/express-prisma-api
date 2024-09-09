import type { UsersRepository } from './users.repository.js';
import type { CreateUser } from './users.types.js';

export class UsersService {
  constructor(private userRepository: UsersRepository) {}

  async createUser(data: CreateUser) {}
}
