import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    session: {
        strategy: 'jwt'
    },
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                return true;
            }
        })
    ],
    secret: "22"
}

const handler = NextAuth(authOptions);
export {handler as GET, handler as POST}