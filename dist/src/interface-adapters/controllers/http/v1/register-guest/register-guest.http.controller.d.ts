import { HttpPostControllerBase } from '@base/interface-adapters/http';
import { RegisterGuestRequestDto, RegisterGuestResponseDto } from '@use-cases/register-guest/dtos';
import { Mediator } from 'nestjs-mediator';
import { V1RegisterMemberHttpResponse } from '../register-member';
import { V1RegisterGuestHttpRequest } from './register-guest.http.request';
import { V1RegisterGuestHttpResponse } from './register-guest.http.response';
export declare class V1RegisterGuestHttpController extends HttpPostControllerBase<V1RegisterGuestHttpRequest, V1RegisterMemberHttpResponse> {
    constructor(mediator: Mediator);
    execute(dto: V1RegisterGuestHttpRequest): Promise<V1RegisterMemberHttpResponse>;
    createDto(httpRequest: V1RegisterGuestHttpRequest): RegisterGuestRequestDto;
    createHttpResponse(response: RegisterGuestResponseDto): V1RegisterGuestHttpResponse;
}
