import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const cookieStore = await cookies();

    const userId = cookieStore.get("userId")?.value;

    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }


    const document = await prisma.document.create({
      data: {
        title: "Untitled Document",
        content: "",
        ownerId: userId,
      },
    });


    return NextResponse.json(document);

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      { error: "Failed to create document" },
      { status: 500 }
    );
  }
}