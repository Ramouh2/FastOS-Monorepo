import { auth } from "@/lib/auth/auth";

import { getCurrentBusiness } from "@/lib/use-cases/business/get-current-business";
import { getDashboardStats } from "@/lib/use-cases/dashboard/get-dashboard-stats";

import { AIStatus } from "@/components/dashboard/widgets/ai-status";
import { AppLayout } from "@/components/layout/app-layout";

import { RevenueCard } from "@/components/dashboard/revenue-card";
import { OrdersCard } from "@/components/dashboard/orders-card";
import { ProductsCard } from "@/components/dashboard/products-card";
import { NoraCard } from "@/components/dashboard/nora-card";

import {
  Sparkles,
} from "lucide-react";



export default async function DashboardPage() {


  const session = await auth();




  const business =
    session?.user?.id

      ? await getCurrentBusiness(
          session.user.id
        )

      : null;





  const stats =
    business

      ? await getDashboardStats(
          business.id
        )

      : {

          products: 0,

          orders: 0,

          revenue: 0,

        };






  return (

    <AppLayout>


      <div className="space-y-8">



        {/* HERO */}


        <div
          className="
          relative
          overflow-hidden
          rounded-3xl

          border
          border-blue-500/20

          bg-gradient-to-br
          from-blue-600/20
          via-slate-950
          to-purple-900/20

          p-8

          shadow-[0_0_40px_rgba(37,99,235,0.15)]
          "
        >



          <div
            className="
            absolute
            right-0
            top-0

            h-72
            w-72

            rounded-full

            bg-blue-500/20

            blur-3xl
            "
          />





          <div className="relative">



            <div className="flex items-center gap-3">


              <Sparkles
                className="text-blue-400"
                size={22}
              />



              <span
                className="
                text-sm
                font-semibold
                tracking-wider
                text-blue-400
                "
              >
                FASTOS AI SYSTEM
              </span>


            </div>





            <h1
              className="
              mt-5
              text-5xl
              font-black
              tracking-tight
              text-white
              "
            >
              Control Center
            </h1>





            <p
              className="
              mt-4
              max-w-2xl
              text-lg
              text-slate-400
              "
            >
              Pilotez votre restaurant,
              automatisez vos opérations
              et laissez Nora AI optimiser votre activité.
            </p>




          </div>


        </div>







        {/* KPI CARDS */}


        <div
          className="
          grid
          gap-6
          md:grid-cols-2
          xl:grid-cols-4
          "
        >



          <RevenueCard
            amount={stats.revenue}
          />



          <OrdersCard
            count={stats.orders}
          />



          <ProductsCard
            count={stats.products}
          />



          <NoraCard />



        </div>







        {/* AI STATUS */}


        <AIStatus />




      </div>


    </AppLayout>

  );

}