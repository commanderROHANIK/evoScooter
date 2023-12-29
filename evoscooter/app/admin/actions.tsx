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

export async function handleAddVehicleSubmit(formData: FormData) {
    let type = formData.get("type");
    let site = formData.get("sites");
    let query = "INSERT INTO evoscooter.vehicle (ID, `Type`, Rentable, `Site.Address`) VALUES(0, '"+ type +"', 0, (select Address from site where Address like '%"+ site +"%'));";
    
    await addDataToDB(query)
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

async function addDataToDB(query: string) {
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