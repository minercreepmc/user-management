import {
  UserEmailValueObject,
  UserFirstNameValueObject,
  UserLastNameValueObject,
  UserNameValueObject,
  UserPasswordValueObject,
} from '@value-objects/user';

export class RegisterMemberCommand {
  username: UserNameValueObject;
  password: UserPasswordValueObject;
  email?: UserEmailValueObject;
  firstName?: UserFirstNameValueObject;
  lastName?: UserLastNameValueObject;

  constructor(dtos: RegisterMemberCommand) {
    this.username = dtos.username;
    this.password = dtos.password;
    this.email = dtos.email;
    this.firstName = dtos.firstName;
    this.lastName = dtos.lastName;
  }
}
