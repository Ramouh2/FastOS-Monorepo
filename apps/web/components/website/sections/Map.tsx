"use client";


export default function Map({
section
}:{
section:any;
}){


return (

<section className="p-10">


<h2 className="text-3xl font-bold">

{section.title || "Localisation"}

</h2>


<p className="mt-4">

Adresse de votre établissement.

</p>


</section>

);


}