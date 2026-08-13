import { getBusinessProfile } from "@/lib/ai/memory/get-business-profile";

import {
  generateRestaurantWebsite
} from "./website-generator";

import {
  selectTemplate
} from "@/lib/templates/select-template";



export async function generateWebsiteFromBusiness(
  businessId:string
){


  const profile =
    await getBusinessProfile(
      businessId
    );



  if(!profile){

    throw new Error(
      "Business AI profile not found"
    );

  }



  const template =
    selectTemplate(
      profile.businessType || "restaurantPremium"
    );



  const website =
    generateRestaurantWebsite({

      type:
      profile.businessType || "Restaurant",


      style:
      profile.style || "Moderne",


      audience:
      profile.audience || "Clients",


      location:
      profile.location || "",


      template

    });



  return website;

}