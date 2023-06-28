import { ProcessBase } from '@base/use-cases';
import { GuestRegisteredDomainEvent } from '@domain-events/user';
import { UserRegistrationDomainService } from '@domain-services';
import { Injectable } from '@nestjs/common';

export type RegisterGuestProcessSuccess = GuestRegisteredDomainEvent;
export type RegisterGuestProcessFailure = Array<any>;

@Injectable()
export class RegisterGuestProcess extends ProcessBase<
  RegisterGuestProcessSuccess,
  RegisterGuestProcessFailure
> {
  protected async enforceBusinessRules(): Promise<void> {
    //
  }
  protected executeMainTask(): Promise<GuestRegisteredDomainEvent> {
    return this.userRegistrationService.registerGuest();
  }

  constructor(
    private readonly userRegistrationService: UserRegistrationDomainService,
  ) {
    super();
  }
}
