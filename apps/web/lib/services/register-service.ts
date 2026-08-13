import bcrypt from "bcryptjs";
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

        userId: user.id,

        name: `${name}'s Restaurant`,

        status: "ONBOARDING",


        aiProfile: {
          create: {
            businessType: "restaurant",
            style: "moderne",
            audience: "clients",
            location: "",
          },
        },


        aiConversation: {
          create: {
            stage: "DISCOVERY",
            readyToBuild: false,
          },
        },

      },

      include: {
        aiProfile: true,
        aiConversation: true,
      },

    });


    return {
      user,
      business,
    };

  });
}