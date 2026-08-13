"use client";


import {
useMutation
} from "@tanstack/react-query";



export function usePublishWebsite(){


return useMutation({

mutationFn:async(
websiteId:string
)=>{


const res =
await fetch(
"/api/editor/publish",
{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

websiteId

})

}

);



if(!res.ok){

throw new Error(
"Publish failed"
);

}



return res.json();


}

});


}