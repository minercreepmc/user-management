import { HttpPostControllerBase } from '@base/interface-adapters/http';
import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { ApiKeyGuard } from '@src/interface-adapters/guards';
import {
  RegisterAdminRequestDto,
  RegisterAdminResponseDto,
} from '@use-cases/register-admin/dtos';
import { Mediator } from 'nestjs-mediator';
import { V1RegisterAdminHttpRequest } from './register-admin.http.request';
import { V1RegisterAdminHttpResponse } from './register-admin.http.response';

@Controller('/api/v1/register')
export class V1RegisterAdminHttpController extends HttpPostControllerBase<
  V1RegisterAdminHttpRequest,
  V1RegisterAdminHttpResponse
> {
  constructor(mediator: Mediator) {
    super(mediator);
  }

  @Post('/admin')
  @UseGuards(ApiKeyGuard)
  @ApiBearerAuth('x-api-key')
  async execute(@Body() dto: V1RegisterAdminHttpRequest) {
    return super.execute(dto);
  }

  createDto(httpRequest: V1RegisterAdminHttpRequest): RegisterAdminRequestDto {
    return new RegisterAdminRequestDto(httpRequest);
  }
  createHttpResponse(
    response: RegisterAdminResponseDto,
  ): V1RegisterAdminHttpResponse {
    return new V1RegisterAdminHttpResponse(response);
  }
}
