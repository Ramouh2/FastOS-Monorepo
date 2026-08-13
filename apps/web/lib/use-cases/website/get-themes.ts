import { PrismaThemeRepository } from "@/lib/repositories/prisma-theme-repository";


const themeRepository =
  new PrismaThemeRepository();



export async function getThemes() {

  return themeRepository.findAll();

}