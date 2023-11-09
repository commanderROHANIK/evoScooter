import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    session: {
        strategy: 'jwt'
    },
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    return null;
                }
                const mariadb = require('mariadb');
                const pool = mariadb.createPool({
                    host: "localhost",
                    user: "root",
                    password: "root",
                    connectionLimit: 10,
                    database: "evoscooter"
                });
                let conn = await pool.getConnection();
                let rows = await conn.query("SELECT * FROM user WHERE Email = '" + credentials.email + "';");

                let user = rows[0];

                if (!user) {
                    return null;
                }
                
                if(user.Password === credentials.password) {
                    return user;
                }

                return null;
            }
        })
    ],
    secret: "22"
}

const handler = NextAuth(authOptions);
export {handler as GET, handler as POST}