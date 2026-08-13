"use client";


import {
usePublishWebsite
} from "@/hooks/usePublishWebsite";



export default function EditorToolbar({

websiteId

}:{

websiteId:string

}){


const publish =
usePublishWebsite();



return (

<div className="h-16 border-b flex items-center justify-between px-6">


<h2 className="font-bold">

FastOS Builder

</h2>



<button

className="border rounded px-4 py-2"

onClick={()=>publish.mutate(websiteId)}

>

{

publish.isPending

?

"Publication..."

:

"Publier"

}


</button>


</div>

);


}