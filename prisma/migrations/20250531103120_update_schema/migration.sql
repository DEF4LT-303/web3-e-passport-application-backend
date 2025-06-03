/*
  Warnings:

  - Made the column `email` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "PassportTypeEnum" AS ENUM ('ORDINARY', 'OFFICIAL');

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "email" SET NOT NULL;

-- CreateTable
CREATE TABLE "FormSubmission" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "formStatus" JSONB,

    CONSTRAINT "FormSubmission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PassportType" (
    "id" TEXT NOT NULL,
    "type" "PassportTypeEnum" NOT NULL,
    "formSubmissionId" TEXT NOT NULL,

    CONSTRAINT "PassportType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PersonalInfo" (
    "id" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "surName" TEXT NOT NULL,
    "profession" TEXT NOT NULL,
    "religion" TEXT NOT NULL,
    "countryCode" TEXT NOT NULL,
    "mobileNo" TEXT NOT NULL,
    "birthCountry" TEXT NOT NULL,
    "birthDistrict" TEXT NOT NULL,
    "birthDate" TIMESTAMP(3),
    "citizenType" TEXT NOT NULL,
    "formSubmissionId" TEXT NOT NULL,

    CONSTRAINT "PersonalInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Address" (
    "id" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "block" TEXT NOT NULL,
    "postOffice" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL,
    "policeStation" TEXT NOT NULL,
    "yes" BOOLEAN NOT NULL,
    "no" BOOLEAN NOT NULL,
    "country" TEXT NOT NULL,
    "district2" TEXT NOT NULL,
    "city2" TEXT NOT NULL,
    "block2" TEXT NOT NULL,
    "postOffice2" TEXT NOT NULL,
    "postalCode2" TEXT NOT NULL,
    "policeStation2" TEXT NOT NULL,
    "officeType" TEXT NOT NULL,
    "formSubmissionId" TEXT NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IDDocuments" (
    "id" TEXT NOT NULL,
    "prevPassport" TEXT NOT NULL,
    "otherPassport" BOOLEAN,
    "nid" TEXT NOT NULL,
    "formSubmissionId" TEXT NOT NULL,

    CONSTRAINT "IDDocuments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ParentalInfo" (
    "id" TEXT NOT NULL,
    "fInfoStatus" BOOLEAN NOT NULL,
    "fatherName" TEXT NOT NULL,
    "fatherProfession" TEXT NOT NULL,
    "fatherNationality" TEXT NOT NULL,
    "fatherNid" TEXT NOT NULL,
    "mInfoStatus" BOOLEAN NOT NULL,
    "motherName" TEXT NOT NULL,
    "motherProfession" TEXT NOT NULL,
    "motherNationality" TEXT NOT NULL,
    "motherNid" TEXT NOT NULL,
    "lgiStatus" BOOLEAN NOT NULL,
    "legalGname" TEXT NOT NULL,
    "legalGprofession" TEXT NOT NULL,
    "legalGnationality" TEXT NOT NULL,
    "mhaon" TEXT NOT NULL,
    "formSubmissionId" TEXT NOT NULL,

    CONSTRAINT "ParentalInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SpouseInfo" (
    "id" TEXT NOT NULL,
    "maritalStatus" TEXT NOT NULL,
    "spouseName" TEXT NOT NULL,
    "spouseProfession" TEXT NOT NULL,
    "spouseNationality" TEXT NOT NULL,
    "formSubmissionId" TEXT NOT NULL,

    CONSTRAINT "SpouseInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmergencyContact" (
    "id" TEXT NOT NULL,
    "contactRelationShip" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "block" TEXT NOT NULL,
    "postOffice" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL,
    "policeStation" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "countryCode" TEXT NOT NULL,
    "mobileNo" TEXT NOT NULL,
    "formSubmissionId" TEXT NOT NULL,

    CONSTRAINT "EmergencyContact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PassportOptions" (
    "id" TEXT NOT NULL,
    "validity" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "formSubmissionId" TEXT NOT NULL,

    CONSTRAINT "PassportOptions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DeliveryAndAppointment" (
    "id" TEXT NOT NULL,
    "deliveryType" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "dateTime" TIMESTAMP(3),
    "formSubmissionId" TEXT NOT NULL,

    CONSTRAINT "DeliveryAndAppointment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PassportType_formSubmissionId_key" ON "PassportType"("formSubmissionId");

-- CreateIndex
CREATE UNIQUE INDEX "PersonalInfo_formSubmissionId_key" ON "PersonalInfo"("formSubmissionId");

-- CreateIndex
CREATE UNIQUE INDEX "Address_formSubmissionId_key" ON "Address"("formSubmissionId");

-- CreateIndex
CREATE UNIQUE INDEX "IDDocuments_formSubmissionId_key" ON "IDDocuments"("formSubmissionId");

-- CreateIndex
CREATE UNIQUE INDEX "ParentalInfo_formSubmissionId_key" ON "ParentalInfo"("formSubmissionId");

-- CreateIndex
CREATE UNIQUE INDEX "SpouseInfo_formSubmissionId_key" ON "SpouseInfo"("formSubmissionId");

-- CreateIndex
CREATE UNIQUE INDEX "EmergencyContact_formSubmissionId_key" ON "EmergencyContact"("formSubmissionId");

-- CreateIndex
CREATE UNIQUE INDEX "PassportOptions_formSubmissionId_key" ON "PassportOptions"("formSubmissionId");

-- CreateIndex
CREATE UNIQUE INDEX "DeliveryAndAppointment_formSubmissionId_key" ON "DeliveryAndAppointment"("formSubmissionId");

-- AddForeignKey
ALTER TABLE "FormSubmission" ADD CONSTRAINT "FormSubmission_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PassportType" ADD CONSTRAINT "PassportType_formSubmissionId_fkey" FOREIGN KEY ("formSubmissionId") REFERENCES "FormSubmission"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PersonalInfo" ADD CONSTRAINT "PersonalInfo_formSubmissionId_fkey" FOREIGN KEY ("formSubmissionId") REFERENCES "FormSubmission"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_formSubmissionId_fkey" FOREIGN KEY ("formSubmissionId") REFERENCES "FormSubmission"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IDDocuments" ADD CONSTRAINT "IDDocuments_formSubmissionId_fkey" FOREIGN KEY ("formSubmissionId") REFERENCES "FormSubmission"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParentalInfo" ADD CONSTRAINT "ParentalInfo_formSubmissionId_fkey" FOREIGN KEY ("formSubmissionId") REFERENCES "FormSubmission"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SpouseInfo" ADD CONSTRAINT "SpouseInfo_formSubmissionId_fkey" FOREIGN KEY ("formSubmissionId") REFERENCES "FormSubmission"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmergencyContact" ADD CONSTRAINT "EmergencyContact_formSubmissionId_fkey" FOREIGN KEY ("formSubmissionId") REFERENCES "FormSubmission"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PassportOptions" ADD CONSTRAINT "PassportOptions_formSubmissionId_fkey" FOREIGN KEY ("formSubmissionId") REFERENCES "FormSubmission"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DeliveryAndAppointment" ADD CONSTRAINT "DeliveryAndAppointment_formSubmissionId_fkey" FOREIGN KEY ("formSubmissionId") REFERENCES "FormSubmission"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
