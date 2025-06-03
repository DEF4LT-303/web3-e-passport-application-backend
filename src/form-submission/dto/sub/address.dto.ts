import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class CreateAddressDto {
  @IsString()
  district: string;

  @IsString()
  city: string;

  @IsString()
  block: string;

  @IsString()
  postOffice: string;

  @IsString()
  postalCode: string;

  @IsString()
  policeStation: string;

  @IsBoolean()
  yes: boolean;

  @IsBoolean()
  no: boolean;

  @IsString()
  country: string;

  @IsString()
  district2: string;

  @IsString()
  city2: string;

  @IsString()
  block2: string;

  @IsString()
  postOffice2: string;

  @IsString()
  postalCode2: string;

  @IsString()
  policeStation2: string;

  @IsString()
  officeType: string;
}

export class UpdateAddressDto {
  @IsOptional()
  @IsString()
  district?: string;

  @IsOptional()
  @IsString()
  city?: string;

  @IsOptional()
  @IsString()
  block?: string;

  @IsOptional()
  @IsString()
  postOffice?: string;

  @IsOptional()
  @IsString()
  postalCode?: string;

  @IsOptional()
  @IsString()
  policeStation?: string;

  @IsOptional()
  @IsBoolean()
  yes?: boolean;

  @IsOptional()
  @IsBoolean()
  no?: boolean;

  @IsOptional()
  @IsString()
  country?: string;

  @IsOptional()
  @IsString()
  district2?: string;

  @IsOptional()
  @IsString()
  city2?: string;

  @IsOptional()
  @IsString()
  block2?: string;

  @IsOptional()
  @IsString()
  postOffice2?: string;

  @IsOptional()
  @IsString()
  postalCode2?: string;

  @IsOptional()
  @IsString()
  policeStation2?: string;

  @IsOptional()
  @IsString()
  officeType?: string;
}
