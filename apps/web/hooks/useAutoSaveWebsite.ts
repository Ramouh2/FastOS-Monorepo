"use client";

import {
  useEffect,
  useRef
} from "react";


export function useAutoSaveWebsite({

websiteId,

config

}:{

websiteId:string;

config:any;

}){


const timeout =
useRef<NodeJS.Timeout | null>(null);



useEffect(()=>{


if(!config)
return;



if(timeout.current){

clearTimeout(timeout.current);

}



timeout.current =
setTimeout(async()=>{


await fetch(
"/api/editor/save",
{

method:"POST",

headers:{
"Content-Type":"application/json"
},


body:JSON.stringify({

websiteId,

config

})

}

);



console.log(
"Website saved"
);



},1000);



return ()=>{

if(timeout.current){

clearTimeout(timeout.current);

}

};


},[websiteId,config]);


}