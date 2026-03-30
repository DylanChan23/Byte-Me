import "dotenv/config"
import { drizzle } from "drizzle-orm/neon-http"
import * as schema from "./schema/users"

if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL not defined!")

export const db = drizzle(process.env.DATABASE_URL!, { schema })
