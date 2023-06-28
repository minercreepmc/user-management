import { RegisterMemberResponseDto } from '@use-cases/register-member/dtos';
export declare class V1RegisterMemberHttpResponse {
    username: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    message: string;
    constructor(dto: RegisterMemberResponseDto);
}
