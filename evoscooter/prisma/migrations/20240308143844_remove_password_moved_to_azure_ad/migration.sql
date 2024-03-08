/*
  Warnings:

  - You are about to drop the column `Password` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `Type` on the `User` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "Email" TEXT NOT NULL PRIMARY KEY,
    "Name" TEXT NOT NULL,
    "LicenseNumber" TEXT,
    "SiteAddress" TEXT NOT NULL,
    CONSTRAINT "User_SiteAddress_fkey" FOREIGN KEY ("SiteAddress") REFERENCES "Site" ("Address") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_User" ("Email", "LicenseNumber", "Name", "SiteAddress") SELECT "Email", "LicenseNumber", "Name", "SiteAddress" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_Email_key" ON "User"("Email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
