import { NextResponse } from "next/server";
import path from "node:path";
import fs from "node:fs/promises";

// TinyMCE will POST multipart/form-data with a "file" field
export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const file = form.get("file") as File | null;
    if (!file || file.size === 0) {
      return NextResponse.json({ message: "No file" }, { status: 400 });
    }

    // Validate type/size
    const type = file.type || "";
    const allowed = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/webp",
      "image/gif",
    ];
    if (!allowed.includes(type)) {
      return NextResponse.json(
        { message: "Unsupported file type" },
        { status: 415 }
      );
    }
    if (file.size > 5 * 1024 * 1024) {
      // 5MB
      return NextResponse.json({ message: "File too large" }, { status: 413 });
    }

    // Save to /public/uploads/rte
    const bytes = Buffer.from(await file.arrayBuffer());
    const safeName = file.name
      .replace(/\s+/g, "_")
      .replace(/[^a-zA-Z0-9._-]/g, "");
    const filename = `${Date.now()}-${safeName}`;
    const outPath = path.join(
      process.cwd(),
      "public",
      "uploads",
      "rte",
      filename
    );
    await fs.mkdir(path.dirname(outPath), { recursive: true });
    await fs.writeFile(outPath, bytes);

    // TinyMCE expects { location: "<URL>" }
    const location = `/uploads/rte/${filename}`;
    return NextResponse.json({ location });
  } catch (err) {
    console.error("Upload failed:", err);
    return NextResponse.json({ message: "Upload failed" }, { status: 500 });
  }
}
