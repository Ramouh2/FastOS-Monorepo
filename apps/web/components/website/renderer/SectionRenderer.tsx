"use client";


import {
ComponentRegistry
} from "./ComponentRegistry";



export default function SectionRenderer({
section
}:{
section:any;
}){


const Component =
ComponentRegistry[section.type];



if(!Component){

return null;

}



return (

<Component

section={section}

/>

);


}