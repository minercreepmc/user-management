import { UseCaseMapperBase } from '@base/use-cases';
import { MemberRegisteredDomainEvent } from '@domain-events/user';
import { RegisterMemberCommand } from '@commands';
import { RegisterMemberRequestDto, RegisterMemberResponseDto } from '../dtos';
export declare class RegisterMemberMapper extends UseCaseMapperBase<RegisterMemberResponseDto> {
    toCommand(dto: RegisterMemberRequestDto): RegisterMemberCommand;
    toResponseDto(event: MemberRegisteredDomainEvent): RegisterMemberResponseDto;
}
