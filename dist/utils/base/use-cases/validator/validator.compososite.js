"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompositeRequestValidator = void 0;
const common_base_classes_1 = require("common-base-classes");
const validator_base_1 = require("./validator.base");
class CompositeRequestValidator extends validator_base_1.RequestValidatorBase {
    constructor() {
        super(...arguments);
        this.validators = new Map();
        this.exceptions = new Map();
    }
    validate(requestDto) {
        this.init();
        this._validate(requestDto);
        this.gatherExceptions();
        return this.getValidationResponse();
    }
    init() {
        super.init();
        for (const validator of this.validators.values()) {
            validator.init();
        }
    }
    addValidator(validator) {
        this.validators.set(validator.constructor.name, validator);
    }
    gatherExceptions() {
        for (const validator of this.validators.values()) {
            for (const [key, value] of validator.exceptions) {
                this.exceptions.set(key, value);
            }
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
exports.CompositeRequestValidator = CompositeRequestValidator;
//# sourceMappingURL=validator.compososite.js.map