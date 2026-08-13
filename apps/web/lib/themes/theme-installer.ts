import { PrismaThemeRepository } from "@/lib/repositories/prisma-theme-repository";


const themeRepository =
  new PrismaThemeRepository();



export async function installTheme({

  websiteId,

  themeId,

}: {

  websiteId: string;

  themeId: string;

}) {


  const theme =
    await themeRepository.findById(
      themeId
    );



  if (!theme) {

    throw new Error(
      "Theme not found"
    );

  }



  const website =
    await themeRepository.installOnWebsite(

      websiteId,

      theme.id,

      theme.settings ?? {}

    );



  return website;

}