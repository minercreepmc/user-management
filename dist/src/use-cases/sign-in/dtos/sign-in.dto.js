"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignInResponseDto = exports.SignInRequestDto = void 0;
const use_cases_1 = require("../../../../utils/base/use-cases");
class SignInRequestDto extends use_cases_1.RequestDtoBase {
    constructor(dto) {
        super();
        this.username = dto.username;
        this.email = dto.email;
        this.password = dto.password;
    }
}
exports.SignInRequestDto = SignInRequestDto;
class SignInResponseDto extends use_cases_1.ResponseDtoBase {
    constructor(dto) {
        super('logged in successfully');
        this.access_token = dto.access_token;
    }
}
exports.SignInResponseDto = SignInResponseDto;
//# sourceMappingURL=sign-in.dto.js.map