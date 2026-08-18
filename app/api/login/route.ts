import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return NextResponse.json(
        {
          error: "User not found"
        },
        {
          status: 404
        }
      );
    }

    const response = NextResponse.json({
      success: true,
      user,
    });

    response.cookies.set(
      "userId",
      user.id,
      {
        httpOnly: true,
        path: "/",
        maxAge: 60 * 60 * 24,
      }
    );

    return response;

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      {
        error: "Server error"
      },
      {
        status: 500
      }
    );
  }
}