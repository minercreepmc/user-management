import { ProcessBase } from '@base/use-cases';
import { GuestRegisteredDomainEvent } from '@domain-events/user';
import { UserRegistrationDomainService } from '@domain-services';
export type RegisterGuestProcessSuccess = GuestRegisteredDomainEvent;
export type RegisterGuestProcessFailure = Array<any>;
export declare class RegisterGuestProcess extends ProcessBase<RegisterGuestProcessSuccess, RegisterGuestProcessFailure> {
    private readonly userRegistrationService;
    protected enforceBusinessRules(): Promise<void>;
    protected executeMainTask(): Promise<GuestRegisteredDomainEvent>;
    constructor(userRegistrationService: UserRegistrationDomainService);
}
