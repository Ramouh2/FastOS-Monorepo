import { NextResponse } from "next/server";

import {
 createGeneratedWebsite
} from "@/lib/services/create-generated-website";


export async function POST(){

  const businessId =
  "business-test";


  const website =
  await createGeneratedWebsite(
    businessId
  );


  return NextResponse.json(
    website
  );

}