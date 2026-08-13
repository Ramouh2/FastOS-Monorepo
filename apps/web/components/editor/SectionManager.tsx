"use client";

import {
  useEditor
} from "@/components/editor/providers/EditorProvider";


import {
  SECTION_LIBRARY
} from "@/components/editor/library/SectionLibrary";



export default function SectionManager(){


const {

sections,

setSelected,

addSection,

removeSection

}=useEditor();




return (

<div className="space-y-4">


<h2 className="font-bold text-lg">

Sections

</h2>



<div className="space-y-2">


{

sections.map((section:any)=>(


<div

key={section.id}

className="border rounded p-3 flex justify-between"

>


<button

onClick={()=>setSelected(section)}

>

{section.type}

</button>



<button

onClick={()=>removeSection(section.id)}

>

🗑️

</button>



</div>


))


}


</div>




<hr/>




<h3 className="font-semibold">

Ajouter une section

</h3>




<div className="grid gap-2">


{

SECTION_LIBRARY.map(section=>(


<button

key={section.type}

className="border rounded p-3 text-left hover:bg-gray-100"

onClick={()=>addSection(section.type)}

>


<div className="font-bold">

{section.icon} {section.name}

</div>


<div className="text-sm text-gray-500">

{section.description}

</div>



</button>


))


}



</div>


</div>


);


}