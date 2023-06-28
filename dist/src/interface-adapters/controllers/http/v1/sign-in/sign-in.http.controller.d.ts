import { HttpPostControllerBase } from '@base/interface-adapters/http';
import { UseCaseProcessExceptions } from '@base/use-cases';
import { UnauthorizedException } from '@nestjs/common';
import { SignInRequestDto, SignInResponseDto } from '@use-cases/sign-in/dtos';
import { Mediator } from 'nestjs-mediator';
import { V1SignInHttpRequest } from './sign-in.http.request';
import { V1SignInHttpResponse } from './sign-in.http.response';
export declare class V1SignInHttpController extends HttpPostControllerBase<V1SignInHttpRequest, V1SignInHttpResponse> {
    constructor(mediator: Mediator);
    execute(dto: V1SignInHttpRequest): Promise<any>;
    createDto(httpRequest: V1SignInHttpRequest): SignInRequestDto;
    createHttpResponse(response: SignInResponseDto): V1SignInHttpResponse;
    createProcessException(exception: UseCaseProcessExceptions): UnauthorizedException;
}
