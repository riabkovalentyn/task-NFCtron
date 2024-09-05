import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { DataService } from '../data/data.service';
import { Customer } from './customer.entity';

@Controller('customer')
export class CustomerController {
  constructor(private readonly dataService: DataService) {}

  @Get('')
  getCustomers(): Customer[] {
    return this.dataService.getCustomers();
  }

  @Get(':id')
  getCustomerById(@Param('id') id: string): Customer | undefined {
    return this.dataService.getCustomerById(id);
  }

  @Post('')
  addCustomer(@Body() customer: Customer): void {
    this.dataService.addCustomer(customer);
  }

  @Put(':id')
  updateCustomer(
    @Param('id') id: string,
    @Body() updatedCustomer: Customer,
  ): void {
    this.dataService.updateCustomer(id, updatedCustomer);
  }
}
