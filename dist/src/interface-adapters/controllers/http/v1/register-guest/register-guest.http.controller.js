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
exports.V1RegisterGuestHttpController = void 0;
const http_1 = require("../../../../../../utils/base/interface-adapters/http");
const common_1 = require("@nestjs/common");
const dtos_1 = require("../../../../../use-cases/register-guest/dtos");
const nestjs_mediator_1 = require("nestjs-mediator");
const register_guest_http_request_1 = require("./register-guest.http.request");
const register_guest_http_response_1 = require("./register-guest.http.response");
let V1RegisterGuestHttpController = class V1RegisterGuestHttpController extends http_1.HttpPostControllerBase {
    constructor(mediator) {
        super(mediator);
    }
    execute(dto) {
        const _super = Object.create(null, {
            execute: { get: () => super.execute }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return _super.execute.call(this, dto);
        });
    }
    createDto(httpRequest) {
        return new dtos_1.RegisterGuestRequestDto(httpRequest);
    }
    createHttpResponse(response) {
        return new register_guest_http_response_1.V1RegisterGuestHttpResponse(response);
    }
};
__decorate([
    (0, common_1.Post)('/guest'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_guest_http_request_1.V1RegisterGuestHttpRequest]),
    __metadata("design:returntype", Promise)
], V1RegisterGuestHttpController.prototype, "execute", null);
V1RegisterGuestHttpController = __decorate([
    (0, common_1.Controller)('/api/v1/register'),
    __metadata("design:paramtypes", [nestjs_mediator_1.Mediator])
], V1RegisterGuestHttpController);
exports.V1RegisterGuestHttpController = V1RegisterGuestHttpController;
//# sourceMappingURL=register-guest.http.controller.js.map