import { ICommandHandler } from '@nestjs/cqrs';
import { RegisterAdminMapper, RegisterAdminProcess, RegisterAdminValidator } from './application-services';
import { RegisterAdminCommand, RegisterAdminResult } from './dtos';
export declare class RegisterAdminHandler implements ICommandHandler<RegisterAdminCommand, RegisterAdminResult> {
    private readonly validator;
    private readonly registerAdminProcess;
    private readonly mapper;
    constructor(validator: RegisterAdminValidator, registerAdminProcess: RegisterAdminProcess, mapper: RegisterAdminMapper);
    execute(command: RegisterAdminCommand): Promise<RegisterAdminResult>;
}
