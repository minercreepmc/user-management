"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseCaseModule = void 0;
const common_1 = require("@nestjs/common");
const get_profile_module_1 = require("./get-profile.module");
const register_admin_module_1 = require("./register-admin.module");
const register_guest_module_1 = require("./register-guest.module");
const register_member_module_1 = require("./register-member.module");
const sign_in_module_1 = require("./sign-in.module");
let UseCaseModule = class UseCaseModule {
};
UseCaseModule = __decorate([
    (0, common_1.Module)({
        imports: [
            register_guest_module_1.RegisterGuestModule,
            register_member_module_1.RegisterMemberModule,
            register_admin_module_1.RegisterAdminModule,
            sign_in_module_1.SignInModule,
            get_profile_module_1.GetProfileModule,
        ],
    })
], UseCaseModule);
exports.UseCaseModule = UseCaseModule;
//# sourceMappingURL=index.js.map