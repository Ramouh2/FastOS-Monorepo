"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Building2,
  Package,
  ShoppingBag,
  Bot,
  BarChart3,
  Settings,
  Zap,
  Globe,
  Users,
} from "lucide-react";


const sections = [

  {
    title: "MAIN",
    items: [
      {
        href: "/dashboard",
        label: "Dashboard",
        icon: LayoutDashboard,
      },
    ],
  },


  {
    title: "BUSINESS",
    items: [

      {
        href: "/restaurant",
        label: "Restaurant",
        icon: Building2,
      },

      {
        href: "/products",
        label: "Menu",
        icon: Package,
      },

      {
        href: "/orders",
        label: "Commandes",
        icon: ShoppingBag,
      },

      {
        href: "/clients",
        label: "Clients",
        icon: Users,
      },

    ],
  },


  {
    title: "AI SYSTEM",
    items: [

      {
        href: "/ai",
        label: "Nora AI",
        icon: Bot,
      },

      {
        href: "/automations",
        label: "Automations",
        icon: Zap,
      },

    ],
  },


  {
    title: "BUILD",
    items: [

      {
        href: "/website",
        label: "Website",
        icon: Globe,
      },

      {
        href: "/analytics",
        label: "Analytics",
        icon: BarChart3,
      },

    ],
  },


  {
    title: "SYSTEM",
    items: [

      {
        href: "/settings",
        label: "Settings",
        icon: Settings,
      },

    ],
  },

];



export function Sidebar() {


  const pathname = usePathname();



  return (

    <aside
      className="
      flex
      h-screen
      w-72
      flex-col

      border-r
      border-slate-800

      bg-[#05070D]

      px-6
      py-8
      "
    >


      {/* LOGO */}


      <div className="mb-10">

        <h1
          className="
          text-4xl
          font-black
          tracking-tight
          text-white
          "
        >

          Fast
          <span className="text-blue-500">
            OS
          </span>

        </h1>


        <p
          className="
          mt-1
          text-xs
          tracking-[0.35em]
          text-slate-500
          "
        >
          AI OPERATING SYSTEM
        </p>


      </div>





      {/* NAVIGATION */}


      <nav
        className="
        flex
        flex-1
        flex-col
        gap-8
        "
      >


        {sections.map((section)=>(


          <div key={section.title}>


            <p
              className="
              mb-3
              text-xs
              font-semibold
              tracking-widest
              text-slate-500
              "
            >

              {section.title}

            </p>




            <div className="flex flex-col gap-1">


              {section.items.map(
                ({href,label,icon:Icon})=>{


                  const active =
                    pathname === href;



                  return (

                    <Link

                      key={href}

                      href={href}

                      className={`
                      group
                      relative

                      flex
                      items-center
                      gap-3

                      rounded-xl

                      px-4
                      py-3

                      text-sm

                      transition-all
                      duration-300

                      ${
                        active

                        ? `
                        bg-blue-500/10
                        text-white
                        shadow-[0_0_25px_rgba(59,130,246,0.15)]
                        `

                        :

                        `
                        text-slate-400
                        hover:bg-white/5
                        hover:text-white
                        `
                      }

                      `}

                    >



                      {active && (

                        <span

                          className="
                          absolute
                          left-0

                          h-8
                          w-1

                          rounded-r-full

                          bg-blue-500
                          "

                        />

                      )}





                      <Icon

                        size={18}

                        className={`
                        transition-colors

                        ${
                          active

                          ? "text-blue-400"

                          :

                          "text-slate-500 group-hover:text-blue-400"

                        }

                        `}

                      />




                      <span>

                        {label}

                      </span>




                    </Link>

                  );


                }

              )}


            </div>


          </div>


        ))}


      </nav>





      {/* USER CARD */}


      <div

        className="
        rounded-2xl

        border
        border-slate-800

        bg-slate-950

        p-4
        "

      >

        <p
          className="
          text-sm
          font-semibold
          text-white
          "
        >
          Ramses AI
        </p>


        <p
          className="
          text-xs
          text-slate-500
          "
        >
          Admin
        </p>


      </div>


    </aside>

  );

}