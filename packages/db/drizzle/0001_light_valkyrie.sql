CREATE TABLE "invite" (
	"id" text PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"role" text,
	"organization_id" text NOT NULL,
	"token" text NOT NULL,
	"invited_by" text,
	"expires_at" timestamp,
	"accepted_at" timestamp,
	"created_at" timestamp NOT NULL,
	CONSTRAINT "invite_token_unique" UNIQUE("token")
);
--> statement-breakpoint
CREATE TABLE "organization" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"slug" text NOT NULL,
	"created_at" timestamp NOT NULL,
	"updated_at" timestamp,
	CONSTRAINT "organization_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "organization_id" text;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "role" text;--> statement-breakpoint
ALTER TABLE "invite" ADD CONSTRAINT "invite_organization_id_organization_id_fk" FOREIGN KEY ("organization_id") REFERENCES "public"."organization"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "invite" ADD CONSTRAINT "invite_invited_by_user_id_fk" FOREIGN KEY ("invited_by") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user" ADD CONSTRAINT "user_organization_id_organization_id_fk" FOREIGN KEY ("organization_id") REFERENCES "public"."organization"("id") ON DELETE cascade ON UPDATE no action;