import { drizzle } from "drizzle-orm/neon-http"
import * as schema from "./schema"
import { config } from "dotenv"
import path from "path"

config({ path: path.resolve(__dirname, "../../.env") })

const db = drizzle(process.env.DATABASE_URL!, { schema })
