import { DynamicModule } from '@nestjs/common';
import { ClientOptions } from '@nestjs/microservices';
export interface ClientModuleConfig {
    domain: string;
    user: string;
    password: string;
    host: number;
    queueName: string;
    transport: number;
}
export declare const clientNameDiToken: unique symbol;
export interface ClientModuleOptions {
    name: string | symbol;
    config: ClientModuleConfig;
}
export declare class ClientDynamicModule {
    static register(options: ClientModuleOptions): DynamicModule;
    static registerClient(name: string | symbol, config: ClientModuleConfig): DynamicModule;
    static createOptions(name: string | symbol, config: ClientModuleConfig): ClientOptions;
}
