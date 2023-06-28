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
exports.V1RegisterMemberRmqMessageHandler = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const patterns_1 = require("../../../../../shared/patterns");
const dtos_1 = require("../../../../use-cases/register-member/dtos");
const nestjs_mediator_1 = require("nestjs-mediator");
const oxide_ts_1 = require("oxide.ts");
const message_interface_1 = require("../../../../../shared/gateways/message.interface");
const interceptors_1 = require("../../../../../utils/base/interceptors");
const exception_filters_1 = require("../../../../../utils/base/exception-filters");
let V1RegisterMemberRmqMessageHandler = class V1RegisterMemberRmqMessageHandler {
    constructor(mediator) {
        this.mediator = mediator;
    }
    handle(bytes, context) {
        return __awaiter(this, void 0, void 0, function* () {
            const decoded = message_interface_1.Message.decode(bytes.data);
            const dto = new dtos_1.RegisterMemberRequestDto(decoded.content);
            const result = yield this.mediator.send(dto);
            return (0, oxide_ts_1.match)(result, {
                Ok: (response) => {
                    return new dtos_1.RegisterMemberResponseDto(response);
                },
                Err: (error) => {
                    throw new microservices_1.RpcException(error);
                },
            });
        });
    }
};
__decorate([
    (0, microservices_1.MessagePattern)(patterns_1.V1UserPattern.REGISTER_MEMBER),
    (0, common_1.UseInterceptors)(interceptors_1.ResultInterceptor),
    (0, common_1.UseFilters)(new exception_filters_1.MessageExceptionFilter()),
    __param(0, (0, microservices_1.Payload)()),
    __param(1, (0, microservices_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, microservices_1.RmqContext]),
    __metadata("design:returntype", Promise)
], V1RegisterMemberRmqMessageHandler.prototype, "handle", null);
V1RegisterMemberRmqMessageHandler = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [nestjs_mediator_1.Mediator])
], V1RegisterMemberRmqMessageHandler);
exports.V1RegisterMemberRmqMessageHandler = V1RegisterMemberRmqMessageHandler;
//# sourceMappingURL=register-member.rmq.message-handler.v1.js.map