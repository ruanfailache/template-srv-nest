import { ApiProperty } from '@nestjs/swagger';

import { z } from 'zod';

export const CreateExampleSchema = z
  .object({
    title: z
      .string({ message: 'O título é obrigatório' })
      .min(3, 'O título precisa ter ao menos 3 caracteres'),
    description: z
      .string({ message: 'A descrição é obrigatória' })
      .min(10, 'A descrição precisa ter ao menos 10 caracteres'),
  })
  .required();

type CreateExampleSchema = typeof CreateExampleSchema;

export class CreateExampleRequest implements z.infer<CreateExampleSchema> {
  @ApiProperty({
    description: 'Título',
    example: 'Linguagens de programação',
  })
  title: string;

  @ApiProperty({
    description: 'Descrição',
    example: 'Java, Javascript, Python',
  })
  description: string;
}
