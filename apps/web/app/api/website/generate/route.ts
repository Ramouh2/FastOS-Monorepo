import { NextResponse } from "next/server";

import { auth } from "@/lib/auth/auth";

import { createWebsite } from "@/lib/use-cases/website/create-website";



export async function POST() {


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



  try {


    const website =
      await createWebsite(
        session.user.id
      );



    return NextResponse.json(
      website
    );


  } catch(error) {


    console.error(
      "Website generation error:",
      error
    );



    return NextResponse.json(

      {
        error: "Failed to generate website",
      },

      {
        status: 500,
      }

    );

  }


}