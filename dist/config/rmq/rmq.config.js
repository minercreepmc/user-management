"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rmqConfig = void 0;
const config_1 = require("@nestjs/config");
const microservices_1 = require("@nestjs/microservices");
const configService = new config_1.ConfigService();
exports.rmqConfig = {
    user: configService.get('RABBITMQ_USER'),
    password: configService.get('RABBITMQ_PASSWORD'),
    host: configService.get('RABBITMQ_HOST'),
    queueName: configService.get('RABBITMQ_QUEUE_NAME'),
    domain: 'amqp',
    transport: microservices_1.Transport.RMQ,
};
//# sourceMappingURL=rmq.config.js.map