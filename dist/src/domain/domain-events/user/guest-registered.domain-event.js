"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuestRegisteredDomainEvent = void 0;
const user_aggregate_1 = require("../../aggregates/user/user.aggregate");
const common_base_classes_1 = require("common-base-classes");
class GuestRegisteredDomainEvent extends common_base_classes_1.DomainEvent {
    constructor(options) {
        const { userId, details } = options;
        super({
            eventName: GuestRegisteredDomainEvent.name,
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
}
exports.GuestRegisteredDomainEvent = GuestRegisteredDomainEvent;
//# sourceMappingURL=guest-registered.domain-event.js.map