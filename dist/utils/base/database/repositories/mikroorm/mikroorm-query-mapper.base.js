"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MikroOrmQueryMapperBase = void 0;
class MikroOrmQueryMapperBase {
    toQuery(params) {
        const query = {};
        const { id, createdAt, updatedAt } = params;
        if (id) {
            query.id = id.unpack();
        }
        if (createdAt) {
            query.createdAt = createdAt.unpack();
        }
        if (updatedAt) {
            query.updatedAt = updatedAt.unpack();
        }
        return Object.assign(Object.assign({}, query), this.toQueryDetails(params));
    }
}
exports.MikroOrmQueryMapperBase = MikroOrmQueryMapperBase;
//# sourceMappingURL=mikroorm-query-mapper.base.js.map