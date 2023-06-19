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
const user_1 = require("../../../domain/domain-exceptions/user");
const _domain_services_1 = require("../../../domain/domain-services");
const common_1 = require("@nestjs/common");
const common_2 = require("../../common");
let RegisterMemberProcess = class RegisterMemberProcess extends common_2.ProcessBase {
    constructor(userVerificationService, userRegistrationService) {
        super();
        this.userVerificationService = userVerificationService;
        this.userRegistrationService = userRegistrationService;
    }
    execute(domainOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, email } = domainOptions;
            this.init();
            const conditions = [
                this.checkUsernameMustBeUnique(username),
                this.checkEmailMustBeUnique(email),
            ];
            yield Promise.all(conditions);
            if (this.exceptions.length === 0) {
                yield this.registerMember(domainOptions);
            }
            return this.getValidationResult();
        });
    }
    init() {
        this.clearValue();
        this.clearExceptions();
    }
    checkUsernameMustBeUnique(username) {
        return __awaiter(this, void 0, void 0, function* () {
            const userNameUnique = yield this.userVerificationService.isUserNameUnique(username);
            if (!userNameUnique) {
                this.exceptions.push(new user_1.UserDomainExceptions.UsernameAlreadyExists());
            }
        });
    }
    checkEmailMustBeUnique(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const userEmailUnique = yield this.userVerificationService.isUserEmailUnique(email);
            if (!userEmailUnique) {
                this.exceptions.push(new user_1.UserDomainExceptions.EmailAlreadyExists());
            }
        });
    }
    registerMember(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const memberRegistered = yield this.userRegistrationService.registerMember(options);
            this.value = memberRegistered;
        });
    }
};
RegisterMemberProcess = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [_domain_services_1.UserVerificationDomainService,
        _domain_services_1.UserRegistrationDomainService])
], RegisterMemberProcess);
exports.RegisterMemberProcess = RegisterMemberProcess;
//# sourceMappingURL=register-member.process.js.map