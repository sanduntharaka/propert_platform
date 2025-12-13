import { User } from "@/generated/prisma/wasm";

interface Route {
  name: string;
  path: string;
}

interface MainButton {
  ButtonText: string;
  ButtonImage: any;
  line: boolean;
}

interface PropertyDetailsHome {
  prop_name: string;
  location: string;
  longitude: number;
  altitude: number;
}

interface Category {
  id: number;
  name: string;
  description: string;
  parentId: number | null;
  parent: Category | null;
  children: Category[];
  createdAt: Date;
  updatedAt: Date;
}
interface News {
  id: number;
  title: string;
  slug: string;
  contentHtml: string;
  excerpt: string;
  imageUrl: string;
  published: boolean;
  publishedAt: Date | null;
  tags: string[];
  authorId: number;
  author: User;
  categoryId: number;
  category: Category;
  subcategoryId: number;
  subcategory: Category | null;
  createdAt: Date;
  updatedAt: Date;
}
