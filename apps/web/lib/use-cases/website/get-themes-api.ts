import { PrismaThemeRepository } from "@/lib/repositories/prisma-theme-repository";


const themeRepository =
  new PrismaThemeRepository();



export async function getThemesApi() {

  return themeRepository.findAll();

}