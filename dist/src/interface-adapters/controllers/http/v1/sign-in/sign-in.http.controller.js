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
exports.V1SignInHttpController = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const common_2 = require("../../../../../use-cases/common");
const dtos_1 = require("../../../../../use-cases/sign-in/dtos");
const oxide_ts_1 = require("oxide.ts");
const sign_in_http_request_1 = require("./sign-in.http.request");
const sign_in_http_response_1 = require("./sign-in.http.response");
let V1SignInHttpController = class V1SignInHttpController {
    constructor(commandBus) {
        this.commandBus = commandBus;
    }
    execute(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const command = new dtos_1.SignInCommand(dto);
            const result = yield this.commandBus.execute(command);
            return (0, oxide_ts_1.match)(result, {
                Ok: (response) => new sign_in_http_response_1.V1SignInHttpResponse(response),
                Err: (exception) => {
                    if (exception instanceof common_2.UseCaseCommandValidationExceptions) {
                        throw new common_1.UnprocessableEntityException(exception.exceptions);
                    }
                    if (exception instanceof common_2.UseCaseProcessExceptions) {
                        throw new common_1.UnauthorizedException(exception.exceptions);
                    }
                    throw exception;
                },
            });
        });
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sign_in_http_request_1.V1SignInHttpRequest]),
    __metadata("design:returntype", Promise)
], V1SignInHttpController.prototype, "execute", null);
V1SignInHttpController = __decorate([
    (0, common_1.Controller)('/api/v1/sign-in'),
    __metadata("design:paramtypes", [cqrs_1.CommandBus])
], V1SignInHttpController);
exports.V1SignInHttpController = V1SignInHttpController;
//# sourceMappingURL=sign-in.http.controller.js.map