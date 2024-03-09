-- CreateTable
CREATE TABLE "Rentals" (
    "UserEmail" TEXT NOT NULL,
    "VehicleId" INTEGER NOT NULL,
    "StartTime" DATETIME NOT NULL,
    "EndTime" DATETIME NOT NULL,
    "State" TEXT NOT NULL,

    PRIMARY KEY ("UserEmail", "VehicleId"),
    CONSTRAINT "Rentals_UserEmail_fkey" FOREIGN KEY ("UserEmail") REFERENCES "User" ("Email") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Rentals_VehicleId_fkey" FOREIGN KEY ("VehicleId") REFERENCES "Vehicle" ("Id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Site" (
    "Address" TEXT NOT NULL PRIMARY KEY
);

-- CreateTable
CREATE TABLE "User" (
    "Email" TEXT NOT NULL PRIMARY KEY,
    "Name" TEXT NOT NULL,
    "LicenseNumber" TEXT,
    "Type" TEXT NOT NULL,
    "Password" TEXT NOT NULL,
    "SiteAddress" TEXT NOT NULL,
    CONSTRAINT "User_SiteAddress_fkey" FOREIGN KEY ("SiteAddress") REFERENCES "Site" ("Address") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Vehicle" (
    "Id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Type" TEXT NOT NULL,
    "Rentable" BOOLEAN NOT NULL,
    "SiteAddress" TEXT NOT NULL,
    CONSTRAINT "Vehicle_SiteAddress_fkey" FOREIGN KEY ("SiteAddress") REFERENCES "Site" ("Address") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Site_Address_key" ON "Site"("Address");

-- CreateIndex
CREATE UNIQUE INDEX "User_Email_key" ON "User"("Email");
