"use client";

import { useState } from "react";

export default function ShareButton({
  documentId,
  users,
}: {
  documentId: string;
  users: {
    id: string;
    name: string;
  }[];
}) {

  const [loading, setLoading] = useState(false);
  const [selectedUser, setSelectedUser] = useState("");

  async function shareDocument() {

    if (!selectedUser) {
      alert("Select a user first");
      return;
    }

    setLoading(true);

    const res = await fetch("/api/share", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        documentId,
        userId: selectedUser,
      }),
    });


    setLoading(false);

    if (res.ok) {
      alert("Document shared successfully");
    }

  }


  return (
    <div className="flex gap-2">

      <select
        value={selectedUser}
        onChange={(e)=>setSelectedUser(e.target.value)}
        className="border rounded-lg px-3 py-2"
      >

        <option value="">
          Select user
        </option>


        {
          users.map((user)=>(
            <option 
              key={user.id}
              value={user.id}
            >
              {user.name}
            </option>
          ))
        }

      </select>


      <button
        onClick={shareDocument}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        {loading ? "Sharing..." : "Share"}
      </button>


    </div>
  );
}