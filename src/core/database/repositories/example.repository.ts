import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { IExampleRepository } from '@/app/example/example.repository';
import { CreateExampleRequest } from '@/app/example/requests/create-example.request';
import { BusinessException } from '@/core/error/exceptions/business.exception';

import { Example } from '../entities/example.entity';

@Injectable()
export class ExampleRepository implements IExampleRepository {
  constructor(
    @InjectRepository(Example)
    private readonly exampleRepository: Repository<Example>,
  ) {}

  create(request: CreateExampleRequest): Promise<Example> {
    try {
      return this.exampleRepository.save({
        title: request.title,
        description: request.description,
      });
    } catch (err) {
      throw new BusinessException('ERR_CREATE_EXAMPLE', err.message, {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
      });
    }
  }

  findAll(): Promise<Example[]> {
    return this.exampleRepository.find();
  }
}
