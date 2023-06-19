"use strict";
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
exports.UserMikroOrmMapper = void 0;
const mikroorm_1 = require("../../../../../../utils/base/database/repositories/mikroorm");
const user_mikroorm_model_1 = require("./user.mikroorm.model");
const user_1 = require("../../../../../domain/aggregates/user");
const user_2 = require("../../../../../domain/value-objects/user");
class UserMikroOrmMapper extends mikroorm_1.MikroOrmMapperBase {
    constructor(passwordHashingService) {
        super(user_1.UserAggregate, user_mikroorm_model_1.UserMikroOrmModel);
        this.passwordHashingService = passwordHashingService;
    }
    toPersistanceDetails(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            const details = {};
            if (entity.role) {
                details.role = entity.role.unpack();
            }
            if (entity.email) {
                details.email = entity.email.unpack();
            }
            if (entity.username) {
                details.username = entity.username.unpack();
            }
            if (entity.firstName) {
                details.firstName = entity.firstName.unpack();
            }
            if (entity.lastName) {
                details.lastName = entity.lastName.unpack();
            }
            if (entity.password) {
                details.hashed = yield this.passwordHashingService.hashPassword(entity.password);
            }
            return details;
        });
    }
    toDomainDetails(ormModel) {
        return __awaiter(this, void 0, void 0, function* () {
            const details = {};
            if (ormModel.email) {
                details.email = new user_2.UserEmailValueObject(ormModel.email);
            }
            if (ormModel.username) {
                details.username = new user_2.UserNameValueObject(ormModel.username);
            }
            if (ormModel.role) {
                details.role = new user_2.UserRoleValueObject(ormModel.role);
            }
            if (ormModel.firstName) {
                details.firstName = new user_2.UserFirstNameValueObject(ormModel.firstName);
            }
            if (ormModel.lastName) {
                details.lastName = new user_2.UserLastNameValueObject(ormModel.lastName);
            }
            if (ormModel.hashed) {
                details.hashed = new user_2.UserHashedPasswordValueObject(ormModel.hashed);
            }
            return details;
        });
    }
}
exports.UserMikroOrmMapper = UserMikroOrmMapper;
//# sourceMappingURL=user.mikroorm.mapper.js.map