"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserHashedPasswordValueObject = void 0;
const common_base_classes_1 = require("common-base-classes");
class UserHashedPasswordValueObject extends common_base_classes_1.TextValueObject {
    constructor(value) {
        super(value, UserHashedPasswordValueObject.OPTIONS);
    }
    static validate(value) {
        return super.validate(value, UserHashedPasswordValueObject.OPTIONS);
    }
}
exports.UserHashedPasswordValueObject = UserHashedPasswordValueObject;
UserHashedPasswordValueObject.OPTIONS = {
    minLength: 1,
    maxLength: Number.MAX_SAFE_INTEGER,
    allowWhitespace: true,
    allowUppercase: true,
    allowLowercase: true,
    allowSymbols: true,
    allowNumber: true,
    allowEmpty: false,
};
//# sourceMappingURL=hashed-password.value-object.js.map