import { pgTable, text, timestamp, integer, boolean } from "drizzle-orm/pg-core"

import { user, organization } from "./users"

export const product = pgTable("product", {
  id: text("id").primaryKey(),
  organizationId: text("organization_id")
    .notNull()
    .references(() => organization.id, { onDelete: "cascade" }),
  createdBy: text("created_by").references(() => user.id, {
    onDelete: "set null",
  }),
  name: text("name").notNull(),
  sku: text("sku").notNull(),
  price: integer("price").notNull(),
  quantity: integer("quantity").notNull(),
  lowStockAt: integer("low_stock_at").notNull(),

  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
})

export const productImages = pgTable("product_images", {
  id: text("id").primaryKey(),
  productId: text("product_id")
    .notNull()
    .references(() => product.id, { onDelete: "cascade" }),
  url: text("url").notNull(),
  isPrimary: boolean("is_primary").default(false).notNull(),
})
