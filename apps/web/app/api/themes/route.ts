import { NextResponse } from "next/server";

import { getThemesApi } from "@/lib/use-cases/website/get-themes-api";



export async function GET() {


  const themes =
    await getThemesApi();



  return NextResponse.json(
    themes
  );


}