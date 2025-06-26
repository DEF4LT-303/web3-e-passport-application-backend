import { IsOptional, IsString } from 'class-validator';

export class SpouseInfoDto {
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

export class CreateSpouseInfoDto extends SpouseInfoDto { }
export class UpdateSpouseInfoDto extends SpouseInfoDto { }
