import { Controller, Get } from '@nestjs/common';
import { ESGService } from './esg.service';
import { ESGRecord } from './esg.entity';

@Controller('esg')
export class ESGController {
  constructor(private readonly esgService: ESGService) {}

  @Get()
  async getAllRecords(): Promise<ESGRecord[]> {
    return this.esgService.getAllRecords();  // Pastikan method ini ada di `esg.service.ts`
  }
}
