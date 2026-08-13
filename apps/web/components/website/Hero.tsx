export default function Hero({
data,
theme
}:any){

return (

<section
style={{
padding:"120px 40px",
textAlign:"center"
}}
>


<h1
style={{
fontSize:"64px",
color:theme.primaryColor
}}
>
{data.title}
</h1>


<p
style={{
fontSize:"24px"
}}
>
{data.content}
</p>


<button
style={{
marginTop:"40px",
padding:"18px 40px",
borderRadius:"12px",
background:theme.primaryColor,
color:theme.accentColor
}}
>
Commander
</button>


</section>

)

}