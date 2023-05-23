import { GuestRegisteredDomainEvent } from '@domain-events/user';
import { UserRegistrationDomainService } from '@domain-services';
import { Injectable } from '@nestjs/common';
import { ProcessBase } from '@use-cases/common';

export type RegisterGuestProcessSuccess = GuestRegisteredDomainEvent;
export type RegisterGuestProcessFailure = Array<any>;

@Injectable()
export class RegisterGuestProcess extends ProcessBase<
  RegisterGuestProcessSuccess,
  RegisterGuestProcessFailure
> {
  constructor(
    private readonly userRegistration: UserRegistrationDomainService,
  ) {
    super();
  }

  async execute() {
    this.init();
    await this.registerGuest();

    return this.getValidationResult();
  }
  protected init(): void {
    this.clearValue();
    this.clearExceptions();
  }

  private async registerGuest() {
    try {
      const guestRegistered = await this.userRegistration.registerGuest();
      this.value = guestRegistered;
    } catch (err) {
      this.exceptions.push(err);
    }
  }
}
