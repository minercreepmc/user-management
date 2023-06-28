"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidatorBase = void 0;
const common_base_classes_1 = require("common-base-classes");
class ValidatorBase {
    constructor() {
        this.exceptions = new Map();
    }
    clearExceptions() {
        this.exceptions = new Map();
    }
    handlerValidationResponse(options) {
        const { response, context } = options;
        const { isValid, exceptions } = response;
        if (!isValid) {
            exceptions.forEach((exception) => {
                const userFriendlyException = this.translateExceptionToUserFriendlyMessage({
                    exception,
                    context,
                });
                this.exceptions.set(userFriendlyException.code, userFriendlyException);
            });
        }
    }
    getValidationResponse() {
        if (this.exceptions.size > 0) {
            return common_base_classes_1.ValidationResponse.fail(Array.from(this.exceptions.values()));
        }
        else {
            return common_base_classes_1.ValidationResponse.success();
        }
    }
}
exports.ValidatorBase = ValidatorBase;
//# sourceMappingURL=validator.base.js.map