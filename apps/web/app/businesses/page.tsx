"use client";

import { useBusiness } from "@/lib/business/use-business";
import {
  MapPin,
  Globe,
  Bot,
  Utensils,
  Settings,
  Sparkles,
} from "lucide-react";


export default function BusinessesPage() {

  const business = useBusiness();


  if (!business) {
    return (
      <div className="p-10">
        Aucun restaurant configuré.
      </div>
    );
  }


  return (

    <div className="space-y-8 p-8">


      {/* HEADER */}

      <div className="overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900">


        <div className="h-40 bg-gradient-to-r from-orange-500/20 via-neutral-900 to-neutral-950" />


        <div className="p-8">


          <div className="flex items-center justify-between">


            <div>

              <h1 className="text-4xl font-bold">
                {business.name}
              </h1>


              <p className="mt-2 text-neutral-400">
                Votre restaurant connecté par FastOS
              </p>

            </div>



            <div className="rounded-full bg-green-500/10 px-5 py-2 text-green-400">
              🟢 Actif
            </div>


          </div>


        </div>

      </div>




      {/* INFORMATIONS */}


      <div className="grid gap-6 md:grid-cols-3">


        <Card
          icon={<Utensils />}
          title="Restaurant"
          value="Cuisine non configurée"
        />


        <Card
          icon={<MapPin />}
          title="Localisation"
          value="À configurer"
        />


        <Card
          icon={<Globe />}
          title="Site web"
          value="Non configuré"
        />


      </div>




      {/* IA */}


      <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-8">


        <div className="flex items-center gap-3">


          <Bot
            className="text-orange-500"
            size={32}
          />


          <div>

            <h2 className="text-2xl font-bold">
              Nora AI
            </h2>


            <p className="text-neutral-400">
              Votre assistante intelligente restaurant
            </p>

          </div>


        </div>



        <div className="mt-8 rounded-2xl bg-neutral-950 p-6">


          <div className="flex gap-3">


            <Sparkles className="text-orange-500"/>


            <p className="text-neutral-300">
              Votre IA est prête à apprendre votre restaurant.
            </p>


          </div>


        </div>


      </div>





      {/* ACTIONS */}


      <div className="grid gap-4 md:grid-cols-2">


        <button
          className="
          flex items-center justify-center gap-3
          rounded-2xl
          bg-orange-500
          px-6 py-4
          font-semibold
          text-white
          hover:bg-orange-600
          "
        >

          <Sparkles size={20}/>

          Configurer mon restaurant

        </button>




        <button
          className="
          flex items-center justify-center gap-3
          rounded-2xl
          border border-neutral-800
          bg-neutral-900
          px-6 py-4
          font-semibold
          hover:border-orange-500
          "
        >

          <Settings size={20}/>

          Paramètres

        </button>



      </div>


    </div>

  );
}





function Card({
  icon,
  title,
  value,
}:{
  icon:React.ReactNode;
  title:string;
  value:string;
}) {


  return (

    <div
      className="
      rounded-3xl
      border
      border-neutral-800
      bg-neutral-900
      p-6
      "
    >

      <div className="flex items-center gap-3 text-orange-500">

        {icon}

        <h3 className="font-semibold text-white">
          {title}
        </h3>

      </div>


      <p className="mt-5 text-neutral-400">
        {value}
      </p>


    </div>

  );

}