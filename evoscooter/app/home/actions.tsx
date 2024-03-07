"use server";

import { revalidatePath } from "next/cache";
import { PrismaClient } from "@prisma/client";
import formatDateToSQLDateTime from "../utils/DateConverter";

const prisma = new PrismaClient();

export async function rentVehicle(formData: FormData) {
    const email = formData.get("email");
    const vehicle = formData.get("vehicle");
    const start = formData.get("start");
    const end = formData.get("end");

    const newRental = await prisma.rentals.create({
        data: {
          UserEmail: `${email}`,
          VehicleId: parseInt(`${vehicle}`, 10),
          StartTime: convertToISO8601(`${start}`),
          EndTime: convertToISO8601(`${end}`),
          State: "Pending"
        }
      });
      console.log('New rental created:', newRental);
  
      await prisma.vehicle.update({
        where: { Id: parseInt(`${vehicle}`, 10) },
        data: { Rentable: false }
      });

    revalidatePath("/home");
}

export async function getVehicles() {
    return await prisma.vehicle.findMany();
}

function convertToISO8601(dateString: string) {
  const date = new Date(dateString);
  return date.toISOString();
}