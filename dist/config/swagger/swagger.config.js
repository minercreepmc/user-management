"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerOption = void 0;
const swagger_1 = require("@nestjs/swagger");
exports.swaggerOption = new swagger_1.DocumentBuilder()
    .setTitle('User Managemenet API')
    .setDescription('The User Management API description')
    .setVersion('0.1')
    .addBearerAuth()
    .addSecurity('x-api-key', {
    type: 'apiKey',
    in: 'header',
    name: 'x-api-key',
})
    .build();
//# sourceMappingURL=swagger.config.js.map