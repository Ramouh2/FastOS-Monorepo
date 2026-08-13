"use client";


import ColorSettings from "./ColorSettings";
import FontSettings from "./FontSettings";
import LayoutSettings from "./LayoutSettings";
import AnimationSettings from "./AnimationSettings";


export default function ThemeCustomizer({

settings,

setSettings

}:any){


return (

<div className="w-96 border-l p-5 space-y-8">


<h2 className="text-xl font-bold">

Theme Customizer

</h2>



<ColorSettings

settings={settings}

setSettings={setSettings}

/>



<FontSettings

settings={settings}

setSettings={setSettings}

/>



<LayoutSettings

settings={settings}

setSettings={setSettings}

/>



<AnimationSettings

settings={settings}

setSettings={setSettings}

/>



</div>

);

}