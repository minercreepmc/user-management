import { SignInCommand, SignInDomainOptions, SignInResponseDto } from '../dtos';
import { AuthenticatedResult } from './sign-in.process';
export declare class SignInMapper {
    toDomain(command: SignInCommand): SignInDomainOptions;
    toResponseDto(authenticatedResult: AuthenticatedResult): SignInResponseDto;
}
