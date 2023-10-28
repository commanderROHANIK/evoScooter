const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    connectionLimit: 10,
    database: "evoscooter"
});

export async function GET(request) {
    let conn;
    let rows;

    try {
        conn = await pool.getConnection();
        rows = await conn.query("SELECT * FROM user");
    } catch (err) {
        console.log(err)
    } finally {
        conn.end();
    }

    return Response.json(rows);
}

