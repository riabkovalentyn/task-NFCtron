import { Injectable } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import { Customer } from '../customer/customer.entity';

@Injectable()
export class DataService {
  private customers: Customer[] = [];

  constructor() {
    this.generateCustomers(10);
  }

  private generateCustomers(count: number): void {
    for (let i = 0; i < count; i++) {
      this.customers.push(
        new Customer({
          id: faker.string.uuid(),
          name: faker.internet.userName(),
          email: faker.internet.email(),
          phone: faker.phone.number(),

          address: {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zip: faker.address.zipCode(),
          },
        }),
      );
    }
  }

  getCustomers(): Customer[] {
    return this.customers;
  }

  getCustomerById(id: string): Customer | undefined {
    return this.customers.find((customer) => customer.id === id);
  }

  addCustomer(customer: Customer): void {
    this.customers.push(customer);
  }

  updateCustomer(id: string, updatedCustomer: Customer): void {
    const index = this.customers.findIndex((customer) => customer.id === id);
    if (index !== -1) {
      this.customers[index] = updatedCustomer;
    }
  }
}
