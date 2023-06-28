import { UseCaseMapperBase } from '@base/use-cases';
import { SignInCommand } from '@commands';
import { SignInRequestDto, SignInResponseDto } from '../dtos';
import { AuthenticatedResult } from './sign-in.process';
export declare class SignInMapper extends UseCaseMapperBase<SignInResponseDto> {
    toCommand(dto: SignInRequestDto): SignInCommand;
    toResponseDto(authenticatedResult: AuthenticatedResult): SignInResponseDto;
}
