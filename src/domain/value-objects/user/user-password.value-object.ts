import {
  TextValueObject,
  TextValueObjectOptions,
  ValidationResponse,
} from 'common-base-classes';

export class UserPasswordValueObject extends TextValueObject {
  constructor(value: string) {
    super(value, UserPasswordValueObject.OPTIONS);
  }

  private static readonly OPTIONS: TextValueObjectOptions = {
    minLength: 7,
    maxLength: 100,
    allowWhitespace: true,
    allowUppercase: true,
    allowLowercase: true,
    allowSymbols: true,
    allowNumber: true,
    allowEmpty: false,
  };

  static validate(value: string): ValidationResponse {
    return super.validate(value, UserPasswordValueObject.OPTIONS);
  }
}
