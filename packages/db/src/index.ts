import "dotenv/config"
import { drizzle } from "drizzle-orm/neon-http"
import * as users from "./schema/users"
import * as products from "./schema/products"

export const db = drizzle(process.env.DATABASE_URL!, {
  schema: {
    ...users,
    ...products,
  },
})
export * from "./queries/products"
