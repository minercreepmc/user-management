import { Injectable } from '@nestjs/common';
import { UserValidator } from '@use-cases/application-services/validators';
import { ValidationResponse } from 'common-base-classes';
import { SignInRequestDto } from '../dtos';

@Injectable()
export class SignInValidator extends UserValidator {
  validate(command: SignInRequestDto): ValidationResponse {
    const { email, password, username } = command;

    this.validateUserName(username);
    this.validateUserEmail(email);
    this.validateUserPassword(password);

    return this.getValidationResponse();
  }
}
