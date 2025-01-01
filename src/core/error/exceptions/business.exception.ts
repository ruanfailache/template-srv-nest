import { HttpStatus } from '@nestjs/common';

interface Params {
  status?: HttpStatus;
  causes?: string[];
}

export class BusinessException extends Error {
  readonly code: string;
  readonly status: HttpStatus;
  readonly causes: string[];

  constructor(code: string, message: string, params?: Params) {
    super(message);
    this.code = code;
    this.causes = params.causes ?? [];
    this.status = params.status ?? HttpStatus.BAD_REQUEST;
  }
}
