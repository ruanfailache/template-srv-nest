import { INestApplication } from '@nestjs/common';

import { BusinessExceptionFilter } from './filters/business-exception.filter';
import { ErrorFilter as DefaultFilter } from './filters/default.filter';
import { HttpExceptionFilter } from './filters/http-exception.filter';

export function configureError(app: INestApplication) {
  app.useGlobalFilters(
    new DefaultFilter(),
    new HttpExceptionFilter(),
    new BusinessExceptionFilter(),
  );
}
