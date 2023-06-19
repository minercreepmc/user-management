import { MemberRegisteredDomainEvent } from '@domain-events/user';
import { RegisterMemberCommand, RegisterMemberDomainOptions, RegisterMemberResponseDto } from '../dtos';
export declare class RegisterMemberMapper {
    toDomain(command: RegisterMemberCommand): RegisterMemberDomainOptions;
    toResponseDto(event: MemberRegisteredDomainEvent): RegisterMemberResponseDto;
}
