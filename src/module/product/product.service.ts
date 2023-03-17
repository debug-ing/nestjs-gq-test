import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from 'src/entites/product.entity';
import { In, Repository } from 'typeorm';
import { CreateProductInput } from './dto/create-product.input';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private productRepository: Repository<ProductEntity>,
  ) {}

  async findAll(): Promise<ProductEntity[]> {
    return await this.productRepository.find();
  }

  async findOne(id: string): Promise<ProductEntity> {
    const user = await this.productRepository.findOne({
      where: {
        id,
      },
    });
    if (!user) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return user;
  }

  async create(input: CreateProductInput): Promise<ProductEntity> {
    return await this.productRepository.save(input);
  }

  async sumPrice(id: string[]): Promise<number> {
    const sumPrice = await this.productRepository.sum('price', {
      id: In(id),
    });
    return sumPrice;
  }
}
