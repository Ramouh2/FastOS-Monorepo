"use client";


import {
  SectionDefinition
} from "@/types/sections";



export const SECTION_LIBRARY: SectionDefinition[] = [


{
  type:"HERO",
  name:"Hero",
  description:"Grande section principale avec titre et image",
  icon:"🏠"
},


{
  type:"PRODUCT_GRID",
  name:"Produits",
  description:"Affichage catalogue produits/menu",
  icon:"🍽️"
},


{
  type:"GALLERY",
  name:"Galerie",
  description:"Galerie images",
  icon:"🖼️"
},


{
  type:"TESTIMONIALS",
  name:"Avis clients",
  description:"Commentaires clients",
  icon:"⭐"
},


{
  type:"FAQ",
  name:"FAQ",
  description:"Questions fréquentes",
  icon:"❓"
},


{
  type:"CONTACT",
  name:"Contact",
  description:"Adresse, téléphone, formulaire",
  icon:"📞"
},


{
  type:"BOOKING",
  name:"Réservation",
  description:"Module réservation restaurant",
  icon:"📅"
},


{
  type:"MAP",
  name:"Carte",
  description:"Localisation Google Maps",
  icon:"📍"
},


{
  type:"NEWSLETTER",
  name:"Newsletter",
  description:"Collecte emails clients",
  icon:"✉️"
}


];