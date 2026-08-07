import bcrypt from "bcrypt";
import { prisma } from "../prisma/client";

export async function registerService(
  name: string,
  email: string,
  password: string,
) {
  return prisma.$transaction(async (tx) => {
    const existingUser = await tx.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new Error("Utilisateur déjà existant.");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await tx.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    const business = await tx.business.create({
      data: {
        id: crypto.randomUUID(),
        userId: user.id,
        name: `${name}'s Restaurant`,
        status: "ACTIVE",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    return { user, business };
  });
}