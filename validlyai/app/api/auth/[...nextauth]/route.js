import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      await connectDB();

      const existingUser = await User.findOne({ email: user.email });

      if (!existingUser) {
        // Save user if not already in DB
        await User.create({
          fullname: user.name,
          email: user.email,
          password: "google_oauth", // placeholder since password isn't used
        });
      }

      return true;
    },
    async session({ session, token }) {
      // attach Mongo _id or other info if needed
      return session;
    },
  },
  pages: {
    signIn: "/signin", // Optional: custom sign-in page
  },
});

export { handler as GET, handler as POST };
