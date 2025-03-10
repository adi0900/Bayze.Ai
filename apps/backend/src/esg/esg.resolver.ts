import { Resolver, Query } from '@nestjs/graphql';
import { ESGRecord } from './esg.entity';
import { ESGService } from './esg.service';

@Resolver(() => ESGRecord)
export class ESGResolver {
    constructor(private readonly esgService: ESGService) { }

    @Query(() => [ESGRecord])
    async getESGData(): Promise<ESGRecord[]> {
        return this.esgService.getAllRecords();
    }
}
