"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPasswordValueObject = void 0;
const common_base_classes_1 = require("common-base-classes");
class UserPasswordValueObject extends common_base_classes_1.TextValueObject {
    constructor(value) {
        super(value, UserPasswordValueObject.OPTIONS);
    }
    static validate(value) {
        return super.validate(value, UserPasswordValueObject.OPTIONS);
    }
}
exports.UserPasswordValueObject = UserPasswordValueObject;
UserPasswordValueObject.OPTIONS = {
    minLength: 7,
    maxLength: 100,
    allowWhitespace: true,
    allowUppercase: true,
    allowLowercase: true,
    allowSymbols: true,
    allowNumber: true,
    allowEmpty: false,
};
//# sourceMappingURL=user-password.value-object.js.map