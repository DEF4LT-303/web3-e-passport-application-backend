import { PassportTypeEnum } from '@prisma/client'; // adjust the path if needed
import { IsEnum } from 'class-validator';

export class CreatePassportTypeDto {
  @IsEnum(PassportTypeEnum)
  type: PassportTypeEnum;
}

export class UpdatePassportTypeDto {
  @IsEnum(PassportTypeEnum)
  type: PassportTypeEnum;
}
