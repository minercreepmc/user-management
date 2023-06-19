import { MemberRegisteredDomainEvent } from '@domain-events/user';
import { UserRegistrationDomainService, UserVerificationDomainService } from '@domain-services';
import { ProcessBase } from '@use-cases/common';
import { RegisterMemberDomainOptions } from '../dtos';
export type RegisterMemberProcessSuccess = MemberRegisteredDomainEvent;
export type RegisterMemberProcessFailure = Array<any>;
export declare class RegisterMemberProcess extends ProcessBase<RegisterMemberProcessSuccess, RegisterMemberProcessFailure> {
    private readonly userVerificationService;
    private readonly userRegistrationService;
    constructor(userVerificationService: UserVerificationDomainService, userRegistrationService: UserRegistrationDomainService);
    execute(domainOptions: RegisterMemberDomainOptions): Promise<import("oxide.ts/dist").Result<MemberRegisteredDomainEvent, RegisterMemberProcessFailure>>;
    protected init(): void;
    private checkUsernameMustBeUnique;
    private checkEmailMustBeUnique;
    private registerMember;
}
