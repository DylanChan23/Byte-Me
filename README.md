# Byte Me 🍱

Byte Me is a full-stack inventory + dashboard system I built to explore what a real production-style web app looks like when everything starts getting more serious — auth, uploads, database structure, monorepos, the whole thing.

It’s split into two experiences:
- **Byte Me Dashboard** → internal admin side (inventory, products, management)
- **A La Cart** → storefront-style frontend experience

---

## ✨ What it does

Byte Me lets you:

- Create and manage products (name, SKU, price, stock, etc.)
- Upload and attach product images
- Track inventory levels (including low-stock awareness)
- Authenticate users with GitHub + Google
- Keep everything structured like a real SaaS app

It’s basically a “pretend company system” that helped me learn how real apps are actually structured behind the scenes.

---

## 🧱 Tech Stack

### Frontend
- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui

### Backend / Infra
- Next.js API Routes
- Drizzle ORM
- PostgreSQL
- Better Auth (GitHub + Google OAuth)
- Vercel Blob (for image uploads)

### Architecture
- Turborepo monorepo
- Shared packages for:
  - UI components
  - Database layer
  - Auth logic

---

## 🔐 Auth

Authentication is handled through **Better Auth**, with:

- GitHub OAuth
- Google OAuth
- Secure session cookies
- Shared auth logic across apps

---

## 📦 File Uploads

Originally, images were stored locally in an `/uploads` folder during development.

That has since been replaced with **Vercel Blob Storage**, which makes the system production-safe and deployment-friendly.

---

## 🧠 Why I built this

This project started as a way to level up from “building apps that work” to:

- building apps that scale
- structuring code like a real team project
- understanding auth flows properly
- learning monorepo workflows
- and breaking things on purpose so I understand them better

---

## 🚀 Live Demo

- Dashboard: https://byte-me.dylanchan.dev  
- Storefront: (A La Cart) https://a-la-cart.dylanchan.dev  

---

## 🛠️ Running locally

```bash
pnpm install
pnpm dev
