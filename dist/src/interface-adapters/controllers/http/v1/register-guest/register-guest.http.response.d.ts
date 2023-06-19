import { RegisterGuestResponseDto } from '@use-cases/register-guest/dtos';
export declare class V1RegisterGuestHttpResponse implements RegisterGuestResponseDto {
    username: string;
    userId: string;
    constructor(dtos: V1RegisterGuestHttpResponse);
}
