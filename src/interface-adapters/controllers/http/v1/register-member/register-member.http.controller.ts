import { HttpPostControllerBase } from '@base/interface-adapters/http';
import { Body, Controller, Post } from '@nestjs/common';
import {
  RegisterMemberRequestDto,
  RegisterMemberResponseDto,
} from '@use-cases/register-member/dtos';
import { Mediator } from 'nestjs-mediator';
import { V1RegisterMemberHttpRequest } from './register-member.http.request';
import { V1RegisterMemberHttpResponse } from './register-member.http.response';

@Controller('/api/v1/register')
export class V1RegisterMemberHttpController extends HttpPostControllerBase<
  V1RegisterMemberHttpRequest,
  V1RegisterMemberHttpResponse
> {
  constructor(mediator: Mediator) {
    super(mediator);
  }

  @Post('member')
  async execute(@Body() dto: V1RegisterMemberHttpRequest) {
    return super.execute(dto);
  }

  createDto(
    httpRequest: V1RegisterMemberHttpRequest,
  ): RegisterMemberRequestDto {
    return new RegisterMemberRequestDto(httpRequest);
  }
  createHttpResponse(
    response: RegisterMemberResponseDto,
  ): V1RegisterMemberHttpResponse {
    return new V1RegisterMemberHttpResponse(response);
  }
}
