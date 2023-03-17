import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { OrderEntity } from 'src/entites/order.entity';
import { CreateOrderInput } from './dto/create-order.input';
import { DeleteOrderInput } from './dto/delete-order.input';
import { OrderService } from './order.service';

@Resolver(() => OrderEntity)
export class OrderResolver {
  constructor(private readonly orderService: OrderService) {}

  @Query(() => [OrderEntity], { name: 'orders' })
  findAll() {
    return this.orderService.findAll();
  }

  @Mutation(() => OrderEntity)
  deleteOrder(@Args('deleteOrderInput') deleteOrderInput: DeleteOrderInput) {
    return this.orderService.deleteOrder(deleteOrderInput.id);
  }

  @Mutation(() => OrderEntity)
  createOrder(@Args('createOrderInput') createOrderInput: CreateOrderInput) {
    return this.orderService.createOrder(createOrderInput);
  }
}
