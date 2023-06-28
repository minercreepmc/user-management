import { BusinessRulesEnforcer } from '@base/use-cases';
import { UserDomainExceptions } from '@domain-exceptions/user';
import { UserManagementDomainService, UserVerificationDomainService } from '@domain-services';
import { UserEmailValueObject, UserNameValueObject } from '@value-objects/user';
export type UserProcessFailure = Array<UserDomainExceptions.UsernameAlreadyExists | UserDomainExceptions.EmailAlreadyExists | UserDomainExceptions.CredentialDoesNotValid>;
export declare class UserBusinessEnforcer<Failures extends UserProcessFailure> extends BusinessRulesEnforcer<Failures> {
    private readonly userVerificationService;
    private readonly userManagementService;
    constructor(userVerificationService: UserVerificationDomainService, userManagementService: UserManagementDomainService);
    usernameMustBeUnique(username: UserNameValueObject): Promise<void>;
    emailMustBeUnique(email: UserEmailValueObject): Promise<void>;
    userMustHaveRegistered(email: UserEmailValueObject): Promise<void>;
}
