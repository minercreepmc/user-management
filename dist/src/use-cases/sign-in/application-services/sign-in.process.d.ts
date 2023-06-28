import { ProcessBase } from '@base/use-cases';
import { SignInCommand } from '@commands';
import { PasswordManagementDomainService } from '@domain-services';
import { JwtService } from '@nestjs/jwt';
import { UserBusinessEnforcer } from '@use-cases/application-services/process';
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
    private readonly passwordManagementService;
    private readonly jwtService;
    private readonly userBusinessEnforcer;
    protected enforceBusinessRules(command: SignInCommand): Promise<void>;
    protected executeMainTask(command: SignInCommand): Promise<AuthenticatedResult>;
    signIn(userProvide: SignInCommand): Promise<{
        accessToken: string;
    }>;
    constructor(passwordManagementService: PasswordManagementDomainService, jwtService: JwtService, userBusinessEnforcer: UserBusinessEnforcer<SignInProcessFailure>);
}
