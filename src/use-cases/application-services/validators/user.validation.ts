import { UserDomainExceptions } from '@domain-exceptions/user';
import {
  TranslateOptions,
  RequestValidatorBase,
  RequestDtoBase,
} from '@base/use-cases';
import {
  UserEmailValueObject,
  UserFirstNameValueObject,
  UserLastNameValueObject,
  UserNameValueObject,
  UserPasswordValueObject,
} from '@value-objects/user';
import { ValidationExceptionBase } from 'common-base-classes';

export interface UserRequestDto extends RequestDtoBase<any> {
  email: string;
  password: string;
  username: string;
  firstName: string;
  lastName: string;
}

export class UserRequestValidator extends RequestValidatorBase {
  _validate(dto: UserRequestDto): void {
    throw new Error('Method not implemented.');
  }

  translateExceptionToUserFriendlyMessage(
    options: TranslateOptions,
  ): ValidationExceptionBase {
    const { context, exception } = options;
    switch (context) {
      case UserNameValueObject.name:
        return new UserDomainExceptions.UsernameDoesNotValid();
      case UserEmailValueObject.name:
        return new UserDomainExceptions.EmailDoesNotValid();
      case UserPasswordValueObject.name:
        return new UserDomainExceptions.PasswordDoesNotValid();
      case UserFirstNameValueObject.name:
        return new UserDomainExceptions.FirstNameDoesNotValid();
      case UserLastNameValueObject.name:
        return new UserDomainExceptions.LastNameDoesNotValid();
      default:
        return exception;
    }
  }

  validateUserName(username: string) {
    const response = UserNameValueObject.validate(username);
    this.handlerValidationResponse({
      response,
      context: UserNameValueObject.name,
    });
  }

  validateUserEmail(email: string) {
    const response = UserEmailValueObject.validate(email);
    this.handlerValidationResponse({
      response,
      context: UserEmailValueObject.name,
    });
  }

  validateUserPassword(password: string) {
    const response = UserPasswordValueObject.validate(password);
    this.handlerValidationResponse({
      response,
      context: UserPasswordValueObject.name,
    });
  }

  validateUserFirstName(firstName: string) {
    const response = UserFirstNameValueObject.validate(firstName);
    this.handlerValidationResponse({
      response,
      context: UserFirstNameValueObject.name,
    });
  }

  validateUserLastName(lastName: string) {
    const response = UserLastNameValueObject.validate(lastName);
    this.handlerValidationResponse({
      response,
      context: UserLastNameValueObject.name,
    });
  }
}
