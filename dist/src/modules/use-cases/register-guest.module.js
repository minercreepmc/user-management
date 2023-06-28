"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterGuestModule = void 0;
const v1_1 = require("../../interface-adapters/controllers/http/v1");
const common_1 = require("@nestjs/common");
const strategy_1 = require("../../interface-adapters/strategy");
const register_guest_1 = require("../../use-cases/register-guest");
const application_services_1 = require("../../use-cases/register-guest/application-services");
const domain_1 = require("../domain");
const database_1 = require("../infrastructures/database");
const nestjs_mediator_1 = require("nestjs-mediator");
const application_services_module_1 = require("./application-services.module");
const applicationServices = [
    register_guest_1.RegisterGuestHandler,
    application_services_1.RegisterGuestProcess,
    application_services_1.RegisterGuestMapper,
];
const controllers = [v1_1.V1RegisterGuestHttpController];
const sharedModules = [
    domain_1.DomainServiceModule,
    database_1.DatabaseModule,
    nestjs_mediator_1.MediatorModule,
    application_services_module_1.ApplicationServicesModule,
];
let RegisterGuestModule = class RegisterGuestModule {
};
RegisterGuestModule = __decorate([
    (0, common_1.Module)({
        imports: [...sharedModules],
        controllers: [...controllers],
        providers: [...applicationServices, strategy_1.JwtStrategy],
    })
], RegisterGuestModule);
exports.RegisterGuestModule = RegisterGuestModule;
//# sourceMappingURL=register-guest.module.js.map