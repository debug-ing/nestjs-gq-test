import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('product')
@ObjectType()
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String, { description: 'id of the product' })
  id: string;

  @Column()
  @Field(() => String, { description: 'name of product' })
  name: string;

  @Column()
  @Field(() => String, { description: 'description of product' })
  description: string;

  @Column('decimal')
  @Field(() => Int, { description: 'price of product' })
  price: number;
}
