"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserIdValueObject = void 0;
const common_base_classes_1 = require("common-base-classes");
const uuid_1 = require("uuid");
class UserIdValueObject extends common_base_classes_1.ID {
    constructor(value) {
        const id = value ? value : (0, uuid_1.v4)();
        super(id);
    }
}
exports.UserIdValueObject = UserIdValueObject;
//# sourceMappingURL=user-id.value-object.js.map