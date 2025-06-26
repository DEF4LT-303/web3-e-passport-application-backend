import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class IDDocumentsDto {
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

export class CreateIDDocumentsDto extends IDDocumentsDto { }
export class UpdateIDDocumentsDto extends IDDocumentsDto { }
