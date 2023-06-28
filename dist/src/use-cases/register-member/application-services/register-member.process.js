"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterMemberProcess = void 0;
const use_cases_1 = require("../../../../utils/base/use-cases");
const _domain_services_1 = require("../../../domain/domain-services");
const common_1 = require("@nestjs/common");
const process_1 = require("../../application-services/process");
let RegisterMemberProcess = class RegisterMemberProcess extends use_cases_1.ProcessBase {
    enforceBusinessRules(command) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, username } = command;
            yield this.userBusinessEnforcer.emailMustBeUnique(email);
            yield this.userBusinessEnforcer.usernameMustBeUnique(username);
        });
    }
    executeMainTask(command) {
        return this.userRegistrationService.registerMember(command);
    }
    constructor(userRegistrationService, userBusinessEnforcer) {
        super({
            businessEnforcer: userBusinessEnforcer,
        });
        this.userRegistrationService = userRegistrationService;
        this.userBusinessEnforcer = userBusinessEnforcer;
    }
};
RegisterMemberProcess = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [_domain_services_1.UserRegistrationDomainService,
        process_1.UserBusinessEnforcer])
], RegisterMemberProcess);
exports.RegisterMemberProcess = RegisterMemberProcess;
//# sourceMappingURL=register-member.process.js.map