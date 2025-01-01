import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';

import { Response } from 'express';

import { BusinessException } from '../exceptions/business.exception';
import { ErrorResponse } from '../responses/error.response';

@Catch(BusinessException)
export class BusinessExceptionFilter implements ExceptionFilter {
  catch(exception: BusinessException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const responseBody = ErrorResponse.ofBusinessException(exception);
    response.status(exception.status).json(responseBody);
  }
}
