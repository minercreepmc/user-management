import { GuestRegisteredDomainEvent } from '@domain-events/user';
import { RegisterGuestResponseDto } from '../dtos';
export declare class RegisterGuestMapper {
    toResponseDto(guestRegistered: GuestRegisteredDomainEvent): RegisterGuestResponseDto;
}
