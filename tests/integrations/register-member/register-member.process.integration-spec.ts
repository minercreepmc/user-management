import { MemberRegisteredDomainEvent } from '@domain-events/user';
import { UserDomainExceptions } from '@domain-exceptions/user';
import { UserRepositoryPort } from '@domain-interfaces';
import {
  UserRegistrationDomainService,
  UserVerificationDomainService,
} from '@domain-services';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '@src/app.module';
import { RegisterMemberProcess } from '@use-cases/register-member/application-services';
import { RegisterMemberDomainOptions } from '@use-cases/register-member/dtos';
import {
  UserEmailValueObject,
  UserNameValueObject,
  UserPasswordValueObject,
} from '@value-objects/user';

describe('RegisterMemberProcess Integration Spec', () => {
  let userVerificationService: UserVerificationDomainService;
  let userRegistrationService: UserRegistrationDomainService;
  let registerMemberProcess: RegisterMemberProcess;
  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    userVerificationService = moduleFixture.get(UserVerificationDomainService);
    userRegistrationService = moduleFixture.get(UserRegistrationDomainService);

    registerMemberProcess = new RegisterMemberProcess(
      userVerificationService,
      userRegistrationService,
    );
  });

  it('should not register guest if username already exists', async () => {
    // Assert
    const existingOptions: RegisterMemberDomainOptions = {
      username: new UserNameValueObject('existingUsernameWtf'),
      password: new UserPasswordValueObject('password'),
    };
    const options: RegisterMemberDomainOptions = {
      username: new UserNameValueObject('existingUsernameWtf'),
      password: new UserPasswordValueObject('password'),
    };

    // Act
    await registerMemberProcess.execute(existingOptions);
    const result = await registerMemberProcess.execute(options);

    // Assert
    expect(result.isErr()).toBeTruthy();
    expect(result.unwrap()).toIncludeAllMembers([
      new UserDomainExceptions.UsernameAlreadyExists(),
    ]);
  });

  it('should not register member if email already exists', async () => {
    // Assert
    const existingOptions: RegisterMemberDomainOptions = {
      username: new UserNameValueObject('okeusername'),
      email: new UserEmailValueObject('existingEmail@gmail.com'),
      password: new UserPasswordValueObject('password'),
    };
    const options: RegisterMemberDomainOptions = {
      username: new UserNameValueObject('wtfusername'),
      email: new UserEmailValueObject('existingEmail@gmail.com'),
      password: new UserPasswordValueObject('password'),
    };

    // Act
    await registerMemberProcess.execute(existingOptions);
    const result = await registerMemberProcess.execute(options);

    // Assert
    expect(result.isErr()).toBeTruthy();
    expect(result.unwrap()).toIncludeAllMembers([
      new UserDomainExceptions.EmailAlreadyExists(),
    ]);
  });

  it('should register member', async () => {
    // Assert
    const options: RegisterMemberDomainOptions = {
      username: new UserNameValueObject('stupid_username'),
      email: new UserEmailValueObject('wtf@gmail.com'),
      password: new UserPasswordValueObject('password'),
    };

    // Act
    const result = await registerMemberProcess.execute(options);

    // Assert
    expect(result.isOk()).toBeTruthy();
    expect(result.unwrap()).toBeInstanceOf(MemberRegisteredDomainEvent);
  });
});
