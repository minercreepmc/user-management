import { RegisterAdminCommand } from '@use-cases/register-admin/dtos';

export class RegisterAdminHttpRequest implements RegisterAdminCommand {
  username: string;
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
}
