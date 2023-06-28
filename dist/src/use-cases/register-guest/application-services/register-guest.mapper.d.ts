import { UseCaseMapperBase } from '@base/use-cases';
import { RegisterGuestCommand } from '@commands';
import { GuestRegisteredDomainEvent } from '@domain-events/user';
import { RegisterGuestResponseDto } from '../dtos';
export declare class RegisterGuestMapper extends UseCaseMapperBase<RegisterGuestResponseDto> {
    toCommand(): RegisterGuestCommand;
    toResponseDto(guestRegistered: GuestRegisteredDomainEvent): RegisterGuestResponseDto;
}
