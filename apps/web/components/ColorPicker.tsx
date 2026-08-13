"use client";

import { HexColorPicker } from "react-colorful";


export default function ColorPicker({
  label,
  color,
  onChange,
}:{
  label:string;
  color:string;
  onChange:(color:string)=>void;
}){


return (

<div className="space-y-3">

<p className="text-white font-medium">
{label}
</p>


<div
className="h-12 w-12 rounded-full border border-neutral-700"
style={{
background:color
}}
/>


<HexColorPicker
color={color}
onChange={onChange}
/>


</div>

);

}