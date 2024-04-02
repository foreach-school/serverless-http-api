import { UserDto } from '../dto/UserDto';
import * as httpError from 'http-errors';
import User from '../model/User';
import { UserRepository } from '../repository/UserRepository';

export class UserService {
  static async get(userName: String) {
    const user: User = await UserRepository.findByUsername(userName);

    if (user === null) {
      throw httpError(404, `User not found`);
    }

    return new UserDto(user.nome, user.sobrenome);
  }

  static async save(user: UserDto) {
    const savedUser: User = await UserRepository.saveUser(user.nome, user.sobrenome);

    return new UserDto(savedUser.nome, savedUser.sobrenome);
  }
}
