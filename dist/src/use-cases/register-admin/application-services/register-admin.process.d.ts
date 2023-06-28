import { ProcessBase } from '@base/use-cases';
import { RegisterAdminCommand } from '@commands';
import { AdminRegisteredDomainEvent } from '@domain-events/user';
import { UserDomainExceptions } from '@domain-exceptions/user';
import { UserManagementDomainService, UserRegistrationDomainService } from '@domain-services';
import { UserBusinessEnforcer } from '@use-cases/application-services/process';
export type RegisterAdminProcessSuccess = AdminRegisteredDomainEvent;
export type RegisterAdminProcessFailure = Array<UserDomainExceptions.EmailAlreadyExists | UserDomainExceptions.UsernameAlreadyExists>;
export declare class RegisterAdminProcess extends ProcessBase<RegisterAdminProcessSuccess, RegisterAdminProcessFailure> {
    private readonly userManagementService;
    private readonly userRegistrationService;
    private readonly userBusinessEnforcer;
    protected enforceBusinessRules(command: RegisterAdminCommand): Promise<void>;
    protected executeMainTask(command: RegisterAdminCommand): Promise<AdminRegisteredDomainEvent>;
    constructor(userManagementService: UserManagementDomainService, userRegistrationService: UserRegistrationDomainService, userBusinessEnforcer: UserBusinessEnforcer<RegisterAdminProcessFailure>);
}
