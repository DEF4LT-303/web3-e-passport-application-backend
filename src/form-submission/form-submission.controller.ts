import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateFormSubmissionDto } from './dto/create-form-submission.dto';
import { UpdateFormSubmissionDto } from './dto/update-form-submission.dto';
import { FormSubmissionService } from './form-submission.service';

@Controller('form-submission')
export class FormSubmissionController {
  constructor(private readonly formSubmissionService: FormSubmissionService) { }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createFormSubmissionDto: CreateFormSubmissionDto) {
    return this.formSubmissionService.create(createFormSubmissionDto);
  }

  @Get()
  async findAll() {
    const formSubmissions = await this.formSubmissionService.findAll();

    if (!formSubmissions || formSubmissions.totalCount === 0) {
      throw new HttpException('No form submissions found', HttpStatus.NOT_FOUND);
    }
    return formSubmissions;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const formSubmission = await this.formSubmissionService.findOne(id);

    if (!formSubmission) {
      throw new HttpException('Form submission not found', HttpStatus.NOT_FOUND);
    }
    return formSubmission;
  }

  @Get('user/:userId')
  async findByUserId(@Param('userId') userId: string) {
    const formSubmissions = await this.formSubmissionService.findByUserId(userId);

    if (!formSubmissions) {
      throw new HttpException('No form submissions found for this user', HttpStatus.NOT_FOUND);
    }
    return formSubmissions;
  }

  // TODO: Implementation
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFormSubmissionDto: UpdateFormSubmissionDto) {
    return this.formSubmissionService.update(id, updateFormSubmissionDto);
  }

  // TODO: Implementation
  @Delete(':id')
  remove(@Param('id') id: string) {
    const deleted = this.formSubmissionService.remove(id);
    if (!deleted) {
      throw new HttpException('Form submission not found', HttpStatus.NOT_FOUND);
    }
    return { message: 'Form submission deleted successfully' };
  }
}
