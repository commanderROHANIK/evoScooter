"use server"

import { hash } from "bcrypt";
import { redirect } from "next/navigation";


export async function handleSubmit(formData: FormData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const passwordAgain = formData.get("passwordAgain");
    const site = formData.get("sites");

    if (password !== passwordAgain) return;

    const mariadb = require('mariadb');
    const pool = mariadb.createPool({
        host: "localhost",
        user: "root",
        password: "root",
        connectionLimit: 10,
        database: "evoscooter"
    });

    let conn;

    try {
        conn = await pool.getConnection();
        await conn.query(`INSERT INTO user (Name, Email, Password, Type, SiteAddress) VALUES ('${name}', '${email}', '${await hash(password as string, 10)}', 'usr', (select Address from site where Address like '%${site}%'));`);
    } catch (err) {
        console.log(err);
    } finally {
        conn.end();
    }

    redirect("/login");
}
