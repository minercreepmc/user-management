"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterAdminMapper = void 0;
const common_1 = require("@nestjs/common");
const user_1 = require("../../../domain/value-objects/user");
let RegisterAdminMapper = class RegisterAdminMapper {
    toDomain(command) {
        const options = {};
        if (command.username) {
            options.username = new user_1.UserNameValueObject(command.username);
        }
        if (command.email) {
            options.email = new user_1.UserEmailValueObject(command.email);
        }
        if (command.password) {
            options.password = new user_1.UserPasswordValueObject(command.password);
        }
        if (command.firstName) {
            options.firstName = new user_1.UserFirstNameValueObject(command.firstName);
        }
        if (command.lastName) {
            options.lastName = new user_1.UserLastNameValueObject(command.lastName);
        }
        return options;
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