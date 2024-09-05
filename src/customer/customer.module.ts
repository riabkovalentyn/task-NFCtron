import { Module } from '@nestjs/common';
import { CustomerController } from './customer.controller';
import { DataService } from '../data/data.service';

@Module({
  imports: [],
  controllers: [CustomerController],
  providers: [DataService],
})
export class CustomerModule {}
