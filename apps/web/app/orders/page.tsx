export const dynamic = "force-dynamic";

import { getOrders } from "@/lib/use-cases/orders/get-orders";
import { updateOrderStatus } from "./actions";
import { auth } from "@/lib/auth/auth";
import { getCurrentBusiness } from "@/lib/use-cases/business/get-current-business";


export default async function OrdersPage() {


  const session = await auth();



  const business =
    session?.user?.id
      ? await getCurrentBusiness(
          session.user.id
        )
      : null;




  const orders =
    business
      ? await getOrders(
          business.id
        )
      : [];





  return (

    <div
      className="
      min-h-screen
      bg-[#05070D]
      p-10
      text-white
      "
    >


      <h1
        className="
        text-5xl
        font-black
        "
      >
        Commandes
      </h1>


      <p
        className="
        mt-3
        text-slate-400
        "
      >
        Gérez les commandes de votre restaurant.
      </p>





      <div
        className="
        mt-10
        space-y-5
        "
      >


        {orders.map((order)=>(


          <div
            key={order.id}

            className="
            rounded-3xl
            border
            border-slate-800
            bg-slate-950
            p-6
            "
          >


            <div
              className="
              flex
              items-center
              justify-between
              "
            >


              <div>

                <p className="text-sm text-slate-500">
                  ID
                </p>


                <p className="font-bold">
                  {order.id.slice(0,8)}
                </p>

              </div>





              <div>

                <p className="text-sm text-slate-500">
                  Total
                </p>


                <p
                  className="
                  text-xl
                  font-bold
                  "
                >
                  {order.total.toFixed(2)} €
                </p>

              </div>





              <div>

                <p className="text-sm text-slate-500">
                  Statut
                </p>


                <span
                  className={`
                    inline-flex
                    rounded-full
                    border
                    px-4
                    py-1
                    text-sm
                    font-semibold

                    ${
                      order.status === "PENDING"

                      ? `
                        border-yellow-500/30
                        bg-yellow-500/10
                        text-yellow-400
                      `


                      : order.status === "PREPARING"


                      ? `
                        border-blue-500/30
                        bg-blue-500/10
                        text-blue-400
                      `


                      :

                      `
                        border-emerald-500/30
                        bg-emerald-500/10
                        text-emerald-400
                      `
                    }

                  `}
                >

                  {
                    order.status === "COMPLETED"
                    ? "Terminée"

                    : order.status === "PREPARING"
                    ? "Préparation"

                    : "En attente"
                  }

                </span>


              </div>



            </div>






            {
              order.status !== "COMPLETED" && (

              <div
                className="
                mt-6
                flex
                gap-3
                "
              >



                <form

                  action={
                    async()=>{

                      "use server";


                      await updateOrderStatus(
                        order.id,
                        "PREPARING"
                      );

                    }
                  }

                >

                  <button

                    className="
                    rounded-xl
                    bg-blue-500
                    px-5
                    py-2
                    font-semibold
                    text-white

                    transition-all
                    duration-300

                    hover:bg-blue-400

                    hover:shadow-[0_0_25px_rgba(59,130,246,0.35)]

                    active:scale-95
                    "

                  >

                    Préparer

                  </button>


                </form>





                <form

                  action={
                    async()=>{

                      "use server";


                      await updateOrderStatus(
                        order.id,
                        "COMPLETED"
                      );

                    }
                  }

                >


                  <button

                    className="
                    rounded-xl

                    border
                    border-emerald-500/30

                    bg-emerald-500/10

                    px-5
                    py-2

                    font-semibold

                    text-emerald-400

                    transition-all
                    duration-300

                    hover:bg-emerald-500/20

                    hover:shadow-[0_0_25px_rgba(16,185,129,0.25)]

                    active:scale-95
                    "

                  >

                    Terminer

                  </button>


                </form>



              </div>

              )
            }



          </div>


        ))}


      </div>


    </div>

  );

}