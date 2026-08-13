import { getThemes } from "@/lib/use-cases/website/get-themes";

export default async function ThemesPage(){


const themes =
await getThemes();



return (

<div className="p-10">


<h1 className="text-4xl font-bold mb-10">
FastOS Theme Store
</h1>



<div className="grid grid-cols-3 gap-6">


{

themes.map(theme=>(


<div

key={theme.id}

className="border rounded-xl p-6"

>


<div className="h-40 bg-gray-200 rounded-lg mb-5">

</div>



<h2 className="text-xl font-bold">

{theme.name}

</h2>



<p className="text-gray-500">

{theme.category}

</p>



<div className="flex gap-3 mt-5">


<a

href={`/themes/preview/${theme.id}`}

className="border rounded-lg px-4 py-2"

>

Preview

</a>



<button

className="border rounded-lg px-4 py-2"

>

Installer

</button>



</div>



</div>


))

}


</div>


</div>

);


}