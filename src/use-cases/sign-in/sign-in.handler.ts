import { HandlerBase } from '@base/use-cases';
import { RequestHandler } from 'nestjs-mediator';
import {
  SignInMapper,
  SignInProcess,
  SignInRequestValidator,
} from './application-services';
import { SignInRequestDto, SignInResponseDto } from './dtos';

@RequestHandler(SignInRequestDto)
export class SignInHandler extends HandlerBase<
  SignInRequestDto,
  SignInResponseDto
> {
  constructor(
    validator: SignInRequestValidator,
    mapper: SignInMapper,
    process: SignInProcess,
  ) {
    super(validator, mapper, process);
  }
}
