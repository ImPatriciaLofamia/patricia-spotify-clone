import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import spotifyApi ,{ LOGIN_URL } from "@/lib/spotify";

async function refreshAccessToken(token: any) {
  try {
      spotifyApi.setAccessToken(token.accessToken);
      spotifyApi.setRefreshToken(token.refreshToken);

      const {body: refreshedToken} = await spotifyApi.refreshAccessToken();

      return {
        ...token,
        accessToken: refreshedToken.access_token,
        accessTokenExpires: Date.now() + refreshedToken.expires_in * 1000,
        refreshToken: refreshedToken.refresh_token ?? token.refreshToken,
      };
  } catch (error) {
    console.error(error);

    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}

export const authOptions = {
  providers: [
    SpotifyProvider({
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
      authorization: LOGIN_URL,
    }),
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
            };
        }

        if(Date.now() < token.accessTookenExpires) {
            return token;
        }
        return await refreshAccessToken(token)
    },
    
    async session({session, token}){
      session.user.accessTokeb = token.accessToken;
      session.user.refreshToken = token.refreshToken;
      session.user.username = token.username;
      
      return session;

    }
  },
};

export default NextAuth(authOptions);