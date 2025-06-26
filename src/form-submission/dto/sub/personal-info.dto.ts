import { IsDateString, IsOptional, IsString } from 'class-validator';

export class PersonalInfoDto {
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

export class CreatePersonalInfoDto extends PersonalInfoDto { }
export class UpdatePersonalInfoDto extends PersonalInfoDto { }
