"use client";


export default function Newsletter({
section
}:{
section:any;
}){


return (

<section className="p-10">


<h2 className="text-3xl font-bold">

{section.title || "Newsletter"}

</h2>


<p className="mt-4">

Inscrivez-vous pour recevoir nos actualités.

</p>


</section>

);


}