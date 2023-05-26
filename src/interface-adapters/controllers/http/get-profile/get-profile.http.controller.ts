import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard, RequestWithUser } from '@src/interface-adapters/guards';
import { GetProfileHttpResponse } from './get-profile.http.response';

@Controller()
export class GetProfileHttpController {
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  execute(@Request() req: RequestWithUser): GetProfileHttpResponse {
    return req.user;
  }
}
