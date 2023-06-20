import { UseCaseMapperBase } from '@base/use-cases';
import { SignInCommand } from '@commands';
import { Injectable } from '@nestjs/common';
import {
  UserEmailValueObject,
  UserPasswordValueObject,
} from '@value-objects/user';
import { SignInRequestDto, SignInResponseDto } from '../dtos';
import { AuthenticatedResult } from './sign-in.process';

@Injectable()
export class SignInMapper extends UseCaseMapperBase<SignInResponseDto> {
  toCommand(dto: SignInRequestDto): SignInCommand {
    const command: SignInCommand = {} as SignInCommand;

    if (dto.email) {
      command.email = new UserEmailValueObject(dto.email);
    }

    if (dto.password) {
      command.password = new UserPasswordValueObject(dto.password);
    }
    return command;
  }

  toResponseDto(authenticatedResult: AuthenticatedResult): SignInResponseDto {
    const dto: SignInResponseDto = {} as SignInResponseDto;

    if (authenticatedResult.accessToken) {
      dto.access_token = authenticatedResult.accessToken;
    }

    return dto;
  }
}
