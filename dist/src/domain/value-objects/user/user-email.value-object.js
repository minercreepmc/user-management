"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEmailValueObject = void 0;
const common_base_classes_1 = require("common-base-classes");
const email_regex_1 = require("./email-regex");
class UserEmailValueObject extends common_base_classes_1.TextValueObject {
    constructor(value) {
        super(value, UserEmailValueObject.OPTIONS);
    }
    static validate(value) {
        return super.validate(value, this.OPTIONS);
    }
}
exports.UserEmailValueObject = UserEmailValueObject;
UserEmailValueObject.OPTIONS = {
    minLength: 5,
    maxLength: 100,
    allowWhitespace: false,
    allowUppercase: false,
    allowLowercase: true,
    allowNumber: true,
    allowSymbols: true,
    regex: email_regex_1.emailRegex,
};
//# sourceMappingURL=user-email.value-object.js.map