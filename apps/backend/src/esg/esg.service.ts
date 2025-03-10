import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ESGRecord } from './esg.entity';  // Pastikan file entity ini ada

@Injectable()
export class ESGService {
  constructor(
    @InjectRepository(ESGRecord)
    private readonly esgRepository: Repository<ESGRecord>,
  ) {}

  async getAllRecords(): Promise<ESGRecord[]> {
    return this.esgRepository.find(); // Mengambil semua data ESG dari database
  }
}
