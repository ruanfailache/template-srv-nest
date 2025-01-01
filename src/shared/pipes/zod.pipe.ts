import { PipeTransform, Injectable, HttpStatus } from '@nestjs/common';

import { ZodError, ZodSchema } from 'zod';

import { BusinessException } from '@/core/error/exceptions/business.exception';

@Injectable()
export class ZodValidationPipe implements PipeTransform {
  constructor(private readonly schema: ZodSchema<unknown>) {}

  transform(value: unknown) {
    try {
      return this.schema.parse(value);
    } catch (err) {
      if (err instanceof ZodError) {
        throw new BusinessException(
          'ERR_DATA_VALIDATION',
          'Dados enviados estão incorretos',
          {
            status: HttpStatus.BAD_REQUEST,
            causes: err.errors.map((e) => e.message),
          },
        );
      }
      throw err;
    }
  }
}
