import { Flame } from "lucide-react";
import { StatCard } from "./stat-card";


export function TodayOrdersCard({
  count,
}: {
  count: number;
}) {

  return (
    <StatCard
      title="Commandes aujourd'hui"
      value={String(count)}
      description="Depuis minuit"
      icon={Flame}
      color="blue"
    />
  );

}