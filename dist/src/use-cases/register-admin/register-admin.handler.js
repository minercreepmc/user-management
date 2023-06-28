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
exports.RegisterAdminHandler = void 0;
const use_cases_1 = require("../../../utils/base/use-cases");
const nestjs_mediator_1 = require("nestjs-mediator");
const application_services_1 = require("./application-services");
const dtos_1 = require("./dtos");
let RegisterAdminHandler = class RegisterAdminHandler extends use_cases_1.HandlerBase {
    constructor(validator, process, mapper) {
        super(validator, mapper, process);
    }
};
RegisterAdminHandler = __decorate([
    (0, nestjs_mediator_1.RequestHandler)(dtos_1.RegisterAdminRequestDto),
    __metadata("design:paramtypes", [application_services_1.RegisterAdminRequestValidator,
        application_services_1.RegisterAdminProcess,
        application_services_1.RegisterAdminMapper])
], RegisterAdminHandler);
exports.RegisterAdminHandler = RegisterAdminHandler;
//# sourceMappingURL=register-admin.handler.js.map