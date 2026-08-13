import { PrismaSectionRepository } from "@/lib/repositories/prisma-section-repository";


const sectionRepository =
  new PrismaSectionRepository();



export async function getSection(
  id: string
) {

  return sectionRepository.findById(
    id
  );

}