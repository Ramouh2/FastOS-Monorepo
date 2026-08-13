import {
  SectionSchema
} from "@/types/editor";


export const HeroSchema: SectionSchema = {

  type:"HERO",

  fields:[

    {
      key:"title",
      label:"Titre principal",
      type:"TEXT"
    },

    {
      key:"subtitle",
      label:"Sous titre",
      type:"TEXTAREA"
    },

    {
      key:"buttonText",
      label:"Texte bouton",
      type:"TEXT"
    },

    {
      key:"image",
      label:"Image",
      type:"IMAGE"
    },

    {
      key:"background",
      label:"Couleur fond",
      type:"COLOR"
    }

  ]

};