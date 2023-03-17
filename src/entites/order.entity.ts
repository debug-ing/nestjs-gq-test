import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('order')
@ObjectType()
export class OrderEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String, { description: 'id of the order' })
  id: string;

  @Column()
  @Field(() => String, { description: 'id of the customer' })
  customerId: string;

  @Column('decimal')
  @Field(() => Int, { description: 'price of order' })
  total: number;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  @Field(() => String, { description: 'create time of order' })
  public createdAt: Date;
}
