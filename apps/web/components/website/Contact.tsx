export default function Contact({data}:any){

return (

<section className="p-12">

<h2 className="text-3xl font-bold">
{data.title}
</h2>

<p>
{data.content}
</p>

</section>

)

}