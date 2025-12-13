import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import EditNewsClient from "./EditNewsClient";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EditNewsPage({ params }: PageProps) {
  const { id } = await params;
  const newsId = parseInt(id);

  if (isNaN(newsId)) {
    notFound();
  }

  // Fetch the news item to edit
  const newsItem = await prisma.news.findUnique({
    where: { id: newsId },
    include: {
      category: true,
      subcategory: true,
    },
  });

  if (!newsItem) {
    notFound();
  }

  // Fetch categories and their children (subcategories)
  const categories = await prisma.category.findMany({
    where: { parentId: null },
    include: { children: { select: { id: true, name: true } } },
    orderBy: { name: "asc" },
  });

  const formattedCategories = categories.map((c) => ({
    id: String(c.id),
    name: c.name,
    subcategories: c.children.map((s) => s.name),
  }));

  return (
    <EditNewsClient newsItem={newsItem} categories={formattedCategories} />
  );
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const newsId = parseInt(id);

  if (isNaN(newsId)) {
    return { title: "News Not Found" };
  }

  const newsItem = await prisma.news.findUnique({
    where: { id: newsId },
    select: { title: true },
  });

  return {
    title: newsItem ? `Edit: ${newsItem.title}` : "Edit News",
  };
}
