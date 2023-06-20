import {
  UserEmailValueObject,
  UserFirstNameValueObject,
  UserLastNameValueObject,
  UserNameValueObject,
  UserPasswordValueObject,
} from '@value-objects/user';

export class RegisterAdminCommand {
  username: UserNameValueObject;
  email: UserEmailValueObject;
  password: UserPasswordValueObject;
  firstName?: UserFirstNameValueObject;
  lastName?: UserLastNameValueObject;

  constructor(dto: RegisterAdminCommand) {
    this.username = dto.username;
    this.email = dto.email;
    this.password = dto.password;
    this.firstName = dto.firstName;
    this.lastName = dto.lastName;
  }
}
