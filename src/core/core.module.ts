import { Module } from '@nestjs/common';

import { DatabaseModule } from './database/database.module';
import { RepositoryModule } from './database/repository.module';

const modules = [DatabaseModule, RepositoryModule];

@Module({
  imports: [...modules],
  exports: [...modules],
})
export class CoreModule {}
