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
exports.MikroOrmRepositoryBase = void 0;
class MikroOrmRepositoryBase {
    constructor(entityManager, mapper, queryMapper, mikroEntityName, logger) {
        this.entityManager = entityManager;
        this.mapper = mapper;
        this.queryMapper = queryMapper;
        this.mikroEntityName = mikroEntityName;
        this.logger = logger;
    }
    save(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            const ormEntity = yield this.mapper.toPersistance(entity);
            const saving = this.entityManager.create(this.mikroEntityName, ormEntity);
            yield this.entityManager.persistAndFlush(saving);
            this.logger.debug(`[Repository]: saved ${ormEntity.id}`);
            return this.mapper.toDomain(ormEntity);
        });
    }
    delete(params = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = this.queryMapper.toQuery(params);
            const ormEntity = yield this.entityManager.findOne(this.mikroEntityName, query);
            yield this.entityManager.removeAndFlush(ormEntity);
            this.logger.debug(`[Repository]: deleted ${ormEntity.id}`);
            return true;
        });
    }
    findOneById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = this.queryMapper.toQuery({
                id,
            });
            const found = yield this.entityManager.findOne(this.mikroEntityName, query);
            return found ? this.mapper.toDomain(found) : null;
        });
    }
    findOne(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = this.queryMapper.toQuery(params);
            console.log(query);
            const found = yield this.entityManager.findOne(this.mikroEntityName, query);
            return found ? this.mapper.toDomain(found) : null;
        });
    }
    update(params, newState) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = this.queryMapper.toQuery(params);
            const newStateOrm = yield this.mapper.toPersistance(newState);
            const ormEntity = yield this.entityManager.findOne(this.mikroEntityName, query);
            let updated;
            if (ormEntity) {
                updated = yield this.entityManager.upsert(this.mikroEntityName, newStateOrm);
                this.logger.debug(`[Repository]: updated ${ormEntity.id}`);
            }
            return updated ? this.mapper.toDomain(updated) : null;
        });
    }
}
exports.MikroOrmRepositoryBase = MikroOrmRepositoryBase;
//# sourceMappingURL=mikroorm-repository.base.js.map