import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { V1RegisterGuestHttpResponse } from '@controllers/http/v1';
import { AppModule } from '@src/app.module';

describe('RegisterGuestHttpController', () => {
  let app: INestApplication;
  const registerGuestUrl = '/api/v1/register/guest';

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('RegisterGuestHttpController (POST)', async () => {
    const response = await request(app.getHttpServer())
      .post(registerGuestUrl)
      .expect(201);

    const body: V1RegisterGuestHttpResponse = response.body;

    expect(body).toHaveProperty('username');
    expect(body).toHaveProperty('userId');
  });

  afterEach(async () => {
    await app.close();
  });
});
