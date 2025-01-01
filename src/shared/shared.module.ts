import { Module } from '@nestjs/common';

const modules = [];

@Module({
  imports: [...modules],
  exports: [...modules],
})
export class SharedModule {}
