import { IsEmail, IsOptional, IsString } from 'class-validator';

export class EmergencyContactDto {
  @IsOptional()
  @IsString()
  contactRelationShip?: string;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  country?: string;

  @IsOptional()
  @IsString()
  district?: string;

  @IsOptional()
  @IsString()
  city?: string;

  @IsOptional()
  @IsString()
  block?: string;

  @IsOptional()
  @IsString()
  postOffice?: string;

  @IsOptional()
  @IsString()
  postalCode?: string;

  @IsOptional()
  @IsString()
  policeStation?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  countryCode?: string;

  @IsOptional()
  @IsString()
  mobileNo?: string;
}

export class CreateEmergencyContactDto extends EmergencyContactDto { }
export class UpdateEmergencyContactDto extends EmergencyContactDto { }
