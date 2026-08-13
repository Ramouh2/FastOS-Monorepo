import {
SectionSchema
} from "@/types/editor";


export const GallerySchema:SectionSchema={


type:"GALLERY",


fields:[


{
key:"title",
label:"Titre galerie",
type:"TEXT"
},


{
key:"layout",
label:"Style galerie",
type:"SELECT"
},


{
key:"columns",
label:"Colonnes",
type:"NUMBER"
}


]


};