import { Injectable } from '@nestjs/common';
import { UserRequestValidator } from '@use-cases/application-services/validators';
import { SignInRequestDto } from '../dtos';

@Injectable()
export class SignInRequestValidator extends UserRequestValidator {
  _validate(command: SignInRequestDto): void {
    const { email, password, username } = command;

    this.validateUserName(username);
    this.validateUserEmail(email);
    this.validateUserPassword(password);
  }
}
