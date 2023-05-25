import { MemberRegisteredDomainEvent } from '@domain-events/user';
import { Injectable } from '@nestjs/common';
import {
  UserEmailValueObject,
  UserFirstNameValueObject,
  UserLastNameValueObject,
  UserNameValueObject,
  UserPasswordValueObject,
} from '@value-objects/user';
import {
  RegisterMemberCommand,
  RegisterMemberDomainOptions,
  RegisterMemberResponseDto,
} from '../dtos';

@Injectable()
export class RegisterMemberMapper {
  toDomain(command: RegisterMemberCommand): RegisterMemberDomainOptions {
    const options: RegisterMemberDomainOptions = {};

    if (command.username) {
      options.username = new UserNameValueObject(command.username);
    }

    if (command.email) {
      options.email = new UserNameValueObject(command.email);
    }

    if (command.password) {
      options.password = new UserPasswordValueObject(command.password);
    }

    if (command.firstName) {
      options.firstName = new UserFirstNameValueObject(command.firstName);
    }

    if (command.lastName) {
      options.lastName = new UserLastNameValueObject(command.lastName);
    }

    return options;
  }

  toResponseDto(event: MemberRegisteredDomainEvent): RegisterMemberResponseDto {
    const dto: RegisterMemberResponseDto = {} as RegisterMemberResponseDto;

    if (event.username) {
      dto.username = event.username.unpack();
    }

    if (event.email) {
      dto.email = event.email.unpack();
    }

    if (event.firstName) {
      dto.firstName = event.firstName.unpack();
    }

    if (event.lastName) {
      dto.lastName = event.lastName.unpack();
    }

    return new RegisterMemberResponseDto(dto);
  }
}
