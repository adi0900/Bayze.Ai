import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const config: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'esg_db',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true, // Hanya untuk development
};

export default config;
