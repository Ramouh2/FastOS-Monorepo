import { prisma } from "../prisma/client";

export class PrismaUserRepository {
  async findByEmail(email: string) {
    return prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  async create(data: {
    name?: string;
    email: string;
    password: string;
  }) {
    return prisma.user.create({
      data: {
        ...data,

        businesses: {
          create: {
            name: data.name
              ? `${data.name} Restaurant`
              : "Mon restaurant",

            status: "ONBOARDING",

            aiProfile: {
              create: {
                businessType: "",
                location: "",
                audience: "",
                style: "",
              },
            },

            aiConversation: {
              create: {
                stage: "DISCOVERY",
                readyToBuild: false,
              },
            },
          },
        },
      },

      include: {
        businesses: {
          include: {
            aiProfile: true,
            aiConversation: true,
          },
        },
      },
    });
  }
}