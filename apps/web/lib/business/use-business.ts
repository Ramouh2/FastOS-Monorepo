"use client";

import { useContext } from "react";
import { BusinessContext } from "./business-context";

export function useBusiness() {
  return useContext(BusinessContext);
}