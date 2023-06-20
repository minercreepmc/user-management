import { Injectable } from '@nestjs/common';
import { UserValidator } from '@use-cases/application-services/validators';
import { ValidationResponse } from 'common-base-classes';
import { RegisterMemberRequestDto } from '../dtos';

@Injectable()
export class RegisterMemberValidator extends UserValidator {
  validate(command: RegisterMemberRequestDto): ValidationResponse {
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
