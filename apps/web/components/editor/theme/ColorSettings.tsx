"use client";


export default function ColorSettings({

settings,

setSettings

}:any){


return (

<div>


<h3 className="font-bold mb-3">

Couleurs

</h3>


<input

type="color"

value={settings.colors.primary}

onChange={(e)=>

setSettings({

...settings,

colors:{

...settings.colors,

primary:e.target.value

}

})

}

/>


</div>

);

}