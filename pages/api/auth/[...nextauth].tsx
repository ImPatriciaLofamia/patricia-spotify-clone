import NextAuth from "next-auth"
import SpotifyProvider from "next-auth/providers/spotify"
import spotifyApi, { LOGIN_URL } from "../../../lib/spotify"
async function refreshAccessToken(token) {
  try {
    spotifyApi.setAccessToken(token.accessToken);
    spotifyApi.setRefreshToken(token.refreshAccessToken);
    const { body: refreshAccessToken } = await spotifyApi.refreshAccessToken();
    return {
      ...token,
      accessToken: refreshAccessToken.access_token,
      accessTokenExpires: Date.now() + refreshedTokens.expires_at * 1000,
      refreshToken: refreshAccessToken.refresh_token ?? token.refreshToken, // Fall back to old refresh token
    }
  } catch (error) {
    console.log(error)
    return {
      ...token,
      error: "RefreshAccessTokenError",
    }
  }
}
export default NextAuth({
  providers: [
    SpotifyProvider({
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
      authorization: LOGIN_URL,
    }),
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: '/login'
  },
  callbacks: {
    async jwt({ token, user, account }) {
      if (account && user) {
        return {
          ...token,
          accessToken: account.access_token,
          accessTokenExpires: Date.now() + account.expires_at * 1000,
          refreshToken: account.refresh_token,
          username: account.providerAccountId,
        }
      }
      if (Date.now() < token.accessTokenExpires) {
        return token
      }
      return refreshAccessToken(token)
    },
    async session({ session, token }) {
      session.user.username = token.username
      session.user.accessToken = token.accessToken
      session.user.refreshToken = token.refreshToken
      session.error = token.error
      return session
    },
  }
});
