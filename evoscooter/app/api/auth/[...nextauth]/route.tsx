import NextAuth from "next-auth";
import AzureAD from "next-auth/providers/azure-ad";

export const authOptions = {
  session: {
    strategy: 'jwt'
  },
  providers: [
    AzureAD({
      clientId: process.env.AZURE_AD_CLIENT_ID!,
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET!,
      tenantId: process.env.AZURE_AD_TENANT_ID!
    })
  ],
  secret: process.env.NEXT_AUTH_SECRET!,
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }