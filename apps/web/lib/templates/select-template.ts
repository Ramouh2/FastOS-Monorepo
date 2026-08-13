import {
  TemplateRegistry
} from "./template-registry";



export function selectTemplate(
  templateId:string
){


  if(templateId === "bakery"){

    return TemplateRegistry["italian-premium"];

  }



  if(templateId === "restaurantPremium"){

    return TemplateRegistry["italian-premium"];

  }



  if(templateId === "restaurantModern"){

    return TemplateRegistry["italian-premium"];

  }



  return TemplateRegistry["italian-premium"];

}