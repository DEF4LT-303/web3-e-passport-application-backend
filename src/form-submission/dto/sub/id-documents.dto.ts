import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class CreateIDDocumentsDto {
  @IsString()
  prevPassport: string;

  @IsOptional()
  @IsBoolean()
  otherPassport?: boolean;

  @IsString()
  nid: string;
}

export class UpdateIDDocumentsDto {
  @IsOptional()
  @IsString()
  prevPassport?: string;

  @IsOptional()
  @IsBoolean()
  otherPassport?: boolean;

  @IsOptional()
  @IsString()
  nid?: string;
}
