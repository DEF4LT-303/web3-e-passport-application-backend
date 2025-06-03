import { IsEmail, IsOptional, IsString } from 'class-validator';

export class CreateEmergencyContactDto {
  @IsString()
  contactRelationShip: string;

  @IsString()
  name: string;

  @IsString()
  country: string;

  @IsString()
  district: string;

  @IsString()
  city: string;

  @IsString()
  block: string;

  @IsString()
  postOffice: string;

  @IsString()
  postalCode: string;

  @IsString()
  policeStation: string;

  @IsEmail()
  email: string;

  @IsString()
  countryCode: string;

  @IsString()
  mobileNo: string;
}

export class UpdateEmergencyContactDto {
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
