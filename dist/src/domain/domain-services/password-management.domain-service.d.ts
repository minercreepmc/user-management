import { UserAggregate } from '@aggregates/user';
import { UnitOfWorkPort } from '@domain-interfaces';
import { UserEmailValueObject, UserPasswordValueObject } from '@value-objects/user';
import { PasswordHashingDomainService } from './password-hashing.domain-service';
import { UserManagementDomainService } from './user-management.domain-service';
export interface VerifyPasswordForEmailOptions {
    email: UserEmailValueObject;
    password: UserPasswordValueObject;
}
export interface AuthenticateUserResult {
    isAuthenticated: boolean;
    user?: UserAggregate;
}
export declare class PasswordManagementDomainService {
    private readonly userManagementService;
    private readonly passwordHashingService;
    private readonly unitOfWork;
    constructor(userManagementService: UserManagementDomainService, passwordHashingService: PasswordHashingDomainService, unitOfWork: UnitOfWorkPort);
    authenticateUser(userProvide: VerifyPasswordForEmailOptions): Promise<AuthenticateUserResult>;
}
