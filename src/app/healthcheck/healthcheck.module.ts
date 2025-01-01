import { Module } from '@nestjs/common';

import { CoreModule } from '@/core/core.module';
import { SharedModule } from '@/shared/shared.module';

import { HealthcheckController } from './healthcheck.controller';

@Module({
  imports: [CoreModule, SharedModule],
  controllers: [HealthcheckController],
})
export class HealthcheckModule {}
