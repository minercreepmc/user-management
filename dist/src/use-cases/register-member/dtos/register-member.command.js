"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterMemberCommand = void 0;
class RegisterMemberCommand {
    constructor(dtos) {
        this.username = dtos.username;
        this.password = dtos.password;
        this.email = dtos.email;
        this.firstName = dtos.firstName;
        this.lastName = dtos.lastName;
    }
}
exports.RegisterMemberCommand = RegisterMemberCommand;
//# sourceMappingURL=register-member.command.js.map