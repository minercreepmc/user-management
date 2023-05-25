import { UserDomainExceptions } from '@domain-exceptions/user';
import { UserRepositoryPort } from '@domain-interfaces';
import { UserVerificationDomainService } from '@domain-services';
import { UserEmailValueObject, UserNameValueObject } from '@value-objects/user';
import { MockProxy, mock } from 'jest-mock-extended';
describe('UserVerificationDomainService', () => {
  let service: UserVerificationDomainService;
  let userRepository: MockProxy<UserRepositoryPort>;

  beforeEach(() => {
    userRepository = mock<UserRepositoryPort>();
    service = new UserVerificationDomainService(userRepository);
  });

  describe('verifyUserRegistrationOptions', () => {
    it('should verify unique email and username', async () => {
      const email = new UserEmailValueObject('test@example.com');
      const username = new UserNameValueObject('testuser');

      userRepository.findOneByEmail.mockResolvedValue(null);
      userRepository.findOneByUsername.mockResolvedValue(null);

      await expect(
        service.verifyUserRegistrationOptions({ email, username }),
      ).resolves.toBeUndefined();

      expect(userRepository.findOneByEmail).toHaveBeenCalledWith(email);
      expect(userRepository.findOneByUsername).toHaveBeenCalledWith(username);
    });

    it('should throw an error if email already exists', async () => {
      const email = new UserEmailValueObject('test@example.com');
      const username = new UserNameValueObject('testuser');

      userRepository.findOneByEmail.mockResolvedValue({} as any);

      await expect(
        service.verifyUserRegistrationOptions({ email, username }),
      ).rejects.toThrowError(UserDomainExceptions.EmailAlreadyExists);
    });

    it('should throw an error if username already exists', async () => {
      const email = new UserEmailValueObject('test@example.com');
      const username = new UserNameValueObject('testuser');

      userRepository.findOneByEmail.mockResolvedValue(null);
      userRepository.findOneByUsername.mockResolvedValue({} as any);

      await expect(
        service.verifyUserRegistrationOptions({ email, username }),
      ).rejects.toThrowError(UserDomainExceptions.UsernameAlreadyExists);

      expect(userRepository.findOneByEmail).toHaveBeenCalledWith(email);
      expect(userRepository.findOneByUsername).toHaveBeenCalledWith(username);
    });
  });
});
