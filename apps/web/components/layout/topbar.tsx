"use client";

import {
  Bell,
  Bot,
  ChevronDown,
  Activity,
} from "lucide-react";

import { useBusiness } from "../../lib/business/use-business";


export function Topbar() {

  const business = useBusiness();


  return (

    <header
      className="
      sticky
      top-0
      z-20

      flex
      h-24
      items-center
      justify-between

      border-b
      border-white/10

      bg-[#050816]/80

      backdrop-blur-xl

      px-8
      "
    >


      {/* LEFT */}

      <div>


        <div
          className="
          flex
          items-center
          gap-4
          "
        >


          <div>


            <p
              className="
              text-xs
              font-semibold
              tracking-[0.3em]
              text-blue-400
              "
            >
              FASTOS COMMAND CENTER
            </p>



            <h2
              className="
              mt-1

              text-2xl
              font-black

              text-white
              "
            >

              {business?.name ?? "Mon restaurant"}

            </h2>


          </div>





          {/* SYSTEM STATUS */}


          <div
            className="
            flex
            items-center
            gap-2

            rounded-full

            border
            border-green-400/20

            bg-green-400/10

            px-3
            py-1

            "
          >

            <Activity
              size={14}
              className="
              text-green-400
              "
            />


            <span
              className="
              text-xs
              font-semibold
              text-green-400
              "
            >
              System Online
            </span>


          </div>


        </div>




        <p
          className="
          mt-2

          text-sm

          text-slate-400
          "
        >

          Intelligence artificielle opérationnelle FastOS

        </p>


      </div>





      {/* RIGHT */}


      <div
        className="
        flex
        items-center
        gap-3
        "
      >




        {/* NORA */}


        <button
          className="
          group

          flex
          items-center
          gap-3

          rounded-2xl

          border
          border-purple-500/20

          bg-purple-500/10

          px-5
          py-3

          transition-all

          hover:border-purple-400/50

          hover:shadow-[0_0_25px_rgba(168,85,247,0.25)]
          "
        >


          <Bot
            size={22}
            className="
            text-purple-400

            transition

            group-hover:scale-110
            "
          />


          <div
            className="
            text-left
            "
          >

            <p
              className="
              text-xs
              text-slate-400
              "
            >
              Assistant
            </p>


            <p
              className="
              text-sm
              font-bold
              text-white
              "
            >
              Nora AI
            </p>


          </div>


        </button>





        {/* NOTIFICATION */}


        <button
          className="
          relative

          rounded-2xl

          border
          border-white/10

          bg-white/5

          p-3

          text-slate-400

          transition

          hover:border-blue-400/40

          hover:text-white
          "
        >


          <Bell size={20}/>



          <span
            className="
            absolute

            right-2
            top-2

            h-2
            w-2

            rounded-full

            bg-blue-400

            shadow-[0_0_10px_rgba(59,130,246,0.8)]
            "
          />


        </button>






        {/* USER */}


        <button
          className="
          flex
          items-center
          gap-3

          rounded-2xl

          border
          border-white/10

          bg-white/5

          px-4
          py-2

          transition

          hover:border-blue-400/40

          "
        >


          <div
            className="
            flex

            h-10
            w-10

            items-center
            justify-center

            rounded-full

            bg-gradient-to-br
            from-blue-500
            to-cyan-400

            font-black

            text-white
            "
          >
            F
          </div>



          <div
            className="
            text-left
            "
          >

            <p
              className="
              text-sm
              font-bold
              text-white
              "
            >
              FastOS User
            </p>


            <p
              className="
              text-xs
              text-slate-400
              "
            >
              Admin
            </p>


          </div>



          <ChevronDown
            size={16}
            className="
            text-slate-400
            "
          />


        </button>


      </div>


    </header>

  );
}