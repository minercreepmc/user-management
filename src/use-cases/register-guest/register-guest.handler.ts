import { HandlerBase } from '@base/use-cases';
import { RequestHandler } from 'nestjs-mediator';
import {
  RegisterGuestMapper,
  RegisterGuestProcess,
} from './application-services';
import { RegisterGuestRequestDto, RegisterGuestResponseDto } from './dtos';

@RequestHandler(RegisterGuestRequestDto)
export class RegisterGuestHandler extends HandlerBase<
  RegisterGuestRequestDto,
  RegisterGuestResponseDto
> {
  constructor(process: RegisterGuestProcess, mapper: RegisterGuestMapper) {
    super(null, mapper, process);
  }
}
