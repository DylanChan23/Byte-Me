import { drizzle } from "drizzle-orm/neon-http"
import * as users from "./schema/users"
import * as products from "./schema/products"
import { neon } from "@neondatabase/serverless"

const sql = neon(process.env.DATABASE_URL!)

export const db = drizzle(sql, {
  schema: {
    ...users,
    ...products,
  },
})
export * from "./queries/products"
