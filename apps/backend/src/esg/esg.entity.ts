import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ESGRecord {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  factoryId: number;

  @Column()
  location: string;

  @Column()
  month: string;

  @Column()
  energyConsumption: number;

  @Column()
  carbonEmissions: number;

  @Column()
  renewableEnergyPercentage: number;

  @Column()
  wasteGenerated: number;
}
