"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterAdminCommand = void 0;
class RegisterAdminCommand {
    constructor(dto) {
        this.username = dto.username;
        this.email = dto.email;
        this.password = dto.password;
        this.firstName = dto.firstName;
        this.lastName = dto.lastName;
    }
}
exports.RegisterAdminCommand = RegisterAdminCommand;
//# sourceMappingURL=register-admin.command.js.map