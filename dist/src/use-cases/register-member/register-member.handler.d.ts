import { ICommandHandler } from '@nestjs/cqrs';
import { RegisterMemberMapper, RegisterMemberProcess, RegisterMemberValidator } from './application-services';
import { RegisterMemberCommand, RegisterMemberResult } from './dtos';
export declare class RegisterMemberHandler implements ICommandHandler<RegisterMemberCommand, RegisterMemberResult> {
    private readonly validator;
    private readonly registerMemberProcess;
    private readonly mapper;
    constructor(validator: RegisterMemberValidator, registerMemberProcess: RegisterMemberProcess, mapper: RegisterMemberMapper);
    execute(command: RegisterMemberCommand): Promise<RegisterMemberResult>;
}
