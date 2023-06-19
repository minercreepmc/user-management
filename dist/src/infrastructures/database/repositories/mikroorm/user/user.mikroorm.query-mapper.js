"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMikroOrmQueryMapper = void 0;
const mikroorm_1 = require("../../../../../../utils/base/database/repositories/mikroorm");
class UserMikroOrmQueryMapper extends mikroorm_1.MikroOrmQueryMapperBase {
    toQueryDetails(params) {
        const where = {};
        const { firstName, role, email, lastName, username } = params;
        if (firstName) {
            where.firstName = firstName.unpack();
        }
        if (role) {
            where.role = role.unpack();
        }
        if (email) {
            where.email = email.unpack();
        }
        if (lastName) {
            where.lastName = lastName.unpack();
        }
        if (username) {
            where.username = username.unpack();
        }
        return where;
    }
}
exports.UserMikroOrmQueryMapper = UserMikroOrmQueryMapper;
//# sourceMappingURL=user.mikroorm.query-mapper.js.map