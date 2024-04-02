import { Sequelize } from 'sequelize-typescript';
import { EnvConfig } from './environmentModel';

const env = new EnvConfig();

export const sequelize = new Sequelize({
  dialect: 'postgres',
  host: env.dbHost,
  database: env.dbName,
  username: env.dbUserName,
  password: env.dbPassword,
  port: parseInt(env.dbPort),
  standardConformingStrings: false,
  clientMinMessages: false,
  quoteIdentifiers: false,
});
