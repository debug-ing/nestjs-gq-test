import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateOrderInput {
  @Field(() => [String], { description: 'id of the products' })
  productId: string[];

  @Field(() => String, { description: 'id of the products' })
  customerId: string;
}
