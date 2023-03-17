import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist';
import 'dotenv/config';

export const DB_CONFIG: TypeOrmModuleOptions = {
  keepConnectionAlive: true,
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  autoLoadEntities: true,
  synchronize: true,
};
