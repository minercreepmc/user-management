import { PasswordManagementDomainService, UserManagementDomainService } from '@domain-services';
import { JwtService } from '@nestjs/jwt';
import { ProcessBase } from '@use-cases/common';
import { UserEmailValueObject } from '@value-objects/user';
import { SignInDomainOptions } from '../dtos';
export type AuthenticatedResult = {
    accessToken: string;
};
export type AuthenticationPayload = {
    userId: string;
    username: string;
};
export type SignInProcessSuccess = AuthenticatedResult;
export type SignInProcessFailure = Array<any>;
export declare class SignInProcess extends ProcessBase<SignInProcessSuccess, SignInProcessFailure> {
    private readonly userManagementService;
    private readonly passwordManagementService;
    private readonly jwtService;
    constructor(userManagementService: UserManagementDomainService, passwordManagementService: PasswordManagementDomainService, jwtService: JwtService);
    execute(userProvide: SignInDomainOptions): Promise<import("oxide.ts/dist").Result<AuthenticatedResult, SignInProcessFailure>>;
    protected init(): void;
    checkUserMustHaveRegistered(email: UserEmailValueObject): Promise<void>;
    signIn(userProvide: SignInDomainOptions): Promise<void>;
}
