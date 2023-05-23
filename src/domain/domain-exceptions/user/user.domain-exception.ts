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

  export class UserNameAlreadyExists extends UserBusinessException {
    readonly message = 'User name already exists';
    readonly code = UserDomainExceptionCodes.UserNameAlreadyExists;
  }
}
