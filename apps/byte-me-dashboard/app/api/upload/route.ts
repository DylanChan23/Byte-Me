import { NextResponse } from "next/server"
import { writeFile } from "node:fs/promises"
import path from "path"

export async function POST(req: Request) {
  const formData = await req.formData()
  const file = formData.get("file") as File

  if (!file) {
    return NextResponse.json({ error: "No file" }, { status: 400 })
  }

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)

  const mimeToExt: Record<string, string> = {
    "image/png": "png",
    "image/jpeg": "jpg",
    "image/jpg": "jpg",
    "image/gif": "gif",
    "image/webp": "webp",
  }
  const ext = mimeToExt[file.type] ?? "bin"
  const fileName = `${crypto.randomUUID()}.${ext}`

  const uploadDir = path.resolve(process.cwd(), "../../uploads")
  const filePath = path.join(uploadDir, fileName)

  await writeFile(filePath, buffer)

  return NextResponse.json({
    url: `/uploads/${fileName}`,
  })
}
