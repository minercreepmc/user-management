"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainServiceModule = void 0;
const _domain_services_1 = require("../../domain/domain-services");
const common_1 = require("@nestjs/common");
const database_1 = require("../infrastructures/database");
const ipc_1 = require("../infrastructures/ipc");
let DomainServiceModule = class DomainServiceModule {
};
DomainServiceModule = __decorate([
    (0, common_1.Module)({
        imports: [database_1.DatabaseModule, ipc_1.IpcModule],
        providers: [
            _domain_services_1.PasswordHashingDomainService,
            _domain_services_1.PasswordManagementDomainService,
            _domain_services_1.UserManagementDomainService,
            _domain_services_1.UserRegistrationDomainService,
            _domain_services_1.UserVerificationDomainService,
        ],
        exports: [
            _domain_services_1.PasswordHashingDomainService,
            _domain_services_1.PasswordManagementDomainService,
            _domain_services_1.UserManagementDomainService,
            _domain_services_1.UserRegistrationDomainService,
            _domain_services_1.UserVerificationDomainService,
        ],
    })
], DomainServiceModule);
exports.DomainServiceModule = DomainServiceModule;
//# sourceMappingURL=domain-service.module.js.map