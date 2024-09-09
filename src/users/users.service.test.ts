import { beforeEach, describe, expect, it, vi } from 'vitest';
import { UsersRepository } from './users.repository.js';
import { UsersService } from './users.service.js';
import { mock, mockReset } from 'vitest-mock-extended';

vi.mock('bcrypt', () => ({
  default: {
    hash: () => 'hashedPassword',
  },
}));

describe('usersService', () => {
  let usersService: UsersService;
  const usersRepository = mock<UsersRepository>();

  const id = '1';
  const email = 'user@email.com';
  const username = 'user';
  const password = 'password';

  beforeEach(() => {
    vi.restoreAllMocks();
    mockReset(usersRepository);

    usersService = new UsersService(usersRepository);
  });

  describe('create', () => {
    const createNewUser = {
      email,
      username,
      password,
    };

    it('should create and return the user', async () => {
      usersRepository.createUser.mockResolvedValueOnce({
        id,
        email,
        username,
      });

      const newUser = await usersService.createUser(createNewUser);

      expect(newUser).toStrictEqual({
        id,
        email,
        username,
      });
    });

    it('should encrypt the password', async () => {
      usersRepository.createUser.mockResolvedValueOnce({
        id,
        email,
        username,
      });

      await usersService.createUser(createNewUser);

      expect(usersRepository.createUser).toHaveBeenCalledWith({
        email,
        username,
        password: 'hashedPassword',
      });
    });

    it('should throw an error if user creation fails', async () => {
      const repositoryError = new Error('Unique constraint failed on email');

      usersRepository.createUser.mockRejectedValueOnce(repositoryError);

      await expect(usersService.createUser(createNewUser)).rejects.toThrow(
        repositoryError,
      );
    });
  });
});
