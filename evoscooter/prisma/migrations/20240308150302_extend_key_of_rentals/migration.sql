/*
  Warnings:

  - The primary key for the `Rentals` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Rentals" (
    "UserEmail" TEXT NOT NULL,
    "VehicleId" INTEGER NOT NULL,
    "StartTime" DATETIME NOT NULL,
    "EndTime" DATETIME NOT NULL,
    "State" TEXT NOT NULL,

    PRIMARY KEY ("UserEmail", "VehicleId", "StartTime"),
    CONSTRAINT "Rentals_UserEmail_fkey" FOREIGN KEY ("UserEmail") REFERENCES "User" ("Email") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Rentals_VehicleId_fkey" FOREIGN KEY ("VehicleId") REFERENCES "Vehicle" ("Id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Rentals" ("EndTime", "StartTime", "State", "UserEmail", "VehicleId") SELECT "EndTime", "StartTime", "State", "UserEmail", "VehicleId" FROM "Rentals";
DROP TABLE "Rentals";
ALTER TABLE "new_Rentals" RENAME TO "Rentals";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
