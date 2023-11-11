const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    connectionLimit: 10,
    database: "evoscooter"
});

export async function GET(request: Request) {
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

    return Response.json(rows);
}

export async function POST(response: Response) {
    let conn;
    let rows;
    let resp;
    let data = await response.json();
    try {
        conn = await pool.getConnection();
        rows = await conn.query("INSERT INTO vehicle (Name, Email, Password, Type, SiteAddress) VALUES ('" + 
        data.name + "', '" + 
        data.email + "', '" + 
        data.password + "', 'usr', (select Address from site where Address like '%" + data.site + "%'));");
        resp = 200;
    } catch (err) {
        console.log(err)
        resp = "ERR";
    } finally {
        conn.end();
    }

    return Response.json({resp});
}

