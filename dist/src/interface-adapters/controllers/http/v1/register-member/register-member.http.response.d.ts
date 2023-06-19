import { RegisterMemberResponseDto } from '@use-cases/register-member/dtos';
export declare class V1RegisterMemberHttpResponse implements RegisterMemberResponseDto {
    username: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    constructor(dto: RegisterMemberResponseDto);
}
