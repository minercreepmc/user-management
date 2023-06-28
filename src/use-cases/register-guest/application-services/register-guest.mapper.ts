import { UseCaseMapperBase } from '@base/use-cases';
import { RegisterGuestCommand } from '@commands';
import { GuestRegisteredDomainEvent } from '@domain-events/user';
import { Injectable } from '@nestjs/common';
import { RegisterGuestResponseDto } from '../dtos';

@Injectable()
export class RegisterGuestMapper extends UseCaseMapperBase<RegisterGuestResponseDto> {
  toCommand(): RegisterGuestCommand {
    return new RegisterGuestCommand();
  }
  toResponseDto(
    guestRegistered: GuestRegisteredDomainEvent,
  ): RegisterGuestResponseDto {
    let userId: string;
    let username: string;

    if (guestRegistered.userId) {
      userId = guestRegistered.userId.unpack();
    }

    if (guestRegistered.username) {
      username = guestRegistered.username.unpack();
    }

    return new RegisterGuestResponseDto({
      userId,
      username,
    });
  }
}
