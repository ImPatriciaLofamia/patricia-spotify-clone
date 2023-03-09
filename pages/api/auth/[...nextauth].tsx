import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import spotifyApi ,{ LOGIN_URL } from "@/lib/spotify";

const refreshAccessToken(token) {
    try{
        spotifyApi.setAccessToken(token_accessToken);
        spotifyApi.setRefreshToken(token.refreshToken);
    }catch (error) {
        ...token 
        error: "The RefreshAccessTokenError"
    }
}

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    SpotifyProvider({
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
      authorization: LOGIN_URL,
    }),
    // ...add more providers here
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: "./Login",
  },
  callbacks: {
    async jwt({token, account, user}){
        if(account && user){
            return {
                ...token,
                accessToken: account.access_tokens,
                refreshToken: account.refresh_token,
                username: account.providedrAccountId,
                accessTokenExpires: account.expires_at * 1000,
            }
        }

        if(Date.now() < token.accessTookenExpires) {
            return token,
        }
        console.log("Access token has expired, refreshing...");
        return await refreshAccessToken(token)
    }
  },
};

export default NextAuth(authOptions);
