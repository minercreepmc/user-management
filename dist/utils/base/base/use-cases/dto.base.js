"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseDtoBase = exports.RequestDtoBase = void 0;
const nestjs_mediator_1 = require("nestjs-mediator");
class RequestDtoBase extends nestjs_mediator_1.Request {
}
exports.RequestDtoBase = RequestDtoBase;
class ResponseDtoBase {
    constructor(message) {
        this.message = message;
    }
}
exports.ResponseDtoBase = ResponseDtoBase;
//# sourceMappingURL=dto.base.js.map