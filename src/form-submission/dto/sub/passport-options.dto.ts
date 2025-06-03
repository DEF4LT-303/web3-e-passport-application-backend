import { IsOptional, IsString } from 'class-validator';

export class CreatePassportOptionsDto {
  @IsString()
  validity: string;

  @IsString()
  price: string;
}

export class UpdatePassportOptionsDto {
  @IsOptional()
  @IsString()
  validity?: string;

  @IsOptional()
  @IsString()
  price?: string;
}
