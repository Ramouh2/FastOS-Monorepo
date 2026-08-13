import { PrismaThemeRepository } from "@/lib/repositories/prisma-theme-repository";


const themeRepository =
  new PrismaThemeRepository();



export async function getThemeById(
  id: string
) {

  return themeRepository.findById(
    id
  );

}