"use client";


import {
useSortable
} from "@dnd-kit/sortable";


import {
CSS
} from "@dnd-kit/utilities";



export default function SortableSection({

section,

selected,

setSelected

}:any){



const {

attributes,

listeners,

setNodeRef,

transform,

transition

}=useSortable({

id:section.id

});



const style={

transform:
CSS.Transform.toString(transform),

transition

};



return (

<div

ref={setNodeRef}

style={style}

{...attributes}

{...listeners}

onClick={()=>setSelected(section)}

className={

"border rounded p-5 mb-4 cursor-pointer "

+

(selected?.id===section.id

?"border-blue-500"

:"")

}

>


<h3>

☰ {section.type}

</h3>


<p>

{section.title}

</p>


</div>

);


}