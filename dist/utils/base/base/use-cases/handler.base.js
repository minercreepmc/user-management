"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandlerBase = void 0;
const oxide_ts_1 = require("oxide.ts");
const use_case_exceptions_base_1 = require("./use-case-exceptions.base");
class HandlerBase {
    constructor(validator, mapper, process) {
        this.validator = validator;
        this.mapper = mapper;
        this.process = process;
    }
    handle(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.validator) {
                const dtoValidated = this.validator.validate(dto);
                if (!dtoValidated.isValid) {
                    return (0, oxide_ts_1.Err)(new use_case_exceptions_base_1.UseCaseCommandValidationExceptions(dtoValidated.exceptions));
                }
            }
            const command = this.mapper.toCommand(dto);
            const processResult = yield this.process.execute(command);
            if (processResult.isErr()) {
                return (0, oxide_ts_1.Err)(new use_case_exceptions_base_1.UseCaseProcessExceptions(processResult.unwrapErr()));
            }
            return (0, oxide_ts_1.Ok)(this.mapper.toResponseDto(processResult.unwrap()));
        });
    }
}
exports.HandlerBase = HandlerBase;
//# sourceMappingURL=handler.base.js.map