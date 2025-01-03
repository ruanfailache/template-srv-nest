import { Example } from '@/core/database/entities/example.entity';

import { CreateExampleRequest } from './requests/create-example.request';

export interface IExampleRepository {
  create(request: CreateExampleRequest): Promise<Example>;

  findAll(): Promise<Example[]>;
}
