import { RequestDtoBase, ResponseDtoBase } from '@base/use-cases';
export declare class RegisterAdminRequestDto extends RequestDtoBase<RegisterAdminResponseDto> {
    username: string;
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
    constructor(dto: Omit<RegisterAdminRequestDto, 'returnType'>);
}
export declare class RegisterAdminResponseDto extends ResponseDtoBase {
    username: string;
    email: string;
    firstName?: string;
    lastName?: string;
    constructor(dto: Omit<RegisterAdminResponseDto, 'message'>);
}
