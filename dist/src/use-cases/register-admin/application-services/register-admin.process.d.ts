import { AdminRegisteredDomainEvent } from '@domain-events/user';
import { UserDomainExceptions } from '@domain-exceptions/user';
import { UserManagementDomainService, UserRegistrationDomainService } from '@domain-services';
import { ProcessBase } from '@use-cases/common';
import { Result } from 'oxide.ts';
import { RegisterAdminDomainOptions } from '../dtos';
export type RegisterAdminProcessSuccess = AdminRegisteredDomainEvent;
export type RegisterAdminProcessFailure = Array<UserDomainExceptions.EmailAlreadyExists | UserDomainExceptions.UsernameAlreadyExists>;
export declare class RegisterAdminProcess extends ProcessBase<RegisterAdminProcessSuccess, RegisterAdminProcessFailure> {
    private readonly userManagementService;
    private readonly userRegistrationService;
    constructor(userManagementService: UserManagementDomainService, userRegistrationService: UserRegistrationDomainService);
    execute(domainOptions: RegisterAdminDomainOptions): Promise<Result<AdminRegisteredDomainEvent, RegisterAdminProcessFailure>>;
    protected init(): void;
    private checkUsernameUniqueness;
    private checkEmailUniqueness;
    private registerAdmin;
}
