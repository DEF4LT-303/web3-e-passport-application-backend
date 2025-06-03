import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerModule } from '@nestjs/throttler';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { FormSubmissionModule } from './form-submission/form-submission.module';

@Module({
  imports: [DatabaseModule, AuthModule, UsersModule, FormSubmissionModule],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerModule
    }
  ],
})
export class AppModule { }
