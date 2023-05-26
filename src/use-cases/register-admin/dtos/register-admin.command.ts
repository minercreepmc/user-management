import { ICommand } from '@nestjs/cqrs';

export class RegisterAdminCommand implements ICommand {
  username: string;
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;

  constructor(dto: RegisterAdminCommand) {
    this.username = dto.username;
    this.email = dto.email;
    this.password = dto.password;
    this.firstName = dto.firstName;
    this.lastName = dto.lastName;
  }
}
