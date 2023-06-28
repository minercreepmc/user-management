import { HttpPostControllerBase } from '@base/interface-adapters/http';
import { RegisterAdminRequestDto, RegisterAdminResponseDto } from '@use-cases/register-admin/dtos';
import { Mediator } from 'nestjs-mediator';
import { V1RegisterAdminHttpRequest } from './register-admin.http.request';
import { V1RegisterAdminHttpResponse } from './register-admin.http.response';
export declare class V1RegisterAdminHttpController extends HttpPostControllerBase<V1RegisterAdminHttpRequest, V1RegisterAdminHttpResponse> {
    constructor(mediator: Mediator);
    execute(dto: V1RegisterAdminHttpRequest): Promise<any>;
    createDto(httpRequest: V1RegisterAdminHttpRequest): RegisterAdminRequestDto;
    createHttpResponse(response: RegisterAdminResponseDto): V1RegisterAdminHttpResponse;
}
