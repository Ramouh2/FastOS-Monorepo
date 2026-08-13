import { NextResponse } from "next/server";

import {
getEditorWebsite
} from "@/lib/editor/get-editor-website";


export async function GET(
req:Request,
context:any
){

const {
websiteId
}=await context.params;


const website =
await getEditorWebsite(
websiteId
);


return NextResponse.json(
website
);

}