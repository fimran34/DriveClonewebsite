"use client";

import { useRouter } from "next/navigation";
import { Upload } from "lucide-react";
import { useState } from "react";


export default function UploadButton() {

  const router = useRouter();

  const [loading, setLoading] = useState(false);



  async function uploadFile(
    e: React.ChangeEvent<HTMLInputElement>
  ) {


    const file = e.target.files?.[0];


    if (!file) return;



    setLoading(true);



    const formData = new FormData();


    formData.append(
      "file",
      file
    );



    const res = await fetch(
      "/api/upload",
      {
        method: "POST",
        body: formData,
      }
    );



    if (res.ok) {


      const document = await res.json();


      router.push(
        `/document/${document.id}`
      );


      router.refresh();


    } else {


      const error = await res.json();


      alert(error.error || "Upload failed");


    }



    setLoading(false);


    // reset file input
    e.target.value = "";

  }





  return (

    <label
      className="
      flex
      items-center
      gap-2
      bg-white
      border
      px-5
      py-3
      rounded-xl
      cursor-pointer
      hover:bg-gray-100
      transition
      "
    >

      <Upload size={18}/>


      {
        loading
        ? "Uploading..."
        : "Upload File"
      }



      <input

        type="file"

        accept=".txt,.md,.docx"

        className="hidden"

        onChange={uploadFile}

      />


    </label>

  );

}