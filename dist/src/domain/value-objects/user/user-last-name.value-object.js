"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLastNameValueObject = void 0;
const common_base_classes_1 = require("common-base-classes");
class UserLastNameValueObject extends common_base_classes_1.TextValueObject {
    constructor(value) {
        super(value, UserLastNameValueObject.OPTIONS);
    }
    static validate(value) {
        return super.validate(value, UserLastNameValueObject.OPTIONS);
    }
}
exports.UserLastNameValueObject = UserLastNameValueObject;
UserLastNameValueObject.OPTIONS = {
    minLength: 2,
    maxLength: 50,
    allowWhitespace: true,
    allowUppercase: true,
    allowLowercase: true,
    allowSymbols: true,
    allowNumber: true,
    allowEmpty: false,
};
//# sourceMappingURL=user-last-name.value-object.js.map