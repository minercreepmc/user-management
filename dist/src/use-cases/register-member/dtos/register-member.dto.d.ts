import { RequestDtoBase, ResponseDtoBase } from '@base/use-cases';
export declare class RegisterMemberRequestDto extends RequestDtoBase<RegisterMemberResponseDto> {
    username: string;
    password: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    constructor(dtos: any);
}
export declare class RegisterMemberResponseDto extends ResponseDtoBase {
    username: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    constructor(dtos: Omit<RegisterMemberResponseDto, 'message'>);
}
