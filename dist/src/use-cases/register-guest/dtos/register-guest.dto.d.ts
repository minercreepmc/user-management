import { RequestDtoBase, ResponseDtoBase } from '@base/use-cases';
export declare class RegisterGuestRequestDto extends RequestDtoBase<RegisterGuestResponseDto> {
    constructor(dto: any);
}
export declare class RegisterGuestResponseDto extends ResponseDtoBase {
    username: string;
    userId: string;
    constructor(dto: RegisterGuestResponseDto);
}
