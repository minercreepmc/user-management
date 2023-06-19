"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignInModule = void 0;
const v1_1 = require("../../interface-adapters/controllers/http/v1");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const cqrs_1 = require("@nestjs/cqrs");
const jwt_1 = require("@nestjs/jwt");
const strategy_1 = require("../../interface-adapters/strategy");
const sign_in_1 = require("../../use-cases/sign-in");
const application_services_1 = require("../../use-cases/sign-in/application-services");
const domain_1 = require("../domain");
const database_1 = require("../infrastructures/database");
const applicationServices = [
    sign_in_1.SignInHandler,
    application_services_1.SignInProcess,
    application_services_1.SignInValidator,
    application_services_1.SignInMapper,
];
const signInControllers = [v1_1.V1SignInHttpController];
const configService = new config_1.ConfigService();
const sharedModules = [
    cqrs_1.CqrsModule,
    database_1.DatabaseModule,
    domain_1.DomainServiceModule,
    jwt_1.JwtModule.register({
        secret: configService.get('JWT_SECRET'),
        signOptions: {
            expiresIn: '1d',
        },
    }),
];
let SignInModule = class SignInModule {
};
SignInModule = __decorate([
    (0, common_1.Module)({
        imports: [...sharedModules],
        controllers: [...signInControllers],
        providers: [...applicationServices, strategy_1.JwtStrategy],
    })
], SignInModule);
exports.SignInModule = SignInModule;
//# sourceMappingURL=sign-in.module.js.map