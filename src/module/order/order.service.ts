import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderEntity } from 'src/entites/order.entity';
import { Repository } from 'typeorm';
import { ProductService } from '../product/product.service';
import { CreateOrderInput } from './dto/create-order.input';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrderEntity)
    private orderRepository: Repository<OrderEntity>,
    private readonly productService: ProductService,
  ) {}
  async findAll(): Promise<OrderEntity[]> {
    return await this.orderRepository.find();
  }

  async deleteOrder(id: string): Promise<{ status: boolean }> {
    const status = await this.orderRepository.delete({
      id,
    });
    if (status.affected === 0) {
      return { status: true };
    }
    return { status: false };
  }

  async createOrder(createOrderInput: CreateOrderInput): Promise<OrderEntity> {
    const total = await this.productService.sumPrice(
      createOrderInput.productId,
    );
    return await this.orderRepository.save({
      total,
      ...createOrderInput,
    });
  }
}
