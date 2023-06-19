import { RegisterUserAggregateOptions } from '@aggregates/user/user.aggregate.interface';
import { UnitOfWorkPort, UserRepositoryPort } from '@domain-interfaces';
import { UserVerificationDomainService } from './user-verification.domain-service';
export type RegisterMemberServiceOptions = RegisterUserAggregateOptions;
export type RegisterAdminServiceOptions = RegisterUserAggregateOptions;
export declare class UserRegistrationDomainService {
    private readonly userVerificationService;
    private readonly userRepository;
    private readonly unitOfWork;
    constructor(userVerificationService: UserVerificationDomainService, userRepository: UserRepositoryPort, unitOfWork: UnitOfWorkPort);
    registerGuest(): Promise<import("../domain-events/user").GuestRegisteredDomainEvent>;
    registerMember(options: RegisterMemberServiceOptions): Promise<import("../domain-events/user").MemberRegisteredDomainEvent>;
    registerAdmin(options: RegisterAdminServiceOptions): Promise<import("../domain-events/user").AdminRegisteredDomainEvent>;
}
