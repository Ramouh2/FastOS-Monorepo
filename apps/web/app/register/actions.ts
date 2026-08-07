"use server";

import { registerService } from "../../lib/services/register-service";

export async function registerUser(
  name: string,
  email: string,
  password: string,
) {
  return registerService(name, email, password);
}