export class Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  constructor(partial: Partial<Customer>) {
    Object.assign(this, partial);
  }
}
