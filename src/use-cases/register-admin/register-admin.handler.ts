import { HandlerBase } from '@base/use-cases';
import { RequestHandler } from 'nestjs-mediator';
import {
  RegisterAdminMapper,
  RegisterAdminProcess,
  RegisterAdminRequestValidator,
} from './application-services';
import { RegisterAdminRequestDto, RegisterAdminResponseDto } from './dtos';

@RequestHandler(RegisterAdminRequestDto)
export class RegisterAdminHandler extends HandlerBase<
  RegisterAdminRequestDto,
  RegisterAdminResponseDto
> {
  constructor(
    validator: RegisterAdminRequestValidator,
    process: RegisterAdminProcess,
    mapper: RegisterAdminMapper,
  ) {
    super(validator, mapper, process);
  }
}
