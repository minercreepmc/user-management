import { RegisterAdminCommand } from '@use-cases/register-admin/dtos';
export declare class V1RegisterAdminHttpRequest implements RegisterAdminCommand {
    username: string;
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
}
