import { betterAuth } from "better-auth"
import { drizzleAdapter } from "@better-auth/drizzle-adapter"
import { db } from "@workspace/db"
import { headers } from "next/headers.js"

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  pages: {
    login: "/login",
  },
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
})

export const getSession = async () =>
  auth.api.getSession({
    headers: await headers(),
  })
