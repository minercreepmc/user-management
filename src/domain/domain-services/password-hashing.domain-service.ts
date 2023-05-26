import { Injectable } from '@nestjs/common';
import {
  UserHashedPasswordValueObject,
  UserPasswordValueObject,
} from '@value-objects/user';
import * as bcrypt from 'bcrypt';

@Injectable()
export class PasswordHashingDomainService {
  async hashPassword(password: UserPasswordValueObject): Promise<string> {
    const salt = await bcrypt.genSalt();
    return bcrypt.hash(password.unpack(), salt);
  }

  async comparePasswords(
    password: UserPasswordValueObject,
    hashedPassword: UserHashedPasswordValueObject,
  ): Promise<boolean> {
    return bcrypt.compare(password.unpack(), hashedPassword.unpack());
  }
}
