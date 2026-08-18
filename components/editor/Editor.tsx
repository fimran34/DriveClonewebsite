"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import { useEffect, useState } from "react";
import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  List,
  Undo2,
  Redo2,
  Save,
  Heading1,
  Heading2,
  Heading3,
} from "lucide-react";


export default function Editor({
  documentId,
  content,
}: {
  documentId: string;
  content: string;
}) {


  const [status, setStatus] = useState("Saved");


  const editor = useEditor({

    extensions: [
      StarterKit,
      Underline,
    ],

    content,


    editorProps: {

      attributes: {
        class:
          "min-h-[500px] p-6 outline-none prose max-w-none",
      },

    },


  });




  useEffect(() => {

    if (!editor) return;


    const save = async () => {

      setStatus("Saving...");


      await fetch(`/api/documents/${documentId}`, {

        method: "PUT",

        headers: {
          "Content-Type": "application/json",
        },


        body: JSON.stringify({

          content: editor.getHTML(),

        }),


      });


      setTimeout(() => {

        setStatus("Saved ✓");

      }, 300);


    };



    editor.on(
      "update",
      save
    );


    return () => {

      editor.off(
        "update",
        save
      );

    };


  }, [editor, documentId]);





  if (!editor) {
    return null;
  }






  async function saveDocument() {


    setStatus("Saving...");


    await fetch(`/api/documents/${documentId}`, {

      method: "PUT",

      headers: {
        "Content-Type": "application/json",
      },


      body: JSON.stringify({

        content: editor.getHTML(),

      }),

    });



    setStatus("Saved ✓");


  }






  return (

    <div>


      {/* Toolbar */}

      <div
        className="
        flex
        flex-wrap
        items-center
        gap-2
        bg-gray-50
        border
        rounded-xl
        p-3
        mb-5
        "
      >



        {/* Undo */}

        <button
          onClick={() =>
            editor.chain().focus().undo().run()
          }
          className="toolbar-btn"
        >

          <Undo2 size={18}/>

        </button>





        {/* Redo */}

        <button
          onClick={() =>
            editor.chain().focus().redo().run()
          }
          className="toolbar-btn"
        >

          <Redo2 size={18}/>

        </button>






        <div className="border-l h-6 mx-2" />






        {/* Headings */}


        <button
          onClick={() =>
            editor.chain()
              .focus()
              .toggleHeading({
                level:1
              })
              .run()
          }
          className="toolbar-btn"
        >

          <Heading1 size={18}/>

        </button>





        <button
          onClick={() =>
            editor.chain()
              .focus()
              .toggleHeading({
                level:2
              })
              .run()
          }
          className="toolbar-btn"
        >

          <Heading2 size={18}/>

        </button>






        <button
          onClick={() =>
            editor.chain()
              .focus()
              .toggleHeading({
                level:3
              })
              .run()
          }
          className="toolbar-btn"
        >

          <Heading3 size={18}/>

        </button>






        <div className="border-l h-6 mx-2" />







        <button
          onClick={() =>
            editor.chain()
              .focus()
              .toggleBold()
              .run()
          }
          className="toolbar-btn"
        >

          <Bold size={18}/>

        </button>





        <button
          onClick={() =>
            editor.chain()
              .focus()
              .toggleItalic()
              .run()
          }
          className="toolbar-btn"
        >

          <Italic size={18}/>

        </button>






        <button
          onClick={() =>
            editor.chain()
              .focus()
              .toggleUnderline()
              .run()
          }
          className="toolbar-btn"
        >

          <UnderlineIcon size={18}/>

        </button>






        <button
          onClick={() =>
            editor.chain()
              .focus()
              .toggleBulletList()
              .run()
          }
          className="toolbar-btn"
        >

          <List size={18}/>

        </button>








        {/* Save */}


        <button

          onClick={saveDocument}

          className="
          ml-auto
          flex
          items-center
          gap-2
          bg-black
          text-white
          px-4
          py-2
          rounded-lg
          hover:bg-gray-800
          "

        >

          <Save size={17}/>

          Save

        </button>




      </div>






      {/* Status */}


      <div
        className="
        text-sm
        text-gray-500
        mb-3
        "
      >

        {status}

      </div>






      {/* Editor */}

      <div
        className="
        border
        rounded-xl
        bg-white
        shadow-sm
        "
      >

        <EditorContent editor={editor}/>


      </div>



    </div>

  );

}