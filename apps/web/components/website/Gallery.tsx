export default function Gallery({data}:any){

return (

<section className="p-12">

<h2 className="text-3xl font-bold">
{data.title}
</h2>

<div className="grid grid-cols-3 gap-4 mt-6">

<div className="h-40 bg-gray-200 rounded-xl"/>
<div className="h-40 bg-gray-200 rounded-xl"/>
<div className="h-40 bg-gray-200 rounded-xl"/>

</div>

</section>

)

}