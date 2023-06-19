"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterAdminModule = void 0;
const v1_1 = require("../../interface-adapters/controllers/http/v1");
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const strategy_1 = require("../../interface-adapters/strategy");
const register_admin_1 = require("../../use-cases/register-admin");
const application_services_1 = require("../../use-cases/register-admin/application-services");
const domain_1 = require("../domain");
const database_1 = require("../infrastructures/database");
const applicationServices = [
    register_admin_1.RegisterAdminHandler,
    application_services_1.RegisterAdminProcess,
    application_services_1.RegisterAdminValidator,
    application_services_1.RegisterAdminMapper,
];
const controllers = [v1_1.V1RegisterAdminHttpController];
const sharedModules = [cqrs_1.CqrsModule, database_1.DatabaseModule, domain_1.DomainServiceModule];
let RegisterAdminModule = class RegisterAdminModule {
};
RegisterAdminModule = __decorate([
    (0, common_1.Module)({
        imports: [...sharedModules],
        controllers: [...controllers],
        providers: [...applicationServices, strategy_1.JwtStrategy],
    })
], RegisterAdminModule);
exports.RegisterAdminModule = RegisterAdminModule;
//# sourceMappingURL=register-admin.module.js.map