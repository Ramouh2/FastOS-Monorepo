"use client";


export default function EditorSidebar(){


const sections=[

"HERO",

"PRODUCT_GRID",

"GALLERY",

"TESTIMONIALS",

"CONTACT"

];


return (

<div className="w-80 border-r p-5">


<h2 className="text-xl font-bold mb-6">

Sections

</h2>



<div className="space-y-3">


{
sections.map(section=>(

<button

key={section}

className="w-full border rounded-lg p-3 text-left"

>

+ {section}

</button>

))

}


</div>


</div>

);


}