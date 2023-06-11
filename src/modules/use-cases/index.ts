import { Module } from '@nestjs/common';
import { GetProfileModule } from './get-profile.module';
import { RegisterAdminModule } from './register-admin.module';
import { RegisterGuestModule } from './register-guest.module';
import { RegisterMemberModule } from './register-member.module';
import { SignInModule } from './sign-in.module';

@Module({
  imports: [
    RegisterGuestModule,
    RegisterMemberModule,
    RegisterAdminModule,
    SignInModule,
    GetProfileModule,
  ],
})
export class UseCaseModule {}
