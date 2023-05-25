import { UserDomainExceptions } from '@domain-exceptions/user';
import { ICommand } from '@nestjs/cqrs';
import { TranslateOptions, ValidatorBase } from '@use-cases/common';
import {
  UserEmailValueObject,
  UserFirstNameValueObject,
  UserLastNameValueObject,
  UserNameValueObject,
  UserPasswordValueObject,
} from '@value-objects/user';
import {
  ValidationResponse,
  ValidationExceptionBase,
} from 'common-base-classes';

export abstract class UserValidator extends ValidatorBase {
  abstract validate(command: ICommand): ValidationResponse;
  protected translateExceptionToUserFriendlyMessage(
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
