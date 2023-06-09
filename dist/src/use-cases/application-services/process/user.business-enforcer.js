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
exports.UserBusinessEnforcer = void 0;
const use_cases_1 = require("../../../../utils/base/use-cases");
const user_1 = require("../../../domain/domain-exceptions/user");
const _domain_services_1 = require("../../../domain/domain-services");
const common_1 = require("@nestjs/common");
let UserBusinessEnforcer = class UserBusinessEnforcer extends use_cases_1.BusinessRulesEnforcer {
    constructor(userVerificationService, userManagementService) {
        super();
        this.userVerificationService = userVerificationService;
        this.userManagementService = userManagementService;
    }
    usernameMustBeUnique(username) {
        return __awaiter(this, void 0, void 0, function* () {
            const userNameUnique = yield this.userVerificationService.isUserNameUnique(username);
            if (!userNameUnique) {
                this.exceptions.push(new user_1.UserDomainExceptions.UsernameAlreadyExists());
            }
        });
    }
    emailMustBeUnique(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const userEmailUnique = yield this.userVerificationService.isUserEmailUnique(email);
            if (!userEmailUnique) {
                this.exceptions.push(new user_1.UserDomainExceptions.EmailAlreadyExists());
            }
        });
    }
    userMustHaveRegistered(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userManagementService.findUserByEmail(email);
            if (!user) {
                this.exceptions.push(new user_1.UserDomainExceptions.CredentialDoesNotValid());
            }
        });
    }
};
UserBusinessEnforcer = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [_domain_services_1.UserVerificationDomainService,
        _domain_services_1.UserManagementDomainService])
], UserBusinessEnforcer);
exports.UserBusinessEnforcer = UserBusinessEnforcer;
//# sourceMappingURL=user.business-enforcer.js.map