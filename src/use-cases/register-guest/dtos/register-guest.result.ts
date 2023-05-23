import { RegisterGuestResponseDto } from './register-guest.response.dto';
import { Result } from 'oxide.ts';

export type RegisterGuestResult = Result<RegisterGuestResponseDto, any>;
