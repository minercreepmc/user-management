import { HandlerBase } from '@base/use-cases';
import { RequestHandler } from 'nestjs-mediator';
import {
  RegisterMemberMapper,
  RegisterMemberProcess,
  RegisterMemberValidator,
} from './application-services';
import { RegisterMemberRequestDto, RegisterMemberResponseDto } from './dtos';

@RequestHandler(RegisterMemberRequestDto)
export class RegisterMemberHandler extends HandlerBase<
  RegisterMemberRequestDto,
  RegisterMemberResponseDto
> {
  constructor(
    validator: RegisterMemberValidator,
    mapper: RegisterMemberMapper,
    process: RegisterMemberProcess,
  ) {
    super(validator, mapper, process);
  }
}
