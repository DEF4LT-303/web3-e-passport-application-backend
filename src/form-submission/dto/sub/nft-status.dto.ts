import { IsBoolean, IsOptional, IsString } from "class-validator";

export class CreateNftStatusDto {
  @IsOptional()
  @IsBoolean()
  minted?: boolean;

  @IsOptional()
  @IsString()
  nftId?: string;
}