import { compare } from "bcrypt";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";

export const authOptions = {
    session: {
        strategy: 'jwt'
    },
    providers: [
        CredentialsProvider({
            credentials: {
                username: {},
                password: {}
            },
            async authorize(credentials, req) {
                if (!credentials?.email || !credentials?.password) {
                    return null;
                }

                const prisma = new PrismaClient();
                const user = await prisma.user.findFirst({
                    where: {
                        Email: credentials?.email
                    }
                })

                if (!user) return null;

                if(await compare(credentials?.password, user?.Password)) {
                    return {id: 1, email: user.Email};
                }
                return null;
            }
        })
    ],
    secret: "22"
}

const handler = NextAuth(authOptions);
export {handler as GET, handler as POST}