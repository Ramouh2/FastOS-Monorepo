import { NextResponse } from "next/server";

import { analyzeBusinessMessage } from "@/lib/ai/business-analyzer";
import { saveBusinessProfile } from "@/lib/ai/memory/save-business-profile";


export async function POST(
  request: Request
){

  try {

    const body = await request.json();


    const context = analyzeBusinessMessage(
      body.message
    );


    console.log("AI CONTEXT :", context);



    const businessId =
    "c2c4309f-9897-4067-ac25-ba99f55b1f4a";



    const saved =
    await saveBusinessProfile(
      businessId,
      context
    );


    console.log(
      "PROFILE SAVED :",
      saved
    );



    return NextResponse.json(context);


  } catch(error){

    console.error(
      "AI ERROR :",
      error
    );


    return NextResponse.json(
      {
        error:"AI failed"
      },
      {
        status:500
      }
    );

  }

}