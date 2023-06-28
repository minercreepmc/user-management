"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterAdminMapper = void 0;
const use_cases_1 = require("../../../../utils/base/use-cases");
const common_1 = require("@nestjs/common");
const user_1 = require("../../../domain/value-objects/user");
let RegisterAdminMapper = class RegisterAdminMapper extends use_cases_1.UseCaseMapperBase {
    toCommand(dto) {
        const command = {};
        if (dto.username) {
            command.username = new user_1.UserNameValueObject(dto.username);
        }
        if (dto.email) {
            command.email = new user_1.UserEmailValueObject(dto.email);
        }
        if (dto.password) {
            command.password = new user_1.UserPasswordValueObject(dto.password);
        }
        if (dto.firstName) {
            command.firstName = new user_1.UserFirstNameValueObject(dto.firstName);
        }
        if (dto.lastName) {
            command.lastName = new user_1.UserLastNameValueObject(dto.lastName);
        }
        return command;
    }
    toResponseDto(event) {
        const dto = {};
        if (event.username) {
            dto.username = event.username.unpack();
        }
        if (event.email) {
            dto.email = event.email.unpack();
        }
        if (event.firstName) {
            dto.firstName = event.firstName.unpack();
        }
        if (event.lastName) {
            dto.lastName = event.lastName.unpack();
        }
        return dto;
    }
};
RegisterAdminMapper = __decorate([
    (0, common_1.Injectable)()
], RegisterAdminMapper);
exports.RegisterAdminMapper = RegisterAdminMapper;
//# sourceMappingURL=register-admin.mapper.js.map