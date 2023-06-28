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
exports.SignInHandler = void 0;
const use_cases_1 = require("../../../utils/base/use-cases");
const nestjs_mediator_1 = require("nestjs-mediator");
const application_services_1 = require("./application-services");
const dtos_1 = require("./dtos");
let SignInHandler = class SignInHandler extends use_cases_1.HandlerBase {
    constructor(validator, mapper, process) {
        super(validator, mapper, process);
    }
};
SignInHandler = __decorate([
    (0, nestjs_mediator_1.RequestHandler)(dtos_1.SignInRequestDto),
    __metadata("design:paramtypes", [application_services_1.SignInRequestValidator,
        application_services_1.SignInMapper,
        application_services_1.SignInProcess])
], SignInHandler);
exports.SignInHandler = SignInHandler;
//# sourceMappingURL=sign-in.handler.js.map