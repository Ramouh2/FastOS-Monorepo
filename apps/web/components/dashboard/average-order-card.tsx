import { Wallet } from "lucide-react";
import { StatCard } from "./stat-card";


export function AverageOrderCard({
  amount,
}: {
  amount: number;
}) {

  return (
    <StatCard
      title="Panier moyen"
      value={`${amount.toFixed(2)} €`}
      description="Par commande"
      icon={Wallet}
      color="cyan"
    />
  );

}