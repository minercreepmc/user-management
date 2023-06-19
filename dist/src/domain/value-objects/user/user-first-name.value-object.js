"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFirstNameValueObject = void 0;
const common_base_classes_1 = require("common-base-classes");
class UserFirstNameValueObject extends common_base_classes_1.TextValueObject {
    constructor(value) {
        super(value, UserFirstNameValueObject.OPTIONS);
    }
    static validate(value) {
        return super.validate(value, UserFirstNameValueObject.OPTIONS);
    }
}
exports.UserFirstNameValueObject = UserFirstNameValueObject;
UserFirstNameValueObject.OPTIONS = {
    minLength: 2,
    maxLength: 50,
    allowWhitespace: true,
    allowUppercase: true,
    allowLowercase: true,
    allowSymbols: true,
    allowNumber: true,
    allowEmpty: false,
};
//# sourceMappingURL=user-first-name.value-object.js.map