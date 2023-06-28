import { SignInResponseDto } from '@use-cases/sign-in/dtos';
export declare class V1SignInHttpResponse {
    access_token: string;
    message: string;
    constructor(dto: SignInResponseDto);
}
