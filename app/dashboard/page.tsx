import NewDocumentButton from "@/components/dashboard/NewDocumentButton";
import LogoutButton from "@/components/dashboard/LogoutButton";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { FileText, Users } from "lucide-react";
import UploadButton from "@/components/dashboard/UploadButton";

export default async function DashboardPage() {

    const cookieStore = await cookies();

    const userId = cookieStore.get("userId")?.value;


    if (!userId) {
        redirect("/login");
    }


    const user = await prisma.user.findUnique({
        where: {
            id: userId,
        },
    });


    if (!user) {
        redirect("/login");
    }



    const myDocuments = await prisma.document.findMany({

        where: {
            ownerId: user.id,
        },

        orderBy: {
            updatedAt: "desc",
        },

    });



    const sharedDocuments = await prisma.share.findMany({

        where: {
            userId: user.id,
        },

        include: {
            document: true,
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


            <div className="max-w-6xl mx-auto">



                {/* Header */}

                <div className="flex justify-between items-center mb-10">


                    <div>

                        <h1 className="text-4xl font-bold text-gray-900">
                            Welcome, {user.name}
                        </h1>


                        <p className="text-gray-500 mt-2">
                            Manage your documents and collaborate with your team.
                        </p>


                    </div>



                    <div className="flex gap-3">

                        <NewDocumentButton />

                        <UploadButton />

                        <LogoutButton />

                    </div>


                </div>





                {/* My Documents */}


                <section
                    className="
          bg-white
          rounded-2xl
          shadow-lg
          p-8
          mb-8
          "
                >


                    <div className="flex items-center gap-3 mb-6">

                        <FileText className="text-blue-600" size={28} />


                        <h2 className="text-2xl font-semibold">
                            My Documents
                        </h2>


                    </div>





                    {
                        myDocuments.length === 0 ? (


                            <p className="text-gray-500">

                                No documents yet. Create your first document.

                            </p>



                        ) : (



                            <div className="grid md:grid-cols-2 gap-4">


                                {
                                    myDocuments.map((doc) => (


                                        <a

                                            key={doc.id}

                                            href={`/document/${doc.id}`}

                                            className="
                      group
                      flex
                      items-center
                      gap-4
                      border
                      rounded-xl
                      p-5
                      bg-white
                      hover:border-blue-400
                      hover:shadow-lg
                      transition
                      "

                                        >


                                            <div
                                                className="
                        bg-blue-100
                        text-blue-600
                        p-3
                        rounded-xl
                        "
                                            >

                                                <FileText size={24} />

                                            </div>




                                            <div>


                                                <h3
                                                    className="
                          font-semibold
                          text-lg
                          group-hover:text-blue-600
                          transition
                          "
                                                >

                                                    {doc.title}

                                                </h3>



                                                <p className="text-sm text-gray-500 mt-1">

                                                    Updated {doc.updatedAt.toLocaleDateString()}

                                                </p>



                                            </div>



                                        </a>


                                    ))
                                }



                            </div>



                        )
                    }



                </section>







                {/* Shared Documents */}



                <section
                    className="
          bg-white
          rounded-2xl
          shadow-lg
          p-8
          "
                >



                    <div className="flex items-center gap-3 mb-6">


                        <Users className="text-green-600" size={28} />


                        <h2 className="text-2xl font-semibold">

                            Shared With Me

                        </h2>



                    </div>







                    {
                        sharedDocuments.length === 0 ? (


                            <p className="text-gray-500">

                                No shared documents.

                            </p>



                        ) : (



                            <div className="grid md:grid-cols-2 gap-4">



                                {
                                    sharedDocuments.map((share) => (


                                        <a

                                            key={share.id}

                                            href={`/document/${share.document.id}`}

                                            className="
                      group
                      flex
                      items-center
                      gap-4
                      border
                      rounded-xl
                      p-5
                      bg-white
                      hover:border-green-400
                      hover:shadow-lg
                      transition
                      "

                                        >



                                            <div
                                                className="
                        bg-green-100
                        text-green-600
                        p-3
                        rounded-xl
                        "
                                            >

                                                <Users size={24} />

                                            </div>





                                            <div>



                                                <h3
                                                    className="
                          font-semibold
                          text-lg
                          group-hover:text-green-600
                          transition
                          "
                                                >

                                                    {share.document.title}

                                                </h3>



                                                <p className="text-sm text-gray-500 mt-1">

                                                    Shared document

                                                </p>



                                            </div>




                                        </a>



                                    ))
                                }



                            </div>



                        )
                    }



                </section>



            </div>


        </main>

    );
}