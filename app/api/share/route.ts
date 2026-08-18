import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const { documentId, userId } = await req.json();

    const share = await prisma.share.create({
      data: {
        documentId,
        userId,
      },
    });

    return NextResponse.json(share);

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Unable to share document",
      },
      {
        status: 500,
      }
    );
  }
}