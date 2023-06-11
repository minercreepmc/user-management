import { V1RegisterMemberHttpRequest } from '@controllers/http/v1';
import { UserDomainExceptions } from '@domain-exceptions/user';
import { HttpStatus, INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '@src/app.module';
import {
  generateRandomEmail,
  generateRandomFirstName,
  generateRandomLastName,
  generateRandomPassword,
  generateRandomUsername,
  mapDomainExceptionsToObjects,
} from '@utils/functions';
import * as request from 'supertest';

describe('RegisterMemberHttpController', () => {
  let app: INestApplication;
  let existingEmail: string;
  let existingUsername: string;

  const registerMemberUrl = '/api/v1/register/member';

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should not create member if request is invalid', async () => {
    const httpRequest: V1RegisterMemberHttpRequest = {
      username: '',
      password: '',
      email: '',
      firstName: '',
      lastName: '',
    };

    const response = await request(app.getHttpServer())
      .post(registerMemberUrl)
      .send(httpRequest)
      .expect(HttpStatus.UNPROCESSABLE_ENTITY);

    const expectedExceptions = mapDomainExceptionsToObjects([
      new UserDomainExceptions.UsernameDoesNotValid(),
      new UserDomainExceptions.PasswordDoesNotValid(),
      new UserDomainExceptions.EmailDoesNotValid(),
      new UserDomainExceptions.FirstNameDoesNotValid(),
      new UserDomainExceptions.LastNameDoesNotValid(),
    ]);

    expect(response.body.message).toIncludeAllMembers(expectedExceptions);
  });

  it('should not create member if email already exists', async () => {
    existingEmail = generateRandomEmail();

    const httpRequest: V1RegisterMemberHttpRequest = {
      username: generateRandomUsername(),
      password: generateRandomPassword(),
      email: existingEmail,
      firstName: generateRandomFirstName(),
      lastName: generateRandomLastName(),
    };

    await request(app.getHttpServer())
      .post(registerMemberUrl)
      .send({
        username: generateRandomUsername(),
        password: generateRandomPassword(),
        email: existingEmail,
        firstName: generateRandomFirstName(),
        lastName: generateRandomLastName(),
      })
      .expect(HttpStatus.CREATED);

    const response = await request(app.getHttpServer())
      .post(registerMemberUrl)
      .send(httpRequest)
      .expect(HttpStatus.CONFLICT);

    const expectedExceptions = mapDomainExceptionsToObjects([
      new UserDomainExceptions.EmailAlreadyExists(),
    ]);

    expect(response.body.message).toIncludeAllMembers(expectedExceptions);
  });

  it('should not create member if username already exists', async () => {
    existingUsername = generateRandomUsername();

    await request(app.getHttpServer())
      .post(registerMemberUrl)
      .send({
        username: existingUsername,
        password: generateRandomPassword(),
        email: generateRandomEmail(),
        firstName: generateRandomFirstName(),
        lastName: generateRandomLastName(),
      })
      .expect(HttpStatus.CREATED);

    const httpRequest: V1RegisterMemberHttpRequest = {
      username: existingUsername,
      password: generateRandomPassword(),
      email: generateRandomEmail(),
      firstName: generateRandomFirstName(),
      lastName: generateRandomLastName(),
    };

    const response = await request(app.getHttpServer())
      .post(registerMemberUrl)
      .send(httpRequest)
      .expect(HttpStatus.CONFLICT);

    const expectedExceptions = mapDomainExceptionsToObjects([
      new UserDomainExceptions.UsernameAlreadyExists(),
    ]);

    expect(response.body.message).toIncludeAllMembers(expectedExceptions);
  });

  afterEach(async () => {
    await app.close();
  });
});
