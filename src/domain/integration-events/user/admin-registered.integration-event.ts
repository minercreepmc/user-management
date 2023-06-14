import { IntegrationEventBase } from '@utils/base/domain';
import { AdminRegisteredProtoDetails as AdminRegisteredIntegrationEventDetails } from '@protos/admin-registered';
import { AdminRegisteredDomainEvent } from '@domain-events/user';

export class AdminRegisteredIntegrationEvent extends IntegrationEventBase<AdminRegisteredIntegrationEventDetails> {
  constructor(options: AdminRegisteredDomainEvent) {
    const mappedDetails =
      AdminRegisteredIntegrationEvent.toPrimitiveDetails(options);

    super({
      eventId: options.eventId.unpack(),
      dateOccurred: options.dateOccurred.unpack(),
      entityId: options.entityId.unpack(),
      eventName: AdminRegisteredIntegrationEvent.name,
      fromBoundedContext: 'user-management',
      details: mappedDetails,
    });
  }

  static toPrimitiveDetails(options: AdminRegisteredDomainEvent) {
    const details = {} as AdminRegisteredIntegrationEventDetails;

    if (options.role) {
      details.role = options.role.unpack();
    }

    if (options.email) {
      details.email = options.email.unpack();
    }

    if (options.lastName) {
      details.lastName = options.lastName.unpack();
    }

    if (options.firstName) {
      details.firstName = options.firstName.unpack();
    }

    if (options.username) {
      details.username = options.username.unpack();
    }

    return details;
  }
}
