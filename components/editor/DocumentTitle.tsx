"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface Props {
  documentId: string;
  title: string;
}

export default function DocumentTitle({
  documentId,
  title,
}: Props) {

  const router = useRouter();

  const [value, setValue] = useState(title);
  const [saving, setSaving] = useState(false);


  async function saveTitle() {

    console.log("SAVE CLICKED");
    console.log("TITLE:", value);
    console.log("ID:", documentId);


    setSaving(true);


    const res = await fetch(`/api/documents/${documentId}`, {

      method: "PUT",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        title: value,
      }),

    });


    const data = await res.json();

    console.log("RESPONSE:", data);


    setSaving(false);


    router.refresh();

  }



  return (

    <div className="mb-6">


      {/* TEST - REMOVE AFTER CHECKING */}
      <h1 className="text-red-600 text-xl mb-3">
        TEST DOCUMENT TITLE COMPONENT
      </h1>


      <div className="flex gap-3">


        <input

          value={value}

          onChange={(e)=>setValue(e.target.value)}

          className="
          flex-1
          text-3xl
          font-bold
          border-b
          pb-2
          outline-none
          "

        />


        <button

          type="button"

          onClick={saveTitle}

          disabled={saving}

          className="
          bg-blue-600
          text-white
          px-5
          py-2
          rounded-lg
          "

        >

          {saving ? "Saving..." : "Save"}

        </button>


      </div>


    </div>

  );

}