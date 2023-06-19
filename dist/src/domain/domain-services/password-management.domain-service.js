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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
exports.PasswordManagementDomainService = void 0;
const user_1 = require("../domain-exceptions/user");
const _domain_interfaces_1 = require("../interfaces");
const common_1 = require("@nestjs/common");
const password_hashing_domain_service_1 = require("./password-hashing.domain-service");
const user_management_domain_service_1 = require("./user-management.domain-service");
let PasswordManagementDomainService = class PasswordManagementDomainService {
    constructor(userManagementService, passwordHashingService, unitOfWork) {
        this.userManagementService = userManagementService;
        this.passwordHashingService = passwordHashingService;
        this.unitOfWork = unitOfWork;
    }
    authenticateUser(userProvide) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.unitOfWork.runInTransaction(() => __awaiter(this, void 0, void 0, function* () {
                const existingUser = yield this.userManagementService.findUserByEmail(userProvide.email);
                if (!existingUser) {
                    throw new user_1.UserDomainExceptions.EmailDoesNotExist();
                }
                const verified = yield this.passwordHashingService.comparePasswords(userProvide.password, existingUser.hashed);
                if (!verified) {
                    return {
                        isAuthenticated: false,
                    };
                }
                return {
                    isAuthenticated: true,
                    user: existingUser,
                };
            }));
        });
    }
};
PasswordManagementDomainService = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, common_1.Inject)(_domain_interfaces_1.unitOfWorkDiToken)),
    __metadata("design:paramtypes", [user_management_domain_service_1.UserManagementDomainService,
        password_hashing_domain_service_1.PasswordHashingDomainService, Object])
], PasswordManagementDomainService);
exports.PasswordManagementDomainService = PasswordManagementDomainService;
//# sourceMappingURL=password-management.domain-service.js.map