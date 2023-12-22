"use server";

const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    connectionLimit: 10,
    database: "evoscooter"
});

export async function getVehicles() {
    return await getDataFromDB("SELECT * FROM vehicle");
}

export async function getUsers() {
    return await getDataFromDB("SELECT * FROM user");
}

export async function getSites() {
    return await getDataFromDB("SELECT * FROM site");
}

export async function getRentals() {

}

async function getDataFromDB(query: string) {
    let conn;
    let rows;

    try {
        conn = await pool.getConnection();
        rows = await conn.query(query);
    } catch (err) {
        console.log(err)
    } finally {
        conn.end();
    }

    return rows;
}