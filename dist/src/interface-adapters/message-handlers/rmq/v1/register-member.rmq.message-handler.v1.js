"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1RegisterMemberRmqMessageHandler = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const gateways_1 = require("../../../../../shared/gateways");
const patterns_1 = require("../../../../../shared/patterns");
let V1RegisterMemberRmqMessageHandler = class V1RegisterMemberRmqMessageHandler {
    handle(dto, context) {
        console.log(`Pattern: ${context.getPattern()}`);
    }
};
__decorate([
    (0, microservices_1.MessagePattern)(patterns_1.V1UserPattern.CREATE_MEMBER),
    __param(0, (0, microservices_1.Payload)()),
    __param(1, (0, microservices_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, microservices_1.RmqContext]),
    __metadata("design:returntype", void 0)
], V1RegisterMemberRmqMessageHandler.prototype, "handle", null);
V1RegisterMemberRmqMessageHandler = __decorate([
    (0, common_1.Controller)()
], V1RegisterMemberRmqMessageHandler);
exports.V1RegisterMemberRmqMessageHandler = V1RegisterMemberRmqMessageHandler;
//# sourceMappingURL=register-member.rmq.message-handler.v1.js.map