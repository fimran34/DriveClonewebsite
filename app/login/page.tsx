"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FileText, Sparkles } from "lucide-react";

export default function LoginPage() {

  const [loading, setLoading] = useState(false);

  const router = useRouter();


  async function login(email: string) {

    setLoading(true);


    const res = await fetch("/api/login", {

      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email,
      }),

    });



    if (res.ok) {

      router.push("/dashboard");
      router.refresh();

    } else {

      alert("Login failed");

    }


    setLoading(false);

  }



  return (

    <main
      className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-gradient-to-br
      from-slate-900
      via-blue-900
      to-indigo-900
      p-6
      "
    >


      <div
        className="
        w-full
        max-w-md
        bg-white
        rounded-3xl
        shadow-2xl
        p-8
        "
      >


        {/* Logo */}

        <div className="flex justify-center mb-6">

          <div
            className="
            bg-blue-600
            text-white
            p-4
            rounded-2xl
            "
          >

            <FileText size={32} />

          </div>

        </div>



        <h1
          className="
          text-3xl
          font-bold
          text-center
          text-gray-900
          "
        >
          Ajaia Docs
        </h1>



        <div
          className="
          flex
          justify-center
          items-center
          gap-2
          mt-3
          text-gray-500
          "
        >

          <Sparkles size={16}/>

          <p>
            Smart document collaboration
          </p>

        </div>




        <p
          className="
          text-center
          text-gray-500
          mt-8
          mb-6
          "
        >
          Select a demo user
        </p>




        {/* Alice */}

        <button

          disabled={loading}

          onClick={() =>
            login("alice@test.com")
          }

          className="
          w-full
          bg-black
          text-white
          py-3
          rounded-xl
          font-medium
          hover:bg-gray-800
          transition
          mb-4
          "

        >

          Login as Alice

        </button>





        {/* Bob */}

        <button

          disabled={loading}

          onClick={() =>
            login("bob@test.com")
          }

          className="
          w-full
          border
          border-gray-300
          py-3
          rounded-xl
          font-medium
          hover:bg-gray-100
          transition
          "

        >

          Login as Bob

        </button>




        <p
          className="
          text-xs
          text-center
          text-gray-400
          mt-8
          "
        >
          Demo environment • Secure document workspace
        </p>


      </div>


    </main>

  );
}