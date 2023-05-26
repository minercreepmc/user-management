import { Injectable } from '@nestjs/common';
import {
  UserEmailValueObject,
  UserPasswordValueObject,
} from '@value-objects/user';
import { SignInCommand, SignInDomainOptions, SignInResponseDto } from '../dtos';
import { AuthenticatedResult } from './sign-in.process';

@Injectable()
export class SignInMapper {
  toDomain(command: SignInCommand): SignInDomainOptions {
    const domainOptions: SignInDomainOptions = {} as SignInDomainOptions;

    if (command.email) {
      domainOptions.email = new UserEmailValueObject(command.email);
    }

    if (command.password) {
      domainOptions.password = new UserPasswordValueObject(command.password);
    }
    return domainOptions;
  }

  toResponseDto(authenticatedResult: AuthenticatedResult): SignInResponseDto {
    const dto: SignInResponseDto = {} as SignInResponseDto;

    if (authenticatedResult.accessToken) {
      dto.access_token = authenticatedResult.accessToken;
    }

    return dto;
  }
}
