import { RegisterAdminResponseDto } from '@use-cases/register-admin/dtos';
export declare class V1RegisterAdminHttpResponse {
    username: string;
    email: string;
    firstName?: string;
    lastName?: string;
    message: string;
    constructor(dto: RegisterAdminResponseDto);
}
