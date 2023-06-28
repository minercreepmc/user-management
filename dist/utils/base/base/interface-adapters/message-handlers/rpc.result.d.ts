import { RpcException } from '@nestjs/microservices';
import { Result } from 'oxide.ts';
export declare class RpcResult extends RpcException {
    private readonly result;
    constructor(result: Result<any, Error>);
    getResult(): Result<any, Error>;
}
