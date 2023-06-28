import { Injectable } from '@nestjs/common';
import { UserRequestValidator } from '@use-cases/application-services/validators';
import { RegisterMemberRequestDto } from '../dtos';

@Injectable()
export class RegisterMemberValidator extends UserRequestValidator {
  _validate(dto: RegisterMemberRequestDto): void {
    const { email, password, username, lastName, firstName } = dto;

    this.validateUserEmail(email);
    this.validateUserPassword(password);
    this.validateUserName(username);

    if (lastName !== undefined) {
      this.validateUserLastName(lastName);
    }

    if (firstName !== undefined) {
      this.validateUserFirstName(firstName);
    }
  }
}
