import { UserRepositoryPort } from '@domain-interfaces';
import { UserEmailValueObject, UserNameValueObject } from '@value-objects/user';
export declare class UserManagementDomainService {
    private readonly userRepository;
    constructor(userRepository: UserRepositoryPort);
    findUserByEmail(email: UserEmailValueObject): Promise<import("../aggregates/user").UserAggregate>;
    findUserByUsername(username: UserNameValueObject): Promise<import("../aggregates/user").UserAggregate>;
}
