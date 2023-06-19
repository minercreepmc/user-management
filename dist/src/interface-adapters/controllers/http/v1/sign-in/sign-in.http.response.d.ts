import { SignInResponseDto } from '@use-cases/sign-in/dtos';
export declare class V1SignInHttpResponse implements SignInResponseDto {
    access_token: string;
    constructor(dto: SignInResponseDto);
}
