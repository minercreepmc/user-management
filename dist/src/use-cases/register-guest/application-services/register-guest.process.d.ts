import { GuestRegisteredDomainEvent } from '@domain-events/user';
import { UserRegistrationDomainService } from '@domain-services';
import { ProcessBase } from '@use-cases/common';
export type RegisterGuestProcessSuccess = GuestRegisteredDomainEvent;
export type RegisterGuestProcessFailure = Array<any>;
export declare class RegisterGuestProcess extends ProcessBase<RegisterGuestProcessSuccess, RegisterGuestProcessFailure> {
    private readonly userRegistration;
    constructor(userRegistration: UserRegistrationDomainService);
    execute(): Promise<import("oxide.ts/dist").Result<GuestRegisteredDomainEvent, RegisterGuestProcessFailure>>;
    protected init(): void;
    private registerGuest;
}
