"use client";


export default function Booking({
section
}:{
section:any;
}){


return (

<section className="p-10">

<h2 className="text-3xl font-bold">
{section.title || "Réservation"}
</h2>


<p className="mt-4">
Réservez votre table facilement.
</p>


</section>

);

}