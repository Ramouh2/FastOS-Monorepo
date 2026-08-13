import { ShoppingBag } from "lucide-react";
import { StatCard } from "./stat-card";


export function OrdersCard({
  count,
}:{
  count:number;
}) {


  return (

    <StatCard

      title="Commandes"

      value={String(count)}

      description="Aujourd'hui"

      icon={ShoppingBag}

      color="purple"

    />

  );

}