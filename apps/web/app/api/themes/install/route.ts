import { NextResponse } from "next/server";

import {
installTheme
} from "@/lib/themes/theme-installer";



export async function POST(
req:Request
){


const body =
await req.json();



const website =
await installTheme({

websiteId:
body.websiteId,


themeId:
body.themeId

});



return NextResponse.json({

success:true,

website

});


}