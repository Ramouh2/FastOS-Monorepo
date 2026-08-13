import { Package } from "lucide-react";
import { StatCard } from "./stat-card";


export function ProductsCard({
  count,
}:{
  count:number;
}) {


  return (

    <StatCard

      title="Produits"

      value={String(count)}

      description="Catalogue actif"

      icon={Package}

      color="cyan"

    />

  );

}