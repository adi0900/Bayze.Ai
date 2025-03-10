import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ESGRecord } from './esg.entity';
import { ESGService } from './esg.service';
import { ESGController } from './esg.controller';

@Module({
    imports: [TypeOrmModule.forFeature([ESGRecord])],
    controllers: [ESGController],
    providers: [ESGService],
    exports: [ESGService],
})
export class ESGModule { }
