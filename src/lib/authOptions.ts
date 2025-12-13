import type { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import { prisma } from "@/lib/prisma";

export const authOptions: NextAuthOptions = {
  session: { strategy: "jwt" },
  pages: { signIn: "/login" },
  debug: true, // see details in terminal while debugging
  providers: [
    Credentials({
      name: "Email & Password",
      credentials: { email: {}, password: {} },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) return null;
          const user = await prisma.user.findUnique({
            where: { email: credentials.email },
            select: { id: true, email: true, name: true, passwordHash: true },
          });
          if (!user) return null;
          const ok = await compare(credentials.password, user.passwordHash);
          if (!ok) return null;
          return {
            id: String(user.id),
            email: user.email,
            name: user.name ?? undefined,
          };
        } catch (e) {
          console.error("authorize() failed:", e);
          return null;
        }
      },
    }),
  ],
};
