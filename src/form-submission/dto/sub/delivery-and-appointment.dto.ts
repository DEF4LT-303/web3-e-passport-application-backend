import { IsDateString, IsOptional, IsString } from 'class-validator';

export class DeliveryAndAppointmentDto {
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

export class CreateDeliveryAndAppointmentDto extends DeliveryAndAppointmentDto { }
export class UpdateDeliveryAndAppointmentDto extends DeliveryAndAppointmentDto { }
