import {
  UserEmailValueObject,
  UserNameValueObject,
  UserPasswordValueObject,
} from '@value-objects/user';

export class SignInCommand {
  username: UserNameValueObject;
  email: UserEmailValueObject;
  password: UserPasswordValueObject;
  constructor(dto: SignInCommand) {
    this.username = dto.username;
    this.email = dto.email;
    this.password = dto.password;
  }
}
