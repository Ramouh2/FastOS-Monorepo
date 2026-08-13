"use client";

import { useBusiness } from "../../lib/business/use-business";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Plus } from "lucide-react";
import { createProductAction } from "../../app/products/actions";


export function CreateProductForm() {

  const router = useRouter();

  const business = useBusiness();


  const [name, setName] = useState("");

  const [loading, setLoading] = useState(false);



  if (!business) {

    return (

      <div className="text-slate-400">

        Aucun restaurant configuré.

      </div>

    );

  }



  const businessId = business.id;



  async function submit() {


    console.log("CLICK AJOUTER");


    if (!name.trim()) {

      console.log("Nom vide");

      return;

    }



    try {


      setLoading(true);



      await createProductAction({

        businessId,

        name,

        type: "FOOD",

        price: 10,

      });



      console.log("PRODUIT CRÉÉ");



      setName("");

      router.refresh();



    } catch (error) {


      console.error(
        "Erreur création produit :",
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
        w-64

        rounded-xl

        border
        border-slate-800

        bg-slate-950

        px-4
        py-3

        text-white

        placeholder:text-slate-500

        outline-none

        transition

        focus:border-blue-500

        focus:ring-2
        focus:ring-blue-500/20
        "

        placeholder="Nom du produit"

        value={name}

        onChange={(e)=>setName(e.target.value)}

      />



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


        transition-all


        hover:bg-blue-400


        hover:shadow-[0_0_25px_rgba(59,130,246,0.35)]


        active:scale-95


        disabled:opacity-50

        "


      >


        <Plus size={18}/>


        {loading ? "Ajout..." : "Ajouter"}


      </button>


    </div>


  );

}