import { DomainExceptionBase } from 'common-base-classes';
import { UserDomainExceptionCodes } from './user.domain-exception-code';

export abstract class UserValidationException extends DomainExceptionBase {}
export abstract class UserBusinessException extends DomainExceptionBase {}

export namespace UserDomainExceptions {
  export class DoesNotExist extends UserBusinessException {
    readonly message = 'User does not exist';
    readonly code = UserDomainExceptionCodes.DoesNotExist;
  }

  export class AlreadyExists extends UserBusinessException {
    readonly message = 'User already exists';
    readonly code = UserDomainExceptionCodes.AlreadyExists;
  }

  export class UsernameAlreadyExists extends UserBusinessException {
    readonly message = 'User name already exists';
    readonly code = UserDomainExceptionCodes.UsernameAlreadyExists;
  }

  export class UsernameDoesNotValid extends UserValidationException {
    readonly message = 'User name does not valid';
    readonly code = UserDomainExceptionCodes.UsernameDoesNotValid;
  }

  export class EmailAlreadyExists extends UserBusinessException {
    readonly message = 'User email already exists';
    readonly code = UserDomainExceptionCodes.EmailAlreadyExists;
  }

  export class EmailDoesNotValid extends UserValidationException {
    readonly message = 'User email does not valid';
    readonly code = UserDomainExceptionCodes.EmailDoesNotValid;
  }

  export class FirstNameDoesNotValid extends UserValidationException {
    readonly message = 'User first name does not valid';
    readonly code = UserDomainExceptionCodes.FirstNameDoesNotValid;
  }

  export class LastNameDoesNotValid extends UserValidationException {
    readonly message = 'User last name does not valid';
    readonly code = UserDomainExceptionCodes.LastNameDoesNotValid;
  }

  export class PasswordDoesNotValid extends UserValidationException {
    readonly message = 'User password does not valid';
    readonly code = UserDomainExceptionCodes.PasswordDoesNotValid;
  }
}
