import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";


export async function PUT(
  req: NextRequest,
  {
    params,
  }: {
    params: Promise<{ id: string }>;
  }
) {

  const { id } = await params;

  const body = await req.json();


  console.log("UPDATE ID:", id);
  console.log("UPDATE BODY:", body);


  const document = await prisma.document.update({

    where: {
      id: id,
    },

    data: {
      title: body.title,
    },

  });


  console.log("UPDATED DOCUMENT:", document);


  return NextResponse.json(document);

}