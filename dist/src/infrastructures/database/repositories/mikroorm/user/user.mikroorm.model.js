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
exports.UserMikroOrmModel = void 0;
const core_1 = require("@mikro-orm/core");
const mikroorm_1 = require("../../../../../../utils/base/database/repositories/mikroorm");
let UserMikroOrmModel = class UserMikroOrmModel extends mikroorm_1.MikroOrmModelBase {
    constructor(props) {
        super(props);
        Object.assign(this, props);
    }
};
__decorate([
    (0, core_1.Property)(),
    __metadata("design:type", String)
], UserMikroOrmModel.prototype, "username", void 0);
__decorate([
    (0, core_1.Property)({ nullable: true }),
    __metadata("design:type", String)
], UserMikroOrmModel.prototype, "email", void 0);
__decorate([
    (0, core_1.Property)({ nullable: true }),
    __metadata("design:type", String)
], UserMikroOrmModel.prototype, "firstName", void 0);
__decorate([
    (0, core_1.Property)({ nullable: true }),
    __metadata("design:type", String)
], UserMikroOrmModel.prototype, "lastName", void 0);
__decorate([
    (0, core_1.Property)(),
    __metadata("design:type", String)
], UserMikroOrmModel.prototype, "hashed", void 0);
__decorate([
    (0, core_1.Property)({}),
    __metadata("design:type", String)
], UserMikroOrmModel.prototype, "role", void 0);
UserMikroOrmModel = __decorate([
    (0, core_1.Entity)({
        tableName: 'users',
    }),
    __metadata("design:paramtypes", [UserMikroOrmModel])
], UserMikroOrmModel);
exports.UserMikroOrmModel = UserMikroOrmModel;
//# sourceMappingURL=user.mikroorm.model.js.map