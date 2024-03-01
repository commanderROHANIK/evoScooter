-- CreateTable
CREATE TABLE "Rentals" (
    "userEmail" TEXT NOT NULL,
    "vehicleId" INTEGER NOT NULL,
    "startTime" DATETIME NOT NULL,
    "endTime" DATETIME NOT NULL,
    "state" TEXT NOT NULL,

    PRIMARY KEY ("userEmail", "vehicleId"),
    CONSTRAINT "Rentals_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User" ("email") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Rentals_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "Vehicle" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "site" (
    "address" TEXT NOT NULL PRIMARY KEY
);

-- CreateTable
CREATE TABLE "User" (
    "email" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "licenseNumber" TEXT,
    "type" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "siteAddress" TEXT NOT NULL DEFAULT 'Szeged, Horváth Mihály u. 5, 6720 Magyarország',
    CONSTRAINT "User_siteAddress_fkey" FOREIGN KEY ("siteAddress") REFERENCES "site" ("address") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Vehicle" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL,
    "rentable" BOOLEAN NOT NULL,
    "siteAddress" TEXT NOT NULL,
    CONSTRAINT "Vehicle_siteAddress_fkey" FOREIGN KEY ("siteAddress") REFERENCES "site" ("address") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "site_address_key" ON "site"("address");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
