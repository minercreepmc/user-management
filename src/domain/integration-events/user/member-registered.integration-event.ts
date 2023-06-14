import { MemberRegisteredDomainEvent } from '@domain-events/user';
import { MemberRegisteredProtoDetails as MemberRegisteredIntegrationEventDetails } from '@protos/member-registered';
import { IntegrationEventBase } from '@utils/base/domain';

export class MemberRegisteredIntegrationEvent extends IntegrationEventBase<MemberRegisteredIntegrationEventDetails> {
  constructor(options: MemberRegisteredDomainEvent) {
    const mappedDetails =
      MemberRegisteredIntegrationEvent.toPrimitiveDetails(options);

    super({
      eventId: options.eventId.unpack(),
      dateOccurred: options.dateOccurred.unpack(),
      entityId: options.entityId.unpack(),
      eventName: MemberRegisteredIntegrationEvent.name,
      fromBoundedContext: 'user-management',
      details: mappedDetails,
    });
  }

  static toPrimitiveDetails(
    options: MemberRegisteredDomainEvent,
  ): MemberRegisteredIntegrationEventDetails {
    const details = {} as MemberRegisteredIntegrationEventDetails;

    if (options.role) {
      details.role = options.role.unpack();
    }

    if (options.email) {
      details.email = options.email.unpack();
    }

    if (options.firstName) {
      details.firstName = options.firstName.unpack();
    }

    if (options.lastName) {
      details.lastName = options.lastName.unpack();
    }

    if (options.username) {
      details.username = options.username.unpack();
    }

    return details;
  }
}
