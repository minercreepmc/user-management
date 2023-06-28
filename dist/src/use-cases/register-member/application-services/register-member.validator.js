"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterMemberValidator = void 0;
const common_1 = require("@nestjs/common");
const validators_1 = require("../../application-services/validators");
let RegisterMemberValidator = class RegisterMemberValidator extends validators_1.UserValidator {
    validate(command) {
        const { email, password, username, lastName, firstName } = command;
        this.validateUserEmail(email);
        this.validateUserPassword(password);
        this.validateUserName(username);
        if (lastName !== undefined) {
            this.validateUserLastName(lastName);
        }
        if (firstName !== undefined) {
            this.validateUserFirstName(firstName);
        }
        return this.getValidationResponse();
    }
};
RegisterMemberValidator = __decorate([
    (0, common_1.Injectable)()
], RegisterMemberValidator);
exports.RegisterMemberValidator = RegisterMemberValidator;
//# sourceMappingURL=register-member.validator.js.map