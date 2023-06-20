import { UseCaseMapperBase } from '@base/use-cases';
import { MemberRegisteredDomainEvent } from '@domain-events/user';
import { Injectable } from '@nestjs/common';
import { RegisterMemberCommand } from '@commands';
import {
  UserFirstNameValueObject,
  UserLastNameValueObject,
  UserNameValueObject,
  UserPasswordValueObject,
} from '@value-objects/user';
import { RegisterMemberRequestDto, RegisterMemberResponseDto } from '../dtos';

@Injectable()
export class RegisterMemberMapper extends UseCaseMapperBase<RegisterMemberResponseDto> {
  toCommand(dto: RegisterMemberRequestDto): RegisterMemberCommand {
    const command: RegisterMemberCommand = {} as RegisterMemberCommand;

    if (dto.username) {
      command.username = new UserNameValueObject(dto.username);
    }

    if (dto.email) {
      command.email = new UserNameValueObject(dto.email);
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
