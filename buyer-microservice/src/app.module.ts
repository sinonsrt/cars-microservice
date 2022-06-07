import { Module } from '@nestjs/common';
import { BuyerModule } from './buyer/buyer.module';

@Module({
  imports: [BuyerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
