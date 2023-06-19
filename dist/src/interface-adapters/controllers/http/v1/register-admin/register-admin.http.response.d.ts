import { RegisterAdminResponseDto } from '@use-cases/register-admin/dtos';
export declare class V1RegisterAdminHttpResponse implements RegisterAdminResponseDto {
    username: string;
    email: string;
    firstName?: string;
    lastName?: string;
    constructor(dto: RegisterAdminResponseDto);
}
