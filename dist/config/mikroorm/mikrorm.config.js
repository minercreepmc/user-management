"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../../src/infrastructures/database/repositories/mikroorm/user");
const config_1 = require("@nestjs/config");
const outbox_1 = require("../../utils/base/database/outbox");
const configService = new config_1.ConfigService();
const mikroOrmConfig = {
    type: 'postgresql',
    host: configService.get('POSTGRES_HOST'),
    port: configService.get('POSTGRES_PORT'),
    user: configService.get('POSTGRES_USER'),
    password: configService.get('POSTGRES_PASSWORD'),
    dbName: configService.get('POSTGRES_DB'),
    autoLoadEntities: true,
    entities: [user_1.UserMikroOrmModel, outbox_1.OutboxModel],
    migrations: {
        pathTs: './src/infrastructures/database/migrations',
    },
};
exports.default = mikroOrmConfig;
//# sourceMappingURL=mikrorm.config.js.map