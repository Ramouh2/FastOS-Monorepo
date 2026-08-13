import { NextResponse } from "next/server";

import { saveEditor } from "@/lib/use-cases/website/save-editor";



export async function POST(
  req: Request
) {


  const body =
    await req.json();



  const {
    websiteId,
    config,
  } = body;




  const website =
    await saveEditor(

      websiteId,

      config

    );




  return NextResponse.json({

    success: true,

    website,

  });


}