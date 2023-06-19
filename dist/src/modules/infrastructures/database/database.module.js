"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const _domain_interfaces_1 = require("../../../domain/interfaces");
const user_1 = require("../../../infrastructures/database/repositories/mikroorm/user");
const nestjs_1 = require("@mikro-orm/nestjs");
const mikrorm_config_1 = require("../../../../config/mikroorm/mikrorm.config");
const _domain_services_1 = require("../../../domain/domain-services");
const unit_of_work_1 = require("../../../../utils/base/database/unit-of-work");
const outbox_1 = require("../../../../utils/base/database/outbox");
const ipc_1 = require("../ipc");
const repositories = [
    {
        provide: _domain_interfaces_1.userRepositoryDiToken,
        useClass: user_1.UserMikroOrmRepository,
    },
    {
        provide: _domain_interfaces_1.unitOfWorkDiToken,
        useClass: unit_of_work_1.MikroOrmUnitOfWork,
    },
];
let DatabaseModule = class DatabaseModule {
};
DatabaseModule = __decorate([
    (0, common_1.Module)({
        imports: [nestjs_1.MikroOrmModule.forRoot(mikrorm_config_1.default), ipc_1.IpcModule],
        providers: [...repositories, _domain_services_1.PasswordHashingDomainService, outbox_1.OutboxService],
        exports: [...repositories],
    })
], DatabaseModule);
exports.DatabaseModule = DatabaseModule;
//# sourceMappingURL=database.module.js.map