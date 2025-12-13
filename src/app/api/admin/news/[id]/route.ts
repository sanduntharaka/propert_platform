import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { prisma } from "@/lib/prisma";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    const { id } = params;

    await prisma.news.delete({
      where: { id: parseInt(id) },
    });

    return NextResponse.json({ message: "News deleted successfully" });
  } catch (error) {
    console.error("Error deleting news:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    const { id } = params;
    const body = await request.json();

    const updatedNews = await prisma.news.update({
      where: { id: parseInt(id) },
      data: body,
      include: {
        category: true,
        subcategory: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });

    return NextResponse.json(updatedNews);
  } catch (error) {
    console.error("Error updating news:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
