import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '@src/app.module';
import { RegisterMemberHttpRequest } from '@controllers/http/register-member';
import {
  generateRandomEmail,
  generateRandomPassword,
  generateRandomUsername,
} from '@utils/functions';
import { GetProfileHttpResponse } from '@controllers/http/get-profile';

describe('GetProfileHttpController', () => {
  let app: INestApplication;
  const profileUrl = '/profile';
  const registerUrl = '/register/member';
  const loginUrl = '/sign-in';

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
    const user: RegisterMemberHttpRequest = {
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

    const body: GetProfileHttpResponse = response.body;

    expect(body.username).toBe(user.username);
    expect(body.userId).toBeDefined();
  });

  // Add more tests here

  afterEach(async () => {
    await app.close();
  });
});
