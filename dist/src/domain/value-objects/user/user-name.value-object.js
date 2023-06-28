"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserNameValueObject = void 0;
const common_base_classes_1 = require("common-base-classes");
class UserNameValueObject extends common_base_classes_1.TextValueObject {
    constructor(value) {
        super(value, UserNameValueObject.OPTIONS);
    }
    static validate(value) {
        return super.validate(value, UserNameValueObject.OPTIONS);
    }
}
exports.UserNameValueObject = UserNameValueObject;
UserNameValueObject.OPTIONS = {
    minLength: 2,
    maxLength: 50,
    allowWhitespace: true,
    allowUppercase: true,
    allowLowercase: true,
    allowSymbols: true,
    allowNumber: true,
    allowEmpty: false,
};
//# sourceMappingURL=user-name.value-object.js.map