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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterMemberHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const common_1 = require("../common");
const oxide_ts_1 = require("oxide.ts");
const application_services_1 = require("./application-services");
const dtos_1 = require("./dtos");
let RegisterMemberHandler = class RegisterMemberHandler {
    constructor(validator, registerMemberProcess, mapper) {
        this.validator = validator;
        this.registerMemberProcess = registerMemberProcess;
        this.mapper = mapper;
    }
    execute(command) {
        return __awaiter(this, void 0, void 0, function* () {
            const commandValidated = this.validator.validate(command);
            if (!commandValidated.isValid) {
                return (0, oxide_ts_1.Err)(new common_1.UseCaseCommandValidationExceptions(commandValidated.exceptions));
            }
            const domainOptions = this.mapper.toDomain(command);
            const registerMemberResult = yield this.registerMemberProcess.execute(domainOptions);
            if (registerMemberResult.isErr()) {
                return (0, oxide_ts_1.Err)(new common_1.UseCaseProcessExceptions(registerMemberResult.unwrapErr()));
            }
            return (0, oxide_ts_1.Ok)(this.mapper.toResponseDto(registerMemberResult.unwrap()));
        });
    }
};
RegisterMemberHandler = __decorate([
    (0, cqrs_1.CommandHandler)(dtos_1.RegisterMemberCommand),
    __metadata("design:paramtypes", [application_services_1.RegisterMemberValidator,
        application_services_1.RegisterMemberProcess,
        application_services_1.RegisterMemberMapper])
], RegisterMemberHandler);
exports.RegisterMemberHandler = RegisterMemberHandler;
//# sourceMappingURL=register-member.handler.js.map