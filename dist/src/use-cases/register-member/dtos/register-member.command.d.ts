import { ICommand } from '@nestjs/cqrs';
export declare class RegisterMemberCommand implements ICommand {
    username: string;
    password: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    constructor(dtos: RegisterMemberCommand);
}
