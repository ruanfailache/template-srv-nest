import { ApiProperty } from '@nestjs/swagger';

export class ExampleResponse {
  @ApiProperty({
    description: 'Identificador',
    example: '1',
  })
  id: number;

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

export class ExampleResponseBuilder {
  private response = new ExampleResponse();

  setId(id: number): ExampleResponseBuilder {
    this.response.id = id;
    return this;
  }

  setTitle(title: string): ExampleResponseBuilder {
    this.response.title = title;
    return this;
  }

  setDescription(description: string): ExampleResponseBuilder {
    this.response.description = description;
    return this;
  }

  build(): ExampleResponse {
    return this.response;
  }
}
