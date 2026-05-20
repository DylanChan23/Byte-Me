import { betterAuth } from "better-auth"
import { drizzleAdapter } from "@better-auth/drizzle-adapter"
import { getDB } from "@workspace/db"
import { headers } from "next/headers.js"
import { admin } from "better-auth/plugins"

const db = getDB()

export const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: process.env.BETTER_AUTH_URL,
  plugins: [admin()],
  cookies: {
    sessionToken: {
      attributes: {
        domain: ".dylanchan.dev",
        secure: true,
        httpOnly: true,
      },
    },
  },
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
      queryParams: {
        prompt: "select_account",
      },
      scope: ["openid", "email", "profile"],
    },
  },
})

export const getSession = async () =>
  auth.api.getSession({
    headers: await headers(),
  })
