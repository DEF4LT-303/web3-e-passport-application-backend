import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { FormSubmissionController } from './form-submission.controller';
import { FormSubmissionService } from './form-submission.service';

@Module({
  imports: [DatabaseModule],
  controllers: [FormSubmissionController],
  providers: [FormSubmissionService],
})
export class FormSubmissionModule { }
