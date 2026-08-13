export default function Navbar({
  theme
}:{
  theme:{
    primaryColor:string;
    secondaryColor:string;
    accentColor:string;
  }
}){

return (

<nav
style={{
padding:"20px 40px",
borderBottom:`1px solid ${theme.primaryColor}`
}}
>

<h2
style={{
color:theme.primaryColor
}}
>
FastOS
</h2>

</nav>

)

}