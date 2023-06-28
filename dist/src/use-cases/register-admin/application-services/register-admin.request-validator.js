"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterAdminRequestValidator = void 0;
const common_1 = require("@nestjs/common");
const validators_1 = require("../../application-services/validators");
let RegisterAdminRequestValidator = class RegisterAdminRequestValidator extends validators_1.UserRequestValidator {
    _validate(command) {
        const { email, password, username, lastName, firstName } = command;
        this.validateUserName(username);
        this.validateUserEmail(email);
        this.validateUserPassword(password);
        if (firstName !== undefined) {
            this.validateUserFirstName(firstName);
        }
        if (lastName !== undefined) {
            this.validateUserLastName(lastName);
        }
    }
};
RegisterAdminRequestValidator = __decorate([
    (0, common_1.Injectable)()
], RegisterAdminRequestValidator);
exports.RegisterAdminRequestValidator = RegisterAdminRequestValidator;
//# sourceMappingURL=register-admin.request-validator.js.map