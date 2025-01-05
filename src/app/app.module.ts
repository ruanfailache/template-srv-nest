import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { CoreModule } from '@/core/core.module';
import { SharedModule } from '@/shared/shared.module';

import { ExampleModule } from './example/example.module';
import { HealthcheckModule } from './healthcheck/healthcheck.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    CoreModule,
    SharedModule,
    HealthcheckModule,
    ExampleModule,
  ],
})
export class AppModule {}
