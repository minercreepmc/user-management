import { ICommand } from '@nestjs/cqrs';
export declare class SignInCommand implements ICommand {
    username: string;
    email: string;
    password: string;
    constructor(dto: SignInCommand);
}
