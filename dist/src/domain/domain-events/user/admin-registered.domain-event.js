"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminRegisteredDomainEvent = void 0;
const user_1 = require("../../aggregates/user");
const common_base_classes_1 = require("common-base-classes");
class AdminRegisteredDomainEvent extends common_base_classes_1.DomainEvent {
    constructor(options) {
        const { userId, details } = options;
        super({
            entityId: userId,
            eventName: AdminRegisteredDomainEvent.name,
            entityType: user_1.UserAggregate.name,
            eventDetails: details,
        });
    }
    get username() {
        return this.details.username;
    }
    get role() {
        return this.details.role;
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
}
exports.AdminRegisteredDomainEvent = AdminRegisteredDomainEvent;
//# sourceMappingURL=admin-registered.domain-event.js.map