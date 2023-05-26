import { Injectable } from '@nestjs/common';
import { UserValidator } from '@use-cases/common/application-services/validators';
import { ValidationResponse } from 'common-base-classes';
import { SignInCommand } from '../dtos';

@Injectable()
export class SignInValidator extends UserValidator {
  validate(command: SignInCommand): ValidationResponse {
    const { email, password, username } = command;

    this.validateUserName(username);
    this.validateUserEmail(email);
    this.validateUserPassword(password);

    return this.getValidationResponse();
  }
}
