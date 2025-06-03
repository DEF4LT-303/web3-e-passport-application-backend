import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class CreateParentalInfoDto {
  @IsBoolean()
  fInfoStatus: boolean;

  @IsString()
  fatherName: string;

  @IsString()
  fatherProfession: string;

  @IsString()
  fatherNationality: string;

  @IsString()
  fatherNid: string;

  @IsBoolean()
  mInfoStatus: boolean;

  @IsString()
  motherName: string;

  @IsString()
  motherProfession: string;

  @IsString()
  motherNationality: string;

  @IsString()
  motherNid: string;

  @IsBoolean()
  lgiStatus: boolean;

  @IsString()
  legalGname: string;

  @IsString()
  legalGprofession: string;

  @IsString()
  legalGnationality: string;

  @IsString()
  mhaon: string;
}

export class UpdateParentalInfoDto {
  @IsOptional()
  @IsBoolean()
  fInfoStatus?: boolean;

  @IsOptional()
  @IsString()
  fatherName?: string;

  @IsOptional()
  @IsString()
  fatherProfession?: string;

  @IsOptional()
  @IsString()
  fatherNationality?: string;

  @IsOptional()
  @IsString()
  fatherNid?: string;

  @IsOptional()
  @IsBoolean()
  mInfoStatus?: boolean;

  @IsOptional()
  @IsString()
  motherName?: string;

  @IsOptional()
  @IsString()
  motherProfession?: string;

  @IsOptional()
  @IsString()
  motherNationality?: string;

  @IsOptional()
  @IsString()
  motherNid?: string;

  @IsOptional()
  @IsBoolean()
  lgiStatus?: boolean;

  @IsOptional()
  @IsString()
  legalGname?: string;

  @IsOptional()
  @IsString()
  legalGprofession?: string;

  @IsOptional()
  @IsString()
  legalGnationality?: string;

  @IsOptional()
  @IsString()
  mhaon?: string;
}
