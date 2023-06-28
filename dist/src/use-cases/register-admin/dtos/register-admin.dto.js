"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterAdminResponseDto = exports.RegisterAdminRequestDto = void 0;
const use_cases_1 = require("../../../../utils/base/use-cases");
class RegisterAdminRequestDto extends use_cases_1.RequestDtoBase {
    constructor(dto) {
        super();
        this.username = dto.username;
        this.email = dto.email;
        this.password = dto.password;
        this.firstName = dto.firstName;
        this.lastName = dto.lastName;
    }
}
exports.RegisterAdminRequestDto = RegisterAdminRequestDto;
class RegisterAdminResponseDto extends use_cases_1.ResponseDtoBase {
    constructor(dto) {
        super('admin registered successfully');
        this.username = dto.username;
        this.email = dto.email;
        this.firstName = dto.firstName;
        this.lastName = dto.lastName;
    }
}
exports.RegisterAdminResponseDto = RegisterAdminResponseDto;
//# sourceMappingURL=register-admin.dto.js.map