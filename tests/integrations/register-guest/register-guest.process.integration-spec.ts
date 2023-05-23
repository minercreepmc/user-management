import { RegisterGuestProcess } from '@use-cases/register-guest/application-services';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '@src/app.module';
import { GuestRegisteredDomainEvent } from '@domain-events/user';

describe('RegisterGuestProcess Integration Spec', () => {
  let registerGuestProcess: RegisterGuestProcess;
  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    registerGuestProcess = moduleFixture.get(RegisterGuestProcess);
  });

  it('should register guest', async () => {
    const result = await registerGuestProcess.execute();

    expect(result.isOk()).toBeTruthy();
    expect(result.unwrap()).toBeInstanceOf(GuestRegisteredDomainEvent);
  });
});
