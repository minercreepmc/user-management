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
exports.HttpPutControllerBase = void 0;
const use_cases_1 = require("../../use-cases");
const common_1 = require("@nestjs/common");
const oxide_ts_1 = require("oxide.ts");
class HttpPutControllerBase {
    constructor(mediator) {
        this.mediator = mediator;
    }
    execute(httpRequest, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const dto = this.createDto(httpRequest, id);
            const result = yield this.mediator.send(dto);
            return (0, oxide_ts_1.match)(result, {
                Ok: (response) => {
                    return this.createHttpResponse(response);
                },
                Err: (exception) => {
                    if (exception instanceof use_cases_1.UseCaseRequestValidationExceptions) {
                        throw new common_1.UnprocessableEntityException(exception.exceptions);
                    }
                    if (exception instanceof use_cases_1.UseCaseProcessExceptions) {
                        throw new common_1.ConflictException(exception.exceptions);
                    }
                    throw new common_1.InternalServerErrorException(exception);
                },
            });
        });
    }
}
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], HttpPutControllerBase.prototype, "execute", null);
exports.HttpPutControllerBase = HttpPutControllerBase;
//# sourceMappingURL=put-controller.base.js.map