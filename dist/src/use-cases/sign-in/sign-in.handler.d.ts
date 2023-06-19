import { ICommandHandler } from '@nestjs/cqrs';
import { SignInMapper, SignInProcess, SignInValidator } from './application-services';
import { SignInCommand, SignInResult } from './dtos';
export declare class SignInHandler implements ICommandHandler<SignInCommand, SignInResult> {
    private readonly validator;
    private readonly signInProcess;
    private readonly mapper;
    constructor(validator: SignInValidator, signInProcess: SignInProcess, mapper: SignInMapper);
    execute(command: SignInCommand): Promise<SignInResult>;
}
