import {
  SectionSchema
} from "@/types/editor";


export const ProductSchema:SectionSchema = {

type:"PRODUCT_GRID",

fields:[

{
key:"title",
label:"Titre",
type:"TEXT"
},

{
key:"columns",
label:"Nombre de colonnes",
type:"NUMBER"
},

{
key:"showPrice",
label:"Afficher les prix",
type:"SELECT"
}

]

};