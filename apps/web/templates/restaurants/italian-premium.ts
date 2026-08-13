import {
  WebsiteTemplate
} from "../types";


export const ItalianPremiumTemplate:WebsiteTemplate = {


id:"italian-premium",


name:"Italian Premium",


category:"restaurant",


description:
"Restaurant italien haut de gamme",



theme:{

primaryColor:"#8B0000",

secondaryColor:"#111111",

accentColor:"#FFFFFF"

},



sections:[


{
type:"HERO",
title:"Cuisine italienne authentique",
content:"Découvrez nos plats gastronomiques",
position:0
},


{
type:"PRODUCT_GRID",
title:"Notre menu",
content:"Nos spécialités",
position:1
},


{
type:"GALLERY",
title:"Notre restaurant",
content:"",
position:2
},


{
type:"TESTIMONIALS",
title:"Avis clients",
content:"",
position:3
},


{
type:"BOOKING",
title:"Réserver une table",
content:"",
position:4
},


{
type:"CONTACT",
title:"Nous contacter",
content:"",
position:5
}


]


};