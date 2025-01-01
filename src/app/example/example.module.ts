import { Module } from '@nestjs/common';

import { CoreModule } from '@/core/core.module';
import { SharedModule } from '@/shared/shared.module';

import { ExampleController } from './example.controller';
import { ExampleService } from './example.service';
import { ExampleMapper } from './mappers/example.mapper';

@Module({
  imports: [CoreModule, SharedModule],
  controllers: [ExampleController],
  providers: [ExampleService, ExampleMapper],
})
export class ExampleModule {}
