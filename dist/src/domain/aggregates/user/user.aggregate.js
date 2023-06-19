"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAggregate = void 0;
const user_1 = require("../../domain-events/user");
const user_2 = require("../../value-objects/user");
const common_base_classes_1 = require("common-base-classes");
class UserAggregate extends common_base_classes_1.AbstractAggregateRoot {
    constructor(options) {
        const defaultId = new common_base_classes_1.UUID();
        const defaultDetails = {};
        const { id = defaultId, details = defaultDetails } = options !== null && options !== void 0 ? options : {};
        super({ id, details });
    }
    registerGuest() {
        this.username = new user_2.UserNameValueObject('guest');
        this.role = user_2.UserRoleValueObject.createGuest();
        return new user_1.GuestRegisteredDomainEvent({
            userId: this.id,
            details: {
                username: this.username,
                role: this.role,
            },
        });
    }
    registerMember(options) {
        const { username, password, email, firstName, lastName } = options;
        this.username = username;
        this.password = password;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = user_2.UserRoleValueObject.createGuest();
        return new user_1.MemberRegisteredDomainEvent({
            userId: this.id,
            details: {
                username,
                email,
                firstName,
                lastName,
                role: this.role,
            },
        });
    }
    registerAdmin(options) {
        const { username, password, email, firstName, lastName } = options;
        this.username = username;
        this.password = password;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = user_2.UserRoleValueObject.createAdmin();
        return new user_1.AdminRegisteredDomainEvent({
            userId: this.id,
            details: {
                username,
                email,
                firstName,
                lastName,
                role: this.role,
            },
        });
    }
    set username(value) {
        this.details.username = value;
    }
    get username() {
        return this.details.username;
    }
    set password(value) {
        this.details.password = value;
    }
    get password() {
        return this.details.password;
    }
    get hashed() {
        return this.details.hashed;
    }
    set email(value) {
        this.details.email = value;
    }
    get email() {
        return this.details.email;
    }
    set firstName(value) {
        this.details.firstName = value;
    }
    get firstName() {
        return this.details.firstName;
    }
    set lastName(value) {
        this.details.lastName = value;
    }
    get lastName() {
        return this.details.lastName;
    }
    set role(value) {
        this.details.role = value;
    }
    get role() {
        return this.details.role;
    }
}
exports.UserAggregate = UserAggregate;
//# sourceMappingURL=user.aggregate.js.map