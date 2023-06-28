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
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1RegisterMemberHttpRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
class V1RegisterMemberHttpRequest {
    constructor(dto) {
        this.username = dto.username;
        this.password = dto.password;
        this.email = dto.email;
        this.firstName = dto.firstName;
        this.lastName = dto.lastName;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'username',
        description: 'Username',
    }),
    __metadata("design:type", String)
], V1RegisterMemberHttpRequest.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'password',
        description: 'Password',
    }),
    __metadata("design:type", String)
], V1RegisterMemberHttpRequest.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'email@example.com',
        description: 'Email',
    }),
    __metadata("design:type", String)
], V1RegisterMemberHttpRequest.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'firstName',
        description: 'First Name',
    }),
    __metadata("design:type", String)
], V1RegisterMemberHttpRequest.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'lastName',
        description: 'Last Name',
    }),
    __metadata("design:type", String)
], V1RegisterMemberHttpRequest.prototype, "lastName", void 0);
exports.V1RegisterMemberHttpRequest = V1RegisterMemberHttpRequest;
//# sourceMappingURL=register-member.http.request.js.map