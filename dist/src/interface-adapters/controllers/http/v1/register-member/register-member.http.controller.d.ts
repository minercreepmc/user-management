import { HttpPostControllerBase } from '@base/interface-adapters/http';
import { RegisterMemberRequestDto, RegisterMemberResponseDto } from '@use-cases/register-member/dtos';
import { Mediator } from 'nestjs-mediator';
import { V1RegisterMemberHttpRequest } from './register-member.http.request';
import { V1RegisterMemberHttpResponse } from './register-member.http.response';
export declare class V1RegisterMemberHttpController extends HttpPostControllerBase<V1RegisterMemberHttpRequest, V1RegisterMemberHttpResponse> {
    constructor(mediator: Mediator);
    execute(dto: V1RegisterMemberHttpRequest): Promise<any>;
    createDto(httpRequest: V1RegisterMemberHttpRequest): RegisterMemberRequestDto;
    createHttpResponse(response: RegisterMemberResponseDto): V1RegisterMemberHttpResponse;
}
