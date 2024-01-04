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

export async function removeVehicle(id: string) {
    await getDataFromDB(`DELETE FROM evoscooter.vehicle WHERE Type='${id}';`);
    revalidatePath("/admin");
}

export async function removeUser(email: string) {
    await getDataFromDB(`DELETE FROM evoscooter.user WHERE Email='${email}';`);
    revalidatePath("/admin");
}

export async function removeSite(address: string) {
    await getDataFromDB(`DELETE FROM evoscooter.site WHERE Address='${address}';`);
    revalidatePath("/admin");
}

export async function handleAddSiteSubmit(formData: FormData) {
    let address = formData.get("address");
    let query = `INSERT INTO evoscooter.site (Address) VALUES('${address}');`;
    
    await addDataToDB(query)
    revalidatePath("/admin");
}

export async function handleAddVehicleSubmit(formData: FormData) {
    let type = formData.get("type");
    let site = formData.get("sites");
    let query = "INSERT INTO evoscooter.vehicle (ID, `Type`, Rentable, `Site.Address`) VALUES(0, '"+ type +"', 0, (select Address from site where Address like '%"+ site +"%'));";
    
    await addDataToDB(query)
    revalidatePath("/admin");
}

export async function handleAddUserSubmit(formData: FormData) {
    let email = formData.get("email");
    let name = formData.get("name");
    let licenseNumber = formData.get("licenseNumber");
    let type = formData.get("type");
    let site = formData.get("sites");
    let query = `INSERT INTO evoscooter.user (Email, Name, LicenseNumber, Type, SiteAddress) VALUES('${email}', '${name}','${licenseNumber}','${type}',(select Address from site where Address like '%${site}%'));`;
    
    if (type === undefined || type?.toString.length === 0)
        type = "usr"

    await addDataToDB(query);
    revalidatePath("/admin");
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

    try {
        conn = await pool.getConnection();
        await conn.query(query);
    } catch (err) {
        console.log(err)
    } finally {
        conn.end();
    }
}