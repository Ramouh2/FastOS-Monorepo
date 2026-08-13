import Image from "next/image";


export default function BlockRenderer({
 block
}:{
 block:any
}){


switch(block.type){


case "heading":

return (

<h1>
{block.content.text}
</h1>

);



case "text":

return (

<p>
{block.content.text}
</p>

);



case "button":

return (

<button>

{block.content.label}

</button>

);



case "image":

return (

<Image

src={block.content.url}

alt=""

width={800}

height={600}

/>

);



default:

return null;


}



}