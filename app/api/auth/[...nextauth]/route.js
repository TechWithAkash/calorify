// import NextAuth from 'next-auth';
// // import GithubProvider from 'next-auth/providers/github';
// import GoogleProvider from "next-auth/providers/google";

// const handler = NextAuth({
//   providers: [
//     // GithubProvider({
//     //   clientId: process.env.GITHUB_ID,
//     //   clientSecret: process.env.GITHUB_SECRET,
//     // }),
//     GoogleProvider({
//         clientId: process.env.GOOGLE_CLIENT_ID,
//         clientSecret: process.env.GOOGLE_CLIENT_SECRET
//       }),
//   ],
//   secret: process.env.AUTH_SECRET,
//   callbacks: {
//     redirect({ url, baseUrl }) {
//       // Ensure the app redirects to your base URL
//       return baseUrl;
//     },
//   },
// });

// export { handler as GET, handler as POST };

import NextAuth from 'next-auth';
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.AUTH_SECRET, // Ensure this is set in your environment variables
  callbacks: {
    async jwt({ token, account, user }) {
      if (account && user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.image = user.image;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.email = token.email;
      session.user.name = token.name;
      session.user.image = token.image;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
