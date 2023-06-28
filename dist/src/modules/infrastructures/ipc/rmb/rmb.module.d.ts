import { DynamicModule } from '@nestjs/common';
interface RmqModuleOption {
    name: string | symbol;
}
export declare class RmqModule {
    static register(options: RmqModuleOption[]): DynamicModule;
}
export {};
