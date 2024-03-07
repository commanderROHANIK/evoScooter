"use server"

import { hash } from "bcrypt";
import { redirect } from "next/navigation";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function handleSubmit(formData: FormData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const passwordAgain = formData.get("passwordAgain");
    const site = formData.get("sites");

    if (password !== passwordAgain) return;

    try {
        const hashedPassword = await hash(password as string, 10);
        console.log(site);
        await prisma.user.create({
            data: {
                Name: `${name}`,
                Email: `${email}`,
                Password: hashedPassword,
                Type: 'usr',
                Site: {
                    connect: {
                        Address: site?.toString()
                    }
                }
            }
        });
    }
    catch (error) {
        console.error('Error creating user:', error);
    } finally {
        await prisma.$disconnect();
    }

    redirect("/login");
}
