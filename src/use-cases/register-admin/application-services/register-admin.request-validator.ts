import { Injectable } from '@nestjs/common';
import { UserRequestValidator } from '@use-cases/application-services/validators';
import { RegisterAdminRequestDto } from '../dtos';

@Injectable()
export class RegisterAdminRequestValidator extends UserRequestValidator {
  _validate(command: RegisterAdminRequestDto): void {
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
  }
}
