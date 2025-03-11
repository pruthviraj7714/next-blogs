import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { title, content, tag } = await req.json();

    if (!title || !content || !tag) {
      return NextResponse.json(
        {
          message: "missing inputs",
        },
        { status: 400 }
      );
    }

    await prisma.post.create({
      data: {
        title,
        content,
        tagId: tag,
      },
    });

    return NextResponse.json(
      {
        message: "Post Successfully Created",
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
