"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterGuestMapper = void 0;
const use_cases_1 = require("../../../../utils/base/use-cases");
const _commands_1 = require("../../../domain/commands");
const common_1 = require("@nestjs/common");
const dtos_1 = require("../dtos");
let RegisterGuestMapper = class RegisterGuestMapper extends use_cases_1.UseCaseMapperBase {
    toCommand() {
        return new _commands_1.RegisterGuestCommand();
    }
    toResponseDto(guestRegistered) {
        let userId;
        let username;
        if (guestRegistered.userId) {
            userId = guestRegistered.userId.unpack();
        }
        if (guestRegistered.username) {
            username = guestRegistered.username.unpack();
        }
        return new dtos_1.RegisterGuestResponseDto({
            userId,
            username,
        });
    }
};
RegisterGuestMapper = __decorate([
    (0, common_1.Injectable)()
], RegisterGuestMapper);
exports.RegisterGuestMapper = RegisterGuestMapper;
//# sourceMappingURL=register-guest.mapper.js.map