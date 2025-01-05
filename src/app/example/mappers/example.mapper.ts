import { Injectable } from '@nestjs/common';

import { Example } from '@/core/database/entities/example.entity';

import {
  ExampleResponse,
  ExampleResponseBuilder,
} from '../responses/example.response';

@Injectable()
export class ExampleMapper {
  ofEntity(entity: Example): ExampleResponse {
    return new ExampleResponseBuilder()
      .setId(entity.id)
      .setTitle(entity.title)
      .setDescription(entity.description)
      .build();
  }
}
