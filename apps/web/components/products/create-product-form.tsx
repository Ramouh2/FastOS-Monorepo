"use client";

import { useBusiness } from "../../lib/business/use-business";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Plus } from "lucide-react";
import { createProductAction } from "../../app/products/actions";


type Category = {
  id: string;
  name: string;
};



export function CreateProductForm({
  categories,
}: {
  categories: Category[];
}) {


  const router = useRouter();

  const business = useBusiness();


  const [name, setName] = useState("");

  const [price, setPrice] = useState("10");

  const [categoryId, setCategoryId] = useState("");

  const [loading, setLoading] = useState(false);



  if (!business) {

    return (
      <div className="text-slate-400">
        Aucun restaurant configuré.
      </div>
    );

  }



  async function submit() {


    if (!name.trim()) return;


    if (!business) return;



    try {


      setLoading(true);



      await createProductAction({

        businessId: business.id,

        name,

        categoryId: categoryId || undefined,

        type: "FOOD",

        price: Number(price),

      });



      setName("");

      setPrice("10");

      setCategoryId("");

      router.refresh();



    } catch(error) {


      console.error(
        "Erreur création produit",
        error
      );


    } finally {


      setLoading(false);


    }

  }





  return (

    <div className="flex gap-3">


      <input

        className="
        w-48
        rounded-xl
        border
        border-slate-800
        bg-slate-950
        px-4
        py-3
        text-white
        "

        placeholder="Nom produit"

        value={name}

        onChange={(e)=>setName(e.target.value)}

      />



      <input

        className="
        w-28
        rounded-xl
        border
        border-slate-800
        bg-slate-950
        px-4
        py-3
        text-white
        "

        placeholder="Prix"

        value={price}

        onChange={(e)=>setPrice(e.target.value)}

      />



      <select

        className="
        w-48
        rounded-xl
        border
        border-slate-800
        bg-slate-950
        px-4
        py-3
        text-white
        "

        value={categoryId}

        onChange={(e)=>setCategoryId(e.target.value)}

      >

        <option value="">
          Sans catégorie
        </option>


        {categories.map((category)=>(

          <option
            key={category.id}
            value={category.id}
          >

            {category.name}

          </option>

        ))}


      </select>





      <button

        onClick={submit}

        disabled={loading}

        className="
        flex
        items-center
        gap-2
        rounded-xl
        bg-blue-500
        px-5
        py-3
        font-semibold
        text-white
        "

      >

        <Plus size={18}/>

        {loading ? "Ajout..." : "Ajouter"}

      </button>


    </div>

  );

}