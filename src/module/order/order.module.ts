import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from 'src/entites/order.entity';
import { ProductModule } from '../product/product.module';
import { OrderResolver } from './order.Resolver';
import { OrderService } from './order.service';

@Module({
  imports: [TypeOrmModule.forFeature([OrderEntity]), ProductModule],
  providers: [OrderResolver, OrderService],
})
export class OrderModule {}
