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
exports.V1RegisterAdminHttpController = void 0;
const http_1 = require("../../../../../../utils/base/interface-adapters/http");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const guards_1 = require("../../../../guards");
const dtos_1 = require("../../../../../use-cases/register-admin/dtos");
const nestjs_mediator_1 = require("nestjs-mediator");
const register_admin_http_request_1 = require("./register-admin.http.request");
const register_admin_http_response_1 = require("./register-admin.http.response");
let V1RegisterAdminHttpController = class V1RegisterAdminHttpController extends http_1.HttpPostControllerBase {
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
        return new dtos_1.RegisterAdminRequestDto(httpRequest);
    }
    createHttpResponse(response) {
        return new register_admin_http_response_1.V1RegisterAdminHttpResponse(response);
    }
};
__decorate([
    (0, common_1.Post)('/admin'),
    (0, common_1.UseGuards)(guards_1.ApiKeyGuard),
    (0, swagger_1.ApiBearerAuth)('x-api-key'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_admin_http_request_1.V1RegisterAdminHttpRequest]),
    __metadata("design:returntype", Promise)
], V1RegisterAdminHttpController.prototype, "execute", null);
V1RegisterAdminHttpController = __decorate([
    (0, common_1.Controller)('/api/v1/register'),
    __metadata("design:paramtypes", [nestjs_mediator_1.Mediator])
], V1RegisterAdminHttpController);
exports.V1RegisterAdminHttpController = V1RegisterAdminHttpController;
//# sourceMappingURL=register-admin.http.controller.js.map