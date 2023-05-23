import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { RegisterGuestHttpResponse } from '@controllers/http/register-guest';
import { AppModule } from '@src/app.module';

describe('RegisterGuestHttpController', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('RegisterGuestHttpController (POST)', async () => {
    const response = await request(app.getHttpServer())
      .post('/register/guest')
      .expect(201);

    const body: RegisterGuestHttpResponse = response.body;

    expect(body).toHaveProperty('username');
    expect(body).toHaveProperty('userId');
  });

  afterEach(async () => {
    await app.close();
  });
});
