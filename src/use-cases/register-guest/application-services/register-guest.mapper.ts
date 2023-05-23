import { GuestRegisteredDomainEvent } from '@domain-events/user';
import { Injectable } from '@nestjs/common';
import { RegisterGuestResponseDto } from '../dtos';

@Injectable()
export class RegisterGuestMapper {
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
