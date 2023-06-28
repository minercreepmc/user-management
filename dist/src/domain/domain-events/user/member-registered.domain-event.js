"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberRegisteredDomainEvent = void 0;
const user_aggregate_1 = require("../../aggregates/user/user.aggregate");
const common_base_classes_1 = require("common-base-classes");
class MemberRegisteredDomainEvent extends common_base_classes_1.DomainEvent {
    constructor(options) {
        const { userId, details } = options;
        super({
            eventName: MemberRegisteredDomainEvent.name,
            entityType: user_aggregate_1.UserAggregate.name,
            eventDetails: details,
            entityId: userId,
        });
    }
    get userId() {
        return this.entityId;
    }
    get username() {
        return this.details.username;
    }
    get email() {
        return this.details.email;
    }
    get firstName() {
        return this.details.firstName;
    }
    get lastName() {
        return this.details.lastName;
    }
    get role() {
        return this.details.role;
    }
}
exports.MemberRegisteredDomainEvent = MemberRegisteredDomainEvent;
//# sourceMappingURL=member-registered.domain-event.js.map