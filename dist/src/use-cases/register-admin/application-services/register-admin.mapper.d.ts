import { UseCaseMapperBase } from '@base/use-cases';
import { RegisterAdminCommand } from '@commands';
import { AdminRegisteredDomainEvent } from '@domain-events/user';
import { RegisterAdminRequestDto, RegisterAdminResponseDto } from '../dtos';
export declare class RegisterAdminMapper extends UseCaseMapperBase<RegisterAdminResponseDto> {
    toCommand(dto: RegisterAdminRequestDto): RegisterAdminCommand;
    toResponseDto(event: AdminRegisteredDomainEvent): RegisterAdminResponseDto;
}
