import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ESGRecord } from './esg/esg.entity';
import { ESGModule } from './esg/esg.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '', // Sesuaikan dengan MySQL Anda
      database: 'esg_db',
      entities: [ESGRecord],
      synchronize: true, // Jangan gunakan ini di production!
    }),
    ESGModule,
  ],
})
export class AppModule { }
