"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterMemberModule = void 0;
const v1_1 = require("../../interface-adapters/controllers/http/v1");
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const strategy_1 = require("../../interface-adapters/strategy");
const register_member_1 = require("../../use-cases/register-member");
const application_services_1 = require("../../use-cases/register-member/application-services");
const domain_1 = require("../domain");
const database_1 = require("../infrastructures/database");
const v1_2 = require("../../interface-adapters/message-handlers/rmq/v1");
const applicationServices = [
    register_member_1.RegisterMemberHandler,
    application_services_1.RegisterMemberProcess,
    application_services_1.RegisterMemberValidator,
    application_services_1.RegisterMemberMapper,
];
const controllers = [v1_1.V1RegisterMemberHttpController];
const messageHandlers = [v1_2.V1RegisterMemberRmqMessageHandler];
const sharedModules = [cqrs_1.CqrsModule, database_1.DatabaseModule, domain_1.DomainServiceModule];
let RegisterMemberModule = class RegisterMemberModule {
};
RegisterMemberModule = __decorate([
    (0, common_1.Module)({
        imports: [...sharedModules],
        controllers: [...controllers, ...messageHandlers],
        providers: [...applicationServices, strategy_1.JwtStrategy],
    })
], RegisterMemberModule);
exports.RegisterMemberModule = RegisterMemberModule;
//# sourceMappingURL=register-member.module.js.map