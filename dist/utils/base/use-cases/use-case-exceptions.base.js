"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseCaseProcessExceptions = exports.UseCaseRequestValidationExceptions = exports.HandlerException = void 0;
const common_base_classes_1 = require("common-base-classes");
class HandlerException extends common_base_classes_1.MultipleExceptions {
}
exports.HandlerException = HandlerException;
class UseCaseRequestValidationExceptions extends HandlerException {
}
exports.UseCaseRequestValidationExceptions = UseCaseRequestValidationExceptions;
class UseCaseProcessExceptions extends HandlerException {
}
exports.UseCaseProcessExceptions = UseCaseProcessExceptions;
//# sourceMappingURL=use-case-exceptions.base.js.map