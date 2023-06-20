import { HttpPostControllerBase } from '@base/interface-adapters/http';
import { Controller, Post } from '@nestjs/common';
import {
  RegisterGuestRequestDto,
  RegisterGuestResponseDto,
} from '@use-cases/register-guest/dtos';
import { RegisterMemberResponseDto } from '@use-cases/register-member/dtos';
import { Mediator } from 'nestjs-mediator';
import { V1RegisterMemberHttpResponse } from '../register-member';
import { V1RegisterGuestHttpRequest } from './register-guest.http.request';
import { V1RegisterGuestHttpResponse } from './register-guest.http.response';

@Controller('/api/v1/register')
export class V1RegisterGuestHttpController extends HttpPostControllerBase<
  V1RegisterGuestHttpRequest,
  V1RegisterMemberHttpResponse
> {
  constructor(mediator: Mediator) {
    super(mediator);
  }

  @Post('/guest')
  async execute(
    dto: V1RegisterGuestHttpRequest,
  ): Promise<V1RegisterMemberHttpResponse> {
    return super.execute(dto);
  }

  createDto(httpRequest: V1RegisterGuestHttpRequest): RegisterGuestRequestDto {
    return new RegisterGuestRequestDto(httpRequest);
  }
  createHttpResponse(
    response: RegisterGuestResponseDto,
  ): V1RegisterGuestHttpResponse {
    return new V1RegisterGuestHttpResponse(response);
  }
}
