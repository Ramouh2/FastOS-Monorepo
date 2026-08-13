import { ShoppingBag } from "lucide-react";


export function ActivityFeed({
  orders,
}: {
  orders: any[];
}) {

  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">

      <div className="mb-5 flex items-center gap-3">

        <ShoppingBag className="text-blue-400"/>

        <h2 className="text-xl font-bold text-white">
          Activité récente
        </h2>

      </div>


      <div className="space-y-4">

        {orders.length === 0 && (
          <p className="text-neutral-400">
            Aucune commande récente.
          </p>
        )}


        {orders.map((order)=>(
          <div
            key={order.id}
            className="flex items-center justify-between rounded-xl bg-neutral-950 p-4"
          >

            <div>

              <p className="font-semibold text-white">
                Commande #{order.id.slice(-5)}
              </p>

              <p className="text-sm text-neutral-400">
                {order.status}
              </p>

            </div>


            <span className="font-bold text-white">
              {order.total} €
            </span>

          </div>
        ))}

      </div>

    </div>
  );
}