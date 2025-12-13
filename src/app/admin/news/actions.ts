"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import path from "node:path";
import fs from "node:fs/promises";

export async function createNewsAction(formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  const slug = String(formData.get("slug") ?? "").trim();
  const contentHtml = String(formData.get("content") ?? "");
  const excerpt = (String(formData.get("excerpt") ?? "").trim() || null) as
    | string
    | null;

  const categoryName = (formData.get("category") as string) || "";
  const subcategoryName = (formData.get("subcategory") as string) || "";

  const published = formData.get("published") === "on";
  const tagsInput = (formData.get("tags") as string) || "";
  const tags = tagsInput
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  // TODO: use session user id here; for now, 1
  const authorId = 1;

  let categoryId: number | null = null;
  let subcategoryId: number | null = null;

  if (categoryName) {
    const cat = await prisma.category.findFirst({
      where: { name: categoryName, parentId: null },
    });
    categoryId = cat?.id ?? null;
  }
  if (subcategoryName) {
    const sub = await prisma.category.findFirst({
      where: { name: subcategoryName },
    });
    subcategoryId = sub?.id ?? null;
  }

  // Handle banner image upload
  let imageUrl: string | null = null;
  const file = formData.get("image") as File | null;
  if (file && file.size > 0) {
    const bytes = Buffer.from(await file.arrayBuffer());
    const filename = `${Date.now()}-${file.name.replace(/\s+/g, "_")}`;
    const outPath = path.join(
      process.cwd(),
      "public",
      "uploads",
      "news",
      filename
    );
    await fs.mkdir(path.dirname(outPath), { recursive: true });
    await fs.writeFile(outPath, bytes);
    imageUrl = `/uploads/news/${filename}`;
  }

  // Minimal validation (server-side)
  if (!title || !slug || !contentHtml) {
    throw new Error("Missing required fields");
  }

  await prisma.news.create({
    data: {
      title,
      slug,
      contentHtml,
      excerpt,
      imageUrl,
      published,
      publishedAt: published ? new Date() : null,
      tags,
      authorId,
      categoryId,
      subcategoryId,
    },
  });

  // Refresh public/admin listings and go back
  revalidatePath("/news");
  revalidatePath("/admin/news");
  redirect("/admin/news");
}

export async function updateNewsAction(id: number, formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  const slug = String(formData.get("slug") ?? "").trim();
  const contentHtml = String(formData.get("content") ?? "");
  const excerpt = (String(formData.get("excerpt") ?? "").trim() || null) as
    | string
    | null;

  const categoryName = (formData.get("category") as string) || "";
  const subcategoryName = (formData.get("subcategory") as string) || "";

  const published = formData.get("published") === "on";
  const tagsInput = (formData.get("tags") as string) || "";
  const tags = tagsInput
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  // Resolve category/subcategory ids if provided
  let categoryId: number | null = null;
  let subcategoryId: number | null = null;

  if (categoryName) {
    const cat = await prisma.category.findFirst({
      where: { name: categoryName, parentId: null },
    });
    categoryId = cat?.id ?? null;
  }
  if (subcategoryName) {
    const sub = await prisma.category.findFirst({
      where: { name: subcategoryName },
    });
    subcategoryId = sub?.id ?? null;
  }

  // Handle banner image upload
  let imageUrl: string | undefined = undefined;
  const file = formData.get("image") as File | null;
  if (file && file.size > 0) {
    const bytes = Buffer.from(await file.arrayBuffer());
    const filename = `${Date.now()}-${file.name.replace(/\s+/g, "_")}`;
    const outPath = path.join(
      process.cwd(),
      "public",
      "uploads",
      "news",
      filename
    );
    await fs.mkdir(path.dirname(outPath), { recursive: true });
    await fs.writeFile(outPath, bytes);
    imageUrl = `/uploads/news/${filename}`;
  }

  // Minimal validation (server-side)
  if (!title || !slug || !contentHtml) {
    throw new Error("Missing required fields");
  }

  const updateData: any = {
    title,
    slug,
    contentHtml,
    excerpt,
    published,
    tags,
    categoryId,
    subcategoryId,
  };

  // Only update publishedAt if publishing status changed
  const existingNews = await prisma.news.findUnique({ where: { id } });
  if (existingNews && existingNews.published !== published) {
    updateData.publishedAt = published ? new Date() : null;
  }

  // Only update image if a new one was uploaded
  if (imageUrl) {
    updateData.imageUrl = imageUrl;
  }

  await prisma.news.update({
    where: { id },
    data: updateData,
  });

  // Refresh public/admin listings and go back
  revalidatePath("/news");
  revalidatePath("/admin/news");
  redirect("/admin/news");
}
