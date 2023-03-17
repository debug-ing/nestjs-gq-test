import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductEntity } from 'src/entites/product.entity';
import { CreateProductInput } from './dto/create-product.input';
import { ProductService } from './product.service';

@Resolver(() => ProductEntity)
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Query(() => [ProductEntity], { name: 'products' })
  findAll() {
    return this.productService.findAll();
  }

  @Query(() => ProductEntity, { name: 'product' })
  findOne(@Args('id', { type: () => String }) userId: string) {
    return this.productService.findOne(userId);
  }

  @Mutation(() => ProductEntity)
  createProduct(
    @Args('createProductInput') createUserInput: CreateProductInput,
  ) {
    return this.productService.create(createUserInput);
  }
}
