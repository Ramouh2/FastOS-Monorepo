"use client";


export default function EditorCanvas({

sections=[],

selected,

setSelected

}:{

sections:any[];

selected:any;

setSelected:(s:any)=>void;

}){


return (

<div className="flex-1 bg-gray-100 p-10">


<div className="bg-white min-h-screen rounded-xl shadow p-10">


{

sections.map(section=>(


<div

key={section.id}

onClick={()=>setSelected(section)}

className={

"border p-5 mb-5 rounded cursor-pointer "

+

(selected?.id===section.id

?"border-blue-500"

:"")

}

>


<h2 className="font-bold">

{section.title}

</h2>


<p>

{section.content}

</p>


</div>


))

}



</div>


</div>

);


}