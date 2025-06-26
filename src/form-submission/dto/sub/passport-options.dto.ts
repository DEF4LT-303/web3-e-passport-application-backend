import { IsOptional, IsString } from 'class-validator';

export class PassportOptionsDto {
  @IsOptional()
  @IsString()
  validity?: string;

  @IsOptional()
  @IsString()
  price?: string;
}

export class CreatePassportOptionsDto extends PassportOptionsDto { }
export class UpdatePassportOptionsDto extends PassportOptionsDto { }
