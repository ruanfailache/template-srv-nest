import { ApiProperty } from '@nestjs/swagger';

import { BusinessException } from '../exceptions/business.exception';

export class ErrorResponse {
  @ApiProperty({
    description: 'Código do erro',
    example: 'ERR_EXAMPLE_ALREADY_REGISTERED',
  })
  code: string;

  @ApiProperty({
    description: 'Mensagem retornada pelo servidor',
    example: 'Falha ao concluir transação',
  })
  message: string;

  @ApiProperty({
    description: 'Causas do erro',
    examples: [
      'Título não pode ser nulo',
      'Descrição precisa ter ao menos 3 caracteres',
    ],
  })
  causes: string[] = [];

  @ApiProperty({
    description: 'Data/hora do erro',
    example: '2024-12-31',
  })
  timestamp: Date = new Date();

  static ofError(error: Error): ErrorResponse {
    const response = new ErrorResponse();
    response.code = 'ERR_GENERIC';
    response.message = error.message;
    return response;
  }

  static ofBusinessException(exception: BusinessException) {
    const response = new ErrorResponse();
    response.code = exception.code;
    response.message = exception.message;
    response.causes = exception.causes;
    return response;
  }
}
