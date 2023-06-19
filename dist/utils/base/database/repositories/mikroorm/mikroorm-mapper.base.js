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
exports.MikroOrmMapperBase = void 0;
const common_base_classes_1 = require("common-base-classes");
class MikroOrmMapperBase {
    constructor(entityConstructor, ormModelConstructor) {
        this.entityConstructor = entityConstructor;
        this.ormModelConstructor = ormModelConstructor;
    }
    toPersistance(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            const details = yield this.toPersistanceDetails(entity);
            return new this.ormModelConstructor(Object.assign(Object.assign({}, details), { id: entity.id.unpack(), createdAt: entity.createdAt.unpack(), updatedAt: entity.updatedAt.unpack() }));
        });
    }
    toDomain(ormModel) {
        return __awaiter(this, void 0, void 0, function* () {
            const details = yield this.toDomainDetails(ormModel);
            const id = new common_base_classes_1.ID(ormModel.id);
            const createdAt = common_base_classes_1.DateVO.create(ormModel.createdAt);
            const updatedAt = common_base_classes_1.DateVO.create(ormModel.updatedAt);
            return new this.entityConstructor({
                id,
                details,
                createdAt,
                updatedAt,
            });
        });
    }
}
exports.MikroOrmMapperBase = MikroOrmMapperBase;
//# sourceMappingURL=mikroorm-mapper.base.js.map