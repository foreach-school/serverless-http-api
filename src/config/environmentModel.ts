import * as dotenv from 'dotenv';
dotenv.config();

export class EnvConfig {
  environment: string = process.env.ENVIRONMENT;
  dbHost: string = process.env.DB_HOST;
  dbPort: string = process.env.DB_PORT;
  dbUserName: string = process.env.DB_USERNAME;
  dbPassword: string = process.env.DB_PASSWORD;
  dbName: string = process.env.DB_NAME;
}

export const env = EnvConfig;
