import { AdminRegisteredDomainEvent } from '@domain-events/user';
import { RegisterAdminCommand, RegisterAdminDomainOptions, RegisterAdminResponseDto } from '../dtos';
export declare class RegisterAdminMapper {
    toDomain(command: RegisterAdminCommand): RegisterAdminDomainOptions;
    toResponseDto(event: AdminRegisteredDomainEvent): RegisterAdminResponseDto;
}
