import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Example } from './entities/example.entity';
import { ExampleRepository } from './repositories/example.repository';

const entities = [Example];

const repositories = [ExampleRepository];

@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  providers: [...repositories],
  exports: [...repositories],
})
export class RepositoryModule {}
