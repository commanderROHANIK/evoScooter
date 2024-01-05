"use server";

const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    connectionLimit: 10,
    database: "evoscooter"
});

export async function rentVehicle(email: string, vehicleId: number) {
    console.log(email, vehicleId);
    let conn;
    let rows;

    try {
        conn = await pool.getConnection();
        rows = await conn.query("INSERT INTO evoscooter.rentals (`User.Email`, `Vehicle.Id`, State) VALUES('" + email + "', " + vehicleId + ", 'Tam');");
    } catch (err) {
        console.log(err)
    } finally {
        conn.end();
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