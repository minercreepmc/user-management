import { HttpPostControllerBase } from '@base/interface-adapters/http';
import { UseCaseProcessExceptions } from '@base/use-cases';
import {
  Body,
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  UnauthorizedException,
} from '@nestjs/common';
import { SignInRequestDto, SignInResponseDto } from '@use-cases/sign-in/dtos';
import { Mediator } from 'nestjs-mediator';
import { V1SignInHttpRequest } from './sign-in.http.request';
import { V1SignInHttpResponse } from './sign-in.http.response';

@Controller('/api/v1/sign-in')
export class V1SignInHttpController extends HttpPostControllerBase<
  V1SignInHttpRequest,
  V1SignInHttpResponse
> {
  constructor(mediator: Mediator) {
    super(mediator);
  }

  @Post()
  @HttpCode(HttpStatus.OK)
  async execute(@Body() dto: V1SignInHttpRequest) {
    return super.execute(dto);
  }

  createDto(httpRequest: V1SignInHttpRequest): SignInRequestDto {
    return new SignInRequestDto(httpRequest);
  }
  createHttpResponse(response: SignInResponseDto): V1SignInHttpResponse {
    return new V1SignInHttpResponse(response);
  }

  createProcessException(exception: UseCaseProcessExceptions) {
    return new UnauthorizedException(exception.exceptions);
  }
}
