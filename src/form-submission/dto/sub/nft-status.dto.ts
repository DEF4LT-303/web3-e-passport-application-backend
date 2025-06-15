import { IsBoolean, IsOptional, IsString } from "class-validator";

export class CreateNftStatusDto {
  @IsBoolean()
  minted: boolean;

  @IsOptional()
  @IsString()
  nftId?: string;
}