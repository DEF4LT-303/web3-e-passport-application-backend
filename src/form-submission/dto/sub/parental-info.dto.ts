import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class ParentalInfoDto {
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

export class CreateParentalInfoDto extends ParentalInfoDto { }
export class UpdateParentalInfoDto extends ParentalInfoDto { }
