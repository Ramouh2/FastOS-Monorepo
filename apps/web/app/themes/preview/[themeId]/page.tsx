import { getThemeById } from "@/lib/use-cases/website/get-theme-by-id";import { notFound } from "next/navigation";


export default async function ThemePreviewPage({

params,

}:{

params:Promise<{
themeId:string
}>

}){


const {
themeId
}=await params;



const theme =
await getThemeById(
  themeId
);



if(!theme){

notFound();

}



return (

<div className="min-h-screen p-10">


<div className="border rounded-xl p-10">


<h1 className="text-4xl font-bold">

{theme.name}

</h1>


<p className="mt-3">

{theme.category}

</p>



<pre className="mt-10 bg-gray-100 p-5 rounded">

{JSON.stringify(
theme.settings,
null,
2
)}

</pre>


</div>


</div>

);


}