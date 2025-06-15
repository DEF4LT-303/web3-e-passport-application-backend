import { IsDateString, IsOptional, IsString } from 'class-validator';

export class CreatePersonalInfoDto {
  @IsString()
  gender: string;

  @IsString()
  fullName: string;

  @IsString()
  firstName: string;

  @IsString()
  surName: string;

  @IsString()
  profession: string;

  @IsString()
  religion: string;

  @IsString()
  countryCode: string;

  @IsString()
  mobileNo: string;

  @IsString()
  birthCountry: string;

  @IsString()
  birthDistrict: string;

  @IsOptional()
  @IsDateString()
  birthDate: string;

  @IsString()
  citizenType: string;
}

export class UpdatePersonalInfoDto {
  @IsOptional()
  @IsString()
  gender?: string;

  @IsOptional()
  @IsString()
  fullName?: string;

  @IsOptional()
  @IsString()
  firstName?: string;

  @IsOptional()
  @IsString()
  surName?: string;

  @IsOptional()
  @IsString()
  profession?: string;

  @IsOptional()
  @IsString()
  religion?: string;

  @IsOptional()
  @IsString()
  countryCode?: string;

  @IsOptional()
  @IsString()
  mobileNo?: string;

  @IsOptional()
  @IsString()
  birthCountry?: string;

  @IsOptional()
  @IsString()
  birthDistrict?: string;

  @IsOptional()
  @IsDateString()
  birthDate?: string;

  @IsOptional()
  @IsString()
  citizenType?: string;
}
