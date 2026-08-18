"use client";

import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";
import { useState } from "react";

export default function NewDocumentButton() {

  const router = useRouter();

  const [loading, setLoading] = useState(false);


  async function createDocument() {

    setLoading(true);


    const res = await fetch("/api/documents", {
      method: "POST",
    });


    if (res.ok) {

      const document = await res.json();

      router.push(`/document/${document.id}`);
      router.refresh();

    }


    setLoading(false);

  }



  return (

    <button
      onClick={createDocument}
      disabled={loading}
      className="
      flex
      items-center
      gap-2
      bg-blue-600
      text-white
      px-5
      py-3
      rounded-xl
      font-medium
      shadow-md
      hover:bg-blue-700
      hover:shadow-lg
      transition
      "
    >

      <Plus size={18}/>

      {loading ? "Creating..." : "New Document"}

    </button>

  );
}