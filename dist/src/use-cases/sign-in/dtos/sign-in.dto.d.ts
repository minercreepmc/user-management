import { RequestDtoBase, ResponseDtoBase } from '@base/use-cases';
export declare class SignInRequestDto extends RequestDtoBase<SignInResponseDto> {
    username: string;
    email: string;
    password: string;
    constructor(dto: any);
}
export declare class SignInResponseDto extends ResponseDtoBase {
    access_token: string;
    constructor(dto: SignInResponseDto);
}
