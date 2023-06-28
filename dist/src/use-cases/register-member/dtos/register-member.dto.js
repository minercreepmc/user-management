"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterMemberResponseDto = exports.RegisterMemberRequestDto = void 0;
const use_cases_1 = require("../../../../utils/base/use-cases");
class RegisterMemberRequestDto extends use_cases_1.RequestDtoBase {
    constructor(dtos) {
        super();
        this.username = dtos.username;
        this.password = dtos.password;
        this.email = dtos.email;
        this.firstName = dtos.firstName;
        this.lastName = dtos.lastName;
    }
}
exports.RegisterMemberRequestDto = RegisterMemberRequestDto;
class RegisterMemberResponseDto extends use_cases_1.ResponseDtoBase {
    constructor(dtos) {
        super('member registered successfully.');
        this.username = dtos.username;
        this.email = dtos.email;
        this.firstName = dtos.firstName;
        this.lastName = dtos.lastName;
    }
}
exports.RegisterMemberResponseDto = RegisterMemberResponseDto;
//# sourceMappingURL=register-member.dto.js.map