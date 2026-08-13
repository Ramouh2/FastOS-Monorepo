"use server";

import { PrismaSectionRepository } from "@/lib/repositories/prisma-section-repository";


const sectionRepository =
  new PrismaSectionRepository();




export async function updateSection(

  id: string,

  title: string,

  content: string

) {


  console.log("UPDATE SECTION:", {

    id,

    title,

    content,

  });



  await sectionRepository.update(

    id,

    {

      title,

      content,

    }

  );



  console.log("SECTION UPDATED");


}