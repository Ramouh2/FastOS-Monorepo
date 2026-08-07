"use client";

import { useContext } from "react";
import { BusinessContext } from "./business-context";

export function useBusiness() {
  const business = useContext(BusinessContext);

  if (!business) {
    throw new Error("Business context missing");
  }

  return business;
}