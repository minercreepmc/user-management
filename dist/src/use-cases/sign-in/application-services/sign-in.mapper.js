"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignInMapper = void 0;
const use_cases_1 = require("../../../../utils/base/use-cases");
const common_1 = require("@nestjs/common");
const user_1 = require("../../../domain/value-objects/user");
let SignInMapper = class SignInMapper extends use_cases_1.UseCaseMapperBase {
    toCommand(dto) {
        const command = {};
        if (dto.email) {
            command.email = new user_1.UserEmailValueObject(dto.email);
        }
        if (dto.password) {
            command.password = new user_1.UserPasswordValueObject(dto.password);
        }
        return command;
    }
    toResponseDto(authenticatedResult) {
        const dto = {};
        if (authenticatedResult.accessToken) {
            dto.access_token = authenticatedResult.accessToken;
        }
        return dto;
    }
};
SignInMapper = __decorate([
    (0, common_1.Injectable)()
], SignInMapper);
exports.SignInMapper = SignInMapper;
//# sourceMappingURL=sign-in.mapper.js.map