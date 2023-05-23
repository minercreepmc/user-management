import {
  TextValueObject,
  TextValueObjectOptions,
  ValidationResponse,
} from 'common-base-classes';

export enum UserRoleEnum {
  Guest = 'guest',
  Member = 'member',
  Admin = 'admin',
}

export const reviewerRoles = Object.values(UserRoleEnum);

export class UserRoleValueObject extends TextValueObject {
  constructor(value: string) {
    super(value, UserRoleValueObject.OPTIONS);
  }

  isAdmin(): boolean {
    return this.unpack() === UserRoleEnum.Admin;
  }

  isGuess(): boolean {
    return this.unpack() === UserRoleEnum.Guest;
  }

  isMember(): boolean {
    return this.unpack() === UserRoleEnum.Member;
  }

  static validate(value: string): ValidationResponse {
    return super.validate(value, this.OPTIONS);
  }

  static createAdmin(): UserRoleValueObject {
    return new UserRoleValueObject(UserRoleEnum.Admin);
  }

  static createGuest(): UserRoleValueObject {
    return new UserRoleValueObject(UserRoleEnum.Guest);
  }

  static createMember(): UserRoleValueObject {
    return new UserRoleValueObject(UserRoleEnum.Member);
  }

  private static readonly OPTIONS: TextValueObjectOptions = {
    allowedValues: reviewerRoles,
  };
}
