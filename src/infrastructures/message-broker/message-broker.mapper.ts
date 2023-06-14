import {
  AdminRegisteredDomainEvent,
  MemberRegisteredDomainEvent,
} from '@domain-events/user';
import {
  AdminRegisteredIntegrationEvent,
  MemberRegisteredIntegrationEvent,
} from '@integration-events/user';
import { AdminRegisteredProto } from '@protos/admin-registered';
import { MemberRegisteredProto } from '@protos/member-registered';

type DomainEvent = MemberRegisteredDomainEvent | AdminRegisteredDomainEvent;

export class MessageBrokerMapper {
  toEmit(event: DomainEvent) {
    if (event instanceof MemberRegisteredDomainEvent) {
      const mappedEvent = new MemberRegisteredIntegrationEvent(event);
      return {
        pattern: MemberRegisteredProto.constructor.name,
        data: MemberRegisteredProto.encode(mappedEvent),
      };
    }

    if (event instanceof AdminRegisteredDomainEvent) {
      const mappedEvent = new AdminRegisteredIntegrationEvent(event);
      return {
        pattern: AdminRegisteredProto.constructor.name,
        data: AdminRegisteredProto.encode(mappedEvent),
      };
    }

    throw new Error('Unsupported event type');
  }
}
