import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataModule } from './data/data.module';
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [DataModule, CustomerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
