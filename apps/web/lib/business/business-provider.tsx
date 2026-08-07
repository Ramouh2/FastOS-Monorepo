"use client";

import { ReactNode } from "react";
import { BusinessContext, Business } from "./business-context";

type Props = {
  children: ReactNode;
  business: Business;
};

export function BusinessProvider({
  children,
  business,
}: Props) {
  return (
    <BusinessContext.Provider value={business}>
      {children}
    </BusinessContext.Provider>
  );
}