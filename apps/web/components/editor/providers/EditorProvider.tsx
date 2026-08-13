"use client";

import {
createContext,
useContext,
useState
} from "react";


const EditorContext = createContext<any>(null);


export function EditorProvider({
children
}:{
children:React.ReactNode;
}){


const [website,setWebsite]=useState<any>(null);


const [sections,setSections]=useState<any[]>([]);


const [selected,setSelected]=useState<any>(null);



function addSection(type:string){


const section={

id:crypto.randomUUID(),

type,

title:`Nouvelle section ${type}`,

content:"Modifier avec FastOS",

visible:true,

position:sections.length

};


setSections([
...sections,
section
]);


}



function updateSection(id:string,data:any){


setSections(
sections.map(section=>

section.id===id

?

{
...section,
...data
}

:

section

)
);


}



function removeSection(id:string){


setSections(
sections.filter(
section=>section.id!==id
)
);


}



return (

<EditorContext.Provider

value={{

website,
setWebsite,

sections,
setSections,

selected,
setSelected,

addSection,
updateSection,
removeSection

}}

>

{children}

</EditorContext.Provider>

);


}



export function useEditor(){

return useContext(EditorContext);

}