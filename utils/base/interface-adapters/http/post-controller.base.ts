import {
  RequestDtoBase,
  UseCaseProcessExceptions,
  UseCaseRequestValidationExceptions,
} from '@base/use-cases';
import {
  Body,
  ConflictException,
  InternalServerErrorException,
  Post,
  UnprocessableEntityException,
} from '@nestjs/common';
import { Mediator } from 'nestjs-mediator';
import { match } from 'oxide.ts';

export abstract class HttpPostControllerBase<THttpRequest, THttpResponse> {
  constructor(private readonly mediator: Mediator) {}

  @Post()
  async execute(@Body() httpRequest: any): Promise<any> {
    const dto = this.createDto(httpRequest);

    const result = await this.mediator.send(dto);

    return match(result, {
      Ok: (response: any) => {
        return this.createHttpResponse(response);
      },
      Err: (exception: Error) => {
        if (exception instanceof UseCaseRequestValidationExceptions) {
          throw new UnprocessableEntityException(exception.exceptions);
        }
        if (exception instanceof UseCaseProcessExceptions) {
          throw this.createProcessException(exception);
        }
        throw new InternalServerErrorException(exception);
      },
    });
  }

  abstract createDto(httpRequest: THttpRequest): RequestDtoBase<any>;
  abstract createHttpResponse(response: any): THttpResponse;

  createProcessException(exception: UseCaseProcessExceptions): Error {
    return new ConflictException(exception.exceptions);
  }
}
