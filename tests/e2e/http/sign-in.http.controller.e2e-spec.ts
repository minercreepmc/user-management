import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import {
  V1SignInHttpRequest,
  V1SignInHttpResponse,
} from '@controllers/http/v1';
import { UserDomainExceptions } from '@domain-exceptions/user';
import {
  generateRandomEmail,
  generateRandomPassword,
  generateRandomUsername,
  mapDomainExceptionsToObjects,
} from '@utils/functions';
import { AppModule } from '@src/app.module';

describe('SignInHttpController', () => {
  let app: INestApplication;
  const signInUrl = '/api/v1/sign-in';
  const registerUrl = '/api/v1/register/member';

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should fail to sign in if either email or password is invalid', async () => {
    const invalidRequest: V1SignInHttpRequest = {
      username: '',
      email: '',
      password: '',
    };

    const response = await request(app.getHttpServer())
      .post(signInUrl)
      .send(invalidRequest)
      .expect(HttpStatus.UNPROCESSABLE_ENTITY);

    const expectedExceptions = mapDomainExceptionsToObjects([
      new UserDomainExceptions.UsernameDoesNotValid(),
      new UserDomainExceptions.EmailDoesNotValid(),
      new UserDomainExceptions.PasswordDoesNotValid(),
    ]);

    expect(response.body.message).toIncludeAllMembers(expectedExceptions);
  });

  it('should fail to sign in if either email or password is incorrect', async () => {
    const invalidRequest: V1SignInHttpRequest = {
      username: generateRandomUsername(),
      email: generateRandomEmail(),
      password: generateRandomPassword(),
    };

    const response = await request(app.getHttpServer())
      .post(signInUrl)
      .send(invalidRequest)
      .expect(HttpStatus.UNAUTHORIZED);

    const expectedExceptions = mapDomainExceptionsToObjects([
      new UserDomainExceptions.CredentialDoesNotValid(),
    ]);

    expect(response.body.message).toIncludeAllMembers(expectedExceptions);
  });

  it('should sign in successfully if email and password are correct', async () => {
    const validRequest: V1SignInHttpRequest = {
      username: generateRandomUsername(),
      email: generateRandomEmail(),
      password: generateRandomPassword(),
    };

    await request(app.getHttpServer())
      .post(registerUrl)
      .send(validRequest)
      .expect(HttpStatus.CREATED);

    const response = await request(app.getHttpServer())
      .post(signInUrl)
      .send(validRequest)
      .expect(HttpStatus.OK);

    const body: V1SignInHttpResponse = response.body;

    expect(body.access_token).toBeDefined();
  });

  // Add more tests here

  afterEach(async () => {
    await app.close();
  });
});
