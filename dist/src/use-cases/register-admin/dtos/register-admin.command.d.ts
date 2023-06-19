import { ICommand } from '@nestjs/cqrs';
export declare class RegisterAdminCommand implements ICommand {
    username: string;
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
    constructor(dto: RegisterAdminCommand);
}
