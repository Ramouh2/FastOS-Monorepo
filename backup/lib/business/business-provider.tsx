"use client";

import { ReactNode } from "react";
import { BusinessContext } from "./business-context";
import { demoBusiness } from "./demo-business";

type Props = {
  children: ReactNode;
};

export function BusinessProvider({ children }: Props) {
  return (
    <BusinessContext.Provider value={demoBusiness}>
      {children}
    </BusinessContext.Provider>
  );
}