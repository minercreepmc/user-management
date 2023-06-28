"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ClientDynamicModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientDynamicModule = exports.clientNameDiToken = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
exports.clientNameDiToken = Symbol('CLIENT');
let ClientDynamicModule = ClientDynamicModule_1 = class ClientDynamicModule {
    static register(options) {
        const { name, config } = options;
        const clientNameProvider = {
            provide: exports.clientNameDiToken,
            useValue: name,
        };
        return {
            module: ClientDynamicModule_1,
            imports: [ClientDynamicModule_1.registerClient(name, config)],
            providers: [clientNameProvider],
            exports: [microservices_1.ClientsModule],
        };
    }
    static registerClient(name, config) {
        return microservices_1.ClientsModule.registerAsync([
            {
                name,
                useFactory: () => {
                    return ClientDynamicModule_1.createOptions(name, config);
                },
            },
        ]);
    }
    static createOptions(name, config) {
        const domain = config.domain;
        const user = config.user;
        const password = config.password;
        const host = config.host;
        const transport = config.transport;
        return {
            transport,
            options: {
                urls: [`${domain}://${user}:${password}@${host}`],
                queue: name.toString(),
            },
        };
    }
};
ClientDynamicModule = ClientDynamicModule_1 = __decorate([
    (0, common_1.Module)({})
], ClientDynamicModule);
exports.ClientDynamicModule = ClientDynamicModule;
//# sourceMappingURL=client.module.js.map