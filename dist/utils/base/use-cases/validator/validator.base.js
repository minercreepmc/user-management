"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestValidatorBase = void 0;
const common_base_classes_1 = require("common-base-classes");
class RequestValidatorBase {
    constructor() {
        this.exceptions = new Map();
    }
    validate(requestDto) {
        this.init();
        this._validate(requestDto);
        return this.getValidationResponse();
    }
    translateExceptionToUserFriendlyMessage(options) {
        throw new Error('Method should be overridden in a derived class');
    }
    init() {
        this.clearExceptions();
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
exports.RequestValidatorBase = RequestValidatorBase;
//# sourceMappingURL=validator.base.js.map