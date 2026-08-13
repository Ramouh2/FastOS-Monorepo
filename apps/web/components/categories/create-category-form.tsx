"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";
import { createCategoryAction } from "../../app/categories/actions";


export function CreateCategoryForm({
  businessId,
}: {
  businessId: string;
}) {


  const router = useRouter();

  const [name, setName] = useState("");

  const [loading, setLoading] = useState(false);



  async function submit() {

    if (!name.trim()) return;


    try {

      setLoading(true);


      await createCategoryAction({

        businessId,

        name,

      });


      setName("");

      router.refresh();


    } finally {

      setLoading(false);

    }

  }



  return (

    <div className="flex gap-3">


      <input

        className="rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-white"

        placeholder="Nom catégorie"

        value={name}

        onChange={(e)=>setName(e.target.value)}

      />


      <button

        onClick={submit}

        disabled={loading}

        className="flex items-center gap-2 rounded-xl bg-orange-500 px-4 py-3 text-white"

      >

        <Plus size={18}/>

        {loading ? "..." : "Ajouter"}

      </button>


    </div>

  );

}