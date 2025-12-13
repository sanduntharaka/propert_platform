"use server";
import { prisma } from "@/lib/prisma";
import CreateNewsClient from "./CreateNewsClient";

export default async function CreateNewsPage() {
  // Fetch categories and their children (subcategories)
  const rows = await prisma.category.findMany({
    where: {},
    include: { children: { select: { id: true, name: true } } },
    orderBy: [{ parentId: "asc" }, { name: "asc" }],
  });

  // Build a simple shape for the client: top-level cats with subcategory names
  const categories = rows
    .filter((c) => c.parentId == null)
    .map((c) => ({
      id: String(c.id),
      name: c.name,
      subcategories: c.children.map((s) => s.name),
    }));

  return <CreateNewsClient categories={categories} />;
}
