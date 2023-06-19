import { UseCaseCommandValidationExceptions, UseCaseProcessExceptions } from '@use-cases/common';
import { Result } from 'oxide.ts';
import { RegisterAdminResponseDto } from './register-admin.response.dto';
export type RegisterAdminResult = Result<RegisterAdminResponseDto, UseCaseCommandValidationExceptions | UseCaseProcessExceptions>;
