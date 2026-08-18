import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Editor from "@/components/editor/Editor";
import DocumentTitle from "@/components/editor/DocumentTitle";
import ShareButton from "@/components/editor/ShareButton";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";




export const dynamic = "force-dynamic";


export default async function DocumentPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {


  const { id } = await params;



  const document = await prisma.document.findUnique({

    where: {
      id,
    },

  });



  if (!document) {

    notFound();

  }



  const users = await prisma.user.findMany({

    where: {

      id: {

        not: document.ownerId,

      },

    },

    select: {

      id: true,

      name: true,

      email: true,

    },

  });



  return (

    <main
      className="
      min-h-screen
      bg-gradient-to-br
      from-slate-100
      via-white
      to-blue-100
      p-8
      "
    >


      <div className="max-w-5xl mx-auto">



        {/* Navigation */}

        <div
          className="
          flex
          justify-between
          items-center
          mb-8
          "
        >


          <Link

            href="/dashboard"

            className="
            flex
            items-center
            gap-2
            bg-white
            border
            px-4
            py-2
            rounded-xl
            shadow-sm
            hover:bg-gray-50
            transition
            "

          >

            <ArrowLeft size={18}/>

            Back

          </Link>



          <ShareButton

            documentId={document.id}

            users={users}

          />


        </div>




        {/* Document Editor */}

        <div
          className="
          bg-white
          rounded-3xl
          shadow-xl
          p-8
          "
        >



          <DocumentTitle

            documentId={document.id}

            title={document.title}

          />



          <div className="border-b my-6" />



          <Editor

            documentId={document.id}

            content={document.content}

          />


        </div>



      </div>



    </main>

  );
}