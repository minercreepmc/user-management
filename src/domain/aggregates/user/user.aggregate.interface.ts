import {
  UserEmailValueObject,
  UserFirstNameValueObject,
  UserHashedPasswordValueObject,
  UserIdValueObject,
  UserLastNameValueObject,
  UserNameValueObject,
  UserPasswordValueObject,
  UserRoleValueObject,
} from '@value-objects/user';

export interface UserAggregateDetails {
  username: UserNameValueObject;
  password?: UserPasswordValueObject;
  hashed?: UserHashedPasswordValueObject;
  email?: UserEmailValueObject;
  firstName?: UserFirstNameValueObject;
  lastName?: UserLastNameValueObject;
  role: UserRoleValueObject;
}

export interface UserAggregateOptions {
  id?: UserIdValueObject;
  details?: UserAggregateDetails;
}

export interface RegisterUserAggregateOptions {
  username?: UserNameValueObject;
  password?: UserPasswordValueObject;
  email?: UserEmailValueObject;
  firstName?: UserFirstNameValueObject;
  lastName?: UserLastNameValueObject;
}
