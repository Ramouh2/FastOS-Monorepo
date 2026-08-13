import { Prisma } from "@prisma/client";
import { prisma } from "../prisma/client";


export class PrismaWebsiteRepository {


  async findByBusinessId(
    businessId: string
  ) {

    return prisma.website.findUnique({

      where: {
        businessId,
      },

    });

  }





  async findBySlug(
    slug: string
  ) {

    return prisma.website.findUnique({

      where: {
        slug,
      },

      include: {

        sections: {

          where: {

            visible: true,

          },

          orderBy: {

            position: "asc",

          },

          include: {

            blocks: true,

          },

        },


        template: true,

      },

    });

  }





  async findWithSectionsByBusinessId(
    businessId: string
  ) {

    return prisma.website.findUnique({

      where: {

        businessId,

      },

      include: {

        sections: true,

      },

    });

  }





  async findByIdForEditor(
    websiteId: string
  ) {

    return prisma.website.findUnique({

      where: {

        id: websiteId,

      },

      include: {

        sections: {

          include: {

            blocks: true,

          },

          orderBy: {

            position: "asc",

          },

        },

        template: true,

      },

    });

  }





  async updateTheme(

    businessId: string,

    data: {

      primaryColor?: string;

      secondaryColor?: string;

      accentColor?: string;

      fontFamily?: string;

      borderRadius?: number;

    }

  ) {

    return prisma.website.update({

      where: {

        businessId,

      },

      data,

    });

  }





  async updateConfig(

    id: string,

    config: Prisma.InputJsonValue

  ) {

    return prisma.website.update({

      where: {

        id,

      },

      data: {

        config,

      },

    });

  }





  async publish(
    id: string
  ) {

    return prisma.website.update({

      where: {

        id,

      },

      data: {

        published: true,

      },

    });

  }





  async createGeneratedWebsite(

    data: {

      businessId: string;

      title: string;

      slug: string;

      primaryColor: string;

      secondaryColor: string;

      accentColor: string;

      sections: {

        type: string;

        title: string;

        content: string;

        position: number;

      }[];

    }

  ) {

    return prisma.website.create({

      data: {

        businessId: data.businessId,

        title: data.title,

        slug: data.slug,

        primaryColor: data.primaryColor,

        secondaryColor: data.secondaryColor,

        accentColor: data.accentColor,


        sections: {

          create: data.sections,

        },

      },


      include: {

        sections: true,

      },

    });

  }





  async upsertFromAIProfile(

    data: {

      businessId: string;

      title: string;

      slug: string;

    }

  ) {

    return prisma.website.upsert({

      where: {

        businessId: data.businessId,

      },


      update: {},


      create: {

        businessId: data.businessId,

        title: data.title,

        slug: data.slug,

        published: false,

      },

    });

  }





  async replaceSections(

    websiteId: string,

    sections: {

      id: string;

      type: string;

      title: string;

      content: string;

      position: number;

    }[]

  ) {


    await prisma.websiteSection.deleteMany({

      where: {

        websiteId,

      },

    });



    return prisma.websiteSection.createMany({

      data: sections.map(section => ({

        ...section,

        websiteId,

      })),

    });

  }


}



// Compatibilité ancien code

export async function getWebsiteByBusinessId(
  businessId: string
) {

  const repository =
    new PrismaWebsiteRepository();


  return repository.findByBusinessId(
    businessId
  );

}