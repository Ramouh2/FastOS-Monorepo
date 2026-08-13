import { NextResponse } from "next/server";

import { publishWebsite } from "@/lib/use-cases/website/publish-website";


export async function POST(
  req: Request
) {


  try {


    const body =
      await req.json();



    const {
      websiteId,
    } = body;




    const website =
      await publishWebsite(
        websiteId
      );





    return NextResponse.json({

      success: true,

      website,

    });




  } catch(error) {


    console.error(
      "PUBLISH WEBSITE ERROR:",
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