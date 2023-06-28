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
exports.MikroOrmModelBase = void 0;
const core_1 = require("@mikro-orm/core");
class MikroOrmModelBase {
    constructor(props) {
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.id = props === null || props === void 0 ? void 0 : props.id;
        this.createdAt = props === null || props === void 0 ? void 0 : props.createdAt;
        this.updatedAt = props === null || props === void 0 ? void 0 : props.updatedAt;
    }
}
__decorate([
    (0, core_1.PrimaryKey)(),
    __metadata("design:type", String)
], MikroOrmModelBase.prototype, "id", void 0);
__decorate([
    (0, core_1.Property)(),
    __metadata("design:type", Date)
], MikroOrmModelBase.prototype, "createdAt", void 0);
__decorate([
    (0, core_1.Property)(),
    __metadata("design:type", Date)
], MikroOrmModelBase.prototype, "updatedAt", void 0);
exports.MikroOrmModelBase = MikroOrmModelBase;
//# sourceMappingURL=mikroorm-model.base.js.map