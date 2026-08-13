type Props = {
  blocks:any[];
};


export default function BlockRenderer({
blocks
}:Props){


return (

<>

{
blocks.map(block=>(

<div key={block.id}>

{JSON.stringify(block.content)}

</div>

))
}

</>

);

}
