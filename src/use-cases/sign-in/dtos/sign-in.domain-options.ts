import {
  UserEmailValueObject,
  UserPasswordValueObject,
} from '@value-objects/user';

export type SignInDomainOptions = {
  email: UserEmailValueObject;
  password: UserPasswordValueObject;
};
