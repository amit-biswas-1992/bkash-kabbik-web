import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Providers from "next-auth/providers/google";

export const authOptions = {
    
    providers: [
        
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
              params: {
                scope: 'profile email',
                prompt: 'select_account'
              }
            }
        }),
    ],

    callbacks: {
        async jwt({ token, account }) {
          // Persist the OAuth access_token to the token right after signin
        
          if (account) {
            token.id_token = account.id_token;
          }
          return token;
        },
        async session({ session,  user, token }) {
          // Send properties to the client, like an access_token from a provider.
          session.id_token = token.id_token;
          return session;
        }, 
      },
    
    secret: process.env.JWT_SECRET,

    // providers: [
    //   Providers.Google({
    //     clientId: process.env.GOOGLE_CLIENT_ID,
    //     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    //     scope: 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email',
    //   }),
    // ],

}

export default NextAuth(authOptions)