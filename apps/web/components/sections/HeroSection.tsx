import BlockRenderer from "@/components/theme/BlockRenderer";


export default function HeroSection({
section
}:{
section:any
}){


return (

<section>


{
section.blocks?.map(
(block:any)=>(

<BlockRenderer

key={block.id}

block={block}

/>

)

)
}


</section>

);


}