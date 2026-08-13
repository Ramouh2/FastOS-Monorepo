import { Bot } from "lucide-react";
import { StatCard } from "./stat-card";

export function NoraCard() {
  return (
    <StatCard
      title="Nora AI"
      value="En ligne"
      description="Assistant opérationnel"
      trend="IA prête"
      icon={Bot}
      color="purple"
    />
  );
}