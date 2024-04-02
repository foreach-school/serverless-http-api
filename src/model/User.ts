import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/sequelize';

class User extends Model {
  public nome: string;
  public sobrenome: string;
}

User.init(
  {
    nome: {
      type: DataTypes.STRING(70),
      allowNull: false,
    },
    sobrenome: {
      type: DataTypes.STRING(70),
      allowNull: false,
    },
  },
  {
    sequelize,
    schema: 'tst',
    tableName: 'user',
    timestamps: false,
  }
);
User.removeAttribute('id');

export default User;
