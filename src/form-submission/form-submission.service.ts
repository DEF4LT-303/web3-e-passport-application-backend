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
      nftStatus,
    } = createFormSubmissionDto;

    try {
      const formSubmission = await this.databaseService.formSubmission.upsert({
        where: { userId },
        create: {
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
          nftStatus: nftStatus ? { create: nftStatus } : undefined,
        },
        update: {
          passportType: passportType ? { update: passportType } : undefined,
          personalInfo: personalInfo ? { update: personalInfo } : undefined,
          address: address ? { update: address } : undefined,
          idDocuments: idDocuments ? { update: idDocuments } : undefined,
          parentalInfo: parentalInfo ? { update: parentalInfo } : undefined,
          spouseInfo: spouseInfo ? { update: spouseInfo } : undefined,
          emergencyContact: emergencyContact ? { update: emergencyContact } : undefined,
          passportOptions: passportOptions ? { update: passportOptions } : undefined,
          deliveryAndAppointment: deliveryAndAppointment ? { update: deliveryAndAppointment } : undefined,
          nftStatus: nftStatus ? { update: nftStatus } : undefined,
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

  async findAll() {
    const submissions = await this.databaseService.formSubmission.findMany({
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

    const totalCount = await this.databaseService.formSubmission.count();
    return {
      totalCount,
      submissions,
    };
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
    return this.databaseService.formSubmission.findFirst({
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
