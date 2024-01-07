"use server";

import { revalidatePath } from "next/cache";

const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    connectionLimit: 10,
    database: "evoscooter"
});

export async function rentVehicle(formData: FormData) {
    const email = formData.get("email");
    const vehicle = formData.get("vehicle");
    const start = formData.get("start");
    const end = formData.get("end");

    let conn;

    try {
        conn = await pool.getConnection();
        await conn.query("INSERT INTO evoscooter.rentals (`User.Email`, `Vehicle.Id`, StartTime, EndTime, State) VALUES('" + email +"', " + vehicle + ", '" + start + "', '" + end + "', 'Pending');");
        await conn.query("UPDATE evoscooter.vehicle SET Rentable=0 WHERE Id=" + vehicle + ";");
    } catch (err) {
        console.log(err)
    } finally {
        conn.end();
        revalidatePath("/home");
    }
}

export async function getVehicles() {
    let conn;
    let rows;

    try {
        conn = await pool.getConnection();
        rows = await conn.query("SELECT * FROM vehicle");
    } catch (err) {
        console.log(err)
    } finally {
        conn.end();
    }

    return rows;
}