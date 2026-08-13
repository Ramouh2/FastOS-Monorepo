import { NextResponse } from "next/server";

import { auth } from "@/lib/auth/auth";
import { chat } from "@/lib/use-cases/ai/chat";



export async function POST(
  request: Request
) {


  try {


    const body =
      await request.json();



    const message =
      body.message;



    if (!message) {

      return NextResponse.json(

        {
          error: "Message required",
        },

        {
          status: 400,
        }

      );

    }





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





    const result =
      await chat(

        session.user.id,

        message

      );





    return NextResponse.json(
      result
    );





  } catch(error) {


    console.error(
      "AI CHAT ERROR",
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