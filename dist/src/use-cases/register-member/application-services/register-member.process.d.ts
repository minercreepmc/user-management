import { ProcessBase } from '@base/use-cases';
import { RegisterMemberCommand } from '@commands';
import { MemberRegisteredDomainEvent } from '@domain-events/user';
import { UserDomainExceptions } from '@domain-exceptions/user';
import { UserRegistrationDomainService } from '@domain-services';
import { UserBusinessEnforcer } from '@use-cases/application-services/process';
export type RegisterMemberProcessSuccess = MemberRegisteredDomainEvent;
export type RegisterMemberProcessFailure = Array<UserDomainExceptions.UsernameAlreadyExists | UserDomainExceptions.EmailAlreadyExists>;
export declare class RegisterMemberProcess extends ProcessBase<RegisterMemberProcessSuccess, RegisterMemberProcessFailure> {
    private readonly userRegistrationService;
    private readonly userBusinessEnforcer;
    protected enforceBusinessRules(command: RegisterMemberCommand): Promise<void>;
    protected executeMainTask(command: RegisterMemberCommand): Promise<MemberRegisteredDomainEvent>;
    constructor(userRegistrationService: UserRegistrationDomainService, userBusinessEnforcer: UserBusinessEnforcer<RegisterMemberProcessFailure>);
}
