import { auth } from "@/lib/auth/auth";

import { NextResponse } from "next/server";

import {
  createWebsite,
} from "@/lib/use-cases/website/create-website";



export async function POST() {


  try {


    const session =
      await auth();



    if (!session?.user?.id) {

      return NextResponse.json(

        {
          error: "Unauthorized",
        },

        {
          status: 401,
        }

      );

    }





    const website =
      await createWebsite(
        session.user.id
      );





    return NextResponse.json(
      website
    );




  } catch (error) {


    console.error(
      "CREATE WEBSITE ERROR:",
      error
    );



    return NextResponse.json(

      {
        error: String(error),
      },

      {
        status: 500,
      }

    );


  }


}