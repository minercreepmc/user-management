import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard, RequestWithUser } from '@src/interface-adapters/guards';
import { V1GetProfileHttpResponse } from './get-profile.http.response';

@Controller('/api/v1')
export class V1GetProfileHttpController {
  @Get('profile')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  execute(@Request() req: RequestWithUser): V1GetProfileHttpResponse {
    return req.user;
  }
}
