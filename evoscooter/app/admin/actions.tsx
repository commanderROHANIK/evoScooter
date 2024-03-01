"use server";

import { revalidatePath } from "next/cache";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getVehicles() {
    return prisma.vehicle.findMany();
}

export async function getUsers() {
    return prisma.user.findMany();
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
            id: id
        }
    });
    revalidatePath("/admin");
}

export async function removeUser(email: string) {
    await prisma.user.delete({
        where: {
            email: email
        }
    })
    revalidatePath("/admin");
}

export async function removeSite(address: string) {
    await prisma.site.delete({ where: { address: address } })
    revalidatePath("/admin");
}

export async function handleAddSiteSubmit(formData: FormData) {
    //let address = formData.get("address")?.toString();
    //let query = `INSERT INTO evoscooter.site (Address) VALUES('${address}');`;


    if (formData.get("address") != null)
        await prisma.site.create({ data: { address: `${formData.get("address")}` } })

    revalidatePath("/admin");
}

export async function handleAddVehicleSubmit(formData: FormData) {
    const type = formData.get("type");
    const site = formData.get("sites");

    const siteRecord = await prisma.site.findFirst({
        where: {
            address: {
                contains: `${site}`
            }
        }
    });

    if (!siteRecord) return;

    await prisma.vehicle.create({
        data: {
            type: `${type}`,
            rentable: true,
            siteAddress: siteRecord.address
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

    // Ellenőrizzük, hogy a 'type' változó undefined-e vagy üres string
    if (typeof type === 'undefined' || (typeof type === 'string' && type.length === 0)) {
        type = "usr";
    }

    try {
        const siteRecord = await prisma.site.findFirst({
            where: {
                address: {
                    contains: `${site}`
                }
            }
        });
        // Prisma segítségével hozzáadjuk az új felhasználót az adatbázishoz
        await prisma.user.create({
            data: {
                email: `${email}`,
                name: `${name}`,
                licenseNumber: `${licenseNumber}`,
                type: `${type}`,
                siteAddress: siteRecord?.address,
                password: ""
            }
        });
        
    } catch (error) {
        console.error('Error creating new user:', error);
    } finally {
        await prisma.$disconnect();
    }
    revalidatePath("/admin");
}