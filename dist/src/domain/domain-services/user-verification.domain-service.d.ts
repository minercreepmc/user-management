import { UserRepositoryPort } from '@domain-interfaces';
import { UserEmailValueObject, UserNameValueObject } from '@value-objects/user';
import { RegisterMemberServiceOptions } from './user-registration.domain-serivce';
export declare class UserVerificationDomainService {
    private readonly userRepository;
    constructor(userRepository: UserRepositoryPort);
    verifyUserRegistrationOptions(options: RegisterMemberServiceOptions): Promise<void>;
    isUserEmailUnique(email: UserEmailValueObject): Promise<boolean>;
    isUserNameUnique(username: UserNameValueObject): Promise<boolean>;
    private checkEmailMustBeUnique;
    private checkUserNameMustBeUnique;
}
