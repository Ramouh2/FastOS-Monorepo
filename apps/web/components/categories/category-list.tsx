"use client";

import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { deleteCategoryAction } from "../../app/categories/actions";


export function CategoryList({
  categories,
}: {
  categories: {
    id: string;
    name: string;
  }[];
}) {


  const router = useRouter();



  async function remove(id: string) {

    await deleteCategoryAction(id);

    router.refresh();

  }



  return (

    <div className="space-y-3">


      {categories.length === 0 && (

        <p className="text-neutral-400">
          Aucune catégorie créée.
        </p>

      )}



      {categories.map((category)=>(


        <div

          key={category.id}

          className="
          flex
          items-center
          justify-between
          rounded-xl
          border
          border-neutral-800
          bg-neutral-900
          px-4
          py-3
          "

        >

          <span className="text-white font-medium">

            {category.name}

          </span>



          <button

            onClick={() => remove(category.id)}

            className="text-red-400 hover:text-red-300"

          >

            <Trash2 size={18}/>

          </button>


        </div>


      ))}


    </div>

  );

}