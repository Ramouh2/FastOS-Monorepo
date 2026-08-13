import { TrendingUp } from "lucide-react";
import { StatCard } from "./stat-card";


export function RevenueCard({
  amount,
}:{
  amount:number;
}) {


  return (

    <StatCard

      title="Chiffre d'affaires"

      value={`${amount.toFixed(2)} €`}

      description="Aujourd'hui"

      icon={TrendingUp}

      color="blue"

    />

  );

}