import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BuyerModule } from './buyer/buyer.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:root@localhost:27017'),
    BuyerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
