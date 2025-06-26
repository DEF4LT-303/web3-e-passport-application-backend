import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class AddressDto {
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

export class CreateAddressDto extends AddressDto { }
export class UpdateAddressDto extends AddressDto { }
