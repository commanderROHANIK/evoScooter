"use server";

import { RentData } from "@/types";
import { revalidatePath } from "next/cache";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getVehicles() {
    return prisma.vehicle.findMany();
}

export async function getUsers() {
    var users = await prisma.user.findMany();

    return users;
}

export async function getSites() {
    return prisma.site.findMany();
}

export async function getRentals() {
    return prisma.rentals.findMany();
}

export async function removeVehicle(id: number) {
    await prisma.vehicle.delete({
        where: {
            Id: id
        }
    });
    revalidatePath("/admin");
}

export async function removeUser(email: string) {
    await prisma.user.delete({
        where: {
            Email: email
        }
    })
    revalidatePath("/admin");
}

export async function removeSite(address: string) {
    await prisma.site.delete({ where: { address: address } })
    revalidatePath("/admin");
}

export async function handleAddSiteSubmit(formData: FormData) {
    if (formData.get("address") != null)
        await prisma.site.create({ data: { address: `${formData.get("address")}` } })

    revalidatePath("/admin");
}

export async function handleAddVehicleSubmit(formData: FormData) {
    const type = formData.get("type");
    const site = formData.get("sites");

    const siteRecord = await prisma.site.findFirst({
        where: {
            Address: {
                contains: `${site}`
            }
        }
    });

    if (!siteRecord) return;

    await prisma.vehicle.create({
        data: {
            Type: `${type}`,
            Rentable: true,
            SiteAddress: siteRecord.Address
        }
    });

    revalidatePath("/admin");
}

export async function handleAddUserSubmit(formData: FormData) {
    let email = formData.get("email");
    let name = formData.get("name");
    let licenseNumber = formData.get("licenseNumber");
    let type = formData.get("type");
    let site = formData.get("sites");

    if (typeof type === 'undefined' || (typeof type === 'string' && type.length === 0)) {
        type = "usr";
    }

    try {
        const siteRecord = await prisma.site.findFirst({
            where: {
                Address: {
                    contains: `${site}`
                }
            }
        });
        await prisma.user.create({
            data: {
                Email: `${email}`,
                Name: `${name}`,
                LicenseNumber: `${licenseNumber}`,
                Type: `${type}`,
                SiteAddress: siteRecord?.Address,
                Password: ""
            }
        });

    } catch (error) {
        console.error('Error creating new user:', error);
    } finally {
        await prisma.$disconnect();
    }
    revalidatePath("/admin");
}

export async function updateRentState(rental: RentData, state: string) {

    await prisma.rentals.update({
        where: {
            UserEmail_VehicleId_StartTime: {
                UserEmail: rental.UserEmail,
                VehicleId: rental.VehicleId,
                StartTime: rental.StartTime
            }
        },
        data: {
            State: state
        }
    });
    revalidatePath("/admin");
}

