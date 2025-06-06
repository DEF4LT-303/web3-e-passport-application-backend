import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateFormSubmissionDto } from './dto/create-form-submission.dto';
import { UpdateFormSubmissionDto } from './dto/update-form-submission.dto';

@Injectable()
export class FormSubmissionService {
  constructor(private readonly databaseService: DatabaseService) { }

  async create(createFormSubmissionDto: CreateFormSubmissionDto) {
    const {
      userId,
      passportType,
      personalInfo,
      address,
      idDocuments,
      parentalInfo,
      spouseInfo,
      emergencyContact,
      passportOptions,
      deliveryAndAppointment,
    } = createFormSubmissionDto;

    try {
      const formSubmission = await this.databaseService.formSubmission.create({
        data: {
          user: { connect: { id: userId } },

          passportType: passportType ? { create: passportType } : undefined,
          personalInfo: personalInfo ? { create: personalInfo } : undefined,
          address: address ? { create: address } : undefined,
          idDocuments: idDocuments ? { create: idDocuments } : undefined,
          parentalInfo: parentalInfo ? { create: parentalInfo } : undefined,
          spouseInfo: spouseInfo ? { create: spouseInfo } : undefined,
          emergencyContact: emergencyContact ? { create: emergencyContact } : undefined,
          passportOptions: passportOptions ? { create: passportOptions } : undefined,
          deliveryAndAppointment: deliveryAndAppointment ? { create: deliveryAndAppointment } : undefined,
        },
        include: {
          passportType: true,
          personalInfo: true,
          address: true,
          idDocuments: true,
          parentalInfo: true,
          spouseInfo: true,
          emergencyContact: true,
          passportOptions: true,
          deliveryAndAppointment: true,
        },
      });

      return formSubmission;
    } catch (error) {
      if (error.code === 'P2025' || error.code === 'P2003') {
        // P2003 = Foreign key constraint failed
        throw new BadRequestException('Invalid user ID or related field.');
      }

      console.error('Error creating form submission:', error);
      throw new InternalServerErrorException('Something went wrong during form submission.');
    }
  }

  findAll() {
    return this.databaseService.formSubmission.findMany({
      include: {
        user: true,
        passportType: true,
        personalInfo: true,
        address: true,
        idDocuments: true,
        parentalInfo: true,
        spouseInfo: true,
        emergencyContact: true,
        passportOptions: true,
        deliveryAndAppointment: true,
      },
    });
  }

  findOne(id: string) {
    return this.databaseService.formSubmission.findUnique({
      where: { id },
      include: {
        user: true,
        passportType: true,
        personalInfo: true,
        address: true,
        idDocuments: true,
        parentalInfo: true,
        spouseInfo: true,
        emergencyContact: true,
        passportOptions: true,
        deliveryAndAppointment: true,
      },
    });
  }

  findByUserId(userId: string) {
    return this.databaseService.formSubmission.findMany({
      where: { userId },
      include: {
        user: true,
        passportType: true,
        personalInfo: true,
        address: true,
        idDocuments: true,
        parentalInfo: true,
        spouseInfo: true,
        emergencyContact: true,
        passportOptions: true,
        deliveryAndAppointment: true,
      },
    });
  }

  update(id: string, updateFormSubmissionDto: UpdateFormSubmissionDto) {
    return `This action updates a #${id} formSubmission`;
  }

  remove(id: string) {
    return `This action removes a #${id} formSubmission`;
  }
}
