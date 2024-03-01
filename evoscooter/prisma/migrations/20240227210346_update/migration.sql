/*
  Warnings:

  - You are about to drop the `site` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "site_address_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "site";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Site" (
    "address" TEXT NOT NULL PRIMARY KEY
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "email" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "licenseNumber" TEXT,
    "type" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "siteAddress" TEXT NOT NULL,
    CONSTRAINT "User_siteAddress_fkey" FOREIGN KEY ("siteAddress") REFERENCES "Site" ("address") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_User" ("email", "licenseNumber", "name", "password", "siteAddress", "type") SELECT "email", "licenseNumber", "name", "password", "siteAddress", "type" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE TABLE "new_Vehicle" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL,
    "rentable" BOOLEAN NOT NULL,
    "siteAddress" TEXT NOT NULL,
    CONSTRAINT "Vehicle_siteAddress_fkey" FOREIGN KEY ("siteAddress") REFERENCES "Site" ("address") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Vehicle" ("id", "rentable", "siteAddress", "type") SELECT "id", "rentable", "siteAddress", "type" FROM "Vehicle";
DROP TABLE "Vehicle";
ALTER TABLE "new_Vehicle" RENAME TO "Vehicle";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "Site_address_key" ON "Site"("address");
