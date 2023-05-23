import {
  TextValueObject,
  TextValueObjectOptions,
  ValidationResponse,
} from 'common-base-classes';

export class UserLastNameValueObject extends TextValueObject {
  constructor(value: string) {
    super(value, UserLastNameValueObject.OPTIONS);
  }

  private static readonly OPTIONS: TextValueObjectOptions = {
    minLength: 2,
    maxLength: 50,
    allowWhitespace: true,
    allowUppercase: true,
    allowLowercase: true,
    allowSymbols: true,
    allowNumber: true,
    allowEmpty: false,
  };

  static validate(value: string): ValidationResponse {
    return super.validate(value, UserLastNameValueObject.OPTIONS);
  }
}
