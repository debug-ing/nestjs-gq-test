import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
  @Field(() => String, { description: 'name of product' })
  name: string;

  @Field(() => Int, { description: 'price of product' })
  price: number;

  @Field(() => String, { description: 'description of product' })
  description: string;
}
