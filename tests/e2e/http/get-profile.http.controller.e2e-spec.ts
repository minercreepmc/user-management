import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '@src/app.module';
import {
  generateRandomEmail,
  generateRandomPassword,
  generateRandomUsername,
} from '@utils/functions';
import {
  V1GetProfileHttpResponse,
  V1RegisterMemberHttpRequest,
} from '@controllers/http/v1';

describe('GetProfileHttpController', () => {
  let app: INestApplication;
  const profileUrl = '/api/v1/profile';
  const registerUrl = '/api/v1/register/member';
  const loginUrl = '/api/v1/sign-in';

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should not get profile if you not logged in yet', async () => {
    await request(app.getHttpServer()).get(profileUrl).expect(401);
  });

  it('should get profile if you logged in', async () => {
    const user: V1RegisterMemberHttpRequest = {
      username: generateRandomUsername(),
      email: generateRandomEmail(),
      password: generateRandomPassword(),
    };

    await request(app.getHttpServer())
      .post(registerUrl)
      .send(user)
      .expect(HttpStatus.CREATED);

    const signInResponse = await request(app.getHttpServer())
      .post(loginUrl)
      .send(user)
      .expect(HttpStatus.OK);

    const response = await request(app.getHttpServer())
      .get(profileUrl)
      .set('Authorization', `Bearer ${signInResponse.body.access_token}`)
      .expect(HttpStatus.OK);

    const body: V1GetProfileHttpResponse = response.body;

    expect(body.username).toBe(user.username);
    expect(body.userId).toBeDefined();
  });

  // Add more tests here

  afterEach(async () => {
    await app.close();
  });
});
