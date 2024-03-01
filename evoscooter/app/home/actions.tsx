"use server";

import { revalidatePath } from "next/cache";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function rentVehicle(formData: FormData) {
    const email = formData.get("email");
    const vehicle = formData.get("vehicle");
    const start = formData.get("start");
    const end = formData.get("end");


    const newRental = await prisma.rentals.create({
        data: {
          userEmail: `${email}`,
          vehicleId: parseInt(`${vehicle}`, 10),
          startTime: `${start}`,
          endTime: `${end}`,
          state: "Pending"
        }
      });
      console.log('New rental created:', newRental);
  
      await prisma.vehicle.update({
        where: { id: parseInt(`${vehicle}`, 10) },
        data: { rentable: false }
      });

    revalidatePath("/home");
}

export async function getVehicles() {
    return await prisma.vehicle.findMany();
}