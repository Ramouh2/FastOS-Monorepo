"use client";

import { createContext } from "react";

export type Business = {
  id: string;
  userId: string;
  name: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
};

export const BusinessContext =
  createContext<Business | null>(null);