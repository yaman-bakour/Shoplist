-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('Admin', 'User');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "UserRole" "UserRole" NOT NULL DEFAULT 'User';
