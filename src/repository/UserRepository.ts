import { UserDto } from '../dto/UserDto';
import User from '../model/User';

export class UserRepository {

  static async findByUsername(userName: String) {
    return await User.findOne({
      where: {
        nome: userName,
      },
    });
  }

  static async saveUser(nome: string, sobrenome: string): Promise<User> {
    return User.create({ nome, sobrenome });
  }
}
