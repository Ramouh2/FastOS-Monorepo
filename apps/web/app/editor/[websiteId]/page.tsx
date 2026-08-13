import EditorClient from "@/components/editor/EditorClient";


export default async function EditorPage({

params

}:{

params:Promise<{
websiteId:string
}>

}){


const {
websiteId

}=await params;



return (

<EditorClient

websiteId={websiteId}

/>

);


}