import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";


export async function POST(req: NextRequest) {

  try {

    const cookieStore = await cookies();

    const userId = cookieStore.get("userId")?.value;


    if (!userId) {

      return NextResponse.json(
        {
          error: "Unauthorized",
        },
        {
          status: 401,
        }
      );

    }



    const formData = await req.formData();


    const file = formData.get("file") as File;



    if (!file) {

      return NextResponse.json(
        {
          error: "No file uploaded",
        },
        {
          status: 400,
        }
      );

    }




    let content = "";



    // DOCX FILE

    if (file.name.endsWith(".docx")) {


      const mammoth = await import("mammoth");


      const buffer = Buffer.from(
        await file.arrayBuffer()
      );



      const result = await mammoth.convertToHtml({

        buffer,

      });



      content = result.value;



    }


    // TXT AND MD FILE

    else if (
      file.name.endsWith(".txt") ||
      file.name.endsWith(".md")
    ) {


      content = await file.text();


    }


    else {


      return NextResponse.json(

        {
          error:
            "Only .txt, .md and .docx files are supported",
        },

        {
          status:400,
        }

      );


    }






    const title = file.name.replace(
      /\.(txt|md|docx)$/i,
      ""
    );






    const document = await prisma.document.create({

      data: {

        title,

        content,

        ownerId:userId,

      },

    });






    return NextResponse.json(document);



  } catch(error) {


    console.error(error);



    return NextResponse.json(

      {
        error:"Upload failed",
      },

      {
        status:500,
      }

    );


  }


}