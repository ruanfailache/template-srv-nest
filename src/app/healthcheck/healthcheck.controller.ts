import { Controller, Get } from '@nestjs/common';

import { HealthcheckResponse } from './responses/healthcheck.response';

@Controller()
export class HealthcheckController {
  @Get()
  healthcheck(): HealthcheckResponse {
    return {
      self: true,
      dependencies: {},
    };
  }
}
