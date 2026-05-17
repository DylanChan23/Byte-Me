import { drizzle } from "drizzle-orm/neon-http"
import { neon } from "@neondatabase/serverless"
import * as users from "./schema/users"
import * as products from "./schema/products"

export function getDB() {
  const url = process.env.DATABASE_URL

  if (!url) {
    throw new Error("DATABASE_URL is missing")
  }

  const sql = neon(url)

  return drizzle(sql, {
    schema: {
      ...users,
      ...products,
    },
  })
}

export * from "./queries/products"
