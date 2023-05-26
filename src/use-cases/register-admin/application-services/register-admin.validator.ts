import { Injectable } from '@nestjs/common';
import { UserValidator } from '@use-cases/common/application-services/validators';
import { ValidationResponse } from 'common-base-classes';
import { RegisterAdminCommand } from '../dtos';

@Injectable()
export class RegisterAdminValidator extends UserValidator {
  validate(command: RegisterAdminCommand): ValidationResponse {
    const { email, password, username, lastName, firstName } = command;

    this.validateUserName(username);
    this.validateUserEmail(email);
    this.validateUserPassword(password);

    if (firstName !== undefined) {
      this.validateUserFirstName(firstName);
    }

    if (lastName !== undefined) {
      this.validateUserLastName(lastName);
    }
    return this.getValidationResponse();
  }
}
