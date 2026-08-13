"use client";

import {
  Bot,
  Sparkles,
  Activity,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";


export function AIStatus() {

  return (

    <div
      className="
      group
      relative
      overflow-hidden

      rounded-3xl

      border
      border-purple-500/20

      bg-gradient-to-br
      from-purple-500/10
      via-slate-950
      to-blue-500/10

      p-8

      transition-all

      hover:border-purple-400/40

      shadow-[0_0_60px_rgba(139,92,246,0.12)]
      "
    >


      {/* AI GLOW */}

      <div
        className="
        absolute
        -right-20
        -top-20

        h-72
        w-72

        rounded-full

        bg-purple-500/20

        blur-3xl

        transition

        group-hover:bg-purple-500/30
        "
      />



      <div className="relative">


        {/* HEADER */}

        <div
          className="
          flex
          items-center
          justify-between
          "
        >


          <div
            className="
            flex
            items-center
            gap-4
            "
          >


            <div
              className="
              flex
              h-14
              w-14

              items-center
              justify-center

              rounded-2xl

              bg-purple-500/20

              text-purple-400

              shadow-[0_0_30px_rgba(168,85,247,0.25)]
              "
            >

              <Bot size={30}/>

            </div>




            <div>


              <div
                className="
                flex
                items-center
                gap-3
                "
              >

                <h2
                  className="
                  text-2xl
                  font-black
                  text-white
                  "
                >
                  Nora AI Core
                </h2>



                <span
                  className="
                  flex
                  items-center
                  gap-2

                  rounded-full

                  bg-green-500/10

                  px-3
                  py-1

                  text-xs
                  font-semibold

                  text-green-400
                  "
                >

                  <Activity size={12}/>

                  ONLINE

                </span>


              </div>


              <p
                className="
                mt-1
                text-sm
                text-slate-400
                "
              >
                Copilote intelligent de votre restaurant
              </p>


            </div>


          </div>



          <Sparkles
            size={26}
            className="
            text-purple-400
            "
          />


        </div>






        {/* AI METRICS */}


        <div
          className="
          mt-8

          grid

          gap-4

          md:grid-cols-3
          "
        >


          {[
            "Menu",
            "Clients",
            "Revenus",
          ].map((item)=>(


            <div
              key={item}

              className="
              rounded-2xl

              border
              border-white/5

              bg-black/20

              p-4
              "
            >

              <div
                className="
                flex
                items-center
                gap-2
                "
              >

                <CheckCircle2
                  size={16}
                  className="
                  text-green-400
                  "
                />


                <span
                  className="
                  text-sm
                  text-slate-300
                  "
                >
                  {item}
                </span>


              </div>


              <p
                className="
                mt-2
                text-xs
                text-slate-500
                "
              >
                Analyse active
              </p>


            </div>


          ))}


        </div>






        {/* RECOMMENDATION */}


        <div
          className="
          mt-6

          rounded-2xl

          border
          border-purple-500/20

          bg-purple-500/5

          p-6
          "
        >


          <p
            className="
            text-xs

            font-semibold

            tracking-widest

            text-purple-400
            "
          >
            DERNIÈRE ANALYSE
          </p>



          <h3
            className="
            mt-3

            text-xl

            font-bold

            text-white
            "
          >
            Optimisation du menu détectée
          </h3>



          <p
            className="
            mt-2

            text-sm

            text-slate-400
            "
          >
            Nora analyse vos produits et identifie
            les opportunités pour améliorer vos performances.
          </p>




          <button
            className="
            mt-5

            flex
            items-center
            gap-2

            rounded-xl

            bg-purple-500

            px-5
            py-3

            text-sm

            font-semibold

            text-white

            transition

            hover:bg-purple-400
            "
          >

            Ouvrir Nora

            <ArrowRight size={16}/>

          </button>


        </div>


      </div>


    </div>

  );

}