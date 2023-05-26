import { AdminRegisteredDomainEvent } from '@domain-events/user';
import { Injectable } from '@nestjs/common';
import {
  UserEmailValueObject,
  UserFirstNameValueObject,
  UserLastNameValueObject,
  UserNameValueObject,
  UserPasswordValueObject,
} from '@value-objects/user';
import {
  RegisterAdminCommand,
  RegisterAdminDomainOptions,
  RegisterAdminResponseDto,
} from '../dtos';

@Injectable()
export class RegisterAdminMapper {
  toDomain(command: RegisterAdminCommand): RegisterAdminDomainOptions {
    const options: RegisterAdminDomainOptions =
      {} as RegisterAdminDomainOptions;

    if (command.username) {
      options.username = new UserNameValueObject(command.username);
    }

    if (command.email) {
      options.email = new UserEmailValueObject(command.email);
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

  toResponseDto(event: AdminRegisteredDomainEvent): RegisterAdminResponseDto {
    const dto: RegisterAdminResponseDto = {} as RegisterAdminResponseDto;

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

    return dto;
  }
}
