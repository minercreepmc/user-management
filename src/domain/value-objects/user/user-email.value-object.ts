import {
  TextValueObject,
  TextValueObjectOptions,
  ValidationResponse,
} from 'common-base-classes';
import { emailRegex } from './email-regex';

export class UserEmailValueObject extends TextValueObject {
  constructor(value: string) {
    super(value, UserEmailValueObject.OPTIONS);
  }

  static readonly OPTIONS: TextValueObjectOptions = {
    minLength: 5,
    maxLength: 100,
    allowWhitespace: false,
    allowUppercase: false,
    allowLowercase: true,
    allowNumber: true,
    allowSymbols: true,
    regex: emailRegex,
  };

  static validate(value: string): ValidationResponse {
    return super.validate(value, this.OPTIONS);
  }
}
