import { RegisterMemberCommand } from '@use-cases/register-member/dtos';
export declare class V1RegisterMemberHttpRequest implements RegisterMemberCommand {
    username: string;
    password: string;
    email?: string;
    firstName?: string;
    lastName?: string;
}
