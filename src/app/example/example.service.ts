import { Injectable, Logger } from '@nestjs/common';

import { ExampleRepository } from '@/core/database/repositories/example.repository';

import { ExampleMapper } from './mappers/example.mapper';
import { CreateExampleRequest } from './requests/create-example.request';

@Injectable()
export class ExampleService {
  private readonly logger = new Logger(ExampleService.name);

  constructor(
    private readonly exampleRepository: ExampleRepository,
    private readonly exampleMapper: ExampleMapper,
  ) {}

  async create(request: CreateExampleRequest) {
    this.logger.log('Criando um exemplo');
    const example = await this.exampleRepository.create(request);
    this.logger.log('Mapeando exemplo criado');
    return this.exampleMapper.ofEntity(example);
  }

  async findAll() {
    this.logger.log('Buscando exemplos');
    const examples = await this.exampleRepository.findAll();
    this.logger.log('Mapeando exemplos encontrados');
    return examples.map((example) => this.exampleMapper.ofEntity(example));
  }
}
