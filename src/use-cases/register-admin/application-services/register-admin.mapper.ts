import { UseCaseMapperBase } from '@base/use-cases';
import { RegisterAdminCommand } from '@commands';
import { AdminRegisteredDomainEvent } from '@domain-events/user';
import { Injectable } from '@nestjs/common';
import {
  UserEmailValueObject,
  UserFirstNameValueObject,
  UserLastNameValueObject,
  UserNameValueObject,
  UserPasswordValueObject,
} from '@value-objects/user';
import { RegisterAdminRequestDto, RegisterAdminResponseDto } from '../dtos';

@Injectable()
export class RegisterAdminMapper extends UseCaseMapperBase<RegisterAdminResponseDto> {
  toCommand(dto: RegisterAdminRequestDto): RegisterAdminCommand {
    const command: RegisterAdminCommand = {} as RegisterAdminCommand;

    if (dto.username) {
      command.username = new UserNameValueObject(dto.username);
    }

    if (dto.email) {
      command.email = new UserEmailValueObject(dto.email);
    }

    if (dto.password) {
      command.password = new UserPasswordValueObject(dto.password);
    }

    if (dto.firstName) {
      command.firstName = new UserFirstNameValueObject(dto.firstName);
    }

    if (dto.lastName) {
      command.lastName = new UserLastNameValueObject(dto.lastName);
    }

    return command;
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
