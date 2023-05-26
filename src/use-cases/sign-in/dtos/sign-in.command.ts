import { ICommand } from '@nestjs/cqrs';

export class SignInCommand implements ICommand {
  username: string;
  email: string;
  password: string;
  constructor(dto: SignInCommand) {
    this.username = dto.username;
    this.email = dto.email;
    this.password = dto.password;
  }
}
