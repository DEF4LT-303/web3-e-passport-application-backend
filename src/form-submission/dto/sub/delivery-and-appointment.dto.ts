import { IsDateString, IsOptional, IsString } from 'class-validator';

export class CreateDeliveryAndAppointmentDto {
  @IsString()
  deliveryType: string;

  @IsString()
  price: string;

  @IsOptional()
  @IsDateString()
  dateTime?: string;
}

export class UpdateDeliveryAndAppointmentDto {
  @IsOptional()
  @IsString()
  deliveryType?: string;

  @IsOptional()
  @IsString()
  price?: string;

  @IsOptional()
  @IsDateString()
  dateTime?: string;
}
