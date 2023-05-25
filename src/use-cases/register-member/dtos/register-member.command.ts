import { ICommand } from '@nestjs/cqrs';

export class RegisterMemberCommand implements ICommand {
  username: string;
  password: string;
  email?: string;
  firstName?: string;
  lastName?: string;

  constructor(dtos: RegisterMemberCommand) {
    this.username = dtos.username;
    this.password = dtos.password;
    this.email = dtos.email;
    this.firstName = dtos.firstName;
    this.lastName = dtos.lastName;
  }
}
