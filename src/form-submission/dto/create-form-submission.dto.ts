import { Type } from 'class-transformer';
import { IsOptional, IsUUID, ValidateNested } from 'class-validator';

import {
  CreateAddressDto,
  CreateDeliveryAndAppointmentDto,
  CreateEmergencyContactDto,
  CreateIDDocumentsDto,
  CreateNftStatusDto,
  CreateParentalInfoDto,
  CreatePassportOptionsDto,
  CreatePassportTypeDto,
  CreatePersonalInfoDto,
  CreateSpouseInfoDto,
} from './sub';

export class CreateFormSubmissionDto {
  @IsUUID()
  userId: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreatePassportTypeDto)
  passportType?: CreatePassportTypeDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreatePersonalInfoDto)
  personalInfo?: CreatePersonalInfoDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateAddressDto)
  address?: CreateAddressDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateIDDocumentsDto)
  idDocuments?: CreateIDDocumentsDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateParentalInfoDto)
  parentalInfo?: CreateParentalInfoDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateSpouseInfoDto)
  spouseInfo?: CreateSpouseInfoDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateEmergencyContactDto)
  emergencyContact?: CreateEmergencyContactDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreatePassportOptionsDto)
  passportOptions?: CreatePassportOptionsDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateDeliveryAndAppointmentDto)
  deliveryAndAppointment?: CreateDeliveryAndAppointmentDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateNftStatusDto)
  nftStatus?: CreateNftStatusDto;
}
