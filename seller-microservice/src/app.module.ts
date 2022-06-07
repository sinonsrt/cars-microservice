import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SellerModule } from './seller/seller.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:root@localhost:27017'),
    SellerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
