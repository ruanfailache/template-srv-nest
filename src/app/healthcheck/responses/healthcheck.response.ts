import { ApiProperty } from '@nestjs/swagger';

export class HealthcheckResponse {
  @ApiProperty({
    description: 'Indica se a API está funcionando',
  })
  self: boolean;

  @ApiProperty({
    description: 'Indica se as APIs que esta API consome estão funcionando',
  })
  dependencies: Record<string, boolean>;
}
