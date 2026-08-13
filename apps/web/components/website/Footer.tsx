export default function Footer({
theme
}:{
theme:{
primaryColor:string;
secondaryColor:string;
accentColor:string;
}
}){

return (

<footer
style={{
padding:"40px",
textAlign:"center",
marginTop:"80px",
color:theme.accentColor
}}
>

© FastOS

</footer>

)

}