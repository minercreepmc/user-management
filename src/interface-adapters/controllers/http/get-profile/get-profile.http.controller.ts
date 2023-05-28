import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard, RequestWithUser } from '@src/interface-adapters/guards';
import { GetProfileHttpResponse } from './get-profile.http.response';

@Controller()
export class GetProfileHttpController {
  @Get('profile')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  execute(@Request() req: RequestWithUser): GetProfileHttpResponse {
    return req.user;
  }
}
