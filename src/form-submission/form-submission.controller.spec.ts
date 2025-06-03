import { Test, TestingModule } from '@nestjs/testing';
import { FormSubmissionController } from './form-submission.controller';
import { FormSubmissionService } from './form-submission.service';

describe('FormSubmissionController', () => {
  let controller: FormSubmissionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FormSubmissionController],
      providers: [FormSubmissionService],
    }).compile();

    controller = module.get<FormSubmissionController>(FormSubmissionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
