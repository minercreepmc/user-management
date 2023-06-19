import { ICommandHandler } from '@nestjs/cqrs';
import { RegisterGuestMapper, RegisterGuestProcess } from './application-services';
import { RegisterGuestCommand, RegisterGuestResult } from './dtos';
export declare class RegisterGuestHandler implements ICommandHandler<RegisterGuestCommand, RegisterGuestResult> {
    private readonly registerGuestProcess;
    private readonly mapper;
    constructor(registerGuestProcess: RegisterGuestProcess, mapper: RegisterGuestMapper);
    execute(): Promise<RegisterGuestResult>;
}
