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
var UserMikroOrmRepository_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMikroOrmRepository = void 0;
const _domain_services_1 = require("../../../../../domain/domain-services");
const postgresql_1 = require("@mikro-orm/postgresql");
const common_1 = require("@nestjs/common");
const mikroorm_1 = require("../../../../../../utils/base/database/repositories/mikroorm");
const user_mikroorm_mapper_1 = require("./user.mikroorm.mapper");
const user_mikroorm_model_1 = require("./user.mikroorm.model");
const user_mikroorm_query_mapper_1 = require("./user.mikroorm.query-mapper");
let UserMikroOrmRepository = UserMikroOrmRepository_1 = class UserMikroOrmRepository extends mikroorm_1.MikroOrmRepositoryBase {
    constructor(entityManager, passwordHashingService) {
        super(entityManager, new user_mikroorm_mapper_1.UserMikroOrmMapper(passwordHashingService), new user_mikroorm_query_mapper_1.UserMikroOrmQueryMapper(), user_mikroorm_model_1.UserMikroOrmModel, new common_1.Logger(UserMikroOrmRepository_1.name));
    }
    findOneByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.findOne({ email });
        });
    }
    findOneByUsername(username) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.findOne({ username });
        });
    }
};
UserMikroOrmRepository = UserMikroOrmRepository_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [postgresql_1.EntityManager,
        _domain_services_1.PasswordHashingDomainService])
], UserMikroOrmRepository);
exports.UserMikroOrmRepository = UserMikroOrmRepository;
//# sourceMappingURL=user.mikroorm.repository.js.map