import { IsOptional, IsString } from 'class-validator';

export class CreateSpouseInfoDto {
  @IsString()
  maritalStatus: string;

  @IsString()
  spouseName: string;

  @IsString()
  spouseProfession: string;

  @IsString()
  spouseNationality: string;
}

export class UpdateSpouseInfoDto {
  @IsOptional()
  @IsString()
  maritalStatus?: string;

  @IsOptional()
  @IsString()
  spouseName?: string;

  @IsOptional()
  @IsString()
  spouseProfession?: string;

  @IsOptional()
  @IsString()
  spouseNationality?: string;
}
