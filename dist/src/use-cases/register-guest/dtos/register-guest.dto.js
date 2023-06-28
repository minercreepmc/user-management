"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterGuestResponseDto = exports.RegisterGuestRequestDto = void 0;
const use_cases_1 = require("../../../../utils/base/use-cases");
class RegisterGuestRequestDto extends use_cases_1.RequestDtoBase {
    constructor(dto) {
        super();
    }
}
exports.RegisterGuestRequestDto = RegisterGuestRequestDto;
class RegisterGuestResponseDto extends use_cases_1.ResponseDtoBase {
    constructor(dto) {
        super();
        this.userId = dto.userId;
        this.username = dto.username;
    }
}
exports.RegisterGuestResponseDto = RegisterGuestResponseDto;
//# sourceMappingURL=register-guest.dto.js.map