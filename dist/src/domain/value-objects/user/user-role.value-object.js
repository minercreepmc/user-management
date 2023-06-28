"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoleValueObject = exports.reviewerRoles = exports.UserRoleEnum = void 0;
const common_base_classes_1 = require("common-base-classes");
var UserRoleEnum;
(function (UserRoleEnum) {
    UserRoleEnum["Guest"] = "guest";
    UserRoleEnum["Member"] = "member";
    UserRoleEnum["Admin"] = "admin";
})(UserRoleEnum = exports.UserRoleEnum || (exports.UserRoleEnum = {}));
exports.reviewerRoles = Object.values(UserRoleEnum);
class UserRoleValueObject extends common_base_classes_1.TextValueObject {
    constructor(value) {
        super(value, UserRoleValueObject.OPTIONS);
    }
    isAdmin() {
        return this.unpack() === UserRoleEnum.Admin;
    }
    isGuess() {
        return this.unpack() === UserRoleEnum.Guest;
    }
    isMember() {
        return this.unpack() === UserRoleEnum.Member;
    }
    static validate(value) {
        return super.validate(value, this.OPTIONS);
    }
    static createAdmin() {
        return new UserRoleValueObject(UserRoleEnum.Admin);
    }
    static createGuest() {
        return new UserRoleValueObject(UserRoleEnum.Guest);
    }
    static createMember() {
        return new UserRoleValueObject(UserRoleEnum.Member);
    }
}
exports.UserRoleValueObject = UserRoleValueObject;
UserRoleValueObject.OPTIONS = {
    allowedValues: exports.reviewerRoles,
};
//# sourceMappingURL=user-role.value-object.js.map