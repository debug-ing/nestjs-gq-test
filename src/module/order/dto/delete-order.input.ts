import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class DeleteOrderInput {
  @Field(() => String, { description: 'name of product' })
  id: string;
}
