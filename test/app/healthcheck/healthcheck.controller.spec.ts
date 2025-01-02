import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';

import * as request from 'supertest';

import { HealthcheckController } from '@/app/healthcheck/healthcheck.controller';

describe('HealthcheckController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [HealthcheckController],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/ (GET) deve retornar a resposta de healthcheck', () => {
    return request(app.getHttpServer()).get('/').expect(200).expect({
      self: true,
      dependencies: {},
    });
  });
});
