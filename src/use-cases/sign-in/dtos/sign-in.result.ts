import { Result } from 'oxide.ts';
import { SignInResponseDto } from './sign-in.response.dto';

export type SignInResult = Result<SignInResponseDto, any>;
