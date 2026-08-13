"use server";

import { auth } from "@/lib/auth/auth";
import { getCurrentBusiness } from "@/lib/use-cases/business/get-current-business";
import { PrismaWebsiteRepository } from "@/lib/repositories/prisma-website-repository";



const websiteRepository =
  new PrismaWebsiteRepository();




export async function updateTheme(data: {

  primaryColor: string;

  secondaryColor: string;

  accentColor: string;

}) {


  const session = await auth();



  if (!session?.user?.id) {

    throw new Error(
      "Utilisateur non connecté"
    );

  }





  const business =
    await getCurrentBusiness(
      session.user.id
    );





  if (!business) {

    throw new Error(
      "Business introuvable"
    );

  }






  return websiteRepository.updateTheme(

    business.id,

    {

      primaryColor: data.primaryColor,

      secondaryColor: data.secondaryColor,

      accentColor: data.accentColor,

    }

  );


}