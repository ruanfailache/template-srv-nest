import { Body, Controller, Get, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOperation,
} from '@nestjs/swagger';

import { ZodValidationPipe } from '@/shared/pipes/zod.pipe';

import { ExampleService } from './example.service';
import {
  CreateExampleRequest,
  CreateExampleSchema,
} from './requests/create-example.request';

@Controller('example')
export class ExampleController {
  constructor(private readonly exampleService: ExampleService) {}

  @Post()
  @ApiOperation({ summary: 'Criar um exemplo' })
  @ApiCreatedResponse({ description: 'Exemplo criado com sucesso' })
  @ApiBadRequestResponse({ description: 'Dados enviados estão incorretos' })
  create(
    @Body(new ZodValidationPipe(CreateExampleSchema))
    request: CreateExampleRequest,
  ) {
    return this.exampleService.create(request);
  }

  @Get()
  findAll() {
    return this.exampleService.findAll();
  }
}
