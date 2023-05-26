import { Injectable } from '@nestjs/common';
import { UserValidator } from '@use-cases/common/application-services/validators';
import { ValidationResponse } from 'common-base-classes';
import { RegisterMemberCommand } from '../dtos';

@Injectable()
export class RegisterMemberValidator extends UserValidator {
  validate(command: RegisterMemberCommand): ValidationResponse {
    const { email, password, username, lastName, firstName } = command;

    this.validateUserEmail(email);
    this.validateUserPassword(password);
    this.validateUserName(username);

    if (lastName !== undefined) {
      this.validateUserLastName(lastName);
    }

    if (firstName !== undefined) {
      this.validateUserFirstName(firstName);
    }

    return this.getValidationResponse();
  }
}
